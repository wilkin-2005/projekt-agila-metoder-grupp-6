"use client";

import { useRouter } from "next/navigation";
import { Plus } from 'lucide-react';

export default function AddProductButton(){
    const router = useRouter();
    return <button onClick={() => {
              router.push("/");
              router.push("/product/add");
            }}><Plus /> Add product</button>
}