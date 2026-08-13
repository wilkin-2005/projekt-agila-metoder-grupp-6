
import "./FilterSection.css";


// Filter section component
export default function FilterSection() {
    return (
    <section className="filter-section">
        <form className="filter-form" action="" method="get">
            <div className="form-search">
                <input type="text" className="search-field" id="search" name="search" placeholder="Search products">
                </input>
            </div>
            <select id="categories" name="categories">
                <option value="categories-all">All Categories</option>
                <option value="shoes-women">Women's Shoes</option>
                <option value="watches-women">Women's Watches</option>
            </select>
            
            <select id="stock" name="stock">
                <option value="stock-all" defaultValue>All Stock</option>
                <option value="in-stock">In stock</option>
                <option value="low-stock">Low stock</option>
                <option value="out-stock">Out of stock</option>
            </select>
            
            <button className="filter-button"><img width={23} src="funnel.png"></img>Filter</button>
        </form>
    </section>
    )
}