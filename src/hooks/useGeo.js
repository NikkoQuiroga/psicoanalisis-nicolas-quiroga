import { useEffect, useState } from "react";
export default function useGeo(){
const [geo,setGeo]=useState({loading:true,country:null,city:null,tz:null,cc:null});
useEffect(()=>{(async()=>{
try{const r=await fetch("https://ipapi.co/json/"); const j=await r.json();
setGeo({loading:false,country:j.country_name,city:j.city,tz:j.timezone||Intl.DateTimeFormat().resolvedOptions().timeZone,cc:j.country_code});
}catch{setGeo({loading:false,country:null,city:null,tz:Intl.DateTimeFormat().resolvedOptions().timeZone,cc:null});}
})();},[]);
return geo;
}