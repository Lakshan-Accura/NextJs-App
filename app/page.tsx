'use client';
import Link from "next/link";
import ProductsPage from "./componenets/ProductsPage";

export default function Home() {
  return (
   <main>
    <h1 className="text-2xl font-bold">Hello World</h1>
    <Link href="/users">Users</Link>
    <ProductsPage />
   </main>
  );
}
