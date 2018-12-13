import React, { Component } from 'react';

import Game from './views/Game';
import Stats from './views/Stats';
import Contestants from './views/Contestants';
import Tabs from './components/Tabs';

class App extends Component {

    constructor() {
        super();

        this.state = {
            currentTab: 1,
        }
    }

    renderView() {
        switch(this.state.currentTab) {
            case 1: return <Game/>;
            case 2: return <Contestants />;
            case 3: return <Stats />;

            default: return <Game />;
        }
    }

    render() {
        const { currentTab } = this.state;

        return (
            <div className="App">

                <Tabs 
                    onTabChange={tab => this.setState({ currentTab: tab })} 
                    activeTab={currentTab} 
                />

                {this.renderView()}

            </div>
        );
    }
}

export default App;
