import React, {MouseEvent} from "react";

type ByttonPropsType = {
    name: string
    callBack: ()=> void
}


export const Button = (props: ByttonPropsType) => {
    const OnClickButtonHandler = () => {
        props.callBack()
    }
    return (
      <button onClick={OnClickButtonHandler}>{props.name}</button>
    )
}