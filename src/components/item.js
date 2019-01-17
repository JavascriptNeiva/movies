import React from 'react'



export default class Item extends React.Component {

    render(){
        return(
            <div className='Item'>
                <img src={ this.props.search.Poster }/>
                <h1>{ this.props.search.title }</h1>
                <p>{ this.props.search.type }</p>
                <p>{ this.props.search.year }</p>
            </div>
        );
    }
}