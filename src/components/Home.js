import React from 'react';
import { useHistory } from 'react-router-dom';
import pic from '../assets/frame.jpeg';
import styles from './Home.module.css';
import { HiArrowRight } from 'react-icons/hi';

const Home = () => {
  const history = useHistory();
  const textchangeHandler = () => {
    history.replace('/module');
  };
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <img src={pic} alt="professional" width="100%" />
        </div>
        <div className={styles.container_text}>
          <div className={styles.heading}>
            <h2>Fusce sem magna phareta cursus</h2>

            <p>
              Lorem ipsum dolorsit amet consectetur, adipisicing elit. Excepturi
              sit eaque, exercitationem praesentium ad nulla quasi ratione
              distinctio repellat, omnis debitis veritatis neque dolorem officia
              ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div style={{ paddingTop: '15px' }}>
            <button className={styles.btn} onClick={textchangeHandler}>
              <div style={{ padding: '17px' }}>Enter</div>
              <div>
                {' '}
                <HiArrowRight style={{ margin: '2rem' }} />
              </div>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
