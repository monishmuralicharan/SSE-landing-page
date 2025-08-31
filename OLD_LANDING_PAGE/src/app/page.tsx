import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import Benefits from "@/components/Benefits/Benefits";
import Endorsements from "@/components/Endorsements";
import FAQ from "@/components/FAQ";
import WaitlistForm from "@/components/WaitlistForm";
import Container from "@/components/Container";
import Section from "@/components/Section";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <WhyUs />
      <Container>
        <Section
          id="features"
          title="Platform Features"
          description="Experience the cutting-edge technology that powers the social stock exchange."
        >
          <Benefits />
        </Section>
      </Container>
      <Endorsements />
      <Container>
        <FAQ />
      </Container>
      <WaitlistForm />
    </>
  );
};

export default HomePage;
