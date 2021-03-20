import React, { useContext, useEffect, useState,useRef } from 'react';
import './css/all.css';
import { UserContext } from '../../App'
import SearchResult from './SearchResult';
import ReactDOM from 'react-dom'
import { useParams } from "react-router-dom";
import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken ='pk.eyJ1IjoicGl5YXMiLCJhIjoiY2ttaDZldXRvMDRiejJ2bnZ0NTE2eDNzZCJ9.E0KNGKmFzG6LIiP6GLdIWw';


const Search = () => {
    const [mapRender, setmapRender] = useState({
        lng:10,
        lat:80,
        zoom:4
    })
     
    const [riderPlace, setriderPlace] = useContext(UserContext);
    const { id } = useParams(); 
    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setriderPlace({ ...riderPlace, [name]: value });
    }

    const onClickHandler = (e) => {
        const element = <SearchResult place={riderPlace} id={id} ></SearchResult>
        ReactDOM.hydrate(element, document.getElementById('domChange'))

    }

    const mapContainer = useRef();
    useEffect(() => {
        
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [mapRender.lng, mapRender.lat],
            zoom: mapRender.zoom
        })
    }, [])
    return (

            <div className="main">
                <div className="row main-row w-75 m-auto">
                    <div id="domChange" className="col-md-5  domChange">
                    <form class="form-container" action="" method="post">
                            <div>
                                <label htmlFor="">Pick from</label>
                                <input class="form-control" onChange={onChangeHandler} name="pickfrom" type="text" />
                            </div>
                            <div className="mt-2">
                                <label htmlFor="">Pick to</label>
                                <input class="form-control" onChange={onChangeHandler} name="pickto" type="text" />
                            </div>
                            <div className="mt-2">
                                <button onClick={onClickHandler} to="/result" className="btn form-control" style={{ backgroundColor: "tomato", color: "white" }}>Search</button>
                            </div>

                        </form>
                    </div>
                    <div className="col-md-7">
                    <div>
                    <div className="map-container" ref={mapContainer} style={{width:"100%",height:"100%"}}/>
                    </div>
                    </div>
                </div>
            </div>
        
    );
};

export default Search;