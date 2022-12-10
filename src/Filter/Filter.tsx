import React, {useState} from "react";
import FilterComponent from "./FilterComponent";

export type moneyStateType= {
    banknots:string
    value:number
    number:string
}
export type FilterType = 'all' | 'Dollars' | 'RUBLS'


export const Filter = () => {
    const [money, setMoney] = useState<moneyStateType[]>([
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ])

    let [filter, setfilter] = useState<FilterType>('all')

    let currentMoney=money
    if(filter === "Dollars"){
        currentMoney=money.filter((i)=>i.banknots === "Dollars")
    }
    if(filter === "RUBLS") {
        currentMoney =money.filter((i)=>i.banknots === "RUBLS")
    }

    const onClickFilterHandler = (nameButton: FilterType)=> {
        setfilter(nameButton)
    }



    return(
      <FilterComponent currentMoney={currentMoney} onClickFilterHandler={onClickFilterHandler}/>

    )
}
