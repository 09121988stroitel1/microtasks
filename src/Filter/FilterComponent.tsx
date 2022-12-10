import React from "react";
import {FilterType, moneyStateType} from "./Filter";

type CurrentMoneyType = {
    currentMoney: Array<moneyStateType>
    onClickFilterHandler:(nameButton: FilterType)=>void
}


const FilterComponent = (props:CurrentMoneyType) => {
    return (
        <div>
            <ul>
                {props.currentMoney.map((i, index)=>{
                    return(
                        <li key={index}>
                            <span>{i.banknots}</span>
                            <span>{i.value}</span>
                            <span>{i.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button onClick={()=>props.onClickFilterHandler('all')}>all</button>
                <button onClick={()=>props.onClickFilterHandler('Dollars')}>Dollars</button>
                <button onClick={()=>props.onClickFilterHandler('RUBLS')}>Rublies</button>
            </div>

        </div>
    )
}

export default FilterComponent