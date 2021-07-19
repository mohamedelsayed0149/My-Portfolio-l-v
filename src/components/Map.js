import React from 'react';
import styled from 'styled-components';
import MapImg from '../assets/images/map.png';
import PText from './PText';

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    right: 10%;
    bottom: 10%;
    padding: 2rem;
    background: var(--deep-dark);
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;

export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">Here is me</h3>
          <PText>My Hood, Alex, Egypt</PText>
          <a
            className="map__card__link"
            href="https://www.google.com/maps/place/Khalel+Khaiat/@31.2239069,29.9490283,18z/data=!4m13!1m7!3m6!1s0x14f5c4c3b4b74fbb:0x785607b81c105bf2!2sKafr+Abdou,+Mustafa+Kamel+WA+Bolkli,+Sidi+Gaber,+Alexandria+Governorate!3b1!8m2!3d31.2268532!4d29.9517366!3m4!1s0x14f5c4ea05268e1f:0x4c95351dbfd9ebbe!8m2!3d31.2241788!4d29.9502625"
            target="_blank"
            rel="noreferrer"
          >
            Open in google map
          </a>
        </div>
      </div>
      {/* <img src={MapImg} alt="Map" /> */}
    </MapStyles>
  );
}
