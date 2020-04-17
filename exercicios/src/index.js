import React from 'react'
import ReactDOM from 'react-dom'

// import {GoodAfternoon, GoodNigth} from './component/Multiples'
// import GoodMorning from './component/GoodMorning'
// import Multi from './component/Multiples'
// import Saudacao from './component/Saudacao'
import Father from './component/Father'
import Sons from './component/Son'
// ReactDOM.render(
//         <div>
//             <GoodMorning nome='fulano' idade={31}/>
//             <Multi.GoodAfternoon nome='Ana' idade/>
//             <Multi.GoodNigth nome='Bia' />
//         </div>,
// document.getElementById('root'))

ReactDOM.render(
    // <div>
    //     <Saudacao tipo='Bom Dia' nome='Mateus' />
    // </div>,
    <div>
        <Father nome='Paulo' sobrenome='Silva'>
            <Sons nome='Pedro' />
            <Sons nome='Paulo' />
            <Sons nome='Carla' />
        </Father>
    </div>,
    document.getElementById('root')
)