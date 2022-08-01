import React from 'react';
import { Service } from '../Service/Service';
import data from '../../data.json';
import './Services.scss';

export const Services = () => (
  <div className="services" id="up">
    {data.map(service => <Service key={service.id} service={service} />)}
  </div>
);
