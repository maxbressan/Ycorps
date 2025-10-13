import { Header } from "@/components/Header";
import { PrivacyPolicy } from "@/components/PrivacyPolicy";
import { Footer } from "@/components/Footer";

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PrivacyPolicy />
      <Footer hideTopShadow={true} />
    </div>
  );
};

export default PrivacyPage;
