import React from 'react';
import { Layout } from 'antd';

const { Footer: AntFooter } = Layout;

const Footer: React.FC = () => {
  return (
    <AntFooter style={{ textAlign: 'center' }}>
     CopyRight ©{new Date().getFullYear()} 
     <div className='mt-5'>  Made with ❤️ by{' Priest Davos'}</div>
    
    </AntFooter>
  );
};

export default Footer;