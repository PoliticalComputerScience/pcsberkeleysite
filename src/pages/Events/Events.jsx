import React from 'react';
import { useEffect, useState } from 'react';
import './Events.scss';
import { Link } from 'react-router-dom';
import WhatWeDo from '../About/components/WhatWeDo'
import Tester from './tester'

const Events = () => {

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  return (
    <div className="About">
      <article>
      </article>
    </div>
  );
};

export default Events;
