import React from 'react'
import Item from './item'
import Input from './input'



export default class List extends React.Component {

    render(){
        return(
            <div>
                <h1>List Movies</h1>
                <div> 
                    <Input/>
                    
                </div>
            </div>
        );
    }
}



