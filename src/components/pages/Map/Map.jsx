import React, { useRef, useEffect } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/src/css/mapbox-gl.css'
import { useStyles } from './mapStyles'

mapboxgl.accessToken = 'pk.eyJ1IjoiY29zbWllZWwiLCJhIjoiY2tmNms4aDlnMHhiejJ5cDlhZ3IwdHo2ZiJ9.MUv3ZOQ4f8ovmVDjlBnTng';

export const Map = () => {
    const classes = useStyles();
    const mapContainerRef = useRef(null);

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/light-v10',
            center: [30.3141, 59.9386],
            zoom: 12,
        });

        return () => map.remove();
    }, []); 

    return (
        <section>
            <div data-testid="Map" className={classes.map} ref={mapContainerRef} />
        </section>
    );
};