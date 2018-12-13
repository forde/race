import React, { Component } from 'react';
import styled from 'styled-components';

class Game extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {

        }
    }
  
    render() {
        return (
            <Wrapper>
                <h1>Game</h1>
            </Wrapper>
        );
    }
}

export default Game;

const Wrapper = styled.div`
    position:relative;
`