import React, { Component } from 'react';
import styled from 'styled-components';

class Contestant extends Component {
  
    render() {
        return (
            <Wrapper 
                position={ this.props.contestant.position } 
                style={
                    { 
                        left: this.props.contestant.position + '%'
                    }
                }
            >
            {this.props.children}
            </Wrapper>
        );
    }
}

export default Contestant;

const Wrapper = styled.div`
    position: relative; 
    > div {
        width: 63px;
        height: 99px;
        background-size: contain;
        background-repeat: no-repeat;
        margin-bottom: 10px;
        z-index: 1;
    }
`