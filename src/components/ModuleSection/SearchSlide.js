import React from 'react';
import searchImg from '../../assets/search.png';
import Footer from './Footer';
const SearchSlide = () => {
  return (
    <>
      <div className="container1" style={{ backgroundColor: '#0066b2' }}>
        <div style={{ padding: '2rem', color: '#F8F8FF' }}>
          <p style={{ padding: '3px', fontSize: '18px' }}>
            Type your text here
          </p>
          <h3 style={{ padding: '10px' }}>Ut Hendrerit</h3>
          <hr />
          <p style={{ padding: '4px' }}>Showing 5 results</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src={searchImg}
            alt="slide"
            style={{ width: '770px', height: '300px' }}
          />
        </div>
      </div>
      <Footer path1={`${'/module5'}`} path2={`${'/'}`} />
    </>
  );
};

export default SearchSlide;
