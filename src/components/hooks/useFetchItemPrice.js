
const fetchItemPrice  = async (singleUrl) => {
    const itemUrl = "http://localhost:3001/get-item-price";
    try {
      const response = await fetch(`${itemUrl}/${encodeURIComponent(singleUrl)}`);
      if (response.ok) {
        const data = await response.json();
        return data.lowest_price;
      } else {
        console.error("Не удалось получить данные. Код ошибки:", response.status);
        return 0;
      }
    } catch (error) {
      console.error("Произошла ошибка при запросе данных:", error);
      return 0;
    }
  }
  export default fetchItemPrice