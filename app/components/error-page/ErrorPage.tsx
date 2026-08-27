import "./ErrorPage.css";

type ErrorPageProps = {
  title: string;
  message: string;
  action: React.ReactNode;
};

export default function ErrorPage({ title, message, action }: ErrorPageProps) {
  return (
    <main role="alert" className="error-page centered-section">
      <h2>{title}</h2>
      <p>{message}</p>
      {action}
    </main>
  );
}
