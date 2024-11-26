import React from 'react';

const services = [
  { title: "Fashion Sell", price: "$5" },
  { title: "Fashion Rental", price: "$15" },
  { title: "Fashion Trade", price: "$10" },
];

const Services = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', textAlign: 'center', backgroundColor: '' }}>
      <h2 style={{ marginBottom: '30px' }}>Services: Start selling, renting or swapping right away!</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        {services.map((service, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #ddd',
              padding: '20px',
              borderRadius: '5px',
              width: '200px',
              backgroundColor: '#fff',
            }}
          >
            <h3>{service.title}</h3>
            <p style={{ fontSize: '18px', fontWeight: 'bold' }}>{service.price}</p>
            <button
              style={{
                padding: '10px 15px',
                backgroundColor: '#000',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
