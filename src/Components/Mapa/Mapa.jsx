import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { points } from "../../Data/points";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

const Mapa = () => {
  const position = [-15.904936041982092, -43.9479230761946];

  return (
    <MapContainer
      center={position}
      zoom={5}
      scrollWheelZoom={false}
      style={{ width: "40vw", height: "50vh", borderRadius: "5px" }}
    >
      <TileLayer
        url="https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=XC6DTHqhEbgelbzC5Ppq"
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />
      {points.map((point) => {
        return (
          <Marker position={point.position} key={point.popup}>
            <Popup>{point.popup}</Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default Mapa;
