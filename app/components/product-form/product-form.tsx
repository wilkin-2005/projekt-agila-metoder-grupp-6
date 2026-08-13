
import "./product-form.css";
import { Product } from "@/app/types";

/* Product information atributes:
    price: number;
    discountPercentage?: number;
    rating?: number;
    stock?: number;
    tags?: string[];
    brand?: string;
    sku?: string;
    weight?: number;
    dimensions?: {
        width: number;
        height: number;
        depth: number;
    };
    warrantyInformation?: string;
    shippingInformation?: string;
    availabilityStatus?: string;
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

                {/* TITLE */}
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" placeholder="Product title..." maxLength={50} required autoFocus />
                </div>

                {/* DESCRIPTION */}
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" id="description" name="description" placeholder="Product description..." maxLength={250} />
                </div>

                {/* categoryId: number; */}

                {/* category?: Category; */}
                <div className="form-group">
                    {/* <input type="text" id="category" name="category" placeholder="Product category..." /> */}
                    
                    <label htmlFor="category">Category</label>
                    <select id="category" name="category" defaultValue="default" >
                        <option value="default" disabled > Chose category </option>
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


                <button type="submit" className="btn-submit" >Submit</button>
                    
            </form>

        </section>
    );
}

/* 
                <div className="form-group">
                    <label htmlFor="generic">generic form group</label>
                    <input type="text" id="generic" name="generic" placeholder="..." />
                </div>
 */