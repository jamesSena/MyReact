import React from 'react';

const Equipe = (props) => {
    return (
        <div>
            <Sobre nome={props.nome}
                    cargo={props.cargo}
                    idade={props.idade}
                />
                <hr/>
            <Social
                linkedin={props.linkedin}
                facebook={props.facebook}

                />
        </div>

        );
}
const Sobre = (props) => {
    return (
        <div>
            <h2>Olá sou o {props.nome}</h2>
            <h2>cargo: {props.cargo}</h2>
            <h2>idade: {props.idade}</h2>

        </div>

        );
}

const Social = (props) => {
    return (
        <div>
            <a href={props.linkedin}>Linkedin </a>
            <a href={props.facebook}>Facebook </a>
        </div>

        );
}
function App(){
    return <div>
            <Equipe nome="James" cargo="Desenvolvedor" idade="27" facebook="https://www.facebook.com/in/jamessonsena/" linkedin="https://www.linkedin.com/in/jamessonsena/"/>

        </div>
}
export default App;