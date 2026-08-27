
import { revalidatePath } from "next/cache";
import { redirect } from "next/dist/server/api-utils";

// File for Server Actions
"use server";



// Maybe import from "products.ts" instead?
const BASE_URL = 'http://localhost'
const PORT = 4000


// Server Actions function for handling the form data from the Edit product form.
export async function editProductAction( formData: FormData )
{
    console.log(formData);

    // "IMPORTING" DATA FROM FORMDATA

    // Basic Information
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const categoryId = formData.get("categoryId") as string;
    const brand = formData.get("brand") as string;
    const tag1 = formData.get("tag1") as string;
    const tag2 = formData.get("tag2") as string;
    const tag3 = formData.get("tag3") as string;

    // Pricing & Stock
    const price = formData.get("price") as string;
    const discountPercentage = formData.get("discountPercentage") as string;
    const stock = formData.get("stock") as string;
    const availabilityStatus = formData.get("availabilityStatus") as string;

    // Physical Information
    const weight = formData.get("weight") as string;
    const width = formData.get("width") as string;
    const height = formData.get("height") as string;
    const depth = formData.get("depth") as string;

    // Reviews
    const rating = formData.get("rating") as string;
        //TODO: add more data for the reviews

    // Shipping & Warranty etc.
    const minimumOrderQuantity = formData.get("minimumOrderQuantity") as string;
    const shippingInformation = formData.get("shippingInformation") as string;
    const returnPolicy = formData.get("returnPolicy") as string;
    const warrantyInformation = formData.get("warrantyInformation") as string;

    // Images & Thumbnail
    const image1 = formData.get("image1") as string;
    const image2 = formData.get("image2") as string;
    const image3 = formData.get("image3") as string;
    const image4 = formData.get("image4") as string;
    const image5 = formData.get("image5") as string;
    const image6 = formData.get("image6") as string;
    const thumbnail = formData.get("thumbnail") as string;

    // Other Information
    const id = formData.get("id") as string;
    const sku = formData.get("sku") as string;
    const createdAt = formData.get("createdAt") as string;
    const updatedAt = formData.get("updatedAt") as string;
    const barcode = formData.get("barcode") as string;
    const qrCode = formData.get("qrCode") as string;



    // USING DATA TO EDIT PRODUCT
    const now = new Date().toISOString();

    // New edited product to be POSTed to and saved in the API.
    const editedProduct = {
        title,
        description,
        categoryId: parseInt(categoryId, 10),
        brand,
        tags: [tag1, tag2, tag3],

        price: parseInt(price, 10),
        discountPercentage: parseInt(discountPercentage, 10),
        stock: parseInt(stock, 10),
        availabilityStatus,

        weight: parseInt(weight, 10),
        dimensions: {
            width: parseInt(width, 10),
            height: parseInt(height, 10),
            depth: parseInt(depth, 10)
        },

        rating: parseInt(rating, 10),
            //TODO: add more data for the reviws to be saved

        minimumOrderQuantity: parseInt(minimumOrderQuantity, 10),
        shippingInformation,
        returnPolicy,
        warrantyInformation,

        images: [image1, image2, image3, image4, image5, image6],
        thumbnail,

        id: parseInt(id, 10),
        sku,
        meta: {
            // createdAt,
            updatedAt: now,
            barcode,
            qrCode
        }
    };


    // POSTing the edited product to the API to be saved on server

    // http://localhost:4000/products
    const response = await fetch(
        `${BASE_URL}:${PORT}/products`, // ${id}` ??
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(editedProduct)
        }
    );
    // Should have try/catch on above

    // revalidatePath("/");
    // redirect("/");
}