import React, { Component } from 'react';
import styled from 'styled-components';

import Background from '../components/Background';
import fb from './../firebase';
import Contestant from './../components/Contestant';

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
                    name: 'Frank',
                    speed: baseSpeed,
                    position: 0,
                }, {
                    id: 2,
                    name: 'Frak',
                    speed: baseSpeed,
                    position: 0,
                }, {
                    id: 3,
                    name: 'Pepe',
                    speed: baseSpeed,
                    position: 0,
                }, {
                    id: 4,
                    name: 'Bob',
                    speed: baseSpeed,
                    position: 0,
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
        if (this.state.running === false) return;

        let { contestants } = this.state;

        contestants.map(contestant => {
            contestant.speed = Math.random() * (120 - 80) + 80
        });

        this.setState({
            contestants: contestants
        });
    }

    checkWinConditions() {
        this.state.contestants.map(contestant => {
            if (contestant.position >= 100) {
                let leaderboard = [...this.state.leaderboard];
                let contestants = this.state.contestants;

                let newContestants = contestants.filter(item => {
                    return item.id !== contestant.id
                });

                leaderboard.push(contestant);

                this.setState({
                    ...this.state, ...{
                        leaderboard: leaderboard,
                        contestants: newContestants
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
  
    render() {
        const { contestants, leaderboard } = this.state;
        return (
            <Wrapper>
                    
                {leaderboard.length === 0 && 
                    <React.Fragment>
                        <Background contestants={contestants} />
                        <Map>
                            {contestants.map((contestant, index) => {
                                return(
                                    <ContestantTrack key={ index } height={100 / contestants.length}>
                                        <Contestant contestant={ contestant } ></Contestant>
                                    </ContestantTrack>
                                );
                            })}
                        </Map>
                    </React.Fragment>
                }

                

                {leaderboard.length !== 0 && 
                    <Leaderboard>
                        { leaderboard.map((item, index) => {
                            return <div>#{ index + 1 } - { item.name }</div>
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
`

const Map = styled.div`
    display: flex;
    flex-direction: column;
    height: calc(100% - 98px);
    top: 49px;
    position: absolute;
    width:100%;
`

const Leaderboard = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
`

const ContestantTrack = styled.div`
    height: ${props => props.height}%;
    display: flex;
    align-items: center;
`