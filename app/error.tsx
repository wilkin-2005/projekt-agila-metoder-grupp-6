"use client";

import ErrorPage from "./components/error-page/ErrorPage";

export default function Error({
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  return (
    <ErrorPage
      title="Something went wrong"
      message="We could not load this page. Please try again."
      action={<button type="button" className="error-page__button" onClick={() => unstable_retry()}>
        Try again
      </button>}
    />
  );
}
