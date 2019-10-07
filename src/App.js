import React, {Component} from 'react';
import Membro from './components/Membro'
 class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            nome: 'James',
            contador:0,
            hora:'00:00:00', 
            status: true
        };
        this.aumentar = this.aumentar.bind(this);
        this.diminuir = this.diminuir.bind(this);
        this.sair = this.sair.bind(this);

    }
    //Quando é criado o componente
    componentDidMount(){
        setInterval(() => {
            this.setState({hora: new Date().toLocaleTimeString()})
        }, 1000);
    }

    //Quando é atualizado
    componentDidMountUpdate(){
        console.log("Atualizou o state !!!!")
    }

    sair(){
        let state = this.state;
        state.status = false;
        this.setState(state);
    }

    aumentar(){
        let state = this.state;
        state.contador +=1;
        this.setState(state);
    }
    diminuir(){
        let state = this.state;
        if( state.contador <= 0) return;
        state.contador -=1;
        this.setState(state);
    }
    render(){
        return (
            <div>
                <h1>Contador</h1>
                <h3>
                    <button onClick={this.diminuir}>-</button>
                    {this.state.contador}
                    <button onClick={this.aumentar}>+</button>
                    <br/>
                    {this.state.hora}
                    {
                        this.state.status ? 
                        <button onClick={this.sair}>Sair</button>
                        :
                        <Membro nome="Visitante" idade="10"/>
                    }

                </h3>
            </div>
        );
    }
}


export default App;