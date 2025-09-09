export function trackWA(location,{country,city,tz,isAR}){
try{ window.gtag && window.gtag('event','wa_click',{location,country,city,tz,isAR}); }catch{}
try{ const eventID = `lead_${Date.now()}`; window.fbq && window.fbq('track','Lead',{location,country,city,tz,isAR},{eventID}); }catch{}
}