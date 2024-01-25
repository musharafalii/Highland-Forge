import React, { useEffect, useRef } from 'react';
// import './ProgressBar.css'; // Import the CSS file

const ProgressBar = ({ value }) => {
  const barRef = useRef(null);
  const valRef = useRef(null);

  useEffect(() => {
    const $bar = barRef.current;
    const $val = valRef.current;
    const perc = parseInt(value, 10);

    let animationFrameId;
    const animateProgressBar = (start, end, duration, callback) => {
      const startTime = new Date().getTime();
      const animate = () => {
        const currentTime = new Date().getTime();
        const progress = (currentTime - startTime) / duration;
        const currentStep = start + progress * (end - start);

        if (progress < 1) {
          $bar.style.transform = `rotate(${45 + (currentStep * 1.8)}deg)`;
          $val.innerText = Math.floor(currentStep);
          animationFrameId = requestAnimationFrame(animate);
        } else {
          $bar.style.transform = `rotate(${45 + (end * 1.8)}deg)`;
          $val.innerText = end;
          callback();
        }
      };

      animate();
    };

    animateProgressBar(0, perc, 3000, () => {
      cancelAnimationFrame(animationFrameId);
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [value]);

  return (
    <div className="d-flex">
      <div className="barOverflow d-flex">
        <div className="bar d-flex" ref={barRef}></div>
      </div>
      <span ref={valRef}>{value}</span>%
    </div>
  );
};



export default ProgressBar;
