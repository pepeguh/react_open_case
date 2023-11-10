import { useState, useEffect } from "react";

const useGetUrls = (skins) => {
  const baseUrl ="https://steamcommunity.com/market/priceoverview/?currency=5&appid=730&market_hash_name=";
  const [everyUrl, setEveryUrl] = useState([]);
  useEffect(() => {
    const fetchUrls = () => {
      const newEveryUrl = skins.map((item) => {
        let itemNameInside = "";
        if (item.name.split(" ").length > 1) {
          itemNameInside = item.name.split(" ").join("%20");
          return (
            baseUrl +
            item.type +
            "%20%7C%20" +
            itemNameInside +
            "%20%28Factory%20New%29"
          );
        } else {
          return (
            baseUrl +
            item.type +
            "%20%7C%20" +
            item.name +
            "%20%28Factory%20New%29"
          );
        }
      });
      setEveryUrl(newEveryUrl);
    };

    fetchUrls();
  }, [skins]);

  return everyUrl;
};

export default useGetUrls;
