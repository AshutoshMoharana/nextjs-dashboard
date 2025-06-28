// Correct Next.js page component signature
interface PageProps {
  params?: any;
  searchParams?: any;
}

export default function Page({ params, searchParams }: PageProps) {
  return (
    <div>
      <p>Invoices Page</p>
    </div>
  );
}