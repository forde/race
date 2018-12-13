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

        }
    }

    render() {
        return (
            <Wrapper>
                <h1>Game</h1>
                <PlayerWrapper>
                    <div className="contestantJohan"></div>
                    <div className="contestantEirik"></div>
                    <div className="contestantEmil"></div>
                    <div className="contestantFredrik"></div>
                    <div className="contestantBjorn"></div>
                    <div className="contestantJonas"></div>
                    <div className="contestantKonrad"></div>
                </PlayerWrapper>
            </Wrapper>
        );
    }
}

export default Game;

const PlayerWrapper = styled.div`
    margin-left: 80px;
    .contestantJohan{
        background-image: url(${johan});
        width: 63px;
        height: 99px;
        background-size: contain;
        background-repeat: no-repeat;
        margin-bottom: 10px;
        z-index: 1;
    }
    .contestantEirik{
        background-image: url(${eirik});
        width: 63px;
        height: 99px;
        background-size: contain;
        background-repeat: no-repeat;
        margin-bottom: 10px;
        z-index: 1;
    }
    .contestantEmil{
        background-image: url(${emil});
        width: 63px;
        height: 99px;
        background-size: contain;
        background-repeat: no-repeat;
        margin-bottom: 10px;
        z-index: 1;
    }
    .contestantFredrik{
        background-image: url(${fredrik});
        width: 63px;
        height: 99px;
        background-size: contain;
        background-repeat: no-repeat;
        margin-bottom: 10px;
        z-index: 1;
    }
    .contestantBjorn{
        background-image: url(${bjorn});
        width: 63px;
        height: 99px;
        background-size: contain;
        background-repeat: no-repeat;
        margin-bottom: 10px;
        z-index: 1;
    }
    .contestantJonas{
        background-image: url(${jonas});
        width: 63px;
        height: 99px;
        background-size: contain;
        background-repeat: no-repeat;
        margin-bottom: 10px;
        z-index: 1;
    }
    .contestantKonrad{
        background-image: url(${konrad});
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
