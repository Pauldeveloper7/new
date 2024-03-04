module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
  stripe: {
    enabled: true,
    keys: {
      secret: 'sk_test_51OckhqSCTKoVSg3ppr8xtJnbT9qwVefQ5lYvPANSMgv5QD52cFK0dBTBrfaMtK3acOAghpBioumvj4rm1VXMIzCq002xNmmySU',
      publishable: 'pk_test_51OckhqSCTKoVSg3pknK9V4O9ghFO2WzJrl2lTxPkhdGGnqKnOEqtH1UnGLNgxAN5juiJzs9iqlVS3Qxu2GwTyojQ00umSaV1Tn'
    },
  }
});
