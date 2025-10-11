import Profile from "@/components/Home/Profile";
import Journey from '@/components/Home/Journey';
import "@/public/styles/home.css";
import Skills from "@/components/Home/Skills";
import FluidBackground from '@/components/Effect/FluidBackground'


export default function Home() {
  const steps = [
    {
      title: 'Internship at @LHU Data Center',
      date: '2021',
      description: 'Built my first HTML/CSS website.',
    },
    {
      title: 'Dived into React & TypeScript',
      date: '2022',
      description: 'Created fullstack projects and learned state management.',
    },
    {
      title: 'Joined a company as Fullstack Developer',
      date: '2023',
      description: 'Working with Next.js, NestJS, and modern toolchains.',
    },
    {
      title: 'Joined a company as Fullstack Developer',
      date: '2023',
      description: 'Working with Next.js, NestJS, and modern toolchains.',
    },
    {
      title: 'Joined a company as Fullstack Developer',
      date: '2023',
      description: 'Working with Next.js, NestJS, and modern toolchains.',
    },
  ]
  return (
    <div className="max-w-7xl mx-auto">
      <div className="main-content w-full">
        <FluidBackground />
          <Profile/>
          <Journey steps={steps} />
          <Skills/>
      </div>
    </div>
  );
}
