'use client'
import React from 'react'
import { Map, MapMarker } from 'react-kakao-maps-sdk'

interface KakaoMapProps {
  latitude: number,
  longitude: number,
  setCustomValue? : (id: string, value: number)=>void,  
}

const KakaoMap : React.FC<KakaoMapProps> = 
({
  latitude, 
  longitude, 
  setCustomValue,
}) => {
  const handleClick = (mouseEvent: kakao.maps.event.MouseEvent) => {
    console.log('[KakaoMap] mouseEvent', mouseEvent);

    setCustomValue!('latitude', mouseEvent.latLng.getLat());
    setCustomValue!('longitude', mouseEvent.latLng.getLng());
  }
  return (
    <Map
      onClick={(_t, mouseEvent)=>handleClick(mouseEvent)}
      center={{ lat: latitude, lng: longitude }}
      style={{ width: "100%", height: "360px" }}
    >
      <MapMarker position={{ lat: latitude, lng: longitude }}>
        
      </MapMarker>
    </Map>
  )
}

export default KakaoMap