import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga4';
import { database } from '../../firebase/config.js';
import { ref, onValue, increment, update, get } from 'firebase/database';

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    console.log("VisitorCounter component mounted");
    // Initialize GA4 with your measurement ID
    // ReactGA.initialize('G-CQ48B6XGD2');
    
    // // Track pageview
    // ReactGA.send({ 
    //     hitType: "pageview",
    //     page: window.location.pathname,
    //     title: document.title
    // });
    
    // ReactGA.event({
    //     category: "user_engagement",
    //     action: "page_view",
    //     label: window.location.pathname,
    // });
    const visitorCountRef = ref(database, 'visitorCount');
    get(visitorCountRef)
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log("Initial Visitor Count:", snapshot.val()?.count);
        setVisitorCount(snapshot.val()?.count || 0);
      } else {
        console.warn("No visitor count found in the database.");
      }
    })
    .catch((error) => console.error("Error fetching visitor count:", error));

  // Increment Only If First Visit
  const hasVisited = localStorage.getItem('hasVisited');
  if (!hasVisited) {
    update(visitorCountRef, { count: increment(1) })
      .then(() => {
        localStorage.setItem("hasVisited", "true");
        console.log("Visitor count incremented.");
      })
      .catch((error) => console.error("Update failed:", error));
  }

  // Real-time Listener
  const unsubscribe = onValue(visitorCountRef, (snapshot) => {
    const data = snapshot.val();
    console.log("Live Visitor Count:", data?.count || 0);
    setVisitorCount(data?.count || 0);
  }, {
    onlyOnce: false // Ensure real-time updates
  });

  return () => unsubscribe(); // Cleanup on unmount
}, []);




  return (
    <div className="fixed bottom-5  left-5 bg-black text-white px-3  rounded-full shadow-lg animate-bounce border-2 border-white">
       <p className='text-center'>👀</p> 
   <span className="font-bold">{visitorCount} visits</span>
  </div>
  );
};

export default VisitorCounter;
