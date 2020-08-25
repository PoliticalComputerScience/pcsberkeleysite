// @flow
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Join.scss';
import learn from 'assets/home/highlights/learn.jpg';
import JoinSection from './JoinSection';
import Description from '../Home/components/Description';


const Join = () => {
  // const [submitValue, setSubmitValue] = useState('Join!');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

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
  /*   const disableForm = () => {
    // Style submit button
    document.getElementById('form-join-submit').disabled = true;
    document.getElementById('form-join-submit').style.backgroundColor =
    '#808cff';
    document.getElementById('form-join-submit').style.boxShadow = 'none';
    setSubmitValue('Joining...');

    // Disable inputs
    document.getElementById('first-name').disabled = true;
    document.getElementById('last-name').disabled = true;
    document.getElementById('email').disabled = true;

    // Visual disabled input indicator
    document.getElementById('first-name').style.color = '#4b4b4b';
    document.getElementById('last-name').style.color = '#4b4b4b';
    document.getElementById('email').style.color = '#4b4b4b';
  }; */

  return (
    <div className="join-flex-container">
      <div className="join-container">
        <div className="welcome-background-container">
        <JoinSection width={width} />
        </div>
        </div>
      </div>
  );
};

export default Join;
