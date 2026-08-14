
import "./product-form.css";
import { Product } from "@/app/types";

/* Product information attributes:
    weight?: number;
    dimensions?: {
        width: number;
        height: number;
        depth: number;
    };
    warrantyInformation?: string;
    shippingInformation?: string;
    
    
    reviews?: {
        rating: number;
        comment: string;
        date: string;
        reviewerName: string;
        reviewerEmail: string;
    }[];
    returnPolicy?: string;
    minimumOrderQuantity?: number;
    meta: {
        createdAt: string;
        updatedAt: string;
        barcode?: string;
        qrCode?: string;
    };
    images: string[];
    thumbnail: string;
*/


// A generic form component compatible with both the Add product-page and Edit product-page.
export default function ProductForm()
{

    
    return (
        <section aria-labelledby="form-header">
            <h2 id="form-header">Add/Edit product</h2>

            <form action="" method="post" className="product-form" >

                {/* id: number; */}

                {/* title: string; */}
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" placeholder="Product title (max 50 characters)" maxLength={50} required autoFocus />
                </div>

                {/* description: string; */}
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" id="description" name="description" placeholder="Product description (max 250 characters)" maxLength={250} />
                </div>

                {/* categoryId: number; */}

                {/* category?: Category; */}
                <div className="form-group">
                    <label htmlFor="category">Category</label>

                    <select id="category" name="category" defaultValue="default" >
                        <option value="default" disabled > Choose category </option>
                        <option value="1"> Beauty </option>
                        <option value="2"> Fragrance </option>
                        <option value="3"> Furniture </option>
                        <option value="4"> Groceries </option>
                        <option value="5"> Home Decoration </option>
                        <option value="6"> Kitchen Accessories </option>
                        <option value="7"> Laptops </option>
                        <option value="8"> Men's Shirts </option>
                        <option value="9"> Men's Shoes </option>
                        <option value="10"> Men's Watches </option>
                        <option value="11"> Mobile Accessories </option>
                        <option value="12"> Motorcycle </option>
                        <option value="13"> Skin Care </option>
                        <option value="14"> Smartphones </option>
                        <option value="15"> Sports Accessories </option>
                        <option value="16"> Sunglasses </option>
                        <option value="17"> Tablets </option>
                        <option value="18"> Tops </option>
                        <option value="19"> Vehicle </option>
                        <option value="20"> Woman's Bags </option>
                        <option value="21"> Woman's Dresses </option>
                        <option value="22"> Woman's Jewellery </option>
                        <option value="23"> Woman's Shoes </option>
                        <option value="24"> Woman's Watches </option>
                    </select>
                </div>

                {/* price: number; */}
                <div className="form-group">
                    <label htmlFor="price">Price in euros</label>
                    <input type="number" id="price" name="price" placeholder="Price in €" />
                </div>

                {/* discountPercentage?: number; */}
                <div className="form-group">
                    <label htmlFor="discountPercentage" > Discount in percent </label>
                    <input type="number" id="discountPercentage" name="discountPercentage" placeholder="Discount in %" />
                </div>

                {/* rating?: number; */}
                {/* <div className="form-group" >
                    <label htmlFor="rating" > Rating from 1-5 </label>
                    <input type="range" id="rating" name="rating" placeholder="Rating (1-5)" min={1} max={5} />
                </div> */}
                
                {/* stock?: number; */}
                <div className="form-group" >
                    <label htmlFor="stock" > Products in stock </label>
                    <input type="number" id="stock" name="stock" placeholder="Number of products in stock..." />
                </div>
                

                {/* tags?: string[]; */}
                <div className="form-group" >
                    <label htmlFor="tags1" > Add 1-3 tags </label>
                    <input type="text" id="tags1" name="tag1" placeholder="Tag 1 (required)" required />


                    <input type="text" name="tag2" placeholder="Tag 2 (optional)" />
                    <input type="text" name="tag3" placeholder="Tag 3 (optional)" />
                </div>

                {/* brand?: string; */}
                <div className="form-group" >
                    <label htmlFor="brand" > The products brand </label>
                    <input type="text" id="brand" name="brand" placeholder="Product brand..." />
                </div>

                {/* sku?: string; */}
                <div className="form-group" >
                    <label htmlFor="sku" > Stock-keeping unit (SKU) </label>
                    
                    <div className="sku-input" >
                        <input type="text" name="sku1" id="sku" placeholder="ABC"
                            pattern="[A-Z]{3}" title="Three uppercase letters, A-Z" />
                        <span> - </span>

                        <input type="text" name="sku2" placeholder="DEF"
                            pattern="[A-Z]{3}" title="Three uppercase letters, A-Z" />
                        <span> - </span>

                        <input type="text" name="sku3" placeholder="GHI"
                            pattern="[A-Z]{3}" title="Three uppercase letters, A-Z" />
                        <span> - </span>

                        <input type="text" name="sku4" placeholder="123"
                            pattern="[0-9]{3}" title="Three numbers, 0-9" />
                    </div>
                </div>
                


                

                {/* availabilityStatus: string */}

                <div className="form-group" >
                    <label htmlFor="availability" > Availability </label>
                    <select id="availability" name="availability" defaultValue="default">
                        <option value="default" disabled>Set availability</option>
                        <option value="in-stock">In Stock</option>
                        <option value="low-stock">Low Stock</option>
                        <option value="out-of-stock">Out of Stock</option>
                    </select>
                </div>

                {/* reviews?: {
        rating: number;
        comment: string;
        date: string;
        reviewerName: string;
        reviewerEmail: string;
                }[]; */}

                <div className="form-group" >
                    <h2>Product Review</h2>

                    <label htmlFor="review-rating">Rating</label>
                    <input type="number" id="review-rating" name="review-rating" min="1" max="5" placeholder="Rating (1-5)" />

                    <label htmlFor="review-comment">Comment</label>
                    <textarea id="review-comment" name="review-comment" placeholder="Leave a comment..."></textarea>

                    <label htmlFor="review-date">Date</label>
                    <input type="date" id="review-date" name="review-date" defaultValue="2026-08-14" />

                    <label htmlFor="reviewer-name">Your name</label>
                    <input type="text" id="reviewer-name" name="reviewer-name" placeholder="Name of reviewer" />

                    <label htmlFor="reviewer-email">Your email</label>
                    <input type="email" id="reviewer-email" name="reviewer-email" placeholder="Email of reviewer" />
                </div>

                {/* returnPolicy?: string; */}

                <div className="form-group" >
                    <label htmlFor="return-policy">Return policy</label>
                </div>

                {/* SUBMIT BUTTON */}

                <button type="submit" className="btn-submit" > Submit </button>
                    
            </form>

        </section>
    );
}
/* 
                <div className="form-group" >
                    <label htmlFor="generic" > generic form group </label>
                    <input type="text" id="generic" name="generic" placeholder="..." />
                </div>
 */