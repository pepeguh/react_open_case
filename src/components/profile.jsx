import React from "react";
import "./styles/profile.css";
import { useDispatch, useSelector } from 'react-redux'; // Импортируем хуки для Redux
import { setBalance } from '../redux/actions'; // Импортируем действие

const Profile = ({ skinHistory, setSkinHistory }) => {
  const dispatch = useDispatch(); // Получаем диспетчер Redux
  const balance = useSelector((state) => state.balance); 


  const profileLink = "https://steamcommunity.com/id/pepeguh/";
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
      <div className="profile_skin_grid">
        {skinHistory.map((skin, index) => (
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
              <div className="profile_skin_name">{skin.name}</div>
              <div className="profile_skin_type">{skin.type}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Profile;
