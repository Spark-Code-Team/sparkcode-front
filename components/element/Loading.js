import React, { useEffect, useRef } from "react";

const Spinner = ({
  size = 40,
  stroke = 4,
  color = "#4f46e5",
  label = "Loading",
  className = "",
  pauseBetweenLoops = 150,
  duration = 900,
}) => {
  const circleRef = useRef(null);
  const reqRef = useRef(null);

  useEffect(() => {
    const el = circleRef.current;
    if (!el) return;

    let start = null;
    let paused = false;

    const radius = (size - stroke) / 2;
    const circumference = 2 * Math.PI * radius;

    el.style.strokeDasharray = `${circumference} ${circumference}`;
    el.style.strokeDashoffset = circumference;

    const step = (ts) => {
      if (paused) return;
      if (start === null) start = ts;

      const elapsed = ts - start;
      const progress = (elapsed % duration) / duration;
      el.style.strokeDashoffset = circumference * (1 - progress);

      reqRef.current = requestAnimationFrame(step);
    };

    reqRef.current = requestAnimationFrame(step);

    const intervalId = setInterval(() => {
      paused = true;
      setTimeout(() => {
        if (!el) return;
        el.style.strokeDashoffset = circumference; // ریست کامل
        start = null;
        paused = false;
        reqRef.current = requestAnimationFrame(step);
      }, pauseBetweenLoops);
    }, duration + pauseBetweenLoops);

    return () => {
      if (reqRef.current) cancelAnimationFrame(reqRef.current);
      clearInterval(intervalId);
    };
  }, [size, stroke, color, duration, pauseBetweenLoops]);

  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <div
      role="status"
      aria-label={label}
      className={`inline-block ${className}`}
      style={{
        width: size,
        height: size,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ display: "block" }}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(0,0,0,0.1)"
          strokeWidth={stroke}
        />
        <circle
          ref={circleRef}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={circumference}
          strokeLinecap="round"
          style={{
            transformOrigin: "50% 50%",
            transform: "rotate(-90deg)",
          }}
        />
      </svg>
    </div>
  );
};

export default Spinner;
