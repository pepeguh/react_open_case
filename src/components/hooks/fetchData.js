import fetchPrices from "./fetchPrices";
import GetUrls from "./useGetUrls";


async function fetchData(skins) {
   let everyUrl = GetUrls(skins);
    let workSkins = skins;
     let tryPrices;
    if(workSkins[0].price===1){//если не прокает, тогда идет запрос на сервер
      const prices = await fetchPrices(everyUrl);
     tryPrices=prices; 
      if (tryPrices[0]===undefined||tryPrices[1]===undefined){
        return;
      }else{
        for (let i = 0; i < workSkins.length; i++) {
          workSkins = workSkins.map((skin, i) => {
            return {
              ...skin,
              price: tryPrices[i]
            };
          });
        }
        workSkins.forEach(skin => {
        skin.price=skin.price.slice(0, -5)
       });
      }
    }
    console.log(skins)
    console.log(tryPrices)
    return workSkins
  }
  export default fetchData