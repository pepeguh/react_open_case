import React from "react";
import "./styles/profile.css";

const Profile = ({ skinHistory })=>{
  const profileLink = 'https://steamcommunity.com/id/pepeguh/';
  const extractProfileId =(profileLink)=>{
    const parts = profileLink.split('/id/')
    return parts.length > 1 ? parts[1].split('/')[0] : null;
  } 
  const profileId = extractProfileId(profileLink);
 

    return(
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
            <img src={skin.src} alt={skin.name} />
            <div className="profile_skin_details">
            <div className="profile_skin_name">{skin.name}</div>
            <div className="profile_skin_type">{skin.type}</div>
            
          </div>
        </div>
      ))}
    </div>
  </div>
    )
}
export default Profile;