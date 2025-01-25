import React, { useState, useEffect } from 'react';

function CountDown() {
    const [countDown, setCountDown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const targetDate = new Date('2025-02-21T09:30:00');

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            // Calculate remaining days, hours, minutes, seconds
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            setCountDown({ days, hours, minutes, seconds });

            // Stop the interval when countdown reaches 0
            if (difference <= 0) {
                clearInterval(intervalId);
                setCountDown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        }, 1000); // Update countdown every second

        return () => clearInterval(intervalId); // Cleanup function for the interval
    }, []);

    return (
        <div className="count">
            <div>
                <div className="d-flex">
                    <div className="block">
                        <h6>Days</h6>
                        <h5>{countDown.days.toString().padStart(2, '0')}</h5>
                    </div>
                    <div className="block">
                        <h6>Hours</h6>
                        <h5>{countDown.hours.toString().padStart(2, '0')}</h5>
                    </div>
                    <div className="block">
                        <h6>Mins</h6>
                        <h5>{countDown.minutes.toString().padStart(2, '0')}</h5>
                    </div>
                    <div className="block">
                        <h6>Sec's</h6>
                        <h5>{countDown.seconds.toString().padStart(2, '0')}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CountDown;