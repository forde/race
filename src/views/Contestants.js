import React, { Component } from 'react';
import styled from 'styled-components';

import fb from './../firebase';
import Player from '../components/Player';

class Contestants extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            contestants: [],
        }
    }

    componentDidMount() {

        // get data on boot
        fb.dbRef.child('contestants').once('value').then(snapshot => {
            console.log(snapshot.val());
        });

        // listen for changes
        /*fb.dbRef.child('test').on('value', snapshot => {
            this.setState({
                testValue: snapshot.val() || null,
            });
        });*/
    }

    addContestant() {
        const { v } = this.state;
        fb.addContestant({

        });
    }

    onInputChange(e, key) {

    }
  
    render() {
        
        return (
            <Wrapper>
                <PlayerEditor>
                    <input value="" placeholder="name" onChange={e => this.onInputChange(e, 'name')} />
                </PlayerEditor>
            </Wrapper>
        );
    }
}

export default Contestants;

const Wrapper = styled.div`
    position:relative;
    display: flex;
    padding:100px 20px 20px 20px;
`

const PlayerEditor = styled.div`
    border: 1px solid #ccc;
    padding: 20px;
    width:100%;
`
