import React, { useState, useEffect, useRef  } from "react";
import Audio from '../../sound/openSound.mp3';
import "../styles/openCase.css";
import { useDispatch, useSelector } from 'react-redux'; // Импортируем хуки для Redux
import { setBalance } from '../../redux/actions'; // Импортируем действие


const Snakebite = ({ onSkinDrop }) => {
  //    LOGIC
  const everyUrl = []
  const chances = [
    12.19, 11.598, 11.418, 11.418, 11.418, 11.418, 11.418, 3.19, 3.19, 3.19,
    3.19, 3.19, 1.066, 1.066, 1.066, 0.448, 0.448,
  ];
  const skins = [
    {
      name: "Oscillator",
      type: "UMP-45",
      src: "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1Jf0v73ZDBSuImJkYyOlOPmPKzQgG5u5Mx2gv3--Y3nj1H68ks-ZTj2JoeUIAc3Mw6FrwLsx-e7hZ7v75qcmydlvygmtimLnBC01wYMMLLb9wWKMQ",
      rarity:"milspec",
      price:15,
    },
    {
      name: "Windblown",
      type: "Nova",
      src: "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhzw8zGfitD08u_moS0k_7nI77DhWpd18l4jeHVyoD0mlOx5UptZm-nIdeXcgBrYQ3UqFW5l-bugcTp6ZSbzyBmvnFx5S7cmUe2hBFSLrs4oxm_23A",
      rarity:"milspec",
      price:35,
    },
    {
      name: "O.S.I.P.R.",
      type: "M249",
      src: "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-jxcjhnwMzFI2kb09-5mYKCmfLLP7LWnn9u5MRjjeyPo4qt3wbgrhVkam_2JIDAJlM-aFrVq1W8xLq-hZO1upSfyHsy63Z2tmGdwUIJtswwdA",
      rarity:"milspec",
      price:40,
    },
    {
      name: "Heavy Metal",
      type: "SG 553",
      src: "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFf1OD3YjoXuY-JkIWKg__5Nq_QmlRd4cJ5ntbN9J7yjRq3_0JsZ2inJdeTew49aQzTqFe4l-zuhZW-vpjNyXRl73F3tHeLyhG2n1gSOQK8z5S-",
      rarity:"milspec",
      price:43,
    },
    {
      name: "Junk Yard",
      type: "R8 Revolver",
      src: "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopL-zJAt21uH3di59_oSJhpWYg_z9PbzummJW4NFOhujT8om73Qbg_kJrazqlLILAc1RoaQzX_QTsxr_s0MW9tcnIyXoyvSAj5n6JnAv330-b64w-6g",
      rarity:"milspec",
      price:45,
    },
    {
      name: "Circaetus",
      type: "CZ75-Auto",
      src: "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0Ob3cicVueOhnImZm-D9Pb_ummJW4NFOhujT8om70ALi-0prZGn0IICTdwNtYl3QqAO5k-7ngse0752fyCRi6CUnsX_cyQv330-K5zDKuQ",
      rarity:"milspec",
      price:48,
    },
    {
      name: "Clear Polymer",
      type: "Glock-18",
      src: "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf1OD3djFN79eJhI-HjvrxIYTdn2xZ_Pp9i_vG8MKsiQHiqUJpMWuncdPEdw46ZgrQ8lO-kuu-0Z-0vs7Izntl6XMqsH-OgVXp1pCcljBx",
      rarity:"milspec",
      price:50,
    },
    {
      name: "dev_texture",
      type: "Negev",
      src: "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouL-iLhFf0Ob3fzhF6cqJkIWdg_LsJ67Dk1Rd4cJ5ntbN9J7yjRq1-xBqNWuld9TEIQ9qZV_TrlbsyLrvgZO-u5rKwXZg6SIq4XnVnEC0n1gSOdjW9rAC",
      rarity:"restricted",
      price:150,
    },
    {
      name: "Button Masher",
      type: "MAC-10",
      src: "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0Ob3fDxBvYyJhI-Zg_b2P77ummJW4NFOhujT8om7jACx8kRtYW6iLYTAIVRvYFrY8lXrxL-5hZ6_7czBzXRrvyQq4y3elgv330_bBVmBuA",
      rarity:"restricted",
      price:80,
    },
    {
      name: "Cyber Shell",
      type: "P250",
      src: "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhnwMzYI2gS09-vloWZhP_xP7fummJW4NFOhujT8om70VLk_0NkMD2mLI-dJlI2YF7Q81S6wL_n0JC06svInyQ2siEh53-Lywv3309nhbYnfQ",
      rarity:"restricted",
      price:110,
    },
    {
      name: "Trigger Discipline",
      type: "Desert Eagle",
      src: "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PDdTjlH7duJgJKCkPDxIYTVn3hS4dV9g-fEyoD8j1yglB89IT6mOo_BegA_ZFHU_we-xue6hsC76czBzSFmvSJ0sXzZmxW_100ZaOZrhKaACQLJyKyK7VI",
      rarity:"restricted",
      price:280,
    },
    {
      name: "Slate",
      type: "AK-47",
      src: "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV08ykm4aOhOT9PLXQmlRd4cJ5ntbN9J7yjRqw-0o4ZWvwcIbEdQQ7Ml7Tr1nvwufvgMC6us-bmHZi6HEgsCvYlkC_n1gSOasHEuYf",
      rarity:"restricted",
      price:1100,
    },
    {
      name: "XOXO",
      type: "XM1014",
      src: "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PLZTiVPvYznwL-bgvn_DLfYkWNF18lwmO7Eu9T23lG2_hE_NWvwIIeSewE_YgnV-AO_kOu6h5Tvupmay3MwvyIi5XjD30vg9oIGPLs",
      rarity:"classified",
      price:450,
    },
    {
      name: "Food Chain",
      type: "MP9",
      src: "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FAR17P7YKAJE49Oyq4ODlv76DLfYkWNF18lwmO7Eu9mt0QGy_xA_a2_3J46SIwA_MFvX8lK6xu7vhpHpusidyHtmuXYlsSnD30vgbTUHI8E",
      rarity:"classified",
      price:800,
    },
    {
      name: "Chromatic Aberration",
      type: "Galil AR",
      src: "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczLZAJF7dC_mL-In-X7PrruhmJf4_p9g-7J4bP5iUazrl05YWCgdo6WelJrYA6D_FK_ybrsg8PovsnOy3Rg6Cd0tiqLnhXmhUxEcKUx0gvh2894",
      rarity:"classified",
      price:1500,
    },
    {
      name: "In Living Color",
      type: "M4A4",
      src: "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwW09C5goW0m_7zO6_ummpD78A_3--W89r02wTs_hI5NzrydY6SelJqYFjY8lC_xeq6gp61tMzLnSBg7j5iuyjjy9o9kg",
      rarity:"covert",
      price:4050,
    },
    {
      name: "The Traitor",
      type: "USP-S",
      src: "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09ulq5WYh-TLO7rfkW5V5cR_teXI8oTht1i1uRQ5fTjzJY6cclBqNArY-VK7xe3o0cC77cvPz3Zi6ydw4Snbyhfh0ksdbeFxxavJpJcZ4v4",
      rarity:"covert",
      price:5450,
    },
  ];
  
  const [showBtn, setShowBtn] = useState(false);
  const [isImgVisible, setImgVisible] = useState(true);
  const [prise, setPrise] = useState(null);
  const [drop, setDrop] = useState([]);
  // const[tryPrices, setTryPrices] = useState([])


  const [skinRev, setSkinRev] = useState([...skins].reverse());
  let tryPrices=[];
  const casePrice = 139;
  const dispatch = useDispatch(); // Получаем диспетчер Redux
  const balance = useSelector((state) => state.balance); // Получаем баланс из состояния Redux

  // ELSE 100 TRY
const baseUrl = 'https://steamcommunity.com/market/priceoverview/?currency=5&appid=730&market_hash_name='
const itemUrl = "http://localhost:3001/get-item-price";




  async function fetchData() {
    const prices = await fetchPrices();
    tryPrices=prices; // Обновите состояние с полученными ценами
    for (let i = 0; i < skins.length; i++) {
      skins[i].price = tryPrices[i];
    }
    skins.forEach(skin => {
    skin.price=skin.price.slice(0, -5)
   });
    setSkinRev([...skins].reverse())
 
  console.log(skins)
  console.log(tryPrices)
  }
 

const getUrlForEverySkin = ()=>{
  let itemNameInside=''
  skins.forEach((item)=>{
    if(item.name.split(' ').length>1){
      itemNameInside=item.name.split(' ').join('%20')
      everyUrl.push(baseUrl+item.type+'%20%7C%20'+itemNameInside+'%20%28Factory%20New%29')
    }else{
      everyUrl.push(baseUrl+item.type+'%20%7C%20'+item.name+'%20%28Factory%20New%29')
    }
  })

  console.log(everyUrl)
}

async function fetchPrices() {
  getUrlForEverySkin()
  const promises = everyUrl.map(async (url) => {
    try {
      const response = await fetch(`${itemUrl}/${encodeURIComponent(url)}`);
      if (response.ok) {
        const data = await response.json();
        return data.lowest_price;
      } else {
        console.error("Не удалось получить данные. Код ошибки:", response.status);
        return null;
      }
    } catch (error) {
      console.error("Произошла ошибка при запросе данных:", error);
      return null;
    }
  });

  const results = await Promise.all(promises);

  return results;
}


// async function fetchPrices(){
//   getUrlForEverySkin()
//   for(let url of everyUrl){
//     try {
//       const response = await fetch(`${itemUrl}/${encodeURIComponent(url)}`);
//       if (response.ok) {
//         const data = await response.json();
//         newPrices.push(data.lowest_price)
//       } else {
//         console.error("Не удалось получить данные. Код ошибки:", response.status);
//         newPrices.push(null);
//       }
//     } catch (error) {
//       console.error("Произошла ошибка при запросе данных:", error);
//       newPrices.push(null);
//     }
//   }
// }
// end of try

  const openCase = () => {
    //главный скин
    fetchData();
    setImgVisible(!isImgVisible);
    const ranges = generateRanges(chances);
    const rangeIndex = findRangeIndex(ranges, randNum);
    //    const matchedRange = matchNumberToChance(randNum, ranges);
    const selectedPrise = skins[rangeIndex];
     setPrise(selectedPrise);
    // остальные 39
     const updatedDrop = [];
     for (let i =0; i<40; i++){
      let randNum1 = Math.floor(Math.random() * 999) + 1;
      let ranges1= generateRanges(chances);
      let rangeIndex1=findRangeIndex(ranges1, randNum1);
      updatedDrop.push(skins[rangeIndex1]);
     }
     updatedDrop[37]=selectedPrise;
     setDrop(updatedDrop);
     console.log(updatedDrop)
     onSkinDrop(updatedDrop[37])
   
    console.log(`Вам выпал скин - ${selectedPrise.type} | ${selectedPrise.name} `);
    console.log(tryPrices)
  };
   const audioRef = useRef(null);
 
  const playAudio = () => {
    if (!audioRef.current.paused) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    audioRef.current.play();
  };

  const skinChoose = () => {
    if(casePrice>balance){//проверка баланса
      return(alert("Недостаточно средств"))
    }
    dispatch(setBalance((balance-casePrice)));//обновляем баланс
    openCase();
    playAudio();
    setTimeout(() => {
      setShowBtn(!showBtn);
    }, 6000);
  };
  
  const openAgain=()=>{
    setShowBtn(!showBtn);
    setImgVisible(!isImgVisible)
  }

  let randNum = Math.floor(Math.random() * 999) + 1;
  const generateRanges = (chances) => {
    if (!Array.isArray(chances) || chances.length === 0) {
      throw new Error("invalid input. Please provide an array of chances");
    }
    const total = 999;
    const absoluteChances = chances.map((percentage) =>
      Math.floor((percentage / 100) * total)
    );
    const ranges = [];
    let start = 1;
    for (const absoluteChance of absoluteChances) {
      const end = start + absoluteChance - 1;
      ranges.push({ start, end });
      start = end + 1;
    }
    return ranges;
  };

  const matchNumberToChance = (randNum, ranges) => {
    for (const range of ranges) {
      if (randNum >= range.start && randNum <= range.end) {
        return range;
      }
    }
    return null;
  };
  const findRangeIndex = (ranges, number) => {
    for (let i = 0; i < ranges.length; i++) {
      const range = ranges[i];
      if (number >= range.start && number <= range.end) {
        return i;
      }
    }
    return -1; // Возвращает -1, если диапазон не найден
  };
 
 
  // РЕНДЕР
  return (
    <div className="main_div">
      <div className="case_all">
        <div className="case_title">Snakebite case</div>
        <div className="case_title_img">
          {isImgVisible && (
            <img src="https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFU4naLOJzgUuYqyzIaIxa6jMOLXxGkHvcMjibmU99Sg3Qaw-hA_ZWrzLISLMlhpgJJUhGE/256fx198f"></img>
          )}
        </div>
        {!isImgVisible && (
          <div className="case_slide_main">
            {!showBtn && <div className="vertical-line"></div>}
        {!showBtn &&  <div className={`case_slide ${!isImgVisible ? 'animDrop' : ''}  `}>
           {drop.map((item, index) => (
            
           <div key={`item${index}_zoomed`} className={`item${index}_zoomed`}>
           <img src={item.src} className={`${item.rarity}`} alt={index} />
           </div>
           ))}
          </div>}
          {showBtn &&
           <div className={`case_slide_drop ${drop[37].rarity} `}> 
            <span>{drop[37].type} | {drop[37].name}</span>
            <img src={drop[37].src} className={`${drop[37].rarity} show`} alt={drop[37].name}></img>
            <span className="price price_RUB case_slide_drop_span">{drop[37].price}</span>
           </div>}
          </div>
        )}

        <div className="case_actions_div">
        {isImgVisible &&
          <button className="case_actions" onClick={skinChoose}>
            Открыть
          </button>}
          <audio ref={audioRef} src={Audio}/>
         
          {showBtn &&
          <button className="case_actions" onClick={openAgain}>
             Открыть снова</button>}
        </div>
       
        <div className="case_skins">
        
        {skinRev.map((skin)=>(
             <div key={`${skin.name}`} className={`skin ${skin.rarity}`}>
             <img src={skin.src}></img>
             <div className="skin_type">{skin.type}</div>
             <div className="skin_name">{skin.name}</div>
             <div className="skin_price">
               <span className="price price_RUB">{skin.price}</span>
             </div>
           </div>
          ))}
          
        </div>
      </div>
    </div>
  );
};
export default Snakebite;
