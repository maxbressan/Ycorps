import { Header } from "@/components/Header";
import { PrivacyPolicy } from "@/components/PrivacyPolicy";
import { Footer } from "@/components/Footer";

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-[#0A262E]">
      <Header />
      <PrivacyPolicy />
      <Footer />
    </div>
  );
};

export default PrivacyPage;
