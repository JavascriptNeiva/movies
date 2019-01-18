import React from 'react'



export default class Item extends React.Component {

    render(){
        return(
            <div className='Item'>
                <img className="Movie-img" src={ this.props.search.Poster }/>
                <h1 className="Title-movie">{ this.props.search.Title }</h1>
                <p>{ this.props.search.type }</p>
                <p>{ this.props.search.year }</p>
            </div>
        );
    }
}