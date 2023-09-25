import { Container } from '@/components/Container';
import { SectionTitle } from '@/components/SectionTitle';
import { TabLinks } from '@/components/TabLinks';
import { Tabs } from '@/components/Tabs';

export const Donate = ({ data }) => {
  const { title, tabs } = data;

  return (
    <section id="donate" className="w-screen bg-white">
      <Container>
        <div className="flex flex-col gap-6 xl:gap-8 justify-center items-center">
          <SectionTitle title={title} />
          <div className="flex flex-col gap-6">
            <TabLinks tabs={tabs} />
            <Tabs tabs={tabs} />
          </div>
        </div>
      </Container>
    </section>
  );
};
