import React, { useState } from 'react';
import './Module.css';

/*the component recieves props as tabs */
const Tabs = ({ tabs }) => {

  const [toggleState, setToggleState] = useState(1);
  /*to switch tabs within the module */
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <div className="bloc-tabs">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={toggleState === index + 1 ? 'tabs active-tabs' : 'tabs'}
            onClick={() => toggleTab(index + 1)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className="content-tabs">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={
              toggleState === index + 1 ? 'content  active-content' : 'content'
            }
          >
            <img src={tab.image} alt={tab.title} />
            <h2>{tab.heading}</h2>
            <p>{tab.content}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Tabs;
