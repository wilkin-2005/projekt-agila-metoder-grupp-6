"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main role="alert" className="centered-section">
      <h1>Something went wrong</h1>
      <p>We could not load this page. Please try again.</p>
      <button type="button" onClick={() => reset()}>
        Try again
      </button>
    </main>
  );
}
