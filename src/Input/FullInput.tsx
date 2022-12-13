import React, {ChangeEvent, useState} from "react";

type FullInputPropsType = {

    addMessage: (title: string) => void
}


const FullInput = (props: FullInputPropsType) => {

    let [title, setTitle] = useState('')

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }
    const OnClickButtonHandler = () => {
        props.addMessage(title)
        setTitle('')
    }

    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={OnClickButtonHandler}>+</button>
        </div>
    )
}

export default FullInput