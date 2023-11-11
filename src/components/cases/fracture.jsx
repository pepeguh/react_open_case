import React, { useState, useEffect, useRef  } from "react";
import Audio from '../../sound/openSound.mp3';
import "../styles/openCase.css";
import { useDispatch, useSelector } from 'react-redux'; // Импортируем хуки для Redux
import { setBalance, setFractureSkins,setProfileHistory } from '../../redux/actions'; // Импортируем действие
import useGetUrls from '../hooks/useGetUrls';
import getSingleUrl from '../hooks/useGetSingleUrl'
import fetchItemPrice from "../hooks/useFetchItemPrice";
const Fracture = () => {
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
    const skins = useSelector((state)=> state.fracture_skins);
    
  const everyUrl = useGetUrls(skins);
    console.log(balance)
    console.log(skins)
  
  
    const [skinRev, setSkinRev] = useState([...skins].reverse());
    let tryPrices=[];
    const casePrice = 139;
    let workSkins;
    let canOpen=balance>=casePrice;
    
    const processHistory= useSelector((state)=>state.history_skins); 

  
    // ELSE 100 TRY
  const itemUrl = "http://localhost:3001/get-item-price";
  
  
   useEffect(()=>{
    fetchData()
    console.log('сработал юс эффекс')
   },[])
  
    async function fetchData() {
       workSkins = skins;
      if(workSkins[0].price===1){//если не прокает, тогда идет запрос на сервер
        const prices = await fetchPrices();
        tryPrices=prices; 
        if (tryPrices[0]===undefined||tryPrices[1]===undefined){
          return;
        }else{
          for (let i = 0; i < workSkins.length; i++) {
            workSkins = workSkins.map((skin, i) => {
              return {
                ...skin,
                price: tryPrices[i]
              };
            });
          }
          workSkins.forEach(skin => {
          skin.price=skin.price.slice(0, -5)
         });
          setSkinRev([...workSkins].reverse())  
          dispatch(setFractureSkins(workSkins));
  
        }
      }
      
    console.log(skins)
    console.log(tryPrices)
    }
    

  
  async function fetchPrices() {
    console.log(everyUrl)
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
  async function updatePrice (selectedPrise){
    setIsLoading(true)
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
    setExterior(selectedPrise.exterior)
    let middlewareHistory = [...processHistory]
    middlewareHistory.push(selectedPrise)
    dispatch(setProfileHistory(middlewareHistory))
    setPepePrice(price1)
    return price1
    }
    
  
    const openCase = () => {
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
          <div className="case_title">Fracture case</div>
          <div className="case_title_img">
            {isImgVisible && (
              <img src="https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFU2nfGaJG0btN2wwYHfxa-hY-uFxj4Dv50nj7uXpI7w3AewrhBpMWH6d9CLMlhpEbAe-Zk"></img>
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
              <span className="case_slide_drop_title">{drop[37].type} | {drop[37].name}</span>
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
  export default Fracture;
  