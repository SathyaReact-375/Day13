import React from 'react';
import useMediaQuery from './useMediaQuery';

const ResponsiveComponent = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(max-width: 1024px)');
  const prefersDark = useMediaQuery('(prefers-color-scheme: dark)');

  return (
    <div style={{
      padding: '20px',
      background: prefersDark ? '#333' : '#fff',
      color: prefersDark ? '#fff' : '#333',
      textAlign:"center"
    }}>
        <h1>Task12</h1>
      <h1>
        {isMobile ? 'Mobile View' : 
         isTablet ? 'Tablet View' : 'Desktop View'}
      </h1>
      <p>Screen matches: {isMobile ? 'mobile' : 'desktop'} breakpoint</p>
      <p>Preferred color scheme: {prefersDark ? 'dark' : 'light'}</p>
    </div>
  );
};

export default ResponsiveComponent;