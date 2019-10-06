import React from 'react';

const Equipe = (props) => {
    return (
        <div>
            <Sobre nome={props.nome}
                    cargo={props.cargo}
                    idade={props.idade}
                />
        </div>

        );
}
const Sobre = (props) => {
    return (
        <div>
            <h2>Olá sou o {props.nome}</h2>
        </div>

        );
}

function App(){
    return <div>
            <Equipe nome="James" cargo="Desenvolvedor" idade="27"/>
        </div>
}
export default App;