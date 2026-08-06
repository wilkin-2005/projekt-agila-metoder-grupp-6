export default function FilterSection() {
    return (
    <section className="filter-section">
        <form action="" method="get">
            <input type="text" id="search" name="search" placeholder="Search products">
            </input>
            <select id="categories" name="categories">
                <option value="categories-all">All Categories</option>
                <option value="shoes-women">Women's Shoes</option>
                <option value="watches-women">Women's Watches</option>
            </select>
            
            <select id="stock" name="stock">
                <option value="stock-all" selected>All Stock</option>
                <option value="in-stock">In stock</option>
                <option value="out-stock">Out of stock</option>
            </select>

            <button className="filter-button">Filter</button>
        </form>
    </section>
    )
}