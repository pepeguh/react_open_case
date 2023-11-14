import fetchItemPrice from "./useFetchItemPrice";
import getSingleUrl  from "./useGetSingleUrl" ;

const getExterior = (pattern)=>{
    let exterior = 'Factory New';
    if (pattern <= 0.07) {
      exterior = 'Factory New';
    } else if (pattern > 0.07 && pattern <= 0.15) {
      exterior = 'Minimal Wear';
    } else if (pattern > 0.15 && pattern <= 0.38) {
      exterior = 'Field-Tested';
    } else if (pattern > 0.38 && pattern <= 0.45) {
      exterior = 'Well-Worn';
    } else if (pattern > 0.45) {
      exterior = 'Battle-Scarred';
    }
    return exterior
  }

  async function getExactPrice(item){
    let mid=getSingleUrl(item)
    item.url= mid;
    let lowest_Price = await fetchItemPrice(item.url);
    if (typeof lowest_Price === 'string') {
      lowest_Price = lowest_Price.slice(0, -5);
    } else {
      lowest_Price = 0;
    }
      return lowest_Price
  }
  
  async function getSelectedPrice (selectedPrise){
      const prisePattern = getExterior(Math.random());
      selectedPrise={
        ...selectedPrise,
        exterior:prisePattern
      }
      const price1 = await getExactPrice(selectedPrise);
      selectedPrise={
        ...selectedPrise,
       price:price1
      }
      return selectedPrise
    }
    export default getSelectedPrice