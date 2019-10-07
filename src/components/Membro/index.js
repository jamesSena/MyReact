import React, {Component} from 'react';

class Membro extends Component{
    constructor(props){
        super(props);
        this.state = {
            nome: props.nome,
            idade: props.idade

        };
        this.entrar = this.entrar.bind(this);
    }

    entrar(name){
        let state = this.state;
        console.log("nome: " + state.nome);

        state.nome = name;
        console.log("nome: " +state.nome);

        this.setState(state);

        }
    render(){
        return(
            <div>
                <h2>Bem Vindo {this.state.nome}</h2>
                <h2>Idade: {this.state.idade}</h2>

                <button onClick={() => this.entrar('James')}>
                    Entrar como  James
                </button>
                <button onClick={() => this.setState({nome:''})}>
                    Sair
                </button>
            </div>
        );
    }
}
export default Membro;
