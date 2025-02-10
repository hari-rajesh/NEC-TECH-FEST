import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga4';

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Initialize GA4 with your measurement ID
    ReactGA.initialize('G-CQ48B6XGD2');
    
    // Track pageview
    ReactGA.send({ hitType: "pageview" });
    
    // Get real-time visitor count
    const fetchVisitorCount = async () => {
      try {
        const response = await ReactGA.get('realtime');
        setVisitorCount(response.activeUsers);
      } catch (error) {
        console.log('Error fetching visitor count');
      }
    };

    fetchVisitorCount();
  }, []);

  return (
    <div className="visitor-counter">
      <p className="text-white font-netron">
        Visitors: {visitorCount}
      </p>
    </div>
  );
};

export default VisitorCounter;
