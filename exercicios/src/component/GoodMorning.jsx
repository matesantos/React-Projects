import React from 'react'

// export default ({nome, idade}) => 
//                         <>
//                             <h1>Good Morning {nome}!</h1>
//                             <h2> com idade de {idade}</h2>
//                         </>
export default ({nome, idade}) => [
    <h1 key='h1'>Good Morning {nome}!</h1>,
    <h2 key='h2'> com idade de {idade}</h2>
]

// export default ({nome, idade}) => 
//                         <React.Fragment>
//                             <h1>Good Morning {nome}!</h1>
//                             <h2> com idade de {idade}</h2>
//                         <React.Fragment/>
