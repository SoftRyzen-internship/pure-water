import { getDictionary } from '@/utils/getDictionary';

export default async function Home({ params }) {
  const lang = await getDictionary(params.lang);

  return (
    <>
      {lang && (
        <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
      )}
    </>
  );
}
