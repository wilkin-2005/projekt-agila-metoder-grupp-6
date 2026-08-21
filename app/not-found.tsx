import Link from "next/link";

export default function NotFound() {
  return (
    <main role="alert" className="centered-section">
      <h1>Page not found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link href="/">Back to products</Link>
    </main>
  );
}
