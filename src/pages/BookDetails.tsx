import BookDetailsSection from "../components/BookDetailsSection";
import BuyCard from "../components/BuyCard";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function BookDetails() {
  return (
    <div className="h-full w-full">
      <Header />
      <BookDetailsSection />
      <BuyCard />
      <Footer />
    </div>
  );
}
