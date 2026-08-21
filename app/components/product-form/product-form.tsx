
import "./product-form.css";
// import { Product, Category } from "@/app/types";



// A generic form component compatible with both the Add product-page and Edit product-page.
export default function ProductForm()
{

    return (
        <section aria-labelledby="form-header">
            <h2 id="form-header">Add/Edit product</h2>

            <form action="" method="post" className="product-form" aria-labelledby="form-header" >

                <p> <span className="required-text">*</span>Required fields</p>


                <h3 className="form-subheader"> Basic Information </h3>
                {/* ========== ========== ========== ========== ========== ========== */}


                {/* id: number; */}
                {/* The ID-number is auto-generated */}

                {/* title: string; */}
                <div className="form-group">
                    <label htmlFor="title"> Title (max 50 characters)<span className="required-text">*</span> </label>
                    <input type="text" id="title" name="title" placeholder="Product title..." maxLength={50} required autoFocus />
                </div>


                {/* description: string; */}
                <div className="form-group">
                    <label htmlFor="description"> Description (max 250 characters)<span className="required-text">*</span> </label>
                    {/* <input type="text" id="description" name="description" placeholder="Product description..." maxLength={250} required /> */}
                    <textarea id="description" name="description" placeholder="Product description..." maxLength={250} rows={4} required />
                </div>


                {/* category?: Category; */}
                {/* categoryId: number; */}
                <div className="form-group">
                    <label htmlFor="category"> Category<span className="required-text">*</span> </label>

                    <select id="category" name="categoryId" defaultValue="default" >
                        <option value="default" disabled > Choose category </option>

                        <optgroup label="Clothing & Fashion">
                            <option value="8"> Men's Shirts </option>
                            <option value="9"> Men's Shoes </option>
                            <option value="10"> Men's Watches </option>

                            <option value="20"> Woman's Bags </option>
                            <option value="21"> Woman's Dresses </option>
                            <option value="22"> Woman's Jewellery </option>
                            <option value="23"> Woman's Shoes </option>
                            <option value="24"> Woman's Watches </option>

                            <option value="16"> Sunglasses </option>
                            <option value="18"> Tops </option>
                            <option value="1"> Beauty </option>
                            <option value="2"> Fragrance </option>
                            <option value="13"> Skin Care </option>
                        </optgroup>

                        <optgroup label="Electronics">
                            <option value="7"> Laptops </option>
                            <option value="14"> Smartphones </option>
                            <option value="17"> Tablets </option>
                            <option value="11"> Mobile Accessories </option>
                        </optgroup>

                        <optgroup label="Home & Kitchen">
                            <option value="3"> Furniture </option>
                            <option value="5"> Home Decoration </option>
                            <option value="6"> Kitchen Accessories </option>
                            <option value="4"> Groceries </option>
                        </optgroup>

                        <optgroup label="Other">
                            <option value="15"> Sports Accessories </option>
                            <option value="19"> Vehicle </option>
                            <option value="12"> Motorcycle </option>
                        </optgroup>
                    </select>
                </div>


                {/* brand?: string; */}
                <div className="form-group" >
                    <label htmlFor="brand" > Product brand (max 50 characters)<span className="required-text">*</span> </label>
                    <input type="text" id="brand" name="brand" placeholder="The products brand..." maxLength={50} />
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


                <h3 className="form-subheader"> Pricing & Stock </h3>
                {/* ========== ========== ========== ========== ========== ========== */}


                {/* price: number; */}
                <div className="form-group">
                    <label htmlFor="price">Price in euros (€)<span className="required-text">*</span> </label>
                    <input type="number" id="price" name="price" placeholder="Product price..." min={1} required />
                </div>


                {/* discountPercentage?: number; */}
                <div className="form-group">
                    <label htmlFor="discountPercentage" > Discount in percent (%) </label>
                    <input type="number" id="discountPercentage" name="discountPercentage" placeholder="Product discount..." min={1} max={100} />
                </div>


                {/* stock?: number; */}
                <div className="form-group" >
                    <label htmlFor="stock" > Products in stock </label>
                    <input type="number" id="stock" name="stock" placeholder="Number of products in stock..." min={0} />
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


                <h3 className="form-subheader"> Physical Information </h3>
                {/* ========== ========== ========== ========== ========== ========== */}


                {/* weight?: number; */}
                {/* Unknown weight unit used in API. We say it's kilograms */}
                <div className="form-group" >
                    <label htmlFor="weight" > Product weight in kilograms (kg) </label>
                    <input type="number" id="weight" name="weight" placeholder="The products weight..." min={0} />
                </div>


                {/* dimensions?: {
                    width: number;
                    height: number;
                    depth: number;
                }; */}
                {/* Unkown length unit used in API. We say it's centimeters */}
                <fieldset className="dimensions-fieldset form-group">
                    <legend>Product dimensions</legend>

                    <label htmlFor="width" > Width in centimeters (cm) </label>
                    <input type="number" id="width"  name="width"  placeholder="Product width..."  min={1} />

                    <label htmlFor="height" > Height in centimeters (cm) </label>
                    <input type="number" id="height" name="height" placeholder="Product height..." min={1} />

                    <label htmlFor="depth" > Depth in centimeters (cm) </label>
                    <input type="number" id="depth"  name="depth"  placeholder="Product depth..."  min={1} />
                </fieldset>


                <h3 className="form-subheader"> Reviews </h3>
                {/* ========== ========== ========== ========== ========== ========== */}


                {/* rating?: number; */}
                {/* <div className="form-group" >
                    <label htmlFor="rating" > Rating from 1-5 </label>
                    <input type="range" id="rating" name="rating" placeholder="Rating (1-5)" min={1} max={5} />
                </div> */}

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

                    <label htmlFor="review-comment"> Comment (max 250 characters) </label>
                    <textarea id="review-comment" name="review-comment" placeholder="Leave a comment..."  maxLength={250} rows={3} />

                    <label htmlFor="review-date"> Review date </label>
                    <input type="date" id="review-date" name="review-date" />

                    <label htmlFor="reviewer-name"> Name of reviewer </label>
                    <input type="text" id="reviewer-name" name="reviewer-name" placeholder="Your name..." />

                    <label htmlFor="reviewer-email"> Email of reviewer </label>
                    <input type="email" id="reviewer-email" name="reviewer-email" placeholder="Your email address..." />
                </fieldset>


                <h3 className="form-subheader"> Shipping & Warranty etc. </h3>
                {/* ========== ========== ========== ========== ========== ========== */}


                {/* minimumOrderQuantity?: number; */}
                <div className="form-group" >
                    <label htmlFor="min-order-quantity" > Minimum order quantity </label>
                    <input type="number" id="min-order-quantity" name="min-order-quantity" placeholder="Minimum amount of products ordered..." min={1} />
                </div>


                {/* shippingInformation?: string; */}
                <div className="form-group" >
                    <label htmlFor="shippingInfo" > Shipping information </label>
                    <input type="text" id="shippingInfo" name="shippingInfo" placeholder="Information on how the product ships..." />
                </div>


                {/* returnPolicy?: string; */}
                <div className="form-group" >
                    <label htmlFor="return-policy"> Return policy </label>

                    <select id="return-policy" name="return-policy" defaultValue="default">
                        <option value="default" disabled > Select return policy </option>
                        <option value="policy-none" >   No return policy </option>
                        <option value="policy-7" >  7 days return policy </option>
                        <option value="policy-30"> 30 days return policy </option>
                        <option value="policy-60"> 60 days return policy </option>
                        <option value="policy-90"> 90 days return policy </option>
                    </select>
                </div>


                {/* warrantyInformation?: string; */}
                <div className="form-group" >
                    <label htmlFor="warrantyInfo" > Warranty information </label>
                    <input type="text" id="warrantyInfo" name="warrantyInfo" placeholder="Information on the products warranty..." />
                </div>


                <h3 className="form-subheader"> Images & Thumbnail </h3>
                {/* ========== ========== ========== ========== ========== ========== */}


                {/* images: string[]; */}
                <fieldset className="form-group" >
                    <legend> Add 1-6 images </legend>

                    <label htmlFor="image1"> Product image 1 </label>
                    <input type="url" id="image1" name="image1" placeholder="Paste link to image 1..." />

                    <label htmlFor="image2"> Product image 2 </label>
                    <input type="url" id="image2" name="image2" placeholder="Paste link to image 2..." />

                    <label htmlFor="image3"> Product image 3 </label>
                    <input type="url" id="image3" name="image3" placeholder="Paste link to image 3..." />

                    <label htmlFor="image4"> Product image 4 </label>
                    <input type="url" id="image4" name="image4" placeholder="Paste link to image 4..." />

                    <label htmlFor="image5"> Product image 5 </label>
                    <input type="url" id="image5" name="image5" placeholder="Paste link to image 5..." />

                    <label htmlFor="image6"> Product image 6 </label>
                    <input type="url" id="image6" name="image6" placeholder="Paste link to image 6..." />
                </fieldset>


                {/* thumbnail: string; */}
                <div className="form-group" >
                    <label htmlFor="thumbnail" > Product thumbnail<span className="required-text">*</span> </label>
                    <input type="url" id="thumbnail" name="thumbnail" placeholder="Paste link to small thumbnail image..." required />
                </div>


                <span className="form-subheader"> {/* Used for seperation line */} </span>
                {/* ========== ========== ========== ========== ========== ========== */}


                {/* The SKU-code and meta-data are auto-generated */}

                {/* sku?: string; */}

                {/* meta: {
                    createdAt: string;
                    updatedAt: string;
                    barcode?: string;
                    qrCode?: string;
                    };
                */}


                {/* SUBMIT AND RESET BUTTONS */}
                {/* <input type="reset" className="form-btn" value="Reset form" /> */}
                <input type="submit" className="form-btn" value="Submit" />

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