import { Nav } from '@/components/nav';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Services } from '@/components/services';
import { Stack } from '@/components/stack';
import { Work } from '@/components/work';
import { Projects } from '@/components/projects';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Page() {
  return (
    <>
      <Nav />
      <main className="relative z-10">
        <Hero />
        <About />
        <Services />
        <Stack />
        <Work />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
