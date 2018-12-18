import React, { Component } from 'react';
import styled from 'styled-components';

import Background from '../components/Background';
import fb from './../firebase';
import Contestant from './../components/Contestant';
import johan from '../assets/runjohan.gif';
import eirik from '../assets/runeirik.gif';
import emil from '../assets/runemil.gif';
import fredrik from '../assets/runfredrik.gif';
import bjorn from '../assets/runbjorn.gif';
import jonas from '../assets/runjonas.gif';
import konrad from '../assets/runkonrad.gif';
import Player from '../components/Player';

const baseSpeed = 10;

class Game extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            running: false,
            finished: false,
            leaderboard: [],
            contestants: [
                {
                    id: 1,
                    name: 'fredrik',
                    image: fredrik,
                    speed: baseSpeed,
                    position: 0,
                    bitmoji: 'https://render.bitstrips.com/v2/cpanel/6972338-318685307_3-s4-v1.png?transparent=1&palette=1',
                    colors: {
                        jacketColor: this.randomColor() || '#00ADEE',
                        snickerColor: this.randomColor() || '#00ADEE', 
                        pantsColor: this.randomColor() || '#EC1D24',
                        tShirtColor: this.randomColor() || '#fff',
                    }
                }, {
                    id: 2,
                    name: 'johan',
                    image: johan,
                    speed: baseSpeed,
                    position: 0,
                    bitmoji: 'https://render.bitstrips.com/v2/cpanel/6972338-318685307_3-s4-v1.png?transparent=1&palette=1',
                    colors: {
                        jacketColor: this.randomColor() || '#00ADEE',
                        snickerColor: this.randomColor() || '#00ADEE', 
                        pantsColor: this.randomColor() || '#EC1D24',
                        tShirtColor: this.randomColor() || '#fff',
                    }
                }, {
                    id: 3,
                    name: 'emil',
                    image: emil,
                    speed: baseSpeed,
                    position: 0,
                    bitmoji: 'https://render.bitstrips.com/v2/cpanel/6972338-318685307_3-s4-v1.png?transparent=1&palette=1',
                    colors: {
                        jacketColor: this.randomColor() || '#00ADEE',
                        snickerColor: this.randomColor() || '#00ADEE', 
                        pantsColor: this.randomColor() || '#EC1D24',
                        tShirtColor: this.randomColor() || '#fff',
                    }
                }, {
                    id: 4,
                    name: 'eirik',
                    image: eirik,
                    speed: baseSpeed,
                    position: 0,
                    bitmoji: 'https://render.bitstrips.com/v2/cpanel/6972338-318685307_3-s4-v1.png?transparent=1&palette=1',
                    colors: {
                        jacketColor: this.randomColor() || '#00ADEE',
                        snickerColor: this.randomColor() || '#00ADEE', 
                        pantsColor: this.randomColor() || '#EC1D24',
                        tShirtColor: this.randomColor() || '#fff',
                    }
                },
                {
                    id: 5,
                    name: 'bjorn',
                    image: bjorn,
                    speed: baseSpeed,
                    position: 0,
                    bitmoji: 'https://render.bitstrips.com/v2/cpanel/6972338-318685307_3-s4-v1.png?transparent=1&palette=1',
                    colors: {
                        jacketColor: this.randomColor() || '#00ADEE',
                        snickerColor: this.randomColor() || '#00ADEE', 
                        pantsColor: this.randomColor() || '#EC1D24',
                        tShirtColor: this.randomColor() || '#fff',
                    }
                }, {
                    id: 6,
                    name: 'jonas',
                    image: jonas,
                    speed: baseSpeed,
                    position: 0,
                    bitmoji: 'https://render.bitstrips.com/v2/cpanel/6972338-318685307_3-s4-v1.png?transparent=1&palette=1',
                    colors: {
                        jacketColor: this.randomColor() || '#00ADEE',
                        snickerColor: this.randomColor() || '#00ADEE', 
                        pantsColor: this.randomColor() || '#EC1D24',
                        tShirtColor: this.randomColor() || '#fff',
                    }
                }, {
                    id: 7,
                    name: 'konrad',
                    image: konrad,
                    speed: baseSpeed,
                    position: 0,
                    bitmoji: 'https://render.bitstrips.com/v2/cpanel/6972338-318685307_3-s4-v1.png?transparent=1&palette=1',
                    colors: {
                        jacketColor: this.randomColor() || '#00ADEE',
                        snickerColor: this.randomColor() || '#00ADEE', 
                        pantsColor: this.randomColor() || '#EC1D24',
                        tShirtColor: this.randomColor() || '#fff',
                    }
                }, {
                    id: 8,
                    name: 'emil',
                    image: emil,
                    speed: baseSpeed,
                    position: 0,
                    bitmoji: 'https://render.bitstrips.com/v2/cpanel/6972338-318685307_3-s4-v1.png?transparent=1&palette=1',
                    colors: {
                        jacketColor: this.randomColor() || '#00ADEE',
                        snickerColor: this.randomColor() || '#00ADEE', 
                        pantsColor: this.randomColor() || '#EC1D24',
                        tShirtColor: this.randomColor() || '#fff',
                    }
                }, {
                    id: 9,
                    name: 'eirik',
                    image: eirik,
                    speed: baseSpeed,
                    position: 0,
                    bitmoji: 'https://render.bitstrips.com/v2/cpanel/6972338-318685307_3-s4-v1.png?transparent=1&palette=1',
                    colors: {
                        jacketColor: this.randomColor() || '#00ADEE',
                        snickerColor: this.randomColor() || '#00ADEE', 
                        pantsColor: this.randomColor() || '#EC1D24',
                        tShirtColor: this.randomColor() || '#fff',
                    }
                }, {
                    id: 10,
                    name: 'bjorn',
                    image: bjorn,
                    speed: baseSpeed,
                    position: 0,
                    bitmoji: 'https://render.bitstrips.com/v2/cpanel/6972338-318685307_3-s4-v1.png?transparent=1&palette=1',
                    colors: {
                        jacketColor: this.randomColor() || '#00ADEE',
                        snickerColor: this.randomColor() || '#00ADEE', 
                        pantsColor: this.randomColor() || '#EC1D24',
                        tShirtColor: this.randomColor() || '#fff',
                    }
                }, {
                    id: 11,
                    name: 'jonas',
                    image: jonas,
                    speed: baseSpeed,
                    position: 0,
                    bitmoji: 'https://render.bitstrips.com/v2/cpanel/6972338-318685307_3-s4-v1.png?transparent=1&palette=1',
                    colors: {
                        jacketColor: this.randomColor() || '#00ADEE',
                        snickerColor: this.randomColor() || '#00ADEE', 
                        pantsColor: this.randomColor() || '#EC1D24',
                        tShirtColor: this.randomColor() || '#fff',
                    }
                }, {
                    id: 12,
                    name: 'konrad',
                    image: konrad,
                    speed: baseSpeed,
                    position: 0,
                    bitmoji: 'https://render.bitstrips.com/v2/cpanel/6972338-318685307_3-s4-v1.png?transparent=1&palette=1',
                    colors: {
                        jacketColor: this.randomColor() || '#00ADEE',
                        snickerColor: this.randomColor() || '#00ADEE', 
                        pantsColor: this.randomColor() || '#EC1D24',
                        tShirtColor: this.randomColor() || '#fff',
                    }
                }, {
                    id: 13,
                    name: 'eirik',
                    image: eirik,
                    speed: baseSpeed,
                    position: 0,
                    bitmoji: 'https://render.bitstrips.com/v2/cpanel/6972338-318685307_3-s4-v1.png?transparent=1&palette=1',
                    colors: {
                        jacketColor: this.randomColor() || '#00ADEE',
                        snickerColor: this.randomColor() || '#00ADEE', 
                        pantsColor: this.randomColor() || '#EC1D24',
                        tShirtColor: this.randomColor() || '#fff',
                    }
                }, {
                    id: 14,
                    name: 'bjorn',
                    image: bjorn,
                    speed: baseSpeed,
                    position: 0,
                    bitmoji: 'https://render.bitstrips.com/v2/cpanel/6972338-318685307_3-s4-v1.png?transparent=1&palette=1',
                    colors: {
                        jacketColor: this.randomColor() || '#00ADEE',
                        snickerColor: this.randomColor() || '#00ADEE', 
                        pantsColor: this.randomColor() || '#EC1D24',
                        tShirtColor: this.randomColor() || '#fff',
                    }
                }, {
                    id: 15,
                    name: 'jonas',
                    image: jonas,
                    speed: baseSpeed,
                    position: 0,
                    bitmoji: 'https://render.bitstrips.com/v2/cpanel/6972338-318685307_3-s4-v1.png?transparent=1&palette=1',
                    colors: {
                        jacketColor: this.randomColor() || '#00ADEE',
                        snickerColor: this.randomColor() || '#00ADEE', 
                        pantsColor: this.randomColor() || '#EC1D24',
                        tShirtColor: this.randomColor() || '#fff',
                    }
                }, {
                    id: 16,
                    name: 'konrad',
                    image: konrad,
                    speed: baseSpeed,
                    position: 0,
                    bitmoji: 'https://render.bitstrips.com/v2/cpanel/6972338-318685307_3-s4-v1.png?transparent=1&palette=1',
                    colors: {
                        jacketColor: this.randomColor() || '#00ADEE',
                        snickerColor: this.randomColor() || '#00ADEE', 
                        pantsColor: this.randomColor() || '#EC1D24',
                        tShirtColor: this.randomColor() || '#fff',
                    }
                },
            ]
        }
    }

    componentDidMount() {
        var self = this;

        setInterval(() => {
            self.setRandomSpeedOnPlayers();
        }, 1000);

        this.startGame();
    }

    startGame() {
        var self = this;

        this.state.running = true;

        setInterval(() => {
            if (self.state.running === false) return;

            let { contestants } = self.state;

            contestants.map(contestant => {
                contestant.position = contestant.position + (1  * (contestant.speed / 100)) / 7;
            });

            self.setState({
                contestants: contestants
            });

            self.checkWinConditions();

        }, 50);
    }

    setRandomSpeedOnPlayers() {
        if (!this.state.running) return;

        this.setState({
            contestants: this.state.contestants.map(contestant => ({ 
                ...contestant, 
                speed:  Math.random() * (130 - 60) + 60 
            }))
        });
    }

    checkWinConditions() {
        this.state.contestants.map(contestant => {
            var leaderboard = [...this.state.leaderboard];
            if (contestant.position >= 100 && leaderboard.filter(c => c.id === contestant.id).length === 0) {
               
                let contestants = this.state.contestants;

                /*let newContestants = contestants.filter(item => {
                    return item.id !== contestant.id
                });*/

                leaderboard.push(contestant);

                this.setState({
                    ...this.state, ...{
                        leaderboard: leaderboard,
                        //contestants: newContestants
                    }
                });

                if (this.state.contestants.length === 0) {
                    this.setState({
                        ...this.state, ...{
                            running: false,
                            finished: true
                        }
                    })
                }
            }
        });
    }

    randomColor() {
        const colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
          '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
          
        return colorArray[Math.floor(Math.random() * colorArray.length)];
    }
    // 318685307_3-s4-v1
  
    render() {
        const { contestants, leaderboard } = this.state;
        return (
            <Wrapper>
                    
                {//leaderboard.length === 0 && 
                    <React.Fragment>
                        <Background contestants={contestants} />
                        <Map>
                            {contestants.map((contestant, index) => {
                                return(
                                    <ContestantTrack key={ index } height={100 / contestants.length}>
                                        {/*<Contestant contestant={ contestant } >
                                            <div style={{backgroundImage: `url(${contestant.image})`}}></div>
                                        </Contestant>*/}
                                        <Player 
                                            animationType="linear" 
                                            bitmoji={contestant.bitmoji}
                                            {...contestant.colors}
                                            left={contestant.position + '%'}
                                        />
                                    </ContestantTrack>
                                );
                            })}
                        </Map>
                    </React.Fragment>
                }

                

                {leaderboard.length !== 0 && 
                    <Leaderboard>
                        { leaderboard.map((item, index) => {
                            return <div key={ index }>{ index + 1 } - { item.name }</div>
                        })}
                    </Leaderboard>
                }
            </Wrapper>
        );
    }
}

export default Game;

const Wrapper = styled.div`
    position:relative;
    height: 100vh;
    overflow:hidden;
`

const Map = styled.div`
    display: flex;
    flex-direction: column;
    height: calc(100% - 98px);
    top: 49px;
    position: absolute;
    width:100%;
    overflow:hidden;
`

const Leaderboard = styled.div`
    position: absolute;
    top:50%;
    left:50%;
    width:400px;
    height:400px;
    transform: translateX(-50%) translateY(-50%);
    z-index: 100;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    div {
        width:200px;
        font-size:30px;
    }
`

const ContestantTrack = styled.div`
    height: ${props => props.height}%;
    display: flex;
    align-items: center;
    position:relative;
`