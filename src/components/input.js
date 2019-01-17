import React from 'react'



export default class Input extends React.Component {
    
    constructor(props){
        super(props)

        this.state = (
            { textInput: '' }
        )

        this.handlerInput = this.handlerInput.bind(this)
    }

    handlerInput(e){
        const text = e.target.value
        this.setState(
            { textInput:text }
        );
        console.log('HandlerInput ',e);
        console.log('text',this.state.textInput);
    }

    render(){
        return(
            <div>
                <input type="text" onChange={ this.handlerInput } value={this.state.textInput }/>
                <p>{ this.state.textInput }</p>
            </div>
        );
    }
}