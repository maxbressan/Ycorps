import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ImageCarousel } from "@/components/ImageCarousel";
import { ContactForm } from "@/components/ContactForm";
import { About } from "@/components/About";
import { TeamSection } from "@/components/TeamSection";
import { Recognition } from "@/components/Recognition";
import { Services } from "@/components/Services";
import { Advantages } from "@/components/Advantages";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { SuccessPage } from "@/components/SuccessPage";
import PrivacyPage from "./PrivacyPage";
import NoticiasPage from "./NoticiasPage";
import NoticiaDetailPage from "@/pages/NoticiaDetailPage";
import { CookieConsent } from "@/components/CookieConsent";
import { Linktree } from "@/components/Linktree";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { AppLoginPage } from "@/pages/AppLoginPage";
import { AppDashboardPage } from "@/pages/AppDashboardPage";

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
      <TeamSection />
      <Recognition />
      <FAQ />
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <CookieConsent />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/noticias" element={<NoticiasPage />} />
          <Route path="/noticias/:slug" element={<NoticiaDetailPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/linktree" element={<Linktree />} />
          <Route path="/app" element={<AppLoginPage />} />
          <Route
            path="/app/dashboard"
            element={
              <ProtectedRoute>
                <AppDashboardPage />
              </ProtectedRoute>
            }
          />
          <Route path="/app/*" element={<Navigate to="/app/dashboard" replace />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
