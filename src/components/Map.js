import React from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import Pin from '../components/Pin';

const TOKEN = process.env.NODE_ENV === 'development' ? process.env.REACT_APP_MAP_BOX_ACCESS_TOKEN : process.env.MAP_BOX_ACCESS_TOKEN;

class Map extends React.Component {
    
        state = {
            viewport: {
                width: '100%',
                height: '100vh',
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
                <div>
            <Marker latitude='35.335807' longitude='24.464627'>
                <Pin onClick={() => {
                        this.setState({
                            popup: geologicalWonders
                            
                        })
                    }} /> 
            </Marker> 
            <Marker latitude='35.205584'longitude='24.542791'>
                <Pin  geologicalWonders  />
            </Marker>
            
            <Marker latitude='35.264424'longitude='24.482962'>
                <Pin  geologicalWonders  />
            </Marker>
            </div>
            )
            
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