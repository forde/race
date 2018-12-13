import React, { Component } from 'react';
import styled from 'styled-components';

import fb from './../firebase';

class Contestants extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            testValue: null,
            v: '',
        }
    }

    componentDidMount() {

        // get data on boot
        fb.dbRef.once('value').then(snapshot => {
            this.setState({
                testValue: snapshot.child('test').val()
            });
        });

        // listen for changes
        fb.dbRef.child('test').on('value', snapshot => {
            this.setState({
                testValue: snapshot.val() || null,
            });
        });
    }
  
    render() {
        const { v, testValue } = this.state;
        
        return (
            <Wrapper>
                <h1>Contestants</h1>

                <h2>The value in DB is: {testValue}</h2>
                <input value={v} onChange={e => this.setState({v: e.target.value})} />
                <button onClick={() => fb.setTestValue(v)} >Set in DB</button>

            </Wrapper>
        );
    }
}

export default Contestants;

const Wrapper = styled.div`
    position:relative;
`