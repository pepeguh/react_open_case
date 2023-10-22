import React, { useEffect, useState } from "react";
import "./styles/profile.css";
import { useDispatch, useSelector } from 'react-redux'; // Импортируем хуки для Redux
import { setBalance } from '../redux/actions'; // Импортируем действие

const Profile = ({ skinHistory, setSkinHistory }) => {
  const dispatch = useDispatch(); 
  const balance = useSelector((state) => state.balance); 
  const profileLink = "https://steamcommunity.com/id/pepeguh/";
  const itemUrl = "http://localhost:3001/get-item-price";
  const [updHistory, setUpdHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  

  
useEffect(()=>{
  console.log('СРАБОТАЛ ЮС ЭФФЕКТ')
  const fetchData = async () => {
    setIsLoading(true); 

    if (skinHistory.length >= 1) {
      
      
      const updatedHistory = await processHistoryItems([...skinHistory]);
      for(let item of updatedHistory ){
        if(typeof item.price==='string'||typeof item.price==='number'&&item.price!=0){

          item.price = item.price.slice(0, -5)
        }
      }
     
      setUpdHistory(updatedHistory);
    }
    setIsLoading(false)
  };

  fetchData();
}, [skinHistory]);


const fetchItemPrice  = async (singleUrl) => {
  try {
    const response = await fetch(`${itemUrl}/${encodeURIComponent(singleUrl)}`);
    if (response.ok) {
      const data = await response.json();
      console.log(data)
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

  async function processHistoryItems(history){
    const updatedHistory=[];
    const changed = true;
    for(let item of history){
      if(item.changed===true){
        console.log('цена предмета была изменена')
        console.log(item)
        
      }else{
        
        let price =await fetchItemPrice(item.url);
        const changed = true;
        const updatedItem ={
          ...item,
          price,
          changed,
        }
       
        console.log(updatedItem)
        console.log(updHistory)
        updatedHistory.push(updatedItem)
      };
    }
    return updatedHistory
  }

  
  
    
   


  const extractProfileId = (profileLink) => {
    const parts = profileLink.split("/id/");
    return parts.length > 1 ? parts[1].split("/")[0] : null;
  };
  const profileId = extractProfileId(profileLink);

 
  const sellItem = (index) => {
    const updatedSkinHistory = [...skinHistory];   
    
    const updBalance=balance+ parseFloat(updatedSkinHistory[index].price)

    const filteredSkinHistory = updatedSkinHistory.filter((skin, i) => i !== index);

    dispatch(setBalance(updBalance));
    setSkinHistory(filteredSkinHistory);
   
  };

  return (
    <div className="profile_container">
      <div className="profile_info">
        <img src="https://avatars.akamai.steamstatic.com/6c5cf1124e9766c3bf2a2a45a5f15ef32459c091_full.jpg"></img>
        <div className="profile_tags">
          <span className="profile_name">Smoke</span>
          <a href={profileLink}>
            <span className="profile_id">Steam ID: {profileId}</span>
          </a>
        </div>
        <div className="profile_bestdrop"></div>
      </div>
      <h2>История скинов:</h2>
      {isLoading && 
      <span className="loader"></span>
      }
      {!isLoading &&
      <div className="profile_skin_grid">
        {updHistory.map((skin, index) => (
          <div key={index} className={`profile_skin_card ${skin.rarity}`}>
            <div className="profile_skin_price_container">
              <div className="profile_skin_price price_RUB">{skin.price}</div>
              <button className="profile_skin_sell_btn" onClick={()=>sellItem(index)}>
                Продать
              </button>
            </div>
            <div className="profile_skin_img_container">
              <img src={skin.src} alt={skin.name} />
            </div>
            <div className="profile_skin_details">
              <div className="profile_skin_exterior">{skin.exterior}</div>
              <div className="profile_skin_name">{skin.name}</div>
              <div className="profile_skin_type">{skin.type}</div>
            </div>
          </div>
        ))}
      </div>
      }
    </div>
  );
};
export default Profile;
