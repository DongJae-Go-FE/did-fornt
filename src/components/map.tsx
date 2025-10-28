import { useCallback, useRef, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { debounce } from "lodash";
import Marker from "./marker";
import data from "../const/data";

import resionJson1 from "../assets/regions/region01.json";
import resionJson2 from "../assets/regions/region02.json";
import resionJson3 from "../assets/regions/region03.json";
import resionJson4 from "../assets/regions/region04.json";
import resionJson5 from "../assets/regions/region05.json";
import resionJson6 from "../assets/regions/region06.json";
import resionJson7 from "../assets/regions/region07.json";
import resionJson8 from "../assets/regions/region08.json";
import resionJson9 from "../assets/regions/region09.json";
import resionJson10 from "../assets/regions/region10.json";
import resionJson11 from "../assets/regions/region11.json";
import resionJson12 from "../assets/regions/region12.json";
import resionJson13 from "../assets/regions/region13.json";
import resionJson14 from "../assets/regions/region14.json";
import resionJson15 from "../assets/regions/region15.json";
import resionJson16 from "../assets/regions/region16.json";
import resionJson17 from "../assets/regions/region17.json";

const results: unknown[] = [
  resionJson1,
  resionJson2,
  resionJson3,
  resionJson4,
  resionJson5,
  resionJson6,
  resionJson7,
  resionJson8,
  resionJson9,
  resionJson10,
  resionJson11,
  resionJson12,
  resionJson13,
  resionJson14,
  resionJson15,
  resionJson16,
  resionJson17,
];

const regionColors = [
  "#FF6B9D",
  "#C44569",
  "#A55EEA",
  "#4B7BEC",
  "#45AAF2",
  "#26C6DA",
  "#20BF6B",
  "#26DE81",
  "#A5D6A7",
  "#FED330",
  "#F7B731",
  "#FA8231",
  "#FC5C65",
  "#EB3B5A",
  "#8854D0",
  "#778CA3",
  "#4B6584",
];

const mapId = "naver-map";

export type NaverMap = naver.maps.Map;

interface LineData {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  mx: number;
  my: number;
  pathLength: number;
}

// GeoJSON 타입 정의
interface GeoJSONFeature {
  geometry: {
    type: string;
    coordinates: number[][][] | number[][][][];
  };
  properties: {
    area?: string;
    area1?: string;
  };
}

interface GeoJSONData {
  features: GeoJSONFeature[];
}

function SvgOverlay({
  dioceseData,
  mapRef,
  shouldAnimate,
}: {
  dioceseData: typeof data;
  mapRef: React.RefObject<NaverMap | null>;
  shouldAnimate: boolean;
}) {
  const [lines, setLines] = useState<LineData[]>([]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    const updateLines = () => {
      if (!mapRef.current) return;

      const newLines: LineData[] = [];

      dioceseData.forEach((d) => {
        if (!d.latitude2 || !d.longitude2) return;

        try {
          const projection = mapRef.current!.getProjection();

          const start = projection.fromCoordToOffset(
            new window.naver.maps.LatLng(d.latitude2, d.longitude2)
          );
          const end = projection.fromCoordToOffset(
            new window.naver.maps.LatLng(d.latitude, d.longitude)
          );

          const midX = (start.x + end.x) / 2;
          const midY = (start.y + end.y) / 2;

          const dist1 = Math.abs(midX - start.x);
          const dist2 = Math.abs(midY - start.y);
          const dist3 = Math.abs(end.x - midX);
          const dist4 = Math.abs(end.y - midY);
          const totalLength = dist1 + dist2 + dist3 + dist4;

          newLines.push({
            x1: start.x,
            y1: start.y,
            x2: end.x,
            y2: end.y,
            mx: midX,
            my: midY,
            pathLength: totalLength,
          });
        } catch (error) {
          console.error("Error calculating line coordinates:", error);
        }
      });

      setLines(newLines);
    };

    updateLines();

    const listener = window.naver.maps.Event.addListener(
      map,
      "bounds_changed",
      updateLines
    );

    const handleResize = debounce(() => {
      updateLines();
    }, 300);

    window.addEventListener("resize", handleResize);

    return () => {
      window.naver.maps.Event.removeListener(listener);
      window.removeEventListener("resize", handleResize);
      handleResize.cancel();
    };
  }, [dioceseData, mapRef]);

  return (
    <>
      <style>
        {`
          @keyframes drawLine {
            from {
              stroke-dashoffset: var(--path-length);
            }
            to {
              stroke-dashoffset: 0;
            }
          }
          
          .animated-line {
            animation: drawLine 1s ease-in-out forwards;
          }

          .line-hidden {
            stroke-dashoffset: var(--path-length);
          }
        `}
      </style>
      <svg
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 1,
        }}
      >
        {lines.map((line, i) => (
          <path
            key={i}
            d={`M ${line.x1} ${line.y1} L ${line.mx} ${line.y1} L ${line.mx} ${line.y2} L ${line.x2} ${line.y2}`}
            stroke="#007aff"
            strokeWidth="2"
            fill="none"
            className={shouldAnimate ? "animated-line" : "line-hidden"}
            strokeDasharray={line.pathLength}
            strokeDashoffset={line.pathLength}
            style={
              {
                "--path-length": `${line.pathLength}px`,
              } as React.CSSProperties
            }
          />
        ))}
      </svg>
    </>
  );
}

