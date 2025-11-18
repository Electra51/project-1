import React from "react";
import "./FeaturedCategories.css";

const FeaturedCategories = () => {
  const categories = [
    {
      id: 1,
      name: "Men's Sneakers",
      count: "150+ Products",
      image:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Ultraboost_22_Shoes_Black_GZ0127_01_standard.jpg",
      category: "Men's Sneaker",
      bgColor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      id: 2,
      name: "Boots Collection",
      count: "80+ Products",
      image:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b513f2cec8b440978d60ab6d014ad452_9366/Response_3MC_ADV_Boots_Black_EG9391_01_standard.jpg",
      category: "Men's Boot",
      bgColor: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    },
    {
      id: 3,
      name: "Caps & Hats",
      count: "120+ Products",
      image:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/c3981523051c4a978674ad3c01015664_9366/Dispatch_Trucker_Hat_Black_EY5534_01_standard.jpg",
      category: "Cap",
      bgColor: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    },
    {
      id: 4,
      name: "Backpacks",
      count: "90+ Products",
      image:
        "https://m.media-amazon.com/images/I/81gQpI50MSL._AC_UL480_FMwebp_QL65_.jpg",
      category: "Backpack",
      bgColor: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    },
    {
      id: 5,
      name: "Women's Shoes",
      count: "200+ Products",
      image:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c21a73451f964108b69aaf4a00db25e9_9366/Supernova_Rise_Shoes_Black_HP9716_01_standard.jpg",
      category: "Women's Sneaker",
      bgColor: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    },
    {
      id: 6,
      name: "Accessories",
      count: "100+ Products",
      image:
        "https://m.media-amazon.com/images/I/61ETngGe5cL._AC_UL480_FMwebp_QL65_.jpg",
      category: "Accessories",
      bgColor: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
    },
  ];

  const handleCategoryClick = (category) => {
    // Scroll to shop section and filter by category
    const shopSection = document.querySelector(".products-container");
    if (shopSection) {
      shopSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    // You can add filtering logic here or pass it to parent component
    console.log("Selected category:", category);
  };

  return (
    <section className="featured-categories">
      <div className="categories-header">
        <span className="section-badge">Explore</span>
        <h2 className="section-title">Featured Categories</h2>
        <p className="section-description">
          Discover our curated collection of premium products across multiple
          categories
        </p>
      </div>

      <div className="categories-grid">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="category-card"
            onClick={() => handleCategoryClick(cat.category)}>
            <div
              className="category-overlay"
              style={{ background: cat.bgColor }}></div>
            <div className="category-image">
              <img src={cat.image} alt={cat.name} />
            </div>
            <div className="category-content">
              <h3 className="category-name">{cat.name}</h3>
              <p className="category-count">{cat.count}</p>
              <button className="category-btn">
                Shop Now
                <svg
                  className="arrow-icon"
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
              </button>
            </div>
            <div className="category-shine"></div>
          </div>
        ))}
      </div>

      <div className="view-all-container">
        <a href="/shop" className="view-all-btn">
          View All Products
          <svg
            className="btn-arrow"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default FeaturedCategories;
