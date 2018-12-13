import React, { Component } from 'react';
import styled from 'styled-components';

import fb from './../firebase';
import Contestant from './../components/Contestant';

const baseSpeed = 10;

class Game extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            running: false,
            finished: false,
            winner: null,
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
                this.setState({
                    ...this.state, ... {
                        winner: contestant,
                        finished: true,
                        running: false
                    }
                })
            }
        });
    }
  
    render() {
        return (
            <Wrapper>
                <h1>Game</h1>
                
                <Map>
                    { this.state.contestants.map((contestant, index) => {
                        return <Contestant key={ index } contestant={ contestant } ></Contestant>
                    })}
                </Map>

                <Winner>Winner: { this.state.winner && this.state.winner.name }</Winner>
            </Wrapper>
        );
    }
}

export default Game;

const Wrapper = styled.div`
    position:relative;
`

const Map = styled.div`
    position: relative;
    background: orange;
    height: 100%;
    width: 100%;
`

const Winner = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
`