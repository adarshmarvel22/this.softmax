import React from 'react';

const ServicesPage = () => {
  const services = [
    { id: 1, name: 'Consultation', description: 'Professional consultation services' },
    { id: 2, name: 'Implementation', description: 'End-to-end solution implementation' },
    { id: 3, name: 'Support', description: 'Ongoing support and maintenance' },
  ];

  return (
    <div className="page">
      <h1>Our Services</h1>
      <div className="service-list">
        {services.map(service => (
          <div key={service.id} className="service-card">
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;