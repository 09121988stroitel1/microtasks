import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import {NewComponent, StudentType} from "./NewComponent";
// import TopCar, {TopCarsType} from "./Auto/Auto";
// import {Button} from "./Button";
import {Filter} from './Filter/Filter'

function App() {
  // const [students, setStudents] = useState([

//   const students: StudentType[] = [
//         {id: 1, name: "James", age: 8},
//         {id: 2, name: "Robert", age: 18},
//         {id: 3, name: "John", age: 28},
//         {id: 4, name: "Michael", age: 38},
//         {id: 5, name: "William", age: 48},
//         {id: 6, name: "David", age: 58},
//         {id: 7, name: "Richard", age: 68},
//         {id: 8, name: "Joseph", age: 78},
//         {id: 9, name: "Thomas", age: 88},
//         {id: 10, name: "Charles", age: 98},
//         {id: 11, name: "Christopher", age: 100},
//       ]
//   // )
//
//     const topCars: TopCarsType[] = [
//         {manufacturer:'BMW', model:'m5cs'},
//         {manufacturer:'Mercedes', model:'e63s'},
//         {manufacturer:'Audi', model:'rs6'}
//     ]
//     const subscribe = (event: MouseEvent<HTMLButtonElement>) => {
//       console.log("Button")
//     }
//
//     const onClickHandler = (name: string) => {
//       console.log(name)
//     }
//
//     const foo1= () => {
//         console.log(100200)
//     }
//     const foo2= (id: number) => {
//         console.log(id)
//     }
//     const Button1Foo = (subscriber: string, age: number, adress: string) => {
//         console.log(subscriber, age, adress)
//     }
//     const Button2Foo = (subscriber: string) => {
//         console.log(subscriber)
//     }
// // let a: number =1
//   let [a, seta]= useState(1)
//
// const onClickHandlerState = ()=> {
//       seta(++a)
//
//         console.log(a)
//     }
//     const onClickHandlerState0 = ()=> {
//      seta(a=0)
//         console.log(a)
//     }

  // @ts-ignore
    return (
      <div>
          {/*<NewComponent stydents={students}/>*/}
          {/* <TopCar topCars={topCars}/>*/}
          {/*<button onClick={subscribe}>Hello</button>*/}
          {/*<button onClick={(event)=>(console.log('gggggg'))}>jjjj</button>*/}
          {/*<button onClick={()=>onClickHandler('Vitia')}>jjjj</button>*/}
          {/*<button onClick={foo1}>1</button>*/}
          {/*<button onClick={()=>foo2(55555)}>2</button>*/}
          {/*<Button name= {'Button1'}*/}
          {/*        callBack={()=>Button1Foo('buttton1', 22, 'liw in mogilev')}/>*/}
          {/*<Button name={'Button2'}*/}
          {/*        callBack={()=>Button2Foo('buttton2')}/>*/}
          {/*<h1>{a}</h1>*/}
          {/*<button onClick={onClickHandlerState}>+</button>*/}
          {/*<button onClick={onClickHandlerState0}>0</button>*/}
          {/* eslint-disable-next-line react/jsx-no-undef */}
          <Filter />

      </div>

  );
}

export default App;
