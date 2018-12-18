import React, { Component } from 'react';
import styled from 'styled-components';

import Body from '../images/Body';

class Player extends Component {
    constructor() {
        super();

        this.state = {
            height: 0
        }

        // 6972338
        // https://render.bitstrips.com/v2/cpanel/6972338-318685307_3-s4-v1.png?transparent=1&palette=1

    }

    componentDidMount() {
        this.setState({ height: this.refs.player.getBoundingClientRect().height });
    }

    render() {
        const { animationType, jacketColor, snickerColor, pantsColor, tShirtColor, left, bitmoji } = this.props;
        return (
            <div ref="player" style={{height: '100%', position: 'relative', left: left || '0'}}>
                <PlayerWrapper  className="player" height={this.state.height} >
                    <Head height={this.state.height} >
                        <img src={bitmoji} />
                    </Head>
                    <Body 
                        animationType={animationType} 
                        jacketColor={jacketColor} 
                        snickerColor={snickerColor} 
                        pantsColor={pantsColor} 
                        tShirtColor={tShirtColor}
                    />
                </PlayerWrapper>
            </div>
        );
    }
}

export default Player;

const PlayerWrapper = styled.div`
    height: 100%;
    position:relative;

    .player-body {
        border: 1px solid blue;
        height: 100%;
        width: ${props => (props.height/100)*69}px;
        position:relative;
        svg {
            position:absolute;
            height: ${props => props.height}px;
        }
    }
`

const Head = styled.div`
    position:absolute;
    z-index:10;
    animation: runHead .25s infinite alternate;
    will-change: transform;
    backface-visibility: hidden;
    perspective: 1000;
    //height: ${props => props.height / 1.6}px;
    width: 120%;
    top: -12%;
    left:-17%;
    @keyframes runHead {
        0%   { transform: rotate(-10deg) translate(${props => props.height / 12}px, 0px); }
        100% { transform: rotate(0deg) translate(${props => props.height / 12}px, 0px); }
    }
    img {
        max-width: 100%;
        max-height:100%;
    }
`