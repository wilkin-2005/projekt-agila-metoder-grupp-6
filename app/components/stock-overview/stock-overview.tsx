
import "./stock-overview.css"

// Stock status overview-compontent. Formerly known as "product count section"
export default function StockOverview()
{
    const svgSize = 48;

    return (
    <section className="stock-overview-section" aria-labelledby="stock-status-overview-header">

        <h2 id="stock-status-overview-header" hidden>Stock status overview</h2>

        {/* Alternatively: aria-label="Products: 193" */}
        <div className="data-card" aria-labelledby="products-header">
            <h3 id="products-header">Products</h3>

            <div className="data--icon products-amount">
                <span>193</span>

                <svg xmlns="http://www.w3.org/2000/svg" width={svgSize} height={svgSize} viewBox="0 0 24 24" fill="currentColor"
                stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="lucide lucide-package2-icon lucide-package-2">
                    <path d="M12 3v6"/><path d="M16.76 3a2 2 0 0 1 1.8 1.1l2.23 4.479a2 2 0 0 1 .21.891V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9.472a2 2 0 0 1 .211-.894L5.45 4.1A2 2 0 0 1 7.24 3z"/>
                    <path d="M3.054 9.013h17.893"/>
                    <title>Products icon</title>
                </svg>
            </div>
        </div>

        <div className="data-card" aria-labelledby="in-stock-header">
            <h3 id="in-stock-header">In stock</h3>

            <div className="data--icon in-stock-amount">
                <span>169</span>

                <svg xmlns="http://www.w3.org/2000/svg" width={svgSize} height={svgSize} viewBox="0 0 24 24" fill="currentColor"
                stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="lucide lucide-circle-check-icon lucide-circle-check">
                    <circle cx="12" cy="12" r="10"/> <path d="m9 12 2 2 4-4"/>
                    <title>In stock icon</title>
                </svg>
            </div>
        </div>

        <div className="data-card" aria-labelledby="low-stock-header">
            <h3 id="low-stock-header">Low stock</h3>

            <div className="data--icon low-stock-amount">
                <span>20</span>

                <svg xmlns="http://www.w3.org/2000/svg" width={svgSize} height={svgSize} viewBox="0 0 24 24" fill="currentColor"
                stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="lucide lucide-triangle-alert-icon lucide-triangle-alert">
                    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
                    <path d="M12 9v4"/>
                    <path d="M12 17h.01"/>
                    <title>Low stock icon</title>
                </svg>
            </div>
        </div>

        <div className="data-card"  aria-labelledby="out-of-stock-header">
            <h3 id="out-of-stock-header">Out of stock</h3>

            <div className="data--icon out-of-stock-amount">
                <span>4</span>

                <svg xmlns="http://www.w3.org/2000/svg" width={svgSize} height={svgSize} viewBox="0 0 24 24" fill="currentColor"
                stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="lucide lucide-circle-x-icon lucide-circle-x">
                    <circle cx="12" cy="12" r="10"/> <path d="m15 9-6 6"/><path d="m9 9 6 6"/>
                    <title>Out of stock icon</title>
                </svg>
            </div>
        </div>

    </section>
    );
}