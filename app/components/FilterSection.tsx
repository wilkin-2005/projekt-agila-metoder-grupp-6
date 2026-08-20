import "./FilterSection.css";
import FilterByStock from "./FilterByStock";
import FilterByCategory from "./FilterByCategory";

// Filter section component
export default function FilterSection() {
    return (
    <section className="filter-section">
        <form className="filter-form" action="" method="get">
            <div className="form-search">
                <input type="text" className="search-field" id="search" name="search" placeholder="Search products">
                </input>
            </div>
            <FilterByCategory>
            </FilterByCategory>
            
            <FilterByStock>
            </FilterByStock>
            <button className="filter-button"><img width={23} src="funnel.png"></img>Filter</button>
        </form>
    </section>
    )
}