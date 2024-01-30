import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'
// create a Store
export const Store = createContext()

// create a Components
const DataCompo = (props) => {
  const [data,setData] = useState([])

  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const response = await axios.get("https://ecommercebackend-ptf5.onrender.com/pages/ecom")
        console.log(response);
        setData(response.data)
      }
      catch(err){
        console.log('error fetching data', err);
      }
    };
    fetchData();
  },[])
  

  return(
      //  using provider provide data to all components 
    <Store.Provider value = {[data,setData]}>
      {props.children}
    </Store.Provider>
  )
}


export default DataCompo




