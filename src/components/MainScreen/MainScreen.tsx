import { Footer } from '../Footer/Footer';
import { Description } from './components/Description';
import { GenerateForm } from './components/GenerateForm/GenerateForm';
import { HowItWorks } from './components/HowItWorks';
import { TopSection } from './components/TopSection';
import { WishlistContact } from './components/WishlistContact';

export const MainScreen: React.FC = () => {
  return (
    <>
      <TopSection />
      <Description />
      <HowItWorks />
      <GenerateForm />
      <WishlistContact />
      <Footer />
    </>
  );
};
