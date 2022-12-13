import React, {ChangeEvent, useState} from "react";
import FullInput from "./FullInput";
import {Input} from "./Input";
import {Button} from "./Button2";

const ComponentInputButton =() => {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'}
    ])

    let [title, setTitle] = useState('')



    const addMessage = (title: string) => {
        console.log(title)
        let NewMessage =  {message: title}
        setMessage([ NewMessage,...message])

    }

    const calllBackButtonHandler = ()=> {
        addMessage(title)
        setTitle('')
    }

    return(
        <div>
          {/*  Инпут и кнопка вместе*/}
          {/*<FullInput addMessage={addMessage}/>*/}

          {/*  Разделили кнопку и инпут*/}
            <Input title={title} setTitle={setTitle}/>
            <Button name={'+'} callBack={calllBackButtonHandler}/>
            {message.map((i, index)=> {
                return (
                    <div key ={index}>{i.message}</div>
                )
            })}
        </div>
    )
}

export default ComponentInputButton