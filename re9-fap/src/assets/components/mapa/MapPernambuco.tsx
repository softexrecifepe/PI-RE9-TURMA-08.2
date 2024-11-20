
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
      <div className="map-wrapper">
        {/* Mapa à esquerda */}
        <div className="map-container">
          <MapContainer
            center={centerPosition}
            zoom={7}
            scrollWheelZoom={false}
            className="leaflet-map"
            attributionControl={true}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
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
        </div>

        {/* Texto explicativo à direita */}
        <div className="map-text">
          <h2>Como funciona?</h2>
          <p>
            Quando você cadastra sua empresa, ela automaticamente será exibida 
            no mapa, permitindo que outras pessoas a encontrem com facilidade. 
            Essa funcionalidade ajuda a conectar empresas locais e a promover 
            parcerias estratégicas entre instituições.
          </p>
          <p>
            Cadastre-se agora mesmo e faça parte da nossa rede de parceiros em Pernambuco!
          </p>
        </div>
      </div>
    </section>
  );
};

export default MapPernambuco;

