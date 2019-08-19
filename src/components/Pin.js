import React from 'react';
import diamond from '../assets/images/diamond.png';

export default class Pin extends React.Component{
    render(){
        return(
            <img src={diamond} style={{width:'20px'}} onClick={this.props.onClick}  />
        )
    }
}