export default function Map({
  onChangeValue,
}: {
  onChangeValue: (value: string) => void;
}) {
  const mapRef = useRef<NaverMap | null>(null);
  const polygonsRef = useRef<naver.maps.Polygon[]>([]);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapOpacity, setMapOpacity] = useState(0);
  const [shouldAnimateLines, setShouldAnimateLines] = useState(false);
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!mapContainerRef.current) return;

      const rect = mapContainerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const mapHeight = rect.height;

      const scrollProgress = Math.max(
        0,
        Math.min(1, (windowHeight - rect.top) / (windowHeight + mapHeight))
      );

      const opacity = Math.min(1, scrollProgress * 2);
      setMapOpacity(opacity);

      // 애니메이션이 아직 실행되지 않았을 때만 체크
      if (!animationTriggered) {
        const visibleHeight =
          Math.min(windowHeight, rect.bottom) - Math.max(0, rect.top);
        const visiblePercentage = visibleHeight / mapHeight;

        if (visiblePercentage >= 0.8) {
          setShouldAnimateLines(true);
          setAnimationTriggered(true); // 한 번 실행되면 다시 실행 안되도록
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [animationTriggered]);

  useEffect(() => {
    const handleResize = debounce(() => {
      const map = mapRef.current;
      if (!map) return;

      map.autoResize();

      const center = map.getCenter();
      map.setCenter(center);
    }, 300);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      handleResize.cancel();
    };
  }, []);

  const convertCoordinates = (coordinates: number[][][]) => {
    return coordinates.map((ring) =>
      ring.map((coord) => new window.naver.maps.LatLng(coord[1], coord[0]))
    );
  };

  const createPolygon = useCallback(
    (
      map: NaverMap,
      paths: naver.maps.LatLng[][],
      areaName: string,
      color: string
    ) => {
      const polygon = new window.naver.maps.Polygon({
        map: map,
        paths: paths,
        fillColor: color,
        fillOpacity: 0.3,
        strokeColor: color,
        strokeOpacity: 0.6,
        strokeWeight: 2,
        clickable: true,
      });

      window.naver.maps.Event.addListener(polygon, "click", () => {
        if (areaName) {
          onChangeValue(areaName);
        }
      });

      window.naver.maps.Event.addListener(polygon, "mouseover", () => {
        polygon.setOptions({
          fillOpacity: 0.6,
          strokeWeight: 3,
        } as naver.maps.PolygonOptions);
      });

      window.naver.maps.Event.addListener(polygon, "mouseout", () => {
        polygon.setOptions({
          fillOpacity: 0.3,
          strokeWeight: 2,
        } as naver.maps.PolygonOptions);
      });

      return polygon;
    },
    [onChangeValue]
  );

  const drawPolygons = useCallback(
    (map: NaverMap) => {
      polygonsRef.current.forEach((polygon) => polygon.setMap(null));
      polygonsRef.current = [];

      results.forEach((regionData, regionIndex: number) => {
        const geoData = regionData as GeoJSONData;
        if (!geoData?.features) return;

        const color = regionColors[regionIndex % regionColors.length];

        geoData.features.forEach((feature) => {
          const geometryType = feature.geometry?.type;
          const areaName =
            feature.properties?.area1 || feature.properties?.area;

          if (geometryType === "Polygon") {
            const paths = convertCoordinates(
              feature.geometry.coordinates as number[][][]
            );
            const polygon = createPolygon(map, paths, areaName || "", color);
            polygonsRef.current.push(polygon);
          } else if (geometryType === "MultiPolygon") {
            const multiCoords = feature.geometry.coordinates as number[][][][];
            multiCoords.forEach((polygonCoords) => {
              const paths = convertCoordinates(polygonCoords);
              const polygon = createPolygon(map, paths, areaName || "", color);
              polygonsRef.current.push(polygon);
            });
          }
        });
      });
    },
    [createPolygon]
  );

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
      draggable: false,
      zoomControl: false,
      logoControlOptions: {
        position: naver.maps.Position.BOTTOM_LEFT,
      },
    };

    const map = new window.naver.maps.Map(mapId, mapOptions);
    mapRef.current = map;

    drawPolygons(map);

    data.forEach((diocese) => {
      const markerContainer = document.createElement("div");
      markerContainer.className = "custom-marker";
      markerContainer.style.zIndex = "100";

      const root = createRoot(markerContainer);
      root.render(
        <Marker
          onClick={() => onChangeValue(diocese.name)}
          name={diocese.name}
        />
      );

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
        zIndex: 100,
      });
    });

    setMapLoaded(true);
  }, [drawPolygons, onChangeValue]);

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
    <div
      ref={mapContainerRef}
      style={{
        position: "relative",
        width: "100%",
        minHeight: "calc(100dvh - 208px)",
        opacity: mapOpacity,
        transition: "opacity 0.3s ease-out",
      }}
    >
      <div
        id={mapId}
        className="min-h-[calc(100dvh-208px)] w-full bg-gray-200"
      />
      {mapLoaded && (
        <SvgOverlay
          dioceseData={data}
          mapRef={mapRef}
          shouldAnimate={shouldAnimateLines}
        />
      )}
    </div>
  );
}
