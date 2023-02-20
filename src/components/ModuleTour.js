import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './ModuleSection/Footer';
import styles from './Home.module.css';
import pic from '../assets/frame.jpeg';
import { HiArrowRight } from 'react-icons/hi';

const ModuleTour = () => {

  const [selectModule, setSelectModule] = useState(false);

/*to make user select the required module upon clicking select button --- for style change*/
  const selectHandler = () => {
    setSelectModule(true);
  };
  
  /* Get back to original styles after notifying user need to select the required module to proceed */
  const onAnimationEndHandler = () => {
    setSelectModule(false);
  };

  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <img src={pic} alt="professional" width="100%" />
        </div>
        <div className={styles.container_text}>
          <div
            className={!selectModule ? styles.heading : styles.module}
            onAnimationEnd={onAnimationEndHandler}
          >
            <div className={styles.heading2}>
              <Link to="/module1">
                <h3>Module One</h3>
              </Link>
            </div>

            <div className={styles.heading2}>
              <Link to="/module2">
                <h3>Module Two</h3>
              </Link>
            </div>
            <div className={styles.heading2}>
              <Link to="/module3">
                <h3>Module Three</h3>
              </Link>
            </div>
            <div className={styles.heading2}>
              <Link to="/module4">
                <h3>Module Four</h3>
              </Link>
            </div>
            <div className={styles.heading2}>
              <Link to="/module5">
                <h3>Module Five</h3>
              </Link>
            </div>
          </div>
          <div>
            <button className={styles.btn} onClick={selectHandler}>
              <div style={{ padding: '17px' }}>Select Module</div>
              <div>
                {' '}
                <HiArrowRight style={{ margin: '2rem' }} />
              </div>
            </button>
          </div>
        </div>
      </section>
      <Footer path1={`${'/searchpage'}`} path2={`${'/module1'}`} />
    </>
  );
};

export default ModuleTour;
