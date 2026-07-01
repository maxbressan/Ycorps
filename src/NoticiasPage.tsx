import { Header } from "@/components/Header";
import { Noticias } from "@/components/Noticias";
import { Footer } from "@/components/Footer";

const NoticiasPage = () => {
  return (
    <div className="min-h-screen bg-[#f0ece3]">
      <Header />
      <Noticias />
      <Footer />
    </div>
  );
};

export default NoticiasPage;
