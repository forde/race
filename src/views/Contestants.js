import React, { Component } from 'react';
import styled from 'styled-components';

import fb from './../firebase';

class Contestants extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            contestants: [],
            v: '',
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
  
    render() {
        const { v } = this.state;
        
        return (
            <Wrapper>
                <h1>Contestants</h1>

                <input value={v} onChange={e => this.setState({v: e.target.value})} />
                <button onClick={this.addContestant} >Add contestant</button>

            </Wrapper>
        );
    }
}

export default Contestants;

const Wrapper = styled.div`
    position:relative;
`