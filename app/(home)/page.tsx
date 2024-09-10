import Hero from "./hero";
import Header from "./header";
import About from "./about";
import Programs from "./programs";
import Teams from "./team";
import Gallery from "./gallery";
import ContactForm from "./contact";
import Footer from "./footer";

export default function Home() {
  return (
    <div className="bg-yellow-50">
      <Header />
      <Hero />
      <About />
      <Programs />
      <Teams />
      <Gallery />
      <ContactForm />
      <Footer />
    </div>
  );
}
