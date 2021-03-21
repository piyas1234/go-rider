import React, { useContext, useEffect, useState, useRef } from 'react';
import './css/all.css';
import { UserContext } from '../../App'
import SearchResult from './SearchResult';
import ReactDOM from 'react-dom'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import mapboxgl from 'mapbox-gl'
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
mapboxgl.accessToken = 'pk.eyJ1IjoicGl5YXMiLCJhIjoiY2ttaDZldXRvMDRiejJ2bnZ0NTE2eDNzZCJ9.E0KNGKmFzG6LIiP6GLdIWw';


const Search = () => {
    const mapContainer = useRef()
    const [errMsg, seterrMsg] = useState("")
    const [riderPlace, setriderPlace] = useContext(UserContext);
    const { id } = useParams();
    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setriderPlace({ ...riderPlace, [name]: value });
    }

    const onClickHandler = (e) => {
        e.preventDefault();
        const { pickfrom, pickto } = riderPlace;
        console.log(pickfrom)
        if (pickfrom !== undefined && pickto !== undefined) {
            const element = <SearchResult place={riderPlace} id={id} ></SearchResult>
            ReactDOM.hydrate(element, document.getElementById('domChange'))

        } else {
            const msg = "please Fill All the fields!!!";
            seterrMsg(msg)
        }

    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
            enableHighAccuracy: true
        })

        function successLocation(position) {
            setupMap([position.coords.longitude, position.coords.latitude])
        }

        function errorLocation() {
            setupMap([-2.24, 53.48])
        }


        function setupMap(center) {
            const map = new mapboxgl.Map({
                container: mapContainer.current,
                style: "mapbox://styles/mapbox/streets-v11",
                center: center,
                zoom: 15
            })

            const nav = new mapboxgl.NavigationControl()
            map.addControl(nav)

            var directions = new MapboxDirections({
                accessToken: mapboxgl.accessToken
            })
            console.log(directions)
            map.addControl(directions, "top-left")
        }
    }, [])

    return (

        <div className="main">
            <div className="row main-row w-75 m-auto">
                <div id="domChange" className="col-md-5  domChange">
                    <form class="form-container" action="" method="post">
                        <Link className="btn btn-primary card text-primary mb-2" to="/map" > go to Real Map</Link>
                        {errMsg && <div class="alert alert-warning alert-dismissible fade show" role="alert">
                            <strong>{errMsg}</strong>
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>}
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

                        <div className="map-container" ref={mapContainer} style={{ width: "100%", height: "100%" }} />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Search;