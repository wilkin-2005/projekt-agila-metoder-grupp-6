import Link from "next/link";
import ErrorPage from "./components/error-page/ErrorPage";

export default function NotFound() {
  return (
    <ErrorPage
      title="Page not found"
      message="The page you are looking for does not exist."
      action={<Link className="error-page__link" href="/">Back to products</Link>}
    />
  );
}
