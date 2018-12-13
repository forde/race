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
            </Wrapper>
        );
    }
}

export default Contestant;

const Wrapper = styled.div`
    position:relative;
    height: 20px;
    width: 20px;
    background: blue;
    margin-bottom: 5px;
    transition: left 0.1s linear
`