import Hero from '../components/Hero';
import Counter from '../components/Counter';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import ClientLogos from '../components/ClientLogos';
import Vision from '../components/Vision';
import UseCasesSlider from '../components/UseCasesSlider';
import Banner from '../components/Banner';
import ImageUploader from '../components/ImageUploader';
import HomePrice from '../components/HomePrice';

const HomePage = () => {
  return (
    <div className="pt-16">
      <Hero />
      <Counter />
      {/* <Services /> */}
      <UseCasesSlider />
      <ImageUploader />
      <Testimonials />
      <HomePrice />
      <ClientLogos />
      <Vision />
      {/* <Banner /> */}
    </div>
  );
};

export default HomePage;