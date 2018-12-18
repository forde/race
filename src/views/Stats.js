import React, { Component } from 'react';
import styled from 'styled-components';

class Stats extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {

        }
    }
  
    render() {
        return (
            <Wrapper>
                <h1>Stats</h1>
            </Wrapper>
        );
    }
}

export default Stats;

const Wrapper = styled.div`
    position:relative;
`