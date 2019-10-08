import React, {Component} from 'react';

class Feed extends Component{
    render(){
        return(
            <div>
                <div key={this.props.id}>
                <h3>{this.props.username}</h3>
                <a>curtidas - {this.props.curtidas}</a>
                <a>comentarios - {this.props.comentarios}</a>
                </div>
            </div>

        );
    }
}
export default Feed;