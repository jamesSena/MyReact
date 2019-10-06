import React, {Component} from 'react';

 class Equipe extends Component {
    render(){
    return (
        <div>
            <h2>Olá sou o {this.props.nome}</h2>
            <h2>cargo: {this.props.cargo}</h2>
            <h2>idade: {this.props.idade}</h2>
        </div>

        );
    }
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