// import mapboxgl from 'mapbox-gl'
import React, { useEffect, useRef } from 'react';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import mapboxgl from 'mapbox-gl'
const Raf = () => {

    mapboxgl.accessToken =
        'pk.eyJ1IjoicGl5YXMiLCJhIjoiY2ttaDZldXRvMDRiejJ2bnZ0NTE2eDNzZCJ9.E0KNGKmFzG6LIiP6GLdIWw';
    const mapContainer = useRef()
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
        <div style={{backgroundColor:"#75CFF0",minHeight:"700px"}}>
            <div>
                <div className="map-div" ref={mapContainer} style={{ width: "100%", height: "100%" }} />
            </div>
        </div>
    );
};

export default Raf;