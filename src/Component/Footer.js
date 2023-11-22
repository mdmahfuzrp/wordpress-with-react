import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='text-center bg-slate-100 py-3'>
            <h1>Copyright &copy; 2023 - All right reserved <Link to="https://github.com/mdmahfuzrp" className='text-blue-500'>Md Mahfuz RP</Link></h1>
        </div>
    );
};

export default Footer;