
import React from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";


function Map() {
  return (
    <section className="w-full h-96 my-16 rounded-xl overflow-hidden shadow-lg">
      <iframe
        title="Backroad Handwash Location"
        className="w-full h-full"
        frameBorder="0"
        style={{ border: 0 }}
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCblb9yA1YGhfkIP5dewop3jAJhbmPHqgA&q=13831 hwy 36 , Needville, TX, United States, 77461"
        allowFullScreen
      ></iframe>
    </section>
  );
}

export default Map;


