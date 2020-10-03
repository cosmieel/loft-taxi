import React from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/src/css/mapbox-gl.css'
import { connect } from 'react-redux'
import { fetchRouteRequest, getRoute } from '../../../modules/route/'
import { drawRoute } from './drawRoute'

mapboxgl.accessToken = 'pk.eyJ1IjoiY29zbWllZWwiLCJhIjoiY2tmNms4aDlnMHhiejJ5cDlhZ3IwdHo2ZiJ9.MUv3ZOQ4f8ovmVDjlBnTng'

class MapBlock extends React.Component {
    state = {
        lng: 30.3141,
        lat: 59.9386,
        zoom: 12
    }
    map = null
    mapContainerRef = React.createRef()
    

	componentDidMount() {
		this.map = new mapboxgl.Map({
			container: this.mapContainerRef.current,
			style: "mapbox://styles/mapbox/light-v10",
			center: [this.state.lng, this.state.lat],
			zoom: this.state.zoom
		});
	}

	componentDidUpdate(prevProps) {
		if (prevProps !== this.props) {
			const { routeCoords } = this.props;

			if (this.map.getLayer("route")) {
				this.map.flyTo({
					center: [this.state.lng, this.state.lat],
					zoom: this.state.zoom
				});
				this.map.removeLayer("route");
				this.map.removeSource("route");
			}
			if (routeCoords.length) {
				drawRoute(this.map, routeCoords);
			}
		}
	}

	render() {
		const style = {
			position: 'relative',
            top: 0,
            bottom: 0,
            width: '100%',
            height: 'calc(100vh - 78px)',
            minHeight: '500px',
		};

		return (
            <section>
                <div style={style} data-testid="MapBlock" className='mapContainer' ref={this.mapContainerRef} />
            </section>
		);
	}
}

const mapStateToProps = (state) => ({
    routeCoords: getRoute(state),
})

const mapDispatchToProps = { fetchRouteRequest }

export default connect(mapStateToProps, mapDispatchToProps)(MapBlock)