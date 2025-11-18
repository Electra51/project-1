import React, { useState, useEffect } from "react";
import "./SaleBanner.css";

const SaleBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Set countdown end date (7 days from now)
    const countdownDate = new Date();
    countdownDate.setDate(countdownDate.getDate() + 7);
    countdownDate.setHours(23, 59, 59, 999);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const closeBanner = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="sale-banner">
      <div className="banner-background">
        <div className="animated-gradient"></div>
        <div className="banner-pattern"></div>
      </div>

      <button
        className="banner-close"
        onClick={closeBanner}
        aria-label="Close banner">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <div className="banner-content">
        <div className="banner-left">
          <div className="flash-badge">
            <svg className="flash-icon" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              />
            </svg>
            <span>Limited Time Offer</span>
          </div>
          <h2 className="banner-title">
            <span className="title-line-1">Mega Winter Sale</span>
            <span className="title-highlight">Up to 50% OFF</span>
          </h2>
          <p className="banner-subtitle">
            Premium shoes, bags, and accessories at unbeatable prices
          </p>
          <a href="/shop" className="banner-cta">
            <span>Shop Now</span>
            <svg
              className="cta-arrow"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>

        <div className="banner-right">
          <p className="countdown-label">Hurry! Sale Ends In:</p>
          <div className="countdown-timer">
            <div className="time-box">
              <div className="time-number">
                {String(timeLeft.days).padStart(2, "0")}
              </div>
              <div className="time-label">Days</div>
            </div>
            <div className="time-separator">:</div>
            <div className="time-box">
              <div className="time-number">
                {String(timeLeft.hours).padStart(2, "0")}
              </div>
              <div className="time-label">Hours</div>
            </div>
            <div className="time-separator">:</div>
            <div className="time-box">
              <div className="time-number">
                {String(timeLeft.minutes).padStart(2, "0")}
              </div>
              <div className="time-label">Minutes</div>
            </div>
            <div className="time-separator">:</div>
            <div className="time-box">
              <div className="time-number">
                {String(timeLeft.seconds).padStart(2, "0")}
              </div>
              <div className="time-label">Seconds</div>
            </div>
          </div>
          <div className="offer-badges">
            <span className="offer-badge">
              <svg
                className="badge-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Free Shipping
            </span>
            <span className="offer-badge">
              <svg
                className="badge-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Easy Returns
            </span>
          </div>
        </div>
      </div>

      <div className="banner-particles">
        <span className="particle particle-1">✨</span>
        <span className="particle particle-2">⭐</span>
        <span className="particle particle-3">💫</span>
        <span className="particle particle-4">✨</span>
        <span className="particle particle-5">⭐</span>
        <span className="particle particle-6">💫</span>
      </div>
    </div>
  );
};

export default SaleBanner;
