import React, {useState} from "react";
import './styles/refill.css'
import { useDispatch, useSelector } from 'react-redux'; // Импортируем хуки для Redux
import { setBalance } from '../redux/actions'; // Импортируем действие
 const Refill = ()=>{
    const [inputNum, setInputNum] = useState(0);
    const handleInputChange = (e) => {
        const floatValue = parseInt(e.target.value)
        setInputNum(floatValue);
      };

    const dispatch = useDispatch(); // Получаем диспетчер Redux
    const balance = useSelector((state) => state.balance); 
    const updBalance = ()=>{
        console.log('Значение введено в инпут:', inputNum);
        dispatch(setBalance(balance + inputNum));//обновляем баланс
    }

    return(
        <div className="refill_main">
            <span>Введите сумму для пополнения</span>
         <input type="number"  inputMode="numeric" maxLength="5" onChange={handleInputChange}></input>
        <button className="refill_btn" onClick={updBalance}>Пополнить баланс</button>
        </div>
    )
 }
 export default Refill