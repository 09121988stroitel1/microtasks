import React from "react";

export type TopCarsType = {
    manufacturer: string
    model: string
}
type AutoType = {
    topCars: Array<TopCarsType>
}

const TopCar = (props: AutoType) => {
    return (
        <div>
            <table>
                <tr>
                    <th>manufacturer</th>
                    <th>model</th>

                </tr>

                    {props.topCars.map((i)=> {
                        return (<tr>
                                <td>{i.manufacturer}</td>
                                <td>{i.model}</td>
                        </tr>

                        )
                    })}


            </table>
        </div>
    )
}

export default TopCar