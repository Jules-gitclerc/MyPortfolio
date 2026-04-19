import { Nav } from '@/components/nav';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Services } from '@/components/services';
import { Stack } from '@/components/stack';
import { Work } from '@/components/work';
import { Education } from '@/components/education';
import { Projects } from '@/components/projects';
import { Extras } from '@/components/extras';
import { Contact } from '@/components/contact';
import { BackToTop } from '@/components/back-to-top';
import { CursorFollower } from '@/components/ui/cursor-follower';
import { ScrollProgress } from '@/components/ui/scroll-progress';
import { Footer } from '@/components/footer';

export default function Page() {
  return (
    <>
      <Nav />
      <main id="main" className="relative z-10">
        <Hero />
        <About />
        <Services />
        <Stack />
        <Work />
        <Education />
        <Projects />
        <Extras />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <CursorFollower />
      <ScrollProgress />
    </>
  );
}
