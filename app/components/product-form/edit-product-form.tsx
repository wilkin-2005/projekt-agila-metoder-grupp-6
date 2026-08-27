
import Form from "next/form";
import "./product-form.css";
import { editProductAction } from "@/app/lib/actions";
import type { Product } from "@/app/types";



// A generic form component compatible with both the Add product-page and Edit product-page.
export default function EditProductForm( {product}:{product: Product} )
{
    // tags: string[] | undefined
    const tags = product.tags;

    /* Array of object containing the values: 
     * rating: number
     * comment: string
     * date: string
     * reviewerName: string
     * reviewerEmail: string
     */
    const reviews = product.reviews;

    return (
        <section aria-labelledby="form-header">

            <Form action={editProductAction} className="product-form" aria-labelledby="form-header" >

                <p> <span className="required-text">*</span>Required fields</p>


                <h3 className="form-subheader"> Basic Information </h3>
                {/* ========== ========== ========== ========== ========== ========== */}


                {/* title: string; */}
                <div className="form-group">
                    <label htmlFor="title"> Title (max 50 characters)<span className="required-text">*</span> </label>
                    <input type="text" id="title" name="title" placeholder="Product title..." defaultValue={product.title}
                        minLength={3} maxLength={50} required autoFocus />
                </div>


                {/* description: string; */}
                <div className="form-group">
                    <label htmlFor="description"> Description (max 250 characters)<span className="required-text">*</span> </label>
                    <textarea id="description" name="description" placeholder="Product description..." defaultValue={product.description}
                        minLength={15} maxLength={250} rows={4} required />
                </div>


                {/* category?: Category; */}
                {/* categoryId: number; */}
                <div className="form-group">
                    <label htmlFor="category"> Category<span className="required-text">*</span> </label>

                    <select id="category" name="categoryId" defaultValue={product.categoryId} required >
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
                    <input type="text" id="brand" name="brand" placeholder="The products brand..." defaultValue={product.brand}
                        minLength={2} maxLength={30} required />
                </div>


                {/* tags?: string[]; */}
                <fieldset className="form-group" >
                    <legend> Add 1-3 tags </legend>

                    <label htmlFor="tag1" > Product tag 1 </label>
                    <input type="text" id="tag1" name="tag1" placeholder="Product tag 1..." defaultValue={ (tags) ? tags[0] : "" } maxLength={30} />

                    <label htmlFor="tag2" > Product tag 2 </label>
                    <input type="text" id="tag2" name="tag2" placeholder="Product tag 2..." defaultValue={ (tags) ? tags[1] : "" } maxLength={30} />

                    <label htmlFor="tag3" > Product tag 3 </label>
                    <input type="text" id="tag3" name="tag3" placeholder="Product tag 3..." defaultValue={ (tags) ? tags[2] : "" } maxLength={30} />
                </fieldset>


                <h3 className="form-subheader"> Pricing & Stock </h3>
                {/* ========== ========== ========== ========== ========== ========== */}


                {/* price: number; */}
                <div className="form-group">
                    <label htmlFor="price">Price in euros (€)<span className="required-text">*</span> </label>
                    <input type="number" id="price" name="price"
                        placeholder="Product price..." defaultValue={product.price}
                        min={0.1} step={0.01} max={1000000} required />
                    {/* Maximum price: 1 million euros */}
                </div>


                {/* discountPercentage?: number; */}
                <div className="form-group">
                    <label htmlFor="discountPercentage" > Discount in percent (%) </label>
                    <input type="number" id="discountPercentage" name="discountPercentage" min={1} max={100} step={0.01}
                        placeholder="Product discount..." defaultValue={product.discountPercentage} />
                </div>


                {/* stock?: number; */}
                <div className="form-group" >
                    <label htmlFor="stock" > Products in stock<span className="required-text">*</span> </label>
                    <input type="number" id="stock" name="stock" min={0} max={1000000} required
                        placeholder="Number of products in stock..." defaultValue={product.stock} />
                    {/* Maximum allowed stock: 1 million products */}
                </div>


                {/* availabilityStatus: string */}
                <div className="form-group" >
                    {/* Availability information should propably be calculated automatically from the stock number. */}
                    <label htmlFor="availability" > Product availability </label>

                    <select id="availability" name="availabilityStatus" defaultValue={product.availabilityStatus} >
                        <option value="" disabled   > Set availability... </option>
                        <option value="In Stock"    > In Stock            </option>
                        <option value="Low Stock"   > Low Stock           </option>
                        <option value="Out of Stock"> Out of Stock        </option>
                    </select>
                </div>


                <h3 className="form-subheader"> Physical Information </h3>
                {/* ========== ========== ========== ========== ========== ========== */}


                {/* weight?: number; */}
                {/* Unknown weight unit used in API. We say it's kilograms */}
                <div className="form-group" >
                    <label htmlFor="weight" > Product weight in kilograms (kg) </label>
                    <input type="number" id="weight" name="weight" min={0} max={200000000}
                        placeholder="The products weight..." defaultValue={product.weight} />
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
                    <input type="number" id="width"  name="width"  placeholder="Product width..." defaultValue={product.dimensions?.width}  min={1} step={0.01} />

                    <label htmlFor="height" > Height in centimeters (cm) </label>
                    <input type="number" id="height" name="height" placeholder="Product height..." defaultValue={product.dimensions?.height} min={1} step={0.01} />

                    <label htmlFor="depth" > Depth in centimeters (cm) </label>
                    <input type="number" id="depth"  name="depth"  placeholder="Product depth..." defaultValue={product.dimensions?.depth}  min={1} step={0.01} />
                </fieldset>


                <h3 className="form-subheader"> Reviews </h3>
                {/* ========== ========== ========== ========== ========== ========== */}


                {/* rating?: number; */}
                <div className="form-group" aria-readonly >
                    <label htmlFor="productRating" > Rating of product, from 1-5 <span className="minor-info"> (Read-only)</span> </label>
                    <input type="number" id="productRating" name="rating" placeholder="Rating (1-5)" defaultValue={product.rating}
                        readOnly min={1} max={5} step={0.01} />
                </div>

                {/* reviews?: {
                        rating: number;
                        comment: string;
                        date: string;
                        reviewerName: string;
                        reviewerEmail: string;
                    }[];
                */}
                <details name="review" >
                    <summary> { (reviews) ? `Review 1 by ${reviews[0].reviewerName}` : "Product Review 1" } </summary>

                    <fieldset className="form-group" aria-readonly >
                        <legend> Product Review 1 <span className="minor-info"> (Read-only)</span> </legend>
                        {/* Maybe doesn't make sense that the admin can add review information to a products. Maybe remove later? */}

                        <label htmlFor="review-rating-1"> Rating (1-5) </label>
                        <input type="number" id="review-rating-1" name="rating" min="1" max="5" readOnly
                            placeholder="Your rating..." value={ (reviews) ? reviews[0].rating : "" } />

                        <label htmlFor="review-comment-1"> Comment (max 250 characters) </label>
                        <textarea id="review-comment-1" name="comment" maxLength={250} rows={3} readOnly
                            placeholder="Leave a comment..." value={ (reviews) ? reviews[0].comment : "" } />

                        <label htmlFor="review-date-1"> Review date </label>
                        <input type="text" id="review-date-1" name="date" readOnly
                            value={ (reviews) ? reviews[0].date : "" } />

                        <label htmlFor="reviewer-name-1"> Name of reviewer </label>
                        <input type="text" id="reviewer-name-1" name="reviewerName" placeholder="Your name..." readOnly
                            value={ (reviews) ? reviews[0].reviewerName : "" } />

                        <label htmlFor="reviewer-email-1"> Email of reviewer </label>
                        <input type="email" id="reviewer-email-1" name="reviewerEmail" placeholder="Your email address..." readOnly
                            value={ (reviews) ? reviews[0].reviewerEmail : "" } />
                    </fieldset>
                </details>

                <details name="review" >
                    <summary> { (reviews) ? `Review 2 by ${reviews[1].reviewerName}` : "Product Review 2" } </summary>

                    <fieldset className="form-group" aria-readonly >
                        <legend> Product Review 2 <span className="minor-info"> (Read-only)</span> </legend>
                        {/* Maybe doesn't make sense that the admin can add review information to a products. Maybe remove later? */}

                        <label htmlFor="review-rating-2"> Rating (1-5) </label>
                        <input type="number" id="review-rating-2" name="rating" min="1" max="5" readOnly
                            placeholder="Your rating..." value={ (reviews) ? reviews[1].rating : "" } />

                        <label htmlFor="review-comment-2"> Comment (max 250 characters) </label>
                        <textarea id="review-comment-2" name="comment" maxLength={250} rows={3} readOnly
                            placeholder="Leave a comment..." value={ (reviews) ? reviews[1].comment : "" } />

                        <label htmlFor="review-date-2"> Review date </label>
                        <input type="text" id="review-date-2" name="date" readOnly
                            value={ (reviews) ? reviews[1].date : "" } />

                        <label htmlFor="reviewer-name-2"> Name of reviewer </label>
                        <input type="text" id="reviewer-name-2" name="reviewerName" placeholder="Your name..." readOnly
                            value={ (reviews) ? reviews[1].reviewerName : "" } />

                        <label htmlFor="reviewer-email-2"> Email of reviewer </label>
                        <input type="email" id="reviewer-email-2" name="reviewerEmail" placeholder="Your email address..." readOnly
                            value={ (reviews) ? reviews[1].reviewerEmail : "" } />
                    </fieldset>
                </details>

                <details name="review" >
                    <summary> { (reviews) ? `Review 3 by ${reviews[2].reviewerName}` : "Product Review 3" } </summary>

                    <fieldset className="form-group" aria-readonly >
                        <legend> Product Review 3 <span className="minor-info"> (Read-only)</span> </legend>
                        {/* Maybe doesn't make sense that the admin can add review information to a products. Maybe remove later? */}

                        <label htmlFor="review-rating-3"> Rating (1-5) </label>
                        <input type="number" id="review-rating-3" name="rating" min="1" max="5" readOnly
                            placeholder="Your rating..." value={ (reviews) ? reviews[2].rating : "" } />

                        <label htmlFor="review-comment-3"> Comment (max 250 characters) </label>
                        <textarea id="review-comment-3" name="comment" maxLength={250} rows={3} readOnly
                            placeholder="Leave a comment..." value={ (reviews) ? reviews[2].comment : "" } />

                        <label htmlFor="review-date-3"> Review date </label>
                        <input type="text" id="review-date-3" name="date" readOnly
                            value={ (reviews) ? reviews[2].date : "" } />

                        <label htmlFor="reviewer-name-3"> Name of reviewer </label>
                        <input type="text" id="reviewer-name-3" name="reviewerName" placeholder="Your name..." readOnly
                            value={ (reviews) ? reviews[2].reviewerName : "" } />

                        <label htmlFor="reviewer-email-3"> Email of reviewer </label>
                        <input type="email" id="reviewer-email-3" name="reviewerEmail" placeholder="Your email address..." readOnly
                            value={ (reviews) ? reviews[2].reviewerEmail : "" } />
                    </fieldset>
                </details>

                {/* Are there more than 3 reviews on any of the products from the API? */}


                <h3 className="form-subheader"> Shipping & Warranty etc. </h3>
                {/* ========== ========== ========== ========== ========== ========== */}


                {/* minimumOrderQuantity?: number; */}
                <div className="form-group" >
                    <label htmlFor="minOrderQuantity" > Minimum order quantity </label>
                    <input type="number" id="minOrderQuantity" name="minimumOrderQuantity" placeholder="Minimum amount of products per order..." defaultValue={product.minimumOrderQuantity} min={1} max={999} />
                </div>


                {/* shippingInformation?: string; */}
                <div className="form-group" >
                    <label htmlFor="shippingInfo" > Shipping information (max 150 characters) </label>
                    <textarea id="shippingInfo" name="shippingInformation" placeholder="Information on how the product ships..." defaultValue={product.shippingInformation} maxLength={150} rows={2} />
                </div>


                {/* returnPolicy?: string; */}
                <div className="form-group" >
                    <label htmlFor="returnPolicy"> Return policy </label>

                    <select id="returnPolicy" name="returnPolicy" defaultValue={product.returnPolicy || ""} >
                        <option value="" disabled       >   Select return policy...   </option>
                        <option value="No return policy"      >      No return policy </option>
                        <option value="7 days return policy"  >  7 days return policy </option>
                        <option value="30 days return policy" > 30 days return policy </option>
                        <option value="60 days return policy" > 60 days return policy </option>
                        <option value="90 days return policy" > 90 days return policy </option>
                    </select>
                </div>


                {/* warrantyInformation?: string; */}
                <div className="form-group" >
                    <label htmlFor="warrantyInfo" > Warranty information </label>

                    <select id="warrantyInfo" name="warrantyInformation" defaultValue={product.warrantyInformation || ""} >
                        <option value="" disabled > Select warranty length... </option>

                        <option value="No warranty" > No warranty </option>
                        <option value="1 week warranty" > 1 week warranty </option>

                        <optgroup label="Months">
                            <option value="1 month warranty"  > 1 month warranty </option>
                            <option value="3 months warranty" > 3 months warranty </option>
                            <option value="6 months warranty" > 6 months warranty </option>
                        </optgroup>

                        <optgroup label="Years">
                            <option value="1 year warranty" > 1 year warranty </option>
                            <option value="2 year warranty" > 2 year warranty </option>
                            <option value="3 year warranty" > 3 year warranty </option>
                            <option value="5 year warranty" > 5 year warranty </option>
                        </optgroup>

                        <option value="Lifetime warranty" > Lifetime warranty </option>
                    </select>
                </div>


                <h3 className="form-subheader"> Images & Thumbnail </h3>
                {/* ========== ========== ========== ========== ========== ========== */}


                {/* images: string[]; */}
                <fieldset className="form-group" >
                    <legend> Add 1-6 images <span className="minor-info"> (preferably 1000 x 1000 pixels) </span> </legend>

                    <p></p>

                    <label htmlFor="image1"> Product image 1 </label>
                    <input type="url" id="image1" name="image1" placeholder="Paste link to image 1..." maxLength={2000} defaultValue={product.images[0]} />

                    <label htmlFor="image2"> Product image 2 </label>
                    <input type="url" id="image2" name="image2" placeholder="Paste link to image 2..." maxLength={2000} defaultValue={product.images[1]} />

                    <label htmlFor="image3"> Product image 3 </label>
                    <input type="url" id="image3" name="image3" placeholder="Paste link to image 3..." maxLength={2000} defaultValue={product.images[2]} />

                    <label htmlFor="image4"> Product image 4 </label>
                    <input type="url" id="image4" name="image4" placeholder="Paste link to image 4..." maxLength={2000} defaultValue={product.images[3]} />

                    <label htmlFor="image5"> Product image 5 </label>
                    <input type="url" id="image5" name="image5" placeholder="Paste link to image 5..." maxLength={2000} defaultValue={product.images[4]} />

                    <label htmlFor="image6"> Product image 6 </label>
                    <input type="url" id="image6" name="image6" placeholder="Paste link to image 6..." maxLength={2000} defaultValue={product.images[5]} />
                </fieldset>


                {/* thumbnail: string; */}
                <div className="form-group" >
                    <label htmlFor="thumbnail" > Product thumbnail <span className="minor-info"> (preferably 300 x 300 pixels)</span><span className="required-text">*</span> </label>
                    <input type="url" id="thumbnail" name="thumbnail" placeholder="Paste link to small thumbnail image..." maxLength={2000} required defaultValue={product.thumbnail} />
                </div>


                <h3 className="form-subheader"> Other Information </h3>
                {/* ========== ========== ========== ========== ========== ========== */}


                {/* The ID-number, SKU-code and meta-data are all auto-generated */}

                {/* id: number; */}
                <div className="form-group" >
                    <label htmlFor="product-id" > Product ID-number <span className="minor-info"> (Read-only)</span> </label>
                    <input type="number" id="product-id" name="id" placeholder="Read-only field for displaying ID" value={product.id} required readOnly />
                </div>


                {/* sku?: string; */}
                <div className="form-group" >
                    <label htmlFor="SKU-code" > Product SKU-code <span className="minor-info"> (Read-only)</span> </label>
                    <input type="text" id="SKU-code" name="sku" placeholder="Read-only field for displaying SKU" maxLength={32} value={product.sku} readOnly />
                </div>


                {/* meta: {
                    createdAt: string;
                    updatedAt: string;
                    barcode?: string;
                    qrCode?: string;
                    };
                */}
                <fieldset className="form-group" aria-readonly>
                    <legend> Product meta-data <span className="minor-info"> (Read-only)</span> </legend>

                    <label htmlFor="created-at" > Product creation date </label>
                    <input type="text" id="created-at"  name="createdAt"  placeholder="Product created on website date" value={product.meta.createdAt} readOnly />

                    <label htmlFor="updated-at" > Last updated date </label>
                    <input type="text" id="updated-at" name="updatedAt" placeholder="Product updated on website" value={product.meta.updatedAt} readOnly />

                    <label htmlFor="barcode" > Product barcode </label>
                    <input type="number" id="barcode"  name="barcode"  placeholder="Read-only field for product barcode" defaultValue={product.meta.barcode}  readOnly />

                    <label htmlFor="qr-code" > Product QR-code </label>
                    <input type="url" id="qr-code"  name="qrCode"  placeholder="Read-only field for displaying image link to product QR-code" defaultValue={product.meta.qrCode}  readOnly />
                </fieldset>


                <span className="form-subheader"> {/* Seperation line only */} </span>
                {/* ========== ========== ========== ========== ========== ========== */}


                {/* SUBMIT BUTTON */}
                <input type="submit" className="form-btn" value="Edit product" />

            </Form>
        </section>
    );
}