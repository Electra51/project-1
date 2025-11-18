// import React from "react";
// import "./Hero.css";
// import homeImage from "../../assets/shoe.png";

// const Hero = () => {
//   return (
//     <section className="hero">
//       <div className="hero-overlay"></div>
//       <div className="hero-content">
//         <div className="hero-text">
//           <span className="hero-badge">New Collection 2025</span>
//           <h1 className="hero-title">
//             Step Into Your
//             <span className="highlight"> Best Performance</span>
//           </h1>
//           <p className="hero-description">
//             Discover premium athletic footwear designed for champions.
//             Experience unmatched comfort, style, and performance with our
//             exclusive collection.
//           </p>
//           <div className="hero-buttons">
//             <a href="/shop" className="btn btn-primary">
//               Shop Now
//               <svg
//                 className="btn-icon"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24">
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M13 7l5 5m0 0l-5 5m5-5H6"
//                 />
//               </svg>
//             </a>
//             <a href="/about" className="btn btn-secondary">
//               Learn More
//             </a>
//           </div>
//           <div className="hero-stats">
//             <div className="stat-item">
//               <h3>500+</h3>
//               <p>Premium Products</p>
//             </div>
//             <div className="stat-divider"></div>
//             <div className="stat-item">
//               <h3>50K+</h3>
//               <p>Happy Customers</p>
//             </div>
//             <div className="stat-divider"></div>
//             <div className="stat-item">
//               <h3>4.8★</h3>
//               <p>Average Rating</p>
//             </div>
//           </div>
//         </div>
//         <div className="hero-image">
//           <div className="image-backdrop"></div>

//           <img
//             src={homeImage}
//             alt="Athletic Performance"
//             className="hero-mockup"
//           />

//           <div className="floating-card card-1">
//             <span className="card-icon">🔥</span>
//             <div>
//               <p className="card-label">Hot Deal</p>
//               <p className="card-value">Up to 40% Off</p>
//             </div>
//           </div>
//           <div className="floating-card card-2">
//             <span className="card-icon">⚡</span>
//             <div>
//               <p className="card-label">Fast Shipping</p>
//               <p className="card-value">Free Delivery</p>
//             </div>
//           </div>
//           <div className="floating-card card-3">
//             <span className="card-icon">✓</span>
//             <div>
//               <p className="card-label">Quality</p>
//               <p className="card-value">100% Authentic</p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="scroll-indicator">
//         <span>Scroll Down</span>
//         <div className="scroll-arrow"></div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React from "react";
import "./Hero.css";
import homeImage from "../../assets/shoe.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-text">
          <span className="hero-badge">New Collection 2025</span>
          <h1 className="hero-title">
            Step Into Your
            <span className="highlight"> Best Performance</span>
          </h1>
          <p className="hero-description">
            Discover premium athletic footwear designed for champions.
            Experience unmatched comfort, style, and performance with our
            exclusive collection.
          </p>
          <div className="hero-buttons">
            <a href="/shop" className="btn btn-primary">
              Shop Now
              <svg
                className="btn-icon"
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
            <a href="/about" className="btn btn-secondary">
              Learn More
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <h3>500+</h3>
              <p>Premium Products</p>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <h3>50K+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <h3>4.8★</h3>
              <p>Average Rating</p>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-backdrop"></div>

          <img
            src={homeImage}
            alt="Athletic Performance"
            className="hero-mockup"
          />

          <div className="floating-card card-1">
            <span className="card-icon">🔥</span>
            <div>
              <p className="card-label">Hot Deal</p>
              <p className="card-value">Up to 40% Off</p>
            </div>
          </div>
          <div className="floating-card card-2">
            <span className="card-icon">⚡</span>
            <div>
              <p className="card-label">Fast Shipping</p>
              <p className="card-value">Free Delivery</p>
            </div>
          </div>
          <div className="floating-card card-3">
            <span className="card-icon">✓</span>
            <div>
              <p className="card-label">Quality</p>
              <p className="card-value">100% Authentic</p>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;
