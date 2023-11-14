import React, { useState, useEffect, useRef  } from "react";
import Audio from '../../sound/openSound.mp3';
import "../styles/openCase.css";
import { useDispatch, useSelector } from 'react-redux'; // Импортируем хуки для Redux
import { setBalance, setSnakebiteSkins, setProfileHistory } from '../../redux/actions'; // Импортируем действие
import fetchData from "../hooks/fetchData";
import getSelectedPrice from "../hooks/updatePrice";
const Snakebite = () => {
  //    LOGIC
    const chances = [
    12.19, 11.598, 11.418, 11.418, 11.418, 11.418, 11.418, 3.19, 3.19, 3.19,
    3.19, 3.19, 1.066, 1.066, 1.066, 0.448, 0.448,
  ];
  const [showBtn, setShowBtn] = useState(false);
  const [isImgVisible, setImgVisible] = useState(true);
  const [prise, setPrise] = useState(null);
  const [drop, setDrop] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [pepePrice, setPepePrice] = useState(null)
  const [exterior, setExterior] = useState('НЕТ ЗНАЧЕНИЯ')
  const dispatch = useDispatch(); // Получаем диспетчер Redux
  const balance = useSelector((state) => state.balance); 
  const skins = useSelector((state)=> state.snakebite_skins);
  const [skinRev, setSkinRev] = useState([...skins].reverse());
  let tryPrices=[];
  const casePrice = 139;
  let workSkins;
  let canOpen=balance>=casePrice;
 
  const processHistory= useSelector((state)=>state.history_skins); 

 useEffect(()=>{
 writeData(skins)
 console.log('сработал юс эффекс')
 },[])

  async function writeData(skins) {
       workSkins = await fetchData(skins)
       
       if(workSkins==undefined||workSkins==undefined){
        return
       }else{
         setSkinRev([...workSkins].reverse())  
         dispatch(setSnakebiteSkins(workSkins));
       }
  }
  

async function updatePrice (selectedPrise){
    setIsLoading(true)
    let middleSelectedPrice=await getSelectedPrice(selectedPrise)
    setExterior(middleSelectedPrice.exterior)
    let middlewareHistory = [...processHistory]
    middlewareHistory.push(middleSelectedPrice)
    dispatch(setProfileHistory(middlewareHistory))
    setPepePrice(middleSelectedPrice.price)
    }
  

   const openCase=  ()=> {
    //главный скин
    setImgVisible(!isImgVisible);
    const ranges = generateRanges(chances);
    const rangeIndex = findRangeIndex(ranges, randNum);
    const selectedPrise = skins[rangeIndex];
     setPrise(selectedPrise);
     updatePrice(selectedPrise)
     setIsLoading(false)
    console.log(selectedPrise)
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
     

   
    console.log(`Вам выпал скин - ${selectedPrise.type} | ${selectedPrise.name} `);
    console.log(tryPrices)
    if(balance<casePrice){
      canOpen=false;
    }
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
    
    const newBalance = balance - casePrice; 
    dispatch(setBalance(newBalance));//обновляем баланс
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
      throw new Error("invalid input");
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
            <span className="case_slide_drop_title">{drop[37].type} | {drop[37].name} </span>
            <span className="case_slide_drop_exterior">{exterior}</span>

            {isLoading == false ?(
            <span className="price price_RUB case_slide_drop_price">{pepePrice}</span>
            ) : isLoading==true(
            <span className="price price_RUB case_slide_drop_price">Loading...</span>
            ) }

            <img src={drop[37].src} className={`${drop[37].rarity} show`} alt={drop[37].name}></img>
           </div>}
          </div>
        )}

        <div className="case_actions_div">
          {!canOpen && isImgVisible &&
           <button className="case_actions cantOpen">{`${casePrice}р (Не хватает ${casePrice-balance}р)`}</button>

          }
          {!canOpen && showBtn &&
          <button className="case_actions cantOpen">{`${casePrice}р (Не хватает ${casePrice-balance}р)`}</button>
          
          }
        {isImgVisible && canOpen &&
          <button className="case_actions" onClick={skinChoose}>
            Открыть
          </button>}
          <audio ref={audioRef} src={Audio}/>
         
          {showBtn && canOpen &&
          <button className="case_actions" onClick={openAgain}>
             Открыть снова</button>}
        </div>
       
        <div className="case_skins">
        
        {skinRev.map((skin)=>(
             <div key={`${skin.name}`} className={`skin ${skin.rarity}`}>
             <img className="skin_img" src={skin.src}></img>
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
