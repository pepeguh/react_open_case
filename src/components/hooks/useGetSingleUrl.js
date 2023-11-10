const useGetSingleUrl = (item) => {
    const baseUrl = 'https://steamcommunity.com/market/priceoverview/?currency=5&appid=730&market_hash_name='
    let singleUrl=''
    let itemNameInside = "";
    let itemExterior = "";
    if (item.exterior.split(" ").length > 1) {
        itemExterior = item.exterior.split(" ").join("%20");
    } else {
        itemExterior = item.exterior;
    }
    if (item.name.split(" ").length > 1) {
    itemNameInside = item.name.split(" ").join("%20");
    }else{
        itemNameInside=item.name
    }

    singleUrl=
        baseUrl +
        item.type +
        "%20%7C%20" +
        itemNameInside +
        "%20%28" +
        itemExterior +
        "%29";

  return singleUrl;
};
export default useGetSingleUrl;
