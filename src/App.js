import React, {Component} from 'react';
import Membro from './components/Membro';
import Feed from './components/Feed';

 class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            nome: 'James',
            contador:0,
            hora:'00:00:00', 
            status: true,
            feed:[
                {id:1, username:'james', curtidas:10, comentarios:2},
                {id:2, username:'pedro', curtidas:3, comentarios:5},
                {id:3, username:'edu', curtidas:6, comentarios:7}

            ],
            email:'email@email',
            senha:''
        };
        this.aumentar = this.aumentar.bind(this);
        this.diminuir = this.diminuir.bind(this);
        this.sair = this.sair.bind(this);
        this.trocaEmail = this.trocaEmail.bind(this);
    }
    trocaEmail(event){
        let valorDigitado = event.target.value;
        this.setState({email:valorDigitado})
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
                <h1>TESTE</h1>

                Email:
                <input type="email" name="email" value={this.state.email} onChange={this.trocaEmail}/>
<br/>
                Senha:
                <input type="password" name="password"/>


                {this.state.feed.map((item)=>{
                    return(
                        <Feed id={item.id} username={item.username} curtidas={item.curtidas} comentarios={item.comentarios}/>
                    );
                })}
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