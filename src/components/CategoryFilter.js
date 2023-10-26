import React from "react";

function CategoryFilter({ categories, selectedCategory, onCategoryFilter }) {
  const handleCategoryClick = (category) => {
    onCategoryFilter(category);
  };

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryClick(category)}
          className={category === selectedCategory ? "selected" : ""}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;


