import React, { Component } from 'react';
import styled from 'styled-components';

class Tabs extends Component {

    onTabClick(tab) {
        this.props.onTabChange(tab.num);
    }

    render() {

        const  tabs = [
            { name: 'Game', num: 1 },
            { name: 'Participants', num: 2 },
            { name: 'Stats', num: 3 },
            { name : 'Map Selection', num: 4},
        ];

        const { activeTab } = this.props;

        return (
            <TabList>
                {tabs.map(tab => {
                    return(
                        <li key={tab.name}>
                            <button className={activeTab === tab.num ? 'active' : null}  onClick={() => this.onTabClick(tab)}>{tab.name}</button>
                        </li>
                    );
                })}
            </TabList>
        );
    }
}

export default Tabs;

const TabList = styled.ul`
    display: flex;
    margin: 0;
    padding:0;
    padding:20px;
    li {
        margin: 0 20px 0 0;
        padding:0;
        list-style: none;
        button {
            border: 1px solid #000;
            padding: 10px 20px;
            cursor:pointer;
            &.active {
                background: #000;
                color:#fff;
            }
        }
    }
`
