
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./mapPernambuco.css";


const MapPernambuco = () => {
    const centerPosition = [-8.0476, -34.877]; // Recife
    const positionSoftex = [-8.061597849781705, -34.871866735056514]; // Softex
    const positionRe9acao = [-8.06290485029528, -34.87227254855016]; // Re9ação
    const positionIFPE = [-8.059362317504664, -34.95059157738562]; // IFPE
    const positionUFPE = [-8.052801302215125, -34.949312113923206]; // UFPE
    const positionUNICAP = [-8.054215216829324, -34.887634009929116]; // UNICAP

  return (
    <section className="map-section">
      <h1>Encontre nossos parceiros</h1>
      <MapContainer
        center={centerPosition}
        zoom={7}
        scrollWheelZoom={false}
        className="map-container"
        attributionControl={true}  
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={positionSoftex}>
          <Popup>Softex Pernambuco</Popup>
        </Marker>

        <Marker position={positionRe9acao}>
          <Popup>Re9ação</Popup>
        </Marker>
        
        <Marker position={positionIFPE}>
          <Popup>IFPE</Popup>
        </Marker>
        
        <Marker position={positionUFPE}>
          <Popup>UFPE</Popup>
        </Marker>
        
        <Marker position={positionUNICAP}>
          <Popup>Unicap</Popup>
        </Marker>
      </MapContainer>
    </section>
  );
};

export default MapPernambuco;
