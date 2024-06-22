import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { scaleQuantile } from 'd3-scale';

const INDIA_TOPO_JSON = require('../india.topo.json');

const PROJECTION_CONFIG = {
  scale: 350,
  center: [78.9629, 22.5937] // always in [East Longitude, North Latitude]
};

const COLOR_RANGE = [
  '#A020F0',
  '#a01ff0c2',
];

const DEFAULT_COLOR = '#EEE';

const getRandomInt = () => {
  return Math.floor(Math.random() * 100);
};

const geographyStyle = {
  default: {
    outline: 'none'
  },
  hover: {
    fill: '#A020F0',
    transition: 'all 250ms',
    outline: '#fff'
  },
  pressed: {
    outline: 'none'
  }
};

const getHeatMapData = () => {
  return [
    { id: 'AP', state: 'Andhra Pradesh', value: getRandomInt() },
    { id: 'AR', state: 'Arunachal Pradesh', value: getRandomInt() },
    { id: 'JK', state: 'Jammu and Kashmir', value: 25 },
    { id: 'UP', state: 'Uttar Pradesh', value: 15 },
    // Add more state data here
  ];
};

function Indiamapchart() {
  const [data, setData] = useState(getHeatMapData());
  const [tooltipContent, setTooltipContent] = useState('');

  const colorScale = scaleQuantile()
    .domain(data.map(d => d.value))
    .range(COLOR_RANGE);

  const onMouseEnter = (geo, current = { value: 'NA' }) => {
    const stateData = data.find(s => s.id === geo.id);
    setTooltipContent(stateData ? `${stateData.state}: ${stateData.value}` : '');
  };

  const onMouseLeave = () => {
    setTooltipContent('');
  };

  return (
    <>
      <div className="full-width-height container">
        <ComposableMap
          projectionConfig={PROJECTION_CONFIG}
          projection="geoMercator"
          width={800}
          height={600}
          viewBox="320 180 200 260"
          data-tip=""
        >
          <Geographies geography={INDIA_TOPO_JSON}>
            {({ geographies }) =>
              geographies.map(geo => {
                const current = data.find(s => s.id === geo.id);
                const centroid = geo.properties.centroid;
                return (
                  <React.Fragment key={geo.rsmKey}>
                    <Geography
                      geography={geo}
                      fill={current ? colorScale(current.value) : DEFAULT_COLOR}
                      style={geographyStyle}
                      onMouseEnter={() => onMouseEnter(geo, current)}
                      onMouseLeave={onMouseLeave}
                    />
                    {current && centroid && centroid.length === 2 && (
                      <text
                        x={centroid[0]}
                        y={centroid[1]}
                        style={{ fontFamily: 'Arial', fill: 'black' }}
                        textAnchor="middle"
                        alignmentBaseline="middle"
                        onMouseEnter={() => onMouseEnter(geo, current)}
                        onMouseLeave={onMouseLeave}
                      >
                        {current.value}
                      </text>
                    )}
                  </React.Fragment>
                );
              })
            }
          </Geographies>
        </ComposableMap>
        {tooltipContent && (
          <div style={{ position: 'absolute', bottom: '85%', left: '55%', background: 'rgba(255, 255, 255, 0.8)', padding: '5px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}>
            {tooltipContent}
          </div>
        )}
      </div>
      <div>
        <h2 className='flex justify-center mb-5 text-[18px]'>India Book Sold Data</h2>
        <table>
          <thead>
            <tr>
              <th className='text-left'>State</th>
              <th className='text-left'>Value</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td className='pt-3 pb-2'>{item.state}</td>
                <td className='pt-3 pb-2'>{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Indiamapchart;
