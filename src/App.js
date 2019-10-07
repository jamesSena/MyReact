import React, {Component} from 'react';
import Membro from './components/Membro'
 class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            nome: 'James',
            contador:0,
            hora:'00:00:00'
        };
        this.aumentar = this.aumentar.bind(this);
        this.diminuir = this.diminuir.bind(this);

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

    shouldComponentUpdate(nextProps, nextState, nextContext) {
         
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
                    <Membro nome="Visitante"/>
                </h3>
            </div>
        );
    }
}


export default App;