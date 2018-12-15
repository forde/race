import React, { Component } from 'react';
import styled from 'styled-components';

import summer from '../assets/images/summer-road.jpg';
import winter from '../assets/images/winter-road.jpg';
import fb from './../firebase';

class MapSelect extends Component {
    constructor(props){
        super(props);

        this.state = {
            maps: [
                { mapName: 'Summer', mapId: 1, mapSlug: 'summer', background: summer },
                { mapName: 'Winter', mapId: 2, mapSlug: 'winter', background: winter },
            ],
            selectedMap: null,
            val: '',
        };
    }

    componentDidMount(){
        // get data on boot
        fb.dbRef.once('value').then(snapshot =>{
            this.setState({
                selectedMap: snapshot.child('selectedMap').val()
            });
        });

        fb.dbRef.child('selectedMap').on('value', snapshot =>{
            this.setState({
                selectedMap: snapshot.val() || null,
            });
        });
    }

    render(){
        const { val, selectedMap } = this.state;

        return(
            <Maps>
            <CurrentMap>
                <h1>{ this.selectedMap }</h1>
            </CurrentMap>
            { this.state.maps.map(map => {
                return(
                        <MapImage style={{ backgroundImage: `url(${map.background})` }} key={map.mapId}>
                            <MapHover className="imageHover" onClick={()=> fb.selectMap(map.mapSlug)}>
                                <p className="hoverTitle">{map.mapName}</p>
                            </MapHover>
                        </MapImage>
                    )
                })
            }
            </Maps>
        )
    }
}

export default MapSelect;

const CurrentMap = styled.div`

`

const Maps = styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

const MapImage = styled.div`
    margin: 0 40px;
    width: 200px;
    height: 150px;
    background-size: cover;
    background-repeat: none;
`

const MapHover = styled.div`
    opacity: 0;
    cursor: pointer;
    position: relative;
    height: 100%;
    width: 100%;
    top: -15px;
    bottom: 0;
    left: 0;
    right: 0;
    background: grey;
    transition: opacity 0.4s ease;
    color: white;
    .hoverTitle{
        position: relative;
        top: 0;
        padding-top: 15px;
        padding-left: 10px;
    }
    &:hover{
        opacity: 1;
    }
`
