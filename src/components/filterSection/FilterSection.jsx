
import './filterSection.css'

function FilterSection({ filters, setFilters, products }) {

  const categories = ['ALL', ...new Set(products.map((item) => item.category))];

  return (
    <>
    <div className="filter" >
      <input type="text" placeholder="Search" id="filter-input" value={filters.search} onChange={(e) => setFilters({ ...filters, search: e.target.value })}/>
      <h4 id="f-h4">Category</h4>
      {categories.map((cat, index) => (
        <div className="f-cat" key={index}>
          <input type="radio" name="category" checked={filters.category === cat} value={cat} onChange={(e) => setFilters({ ...filters, category: e.target.value })}/>
          <label id="f-btn">{cat}</label>
        </div>
      ))}

      <div className="pricing-range">
        <h4 id="f-h4">Price Range</h4>
        <div className="range">
          <label id="label">
            Price Range : ${filters.priceRange[0]} - ${filters.priceRange[1]}
          </label>
          <input type="range" id="R-input" min="0" max="5000" value={filters.priceRange[1]} onChange={(e) => setFilters({ ...filters, priceRange: [0, Number(e.target.value)] })}/>
        </div>
      </div>
      <button
        id="reset-btn"onClick={() => setFilters({ search: "", category: "ALL", priceRange: [0, 5000] })}>
        Reset Filter
      </button>
    </div>
  </> 
  );
}

export default FilterSection;
