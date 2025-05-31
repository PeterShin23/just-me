import ContactPage from "@/components/contact/Contact";
import Experience from "@/components/experience/Experience";
import Hero from "@/components/hero/Hero";
import Project from "@/components/projects/Project";

export default function Home() {
  return (
    <div className="mt-24 md:mt-12 lg:mt-12 flex flex-col">
      <Hero />
      <Experience />
      <Project />
      <ContactPage />
    </div>
  );
}
