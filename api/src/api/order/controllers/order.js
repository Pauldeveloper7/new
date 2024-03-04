("use strict");
// @ts-ignore
const stripe = require("stripe")('pk_test_51OckhqSCTKoVSg3pknK9V4O9ghFO2WzJrl2lTxPkhdGGnqKnOEqtH1UnGLNgxAN5juiJzs9iqlVS3Qxu2GwTyojQ00umSaV1Tn');
/**
 * order controller
 */
const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    // @ts-ignore
    const { products } = ctx.request.body;
    try {
      const lineItems = await Promise.all(
        products.map(async (product) => {
          const item = await strapi
            .service("api::product.product")
            .findOne(product.id);

          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: item.title,
              },
              unit_amount: Math.round(item.Price * 100),
            },
            quantity: product.Quantity,
          };
        })
      );

      const session = await stripe.checkout.sessions.create({
        shipping_address_collection: {allowed_countries: ['US', 'CA']},
        payment_method_types: ["card"],
        mode: "payment",
        success_url: 'http://localhost:3000/'+"?success=true",
        cancel_url: 'http://localhost:3000/'+"?success=false",
        line_items: lineItems,
      });

      await strapi
        .service("api::order.order")
        .create({ data: {  products, stripeId: session.id } });

      return { stripeSession: session };
    } catch (error) {
      ctx.response.status = 500;
      return { error };
    }
  },
}));
