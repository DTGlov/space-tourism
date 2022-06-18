import AppHeader from '../../components/AppHeader/AppHeader';
import './Technology.scss';

import { spaceData } from '../../utils/data';
import { useState } from 'react';
import { motion } from 'framer-motion';
import useWindowDimensions from '../../hooks/windowDimensions';

export default function Technology() {
  const [vehicle, setVehicle] = useState('Launch vehicle');
  const { width } = useWindowDimensions();
  const data = spaceData.technology.filter(
    (transport) => transport.name === vehicle
  );

  return (
    <motion.section
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="technology"
    >
      <div className="technology__header">
        <AppHeader />
      </div>
      <div className="technology__title">
        <span>03</span>
        <span>Space launch 101</span>
      </div>
      <div className="technology__flex">
        <figure className="technology__image">
          <img
            src={
              width >= 1024 ? data[0].images.portrait : data[0].images.landscape
            }
            alt=""
          />
        </figure>
        <div className="technology__text">
          <div className="technology__text-oval">
            <button
              onClick={() => setVehicle('Launch vehicle')}
              className={`oval ${
                vehicle === 'Launch vehicle' ? 'oval__active' : ''
              }`}
            >
              1
            </button>
            <button
              onClick={() => setVehicle('Spaceport')}
              className={`oval ${
                vehicle === 'Spaceport' ? 'oval__active' : ''
              }`}
            >
              2
            </button>
            <button
              onClick={() => setVehicle('Space capsule')}
              className={`oval ${
                vehicle === 'Space capsule' ? 'oval__active' : ''
              }`}
            >
              3
            </button>
          </div>
          <div className="technology__text-details">
            <h3>The terminology...</h3>
            <h2>{data[0].name}</h2>
            <p>{data[0].description}</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
