import { useState } from 'react';
import AppHeader from '../../components/AppHeader/AppHeader';
import './Destination.scss';

import { spaceData } from '../../utils/data.js';
import { motion } from 'framer-motion';

export default function Destination() {
  const [planet, setPlanet] = useState('Moon');
  const data = spaceData.destinations.filter((solar) => solar.name === planet);

  return (
    <motion.section
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="destination"
    >
      <AppHeader />
      <div className="destination__title">
        <span>01</span>
        <span>Pick your destination</span>
      </div>
      <div className="destination__flex">
        <figure className="destination__image">
          <img src={data[0].images.png} alt="" />
        </figure>
        <div className="destination__text">
          <div className="destination__text-tabs">
            <button
              onClick={() => setPlanet('Moon')}
              className={`${planet === 'Moon' ? 'understroke' : ''}`}
            >
              Moon
            </button>
            <button
              onClick={() => setPlanet('Mars')}
              className={`${planet === 'Mars' ? 'understroke' : ''}`}
            >
              Mars
            </button>
            <button
              onClick={() => setPlanet('Europa')}
              className={`${planet === 'Europa' ? 'understroke' : ''}`}
            >
              Europa
            </button>
            <button
              onClick={() => setPlanet('Titan')}
              className={`${planet === 'Titan' ? 'understroke' : ''}`}
            >
              Titan
            </button>
          </div>
          <h3 className="destination__text-title">{data[0].name}</h3>
          <p className="destination__text-details">{data[0].description}</p>
          <div className="destination__text-stroke"></div>
          <div className="destination__stats-flex">
            <div className="destination__text-stats">
              <span className="fix">Avg. distance </span>
              <p>{data[0].distance}</p>
            </div>
            <div className="destination__text-stats">
              <span>Est. travel time</span>
              <p>{data[0].travel}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
