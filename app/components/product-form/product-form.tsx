
import Form from "next/form";
import "./product-form.css";
// import { Product, Category } from "@/app/types";



// A generic form component compatible with both the Add product-page and Edit product-page.
export default function ProductForm()
{

    return (
        <section aria-labelledby="form-header">
            <h2 id="form-header" > Add/Edit product </h2>

            <Form action="" className="product-form" aria-labelledby="form-header" >

                <p> <span className="required-text">*</span>Required fields</p>


                <h3 className="form-subheader"> Basic Information </h3>
                {/* ========== ========== ========== ========== ========== ========== */}


                {/* id: number; */}
                {/* The ID-number is auto-generated */}

                {/* title: string; */}
                <div className="form-group">
                    <label htmlFor="title"> Title (max 50 characters)<span className="required-text">*</span> </label>
                    <input type="text" id="title" name="title" placeholder="Product title..." minLength={3} maxLength={50} required autoFocus />
                </div>


                {/* description: string; */}
                <div className="form-group">
                    <label htmlFor="description"> Description (max 250 characters)<span className="required-text">*</span> </label>
                    <textarea id="description" name="description" placeholder="Product description..." minLength={15} maxLength={250} rows={4} required />
                </div>


                {/* category?: Category; */}
                {/* categoryId: number; */}
                <div className="form-group">
                    <label htmlFor="category"> Category<span className="required-text">*</span> </label>

                    <select id="category" name="categoryId" defaultValue="" required >
                        <option value="" disabled > Choose category... </option>

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
                    <label htmlFor="brand" > Brand (max 30 characters)<span className="required-text">*</span> </label>
                    <input type="text" id="brand" name="brand" placeholder="The products brand..." minLength={2} maxLength={30} required />
                </div>


                {/* tags?: string[]; */}
                <fieldset className="form-group" >
                    <legend> Add 1-3 tags </legend>

                    <label htmlFor="tag1" > Product tag 1 </label>
                    <input type="text" id="tag1" name="tag1" placeholder="Product tag 1..." maxLength={30} />

                    <label htmlFor="tag2" > Product tag 2 </label>
                    <input type="text" id="tag2" name="tag2" placeholder="Product tag 2..." maxLength={30} />

                    <label htmlFor="tag3" > Product tag 3 </label>
                    <input type="text" id="tag3" name="tag3" placeholder="Product tag 3..." maxLength={30} />
                </fieldset>


                <h3 className="form-subheader"> Pricing & Stock </h3>
                {/* ========== ========== ========== ========== ========== ========== */}


                {/* price: number; */}
                <div className="form-group">
                    <label htmlFor="price">Price in euros (€)<span className="required-text">*</span> </label>
                    <input type="number" id="price" name="price" placeholder="Product price..." min={0.1} step={0.01} max={1000000} required />
                    {/* Maximum price: 1 million euros */}
                </div>


                {/* discountPercentage?: number; */}
                <div className="form-group">
                    <label htmlFor="discountPercentage" > Discount in percent (%) </label>
                    <input type="number" id="discountPercentage" name="discountPercentage" placeholder="Product discount..." min={1} max={100} />
                </div>


                {/* stock?: number; */}
                <div className="form-group" >
                    <label htmlFor="stock" > Products in stock<span className="required-text">*</span> </label>
                    <input type="number" id="stock" name="stock" placeholder="Number of products in stock..." min={0} max={1000000} required />
                    {/* Maximum allowed stock: 1 million products */}
                </div>


                {/* availabilityStatus: string */}
                <div className="form-group" >
                    {/* Availability information should propably be calculated automatically from the stock number. */}
                    <label htmlFor="availability" > Product availability </label>

                    <select id="availability" name="availabilityStatus" defaultValue="" >
                        <option value="" disabled   > Set availability...  </option>
                        <option value="in-stock"    > In Stock             </option>
                        <option value="low-stock"   > Low Stock            </option>
                        <option value="out-of-stock"> Out of Stock         </option>
                    </select>
                </div>


                <h3 className="form-subheader"> Physical Information </h3>
                {/* ========== ========== ========== ========== ========== ========== */}


                {/* weight?: number; */}
                {/* Unknown weight unit used in API. We say it's kilograms */}
                <div className="form-group" >
                    <label htmlFor="weight" > Product weight in kilograms (kg) </label>
                    <input type="number" id="weight" name="weight" placeholder="The products weight..." min={0} max={200000000} />
                    {/* Maximum allowed weight: 200 million kilogram = 200 000 metric tons. About the weight of the largest types of oil tankers :) */}
                </div>


                {/* dimensions?: {
                    width: number;
                    height: number;
                    depth: number;
                }; */}
                {/* Unkown length unit used in API. We say it's centimeters */}
                <fieldset className="dimensions-fieldset form-group">
                    <legend> Product dimensions </legend>

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
                    <label htmlFor="productRating" > Rating of product, from 1-5 </label>
                    <input type="range" id="productRating" name="rating" placeholder="Rating (1-5)" min={1} max={5} step={0.1} />
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
                    <legend> Product Review </legend>
                    {/* Maybe doesn't make sense that the admin can add review information to a products. Maybe remove later? */}

                    <label htmlFor="review-rating"> Rating (1-5) </label>
                    <input type="number" id="review-rating" name="rating" min="1" max="5" placeholder="Your rating..." />

                    <label htmlFor="review-comment"> Comment (max 250 characters) </label>
                    <textarea id="review-comment" name="comment" placeholder="Leave a comment..."  maxLength={250} rows={3} />

                    <label htmlFor="review-date"> Review date </label>
                    <input type="date" id="review-date" name="date" />

                    <label htmlFor="reviewer-name"> Name of reviewer </label>
                    <input type="text" id="reviewer-name" name="reviewerName" placeholder="Your name..." />

                    <label htmlFor="reviewer-email"> Email of reviewer </label>
                    <input type="email" id="reviewer-email" name="reviewerEmail" placeholder="Your email address..." />
                </fieldset>


                <h3 className="form-subheader"> Shipping & Warranty etc. </h3>
                {/* ========== ========== ========== ========== ========== ========== */}


                {/* minimumOrderQuantity?: number; */}
                <div className="form-group" >
                    <label htmlFor="minOrderQuantity" > Minimum order quantity </label>
                    <input type="number" id="minOrderQuantity" name="minimumOrderQuantity" placeholder="Minimum amount of products per order..." min={1} max={999} />
                </div>


                {/* shippingInformation?: string; */}
                <div className="form-group" >
                    <label htmlFor="shippingInfo" > Shipping information (max 150 characters) </label>
                    <textarea id="shippingInfo" name="shippingInformation" placeholder="Information on how the product ships..." maxLength={150} rows={2} />
                </div>


                {/* returnPolicy?: string; */}
                <div className="form-group" >
                    <label htmlFor="returnPolicy"> Return policy </label>

                    <select id="returnPolicy" name="returnPolicy" defaultValue="">
                        <option value="" disabled > Select return policy...  </option>
                        <option value="policy-none" >   No return policy     </option>
                        <option value="policy-7" >  7 days return policy     </option>
                        <option value="policy-30"> 30 days return policy     </option>
                        <option value="policy-60"> 60 days return policy     </option>
                        <option value="policy-90"> 90 days return policy     </option>
                    </select>
                </div>


                {/* warrantyInformation?: string; */}
                <div className="form-group" >
                    <label htmlFor="warrantyInfo" > Warranty information </label>

                    <select id="warrantyInfo" name="warrantyInformation" defaultValue="" >
                        <option value="" disabled > Select warranty length... </option>

                        <option value="warranty-none" > No warranty </option>
                        <option value="warranty-weeks-1" > 1 week warranty </option>

                        <optgroup label="Months">
                            <option value="warranty-months-1" > 1 month warranty </option>
                            <option value="warranty-months-3" > 3 months warranty </option>
                            <option value="warranty-months-6" > 6 months warranty </option>
                        </optgroup>

                        <optgroup label="Years">
                            <option value="warranty-years-1" > 1 year warranty </option>
                            <option value="warranty-years-2" > 2 year warranty </option>
                            <option value="warranty-years-1" > 3 year warranty </option>
                            <option value="warranty-years-5" > 5 year warranty </option>
                        </optgroup>

                        <option value="warranty-lifetime" > Lifetime warranty </option>
                    </select>
                </div>


                <h3 className="form-subheader"> Images & Thumbnail </h3>
                {/* ========== ========== ========== ========== ========== ========== */}


                {/* images: string[]; */}
                <fieldset className="form-group" >
                    <legend> Add 1-6 images <span className="minor-info"> (preferably 1000 x 1000 pixels) </span> </legend>

                    <p></p>

                    <label htmlFor="image1"> Product image 1 </label>
                    <input type="url" id="image1" name="image1" placeholder="Paste link to image 1..." maxLength={2000} />

                    <label htmlFor="image2"> Product image 2 </label>
                    <input type="url" id="image2" name="image2" placeholder="Paste link to image 2..." maxLength={2000} />

                    <label htmlFor="image3"> Product image 3 </label>
                    <input type="url" id="image3" name="image3" placeholder="Paste link to image 3..." maxLength={2000} />

                    <label htmlFor="image4"> Product image 4 </label>
                    <input type="url" id="image4" name="image4" placeholder="Paste link to image 4..." maxLength={2000} />

                    <label htmlFor="image5"> Product image 5 </label>
                    <input type="url" id="image5" name="image5" placeholder="Paste link to image 5..." maxLength={2000} />

                    <label htmlFor="image6"> Product image 6 </label>
                    <input type="url" id="image6" name="image6" placeholder="Paste link to image 6..." maxLength={2000} />
                </fieldset>


                {/* thumbnail: string; */}
                <div className="form-group" >
                    <label htmlFor="thumbnail" > Product thumbnail <span className="minor-info"> (preferably 300 x 300 pixels)</span><span className="required-text">*</span> </label>
                    <input type="url" id="thumbnail" name="thumbnail" placeholder="Paste link to small thumbnail image..." maxLength={2000} required />
                </div>


                <span className="form-subheader"> {/* Used only for seperation line */} </span>
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


                {/* SUBMIT BUTTON */}
                <input type="submit" className="form-btn" value="Submit" />
                {/* Submit button should say "Create" or "Edit" or something simular when used on their respective pages */}

            </Form>
        </section>
    );
}