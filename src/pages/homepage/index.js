import { MainLayout, CarouselBanner } from "../../components";
import CsCard from "../../components/CS-card";


export default function HomePage() {
  return (
    <MainLayout>
      <CarouselBanner />
      <CsCard/>
    </MainLayout>
  );
}