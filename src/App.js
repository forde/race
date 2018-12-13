import React, { Component } from 'react';

import fb from './firebase';

class App extends Component {

    constructor() {
        super();

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
        const { testValue, v } = this.state;

        return (
            <div className="App">
                <h2>The value in DB is: {testValue}</h2>
                <input value={v} onChange={e => this.setState({v: e.target.value})} />
                <button onClick={() => fb.setTestValue(v)} >Set in DB</button>
            </div>
        );
    }
}

export default App;
