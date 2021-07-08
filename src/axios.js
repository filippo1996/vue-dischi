import axios from "axios";

export default async function(url){
    try{
       let response = await axios.get(url);
       return response;
    }catch(e){
        console.log(e);
    }
}