import React, {Component} from 'react';

class Membro extends Component{
    render(){
        return(
            <div>
                {this.props.nome}
            </div>
        );
    }
}
export default Membro;
