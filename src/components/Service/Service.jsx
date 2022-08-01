import React from 'react';
import PropTypes from 'prop-types';
import './Service.scss';

export const Service = ({ service }) => {
  const {
    logo,
    price,
    type,
    subtitle,
    text,
    cashback,
  } = service;

  return (
    <div className="service">
      <div className="service__logo">
        <img src={`imgs/${logo}.png`} alt="service logo" />
      </div>
      <h2 className="service__price">{`£ ${price}`}</h2>
      <h3 className="service__type">{type}</h3>
      <h4 className="service__subtitle">{subtitle}</h4>
      {text.split('/n').map(part => (
        <p className="service__text">
          {part}
        </p>
      ))}
      <h2 className="service__cashback">{`£ ${cashback}`}</h2>
      <p className="service__cashback-text">Cash Back</p>
      <button type="button" className="service__button">Get started</button>
    </div>
  );
};

Service.propTypes = {
  service: PropTypes.shape({
    logo: PropTypes.string,
    price: PropTypes.number,
    type: PropTypes.string,
    subtitle: PropTypes.string,
    text: PropTypes.string,
    cashback: PropTypes.number,
  }).isRequired,
};
