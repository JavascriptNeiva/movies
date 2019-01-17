import React from 'react'



export default class Item extends React.Component {

    render(){
        return(
            <div className='Item'>
                <img/>
                <h1>Titulo</h1>
                <p>Descripcion</p>
            </div>
        );
    }
}