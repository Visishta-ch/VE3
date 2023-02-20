import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import { FaHome ,FaSearch} from "react-icons/fa";

const Header = (props) => {
  return (
    <div className={styles.header}>
    <h2>{props.children}</h2>
    <div>
      
      <Link to="/searchpage">  
      <FaSearch style={{color:'#0066b2'}}/>   
      
      </Link> 

      <Link to='/'>
        <FaHome/>
      </Link>
    </div>
    </div>
  )
}

export default Header