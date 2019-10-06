import React from 'react';

const BemVindo = (props) => <h2>Bem-Vindo {props.nome}</h2>
const BemVindo2 = (props) => {
    return (
        <div>
            <h2>Nome: {props.nome} </h2>       
            <h3>Idade: {props.idade}</h3>      
        </div>

        );
}

function App(){
    return <div>
            <BemVindo nome="James"/>
            <BemVindo2 nome="James" idade="27"/>
        </div>
}
export default App;