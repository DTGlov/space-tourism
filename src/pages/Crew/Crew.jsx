import { useState } from 'react';
import AppHeader from '../../components/AppHeader/AppHeader';
import { motion } from 'framer-motion';
import { spaceData } from '../../utils/data';

import './Crew.scss';

export default function Crew() {
  const [crew, setCrew] = useState('Douglas Hurley');
  const data = spaceData.crew.filter((info) => info.name === crew);

  return (
    <motion.section
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="crew"
    >
      <AppHeader />
      <div className="crew__title">
        <span>02</span>
        <span>Meet your crew</span>
      </div>
      <div className="crew__flex">
        <figure className="crew__image">
          <img src={data[0].images.png} alt="" />
        </figure>
        <div className="crew__stroke"></div>
        <div className="crew__text">
          <div className="crew__text-dots">
            <button
              onClick={() => setCrew('Douglas Hurley')}
              className={`dot ${crew === 'Douglas Hurley' ? 'active' : ''}`}
            ></button>
            <button
              onClick={() => setCrew('Mark Shuttleworth')}
              className={`dot ${crew === 'Mark Shuttleworth' ? 'active' : ''}`}
            ></button>
            <button
              onClick={() => setCrew('Victor Glover')}
              className={`dot ${crew === 'Victor Glover' ? 'active' : ''}`}
            ></button>
            <button
              onClick={() => setCrew('Anousheh Ansari')}
              className={`dot ${crew === 'Anousheh Ansari' ? 'active' : ''}`}
            ></button>
          </div>
          <div className="crew__text-details">
            <h2>{data[0].role}</h2>
            <h3>{data[0].name}</h3>
            <p>{data[0].bio}</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
