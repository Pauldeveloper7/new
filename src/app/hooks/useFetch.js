import {useState,useEffect} from 'react'
import config from '@src/app/config'
const useFetch  =  (url)=>{
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(false)

    useEffect(() => {
        const fetchData = async  () => {
          try {
            setLoading(true)
            const res = await  fetch(`${config.api}${url}`, {
              headers: {
                Authorization: `Bearer 593b9267b8acbe48ef1ff8aee6c1524efc53418b0e621e34591c3d93845a8af05c67662d1be3a60fc8bcf9d8b1f1bb5f46a9123d448465e0647e053f600344c7bf0fbbdf457dca119ac2cca6d9ce32952dccae097e4efe9a0d1c443aec0c7d6b5d6ca8b198f4833f76a4b187ed9fdc06fd519d3678f7406de6e82d7f0a596654`,
              },
            });
    
            if (!res.ok) {
                throw new Error(`Failed to fetch data: ${res.status} - ${res.statusText}`);
            }
            
            const jsonData = await res.json();
            setData(jsonData.data);
            } catch (error) {
            console.error('Fetch error:', error.message);
            setError(true)
        }finally{
        setLoading(false)
        }
    };
    
    fetchData();
    }, [url]);
    return {data,loading,error}

    
}
export const OrderFetch  =  (url)=>{
  const [data,setData] = useState([])
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState(false)

  useEffect(() => {
      const fetchOrder = async  () => {
        try {
          setLoading(true)
          const res = await  fetch(`${config.api}${url}`, {
            headers: {
              Authorization: `Bearer 
              715360fb2705d57f4f02c25ba509fe5b19452807c7de91a14fe5c9be340acac1499265e2b55d9582355ce47fcb509e8062c8c591746ca84ada922b8dded5955007248bf8617dca8f638d0ac9825099f52a7d7db51dd12564da9fac18d95a4f7b2c00108092855dda4f2896333edc202d59733decd22b92986eb44028aa6e53cf`,
            },
          });
  
          if (!res.ok) {
              throw new Error(`Failed to fetch data: ${res.status} - ${res.statusText}`);
          }
          
          const jsonData = await res.json();
          setData(jsonData.data);
          } catch (error) {
          console.error('Fetch error:', error.message);
          setError(true)
      }finally{
      setLoading(false)
      }
  };
  
  fetchOrder();
  }, [url]);
  return {data,loading,error}

  
}
export default useFetch;
