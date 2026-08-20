"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function FilterSort() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathName = usePathname();
    const searchStock = searchParams.get(`stock`) || ``;
}