import { CurrentFundraising } from '@/sections/CurrentFundraising';
import { Container } from '@/components/Container';
import { getDictionary } from '@/utils/getDictionary';

export default async function Home({ params: { lang } }) {
  const staticPageData = await getDictionary(lang);

  return (
    <>
      {staticPageData && (
        <main className="flex min-h-screen flex-col items-center justify-between">
          <Container>
            <CurrentFundraising lang={lang} />
          </Container>
        </main>
      )}
    </>
  );
}
