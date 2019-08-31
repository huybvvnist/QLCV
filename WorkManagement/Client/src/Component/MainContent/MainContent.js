import React, { Component } from 'react';
import LeftContent from './MainItem/LeftContent';
import RightContent from './MainItem/RightContent';

class MainContent extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="row content">
                <LeftContent data={this.props.data}/>
                <RightContent/>
            </div>
        );
    }
}

export default MainContent;