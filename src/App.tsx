import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ImageCarousel } from "@/components/ImageCarousel";
import { ContactForm } from "@/components/ContactForm";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Numbers } from "@/components/Numbers";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { SuccessPage } from "@/components/SuccessPage";
import PrivacyPage from "./PrivacyPage";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ImageCarousel />
      <ContactForm />
      <About />
      <Services />
      <Numbers />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </Router>
  );
};

export default App;
