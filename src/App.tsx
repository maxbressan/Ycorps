import { LanguageProvider } from "@/i18n/LanguageContext";
import { FAQ } from "@/components/FAQ";
import { DiscoveryLayout, DiscoveryHeader, DiscoveryFooter, Languages } from "@/components/DiscoverySite";
import { DiscoveryHome } from "@/components/DiscoverySite";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { SuccessPage } from "@/components/SuccessPage";
import PrivacyPage from "./PrivacyPage";
import NoticiasPage from "./NoticiasPage";
import NoticiaDetailPage from "@/pages/NoticiaDetailPage";
import { Linktree } from "@/components/Linktree";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { AppLoginPage } from "@/pages/AppLoginPage";
import { AppDashboardPage } from "@/pages/AppDashboardPage";

const HomePage = DiscoveryHome;

const App = () => {
  return (
    <LanguageProvider><Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/noticias" element={<NoticiasPage />} />
          <Route path="/noticias/:slug" element={<NoticiaDetailPage />} />
          <Route path="/faq" element={<DiscoveryLayout><DiscoveryHeader/><div className="secondary-language-bar"><Languages/></div><FAQ/><div className="discovery-news-footer"><DiscoveryFooter/></div></DiscoveryLayout>} />
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
    </Router></LanguageProvider>
  );
};

export default App;
