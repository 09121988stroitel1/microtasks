import React from "react";

export type ButtonType = {
    name: string
    callBack:()=>void
}

export const Button=(props: ButtonType) => {
    const onClickHandlefr = () => {
        props.callBack()
    }
return (
    <div>
        <button onClick={onClickHandlefr}>{props.name}</button>
    </div>
)
}