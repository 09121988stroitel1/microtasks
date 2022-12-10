import React from "react";

export type NewComponentType = {
    stydents: Array<StudentType>
}

export type StudentType = {
    id: number
    name: string
    age: number

}
export const NewComponent = (props: NewComponentType) => {
    return (

        <div>
            {props.stydents[0].name}
            <div>New component</div>
            <ul>
                {props.stydents.map((i)=> {
                    return(
                        <li key ={i.id}>
                            <span>{i.name}</span>
                            <span>{i.age}</span>
                            </li>

                        )

                })}

            </ul>

        </div>

    )
}