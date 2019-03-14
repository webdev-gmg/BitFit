import axios from "axios";
const BASEURL = "https://api.edamam.com/search?q&app_id=d92a48f4&app_key=58924f64c0c56540119df47989fe9528";
//const APIKEY = "&apikey=trilogy";
//const to = "&to=5"
const calories = "&calories=0-400"
const health = "&health=alcohol-free"

const config = {
    headers: { "Content-Type": "application/json","Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMkRLR1ciLCJzdWIiOiI1V1RYUTciLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyc29jIHJzZXQgcmFjdCBybG9jIHJ3ZWkgcmhyIHJudXQgcnBybyByc2xlIiwiZXhwIjoxNTUyMzc4NTc3LCJpYXQiOjE1NTIzNDk3Nzd9.Sf7U5fXeMc-QO5F8PLQKy22gC15RwMmYZVIr64Md1e8" }
  
  };



export default {
  search: function(to,diet) {
   // return axios.get(BASEURL);
    return axios.get(BASEURL + `&to=${to}` + calories + health + `&diet=${diet}`);
  },
};