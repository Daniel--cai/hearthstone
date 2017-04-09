import React from 'react';

class InputText extends React.Component {

    constructor(props){
        super(props);
        this.state = {text:'hello'}
    }

    handleChange(ev){
        this.setState({text:ev.target.value})
    }

    render(){
        return (
            <div>
                <h1>dfdsf</h1>
                <input 
                    type="text" 
                    placeholder= "sdfds"
                    value={this.state.text}
                    onChange={this.handleChange.bind(this)}
                />
            </div>
        )
    }
}

export default InputText;