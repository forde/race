import React, { Component } from 'react';
import styled from 'styled-components';

import Track from '../components/Track';

class Game extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {

        }
    }
  
    render() {
        return (
            <Wrapper>
                <Track contestants={[{a:1},{a:1},{a:1},{a:1},{a:1},{a:1}]}/>
            </Wrapper>
        );
    }
}

export default Game;

const Wrapper = styled.div`
    position:relative;
`