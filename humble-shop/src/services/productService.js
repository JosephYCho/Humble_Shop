import axios from "axios";

const url = "https://my-json-server.typicode.com/simpatra/mockapi/products";



export const getAllProducts =()=>{
  const config ={
    method:"GET",
    url,
    crossdomain:true,
    headers:{
      "Content-Type":"application/json"
    }
  };
  

  return axios(config)
  

}