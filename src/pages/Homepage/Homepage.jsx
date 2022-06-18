import React from 'react';
import AppHeader from '../../components/AppHeader/AppHeader';
import './Homepage.scss';
import { useNavigate } from 'react-router-dom';
import { DESTINATION } from '../../utils/routes';
import { motion } from 'framer-motion';

export default function Homepage() {
  const navigate = useNavigate();
  return (
    <motion.section
      className="home"
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <AppHeader />
      <div className="home__flex">
        <div className="home__text">
          <h5 className="home__text-first">So, you want to travel to</h5>
          <h5 className="home__text-second">Space</h5>
          <p className="home__text-para">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="home__btn">
          <button onClick={() => navigate(DESTINATION)}>Explore</button>
        </div>
      </div>
    </motion.section>
  );
}
