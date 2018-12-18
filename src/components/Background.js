import React from 'react';
import styled from 'styled-components';

import sideTrackBgd from '../images/side-track.png';
import stripesBgd from '../images/stripes.png';

export default props => {
    const { contestants } = props;
    return (
        <Wrapper>
            <Ground>
                <SideTrack top />
                <SideTrack bottom />
                <Tracks>
                    {contestants.map((c, i) => <Track key={i} height={100 / contestants.length} /> )}
                </Tracks>
            </Ground>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    height: 100vh;
    overflow:hidden;
`

const Ground = styled.div`
    background: #5E676E;
    height: 100vh;
    width: 4405px;
    position: relative;

    animation-name: track;
    animation-duration: 10s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    @keyframes track {
        0%   {transform: translateX(0)}
        100% {transform: translateX(-1762px)}
    }
`

const SideTrack = styled.div`
    height: 49px;
    width: 100%;
    position: absolute;
    top: ${props => props.top ? 0 : 'auto'};
    bottom: ${props => props.bottom ? 0 : 'auto'};
    left:0;
    background: url(${sideTrackBgd}) ${props => props.top ? 'top' : 'bottom'} left repeat-x;
    border-bottom: 4px solid #fff;
    ${props => props.bottom ? `border-bottom: none; border-top: 4px solid #fff;` : ``}
`

const Tracks = styled.div`
    display: flex;
    flex-direction: column;
    height: calc(100% - 98px);
    top: 49px;
    position: relative;
`
const Track = styled.div`
    height: ${props => props.height}%;
    background: url(${stripesBgd}) bottom left repeat-x;
    opacity: .5;
    &:last-child {
        background: transparent;
    }
`