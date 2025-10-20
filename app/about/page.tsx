
import "@/public/styles/home.css";
import FluidBackground from '@/components/Effect/FluidBackground'
import AboutMe from "@/components/About/AboutMe";







export default function AboutPage() {

  return (
    <div className="max-w-7xl mx-auto about-page">
      <div className="main-content w-full">
        <FluidBackground />
        <AboutMe/>
      </div>
    </div>
  );
}
