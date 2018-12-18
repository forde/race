import React, { Component } from 'react';
import styled from 'styled-components';
import johan from '../assets/runjohan.gif';
import eirik from '../assets/runeirik.gif';
import emil from '../assets/runemil.gif';
import fredrik from '../assets/runfredrik.gif';
import bjorn from '../assets/runbjorn.gif';
import jonas from '../assets/runjonas.gif';
import konrad from '../assets/runkonrad.gif';

class Game extends Component {

    constructor(props) {
        super(props);

        this.state = {
            contestants: [
                {
                    name: fredrik,
                }
            ]
        }
    }

    render() {
        console.log(this.state.contestants[0]);
        return (
            <Wrapper>
                <h1>Game</h1>
                <PlayerWrapper>
                    <div className="contestant" style={{backgroundImage: `url(${this.state.contestants[0].name})`}}></div>
                </PlayerWrapper>
            </Wrapper>
        );
    }
}

export default Game;

const PlayerWrapper = styled.div`
    margin-left: 80px;
    .contestant{
        width: 63px;
        height: 99px;
        background-size: contain;
        background-repeat: no-repeat;
        margin-bottom: 10px;
        z-index: 1;
    }
`

const Wrapper = styled.div`
    position:relative;
`
