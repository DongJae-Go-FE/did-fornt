import { useCallback, useRef, useEffect } from "react";
import { createRoot } from "react-dom/client";
import Marker from "./marker";
import data from "../../public/data";

const mapId = "naver-map";

export type NaverMap = naver.maps.Map;

export default function Map({
  onChangeValue,
}: {
  onChangeValue: (value: string) => void;
}) {
  const mapRef = useRef<NaverMap>(null);

  const initializeMap = useCallback(() => {
    if (!window.naver || !window.naver.maps) return;

    const mapOptions = {
      center: new window.naver.maps.LatLng(35.886, 127.6),
      zoom: 7,
      scaleControl: true,
      mapDataControl: true,
      scrollWheel: false,
      pinchZoom: false,
      disableDoubleClickZoom: true,
      disableDoubleTapZoom: true,
      zoomControl: false,
      logoControlOptions: {
        position: naver.maps.Position.BOTTOM_LEFT,
      },
    };

    const map = new window.naver.maps.Map(mapId, mapOptions);
    mapRef.current = map;

    data.forEach((diocese) => {
      const markerContainer = document.createElement("div");
      markerContainer.className = "custom-marker";

      const root = createRoot(markerContainer);
      root.render(<Marker onClick={() => onChangeValue(diocese.name)} />);

      new window.naver.maps.Marker({
        position: new window.naver.maps.LatLng(
          diocese.latitude,
          diocese.longitude
        ),
        map,
        icon: {
          anchor: new naver.maps.Point(15, 30),
          content: markerContainer,
        },
      });
    });
  }, [onChangeValue]);

  useEffect(() => {
    if (window.naver && window.naver.maps) {
      initializeMap();
      return;
    }

    const script = document.createElement("script");
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${
      import.meta.env.VITE_NAVER_CLIENT_ID
    }&submodules=geocoder`;
    script.async = true;
    script.onload = initializeMap;

    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [initializeMap]);

  return (
    <div id={mapId} className="min-h-[calc(100dvh-208px)] w-full bg-gray-200" />
  );
}
