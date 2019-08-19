import React from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import Pin from '../components/Pin';

const TOKEN = process.env.NODE_ENV === 'development' ? process.env.REACT_APP_MAP_BOX_ACCESS_TOKEN : process.env.MAP_BOX_ACCESS_TOKEN;

class Map extends React.Component {
    
        state = {
            viewport: {
                width: 400,
                height: 400,
                latitude: 35.335807,
                longitude: 24.464627,
                zoom: 8
            },

            popup: null

        
        };



        renderMarkers(){
            return
            const geologicalWonders = {name: '', description:'', elevation:'' }


            return(
            <Marker latitude='35.335807' longitude='24.464627'>
                <Pin onClick={() => {
                        this.setState({
                            popup: geologicalWonders
                            
                        })
                    }} /> 
            </Marker> )
        }
        
    

    render() {
        return (
            <ReactMapGL
            mapboxApiAccessToken={TOKEN}
            {...this.state.viewport}
            onViewportChange={(viewport) => this.setState({ viewport })}>
            
            </ReactMapGL>

        )
    }
}

export default Map;