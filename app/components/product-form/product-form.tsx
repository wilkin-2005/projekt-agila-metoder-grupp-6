
import "./product-form.css";
import { Product } from "@/app/types";

/* Product information attributes:

    returnPolicy?: string;
    minimumOrderQuantity?: number;
    meta: {
        // The meta-data is auto-generated
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

                <p>*Required fields</p>


                {/* id: number; */}
                {/* The ID-number is auto-generated */}

                {/* title: string; */}
                <div className="form-group">
                    <label htmlFor="title"> Title (max 50 characters) </label>
                    <input type="text" id="title" name="title" placeholder="Product title..." maxLength={50} required autoFocus />
                </div>


                {/* description: string; */}
                <div className="form-group">
                    <label htmlFor="description"> Description (max 250 characters)* </label>
                    <input type="text" id="description" name="description" placeholder="Product description..." maxLength={250} required />
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
                    <label htmlFor="price">Price in euros (€)</label>
                    <input type="number" id="price" name="price" placeholder="Product price..." required />
                </div>


                {/* discountPercentage?: number; */}
                <div className="form-group">
                    <label htmlFor="discountPercentage" > Discount in percent (%) </label>
                    <input type="number" id="discountPercentage" name="discountPercentage" placeholder="Product discount..." />
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
                <fieldset className="form-group" >
                    <legend>Add 1-3 tags</legend>

                    <label htmlFor="tag1" > Product tag 1 </label>
                    <input type="text" id="tag1" name="tag1" placeholder="Product tag 1..." />

                    <label htmlFor="tag2" > Product tag 2 </label>
                    <input type="text" id="tag2" name="tag2" placeholder="Product tag 2..." />

                    <label htmlFor="tag3" > Product tag 3 </label>
                    <input type="text" id="tag3" name="tag3" placeholder="Product tag 3..." />
                </fieldset>


                {/* brand?: string; */}
                <div className="form-group" >
                    <label htmlFor="brand" > Product brand </label>
                    <input type="text" id="brand" name="brand" placeholder="The products brand..." />
                </div>


                {/* sku?: string; */}
                {/* The SKU code is auto-generated */}


                {/* weight?: number; */}
                {/* Unknown weight unit in API. Guess it's kilograms */}
                <div className="form-group" >
                    <label htmlFor="weight" > Product weight in kilograms (kg) </label>
                    <input type="number" id="weight" name="weight" placeholder="The products weight..." />
                </div>


                {/* dimensions?: {
                    width: number;
                    height: number;
                    depth: number;
                }; */}
                <fieldset className="dimensions-fieldset form-group">
                    <legend>Product dimensions</legend>

                    <label htmlFor="width" > Width in centimeters (cm) </label>
                    <input type="number" id="width" name="width" placeholder="Product width..." />

                    <label htmlFor="height" > Height in centimeters (cm) </label>
                    <input type="number" id="height" name="height" placeholder="Product height..." />

                    <label htmlFor="depth" > Depth in centimeters (cm) </label>
                    <input type="number" id="depth" name="depth" placeholder="Product depth..." />
                </fieldset>


                {/* warrantyInformation?: string; */}
                <div className="form-group" >
                    <label htmlFor="warrantyInfo" > Warranty information </label>
                    <input type="text" id="warrantyInfo" name="warrantyInfo" placeholder="Information on the products warranty..." />
                </div>

                {/* shippingInformation?: string; */}
                <div className="form-group" >
                    <label htmlFor="shippingInfo" > Shipping information </label>
                    <input type="text" id="shippingInfo" name="shippingInfo" placeholder="Information on how the product ships..." />
                </div>


                {/* availabilityStatus: string */}
                <div className="form-group" >
                    <label htmlFor="availability" > Product availability </label>

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
                    }[];
                */}
                <fieldset className="form-group" >
                    <legend>Product Review</legend>

                    <label htmlFor="review-rating"> Rating </label>
                    <input type="number" id="review-rating" name="review-rating" min="1" max="5" placeholder="Rating (1-5)" />

                    <label htmlFor="review-comment"> Comment </label>
                    <textarea id="review-comment" name="review-comment" placeholder="Leave a comment..."></textarea>

                    <label htmlFor="review-date"> Date </label>
                    <input type="date" id="review-date" name="review-date" defaultValue="2026-08-20" />

                    <label htmlFor="reviewer-name"> Your name </label>
                    <input type="text" id="reviewer-name" name="reviewer-name" placeholder="Name of reviewer" />

                    <label htmlFor="reviewer-email"> Your email </label>
                    <input type="email" id="reviewer-email" name="reviewer-email" placeholder="Email of reviewer" />
                </fieldset>

                {/* returnPolicy?: string; */}

                <div className="form-group" >
                    <label htmlFor="return-policy">Return policy</label>
                    <select id="return-policy" name="return-policy" defaultValue="default">
                        <option value="default" disabled>Select return policy</option>
                        <option value="policy-none">No return policy</option>
                        <option value="policy-7">7 days return policy</option>
                        <option value="policy-30">30 days return policy</option>
                        <option value="policy-60">60 days return policy</option>
                        <option value="policy-90">90 days return policy</option>
                    </select>
                </div>

                {/* minimumOrderQuantity?: number; */}

                <div className="form-group" >
                    <label htmlFor="min-order-quantity" >Order quantity (min)</label>
                    <input type="number" id="min-order-quantity" name="min-order-quantity" min={0} defaultValue={0} />
                </div>

                {/* meta: {
                // The meta-data is auto-generated
                createdAt: string;
                updatedAt: string;
                barcode?: string;
                qrCode?: string;
                };*/}

                {/* images: string[]; */}

                <div className="form-group" >
                    <label htmlFor="images" >Images</label>
                    <input type="text" id="images" name="images" placeholder="Paste link to images" />
                </div>

                {/* thumbnail: string; */}

                <div className="form-group" >
                    <label htmlFor="thumbnail" >Thumbnail</label>
                    <input type="text" id="thumbnail" name="thumbnail" placeholder="Paste link to thumbnail" />
                </div>

                {/* SUBMIT BUTTON */}

                <button type="submit" className="btn-submit" > Submit </button>
                    
            </form>

        </section>
    );
}

/* sku?: string; */
/* The SKU code is auto-generated */
/*  <div className="form-group" >
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
*/