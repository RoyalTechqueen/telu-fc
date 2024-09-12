import Hero from "./hero";
import Header from "./header";
import About from "./about";
import Teams from "./team";
import Players from "./playerssection";
import Gallery from "./gallery";
import Events from "./events";
import ContactForm from "./contact";
import Footer from "./footer";

export default function Home() {
  return (
    <div className="bg-yellow-50">
      <Header />
      <Hero />
      <Events />
      <About />
      <Teams />
      <Players />
      <Gallery />
      <ContactForm />
      <Footer />
    </div>
  );
}
