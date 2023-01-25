import React from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { close, robearticslogo, menu } from "../assets"
import { navLinks } from "../constants"
import styles from '../style';


const Button = ({ styles }) => (
  <button type="button" className={`flex font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none`}>
    <Link to="sponsor" className='py-4 px-6'>
      Sponsor
    </Link>
  </button>
);

export default Button;