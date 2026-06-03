import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import CardSection from './components/CardSection/CardSection';
import InfoSection from './components/InfoSection/InfoSection';
import PrivilegesSection from './components/PrivilegesSection/PrivilegesSection';
import GallerySection from './components/GallerySection/GallerySection';
import PricingSection from './components/PricingSection/PricingSection';
import Footer from './components/Footer/Footer';
import MembershipModal from './components/MembershipModal/MembershipModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Navbar />
      <HeroSection openModal={openModal} />
      <CardSection />
      <InfoSection />
      <PrivilegesSection />
      <GallerySection />
      <PricingSection openModal={openModal} />
      <Footer />
      <MembershipModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

export default App;

