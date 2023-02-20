import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleLeft,FaAngleRight, FaHome } from "react-icons/fa";
import styles from './Footer.module.css';

const Footer = ({path1, path2}) => {


  return (
    <section className={styles.footer}>
      <Link to='/' ><FaHome /></Link>
      <Link to={path1}><FaAngleLeft /></Link>
      
      <Link to={path2}><FaAngleRight /></Link>
    </section>
  );
};

export default Footer;