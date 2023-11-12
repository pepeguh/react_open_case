
async function fetchPrices(everyUrl) {
    const itemUrl = "http://localhost:3001/get-item-price";
    const promises = everyUrl.map(async (url) => {
      try {
        const response = await fetch(`${itemUrl}/${encodeURIComponent(url)}`);
        if (response.ok) {
          const data = await response.json();
          return data.lowest_price;
        } else {
          console.error("Не удалось получить данные. Код ошибки:", response.status);
          return;
        }
      } catch (error) {
        console.error("Произошла ошибка при запросе данных:", error);
        
        return;
      }
    });
  
    const results = await Promise.all(promises);
  
    return results;
  }
  export default fetchPrices;