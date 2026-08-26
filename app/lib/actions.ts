
// File for Server Actions

"use server";


// Server Actions function for handling the form data from the Edit product form.
export async function editProductAction( formData: FormData )
{
    // console.log(formData);


    const title = formData.get("title") as string;
    // Same with rest of product data
}