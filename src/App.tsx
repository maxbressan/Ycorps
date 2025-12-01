import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ImageCarousel } from "@/components/ImageCarousel";
import { ContactForm } from "@/components/ContactForm";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Advantages } from "@/components/Advantages";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { SuccessPage } from "@/components/SuccessPage";
import PrivacyPage from "./PrivacyPage";
import { CookieConsent } from "@/components/CookieConsent";
import { Linktree } from "@/components/Linktree";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ImageCarousel />
      <About />
      <ContactForm />
      <Services />
      <Advantages />
      <FAQ />
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <CookieConsent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/linktree" element={<Linktree />} />
      </Routes>
    </Router>
  );
};

export default App;
