import Profile from "@/components/Home/Profile";
import Journey from '@/components/Home/Journey';
import "@/public/styles/home.css";
import Skills from "@/components/Home/Skills";
import FluidBackground from '@/components/Effect/FluidBackground'

export const metadata = {
  title: "Nguyễn Trần Giang Vỹ | Fullstack Developer",
  description: "Mình là một Fullstack Developer kiêm luôn cả Game Developer, và đủ thứ 'er' khác =))",
};


export default function Home() {
  const steps = [
    {
      title: 'Thực tập sinh tại Trung Tâm Thông Tin Tư Liệu @LHU',
      date: '2023',
      description: 'Xây dựng và chuyển đổi website bằng FUI.',
    },
    {
      title: 'Tốt nghiệp @Đại Học Lạc Hồng',
      date: '2025',
      description: 'Chính thức nhận bằng kỹ sư công nghệ thông tin tại trường.',
    },
    {
      title: 'Tham gia với vị trí Fresher tại công ty @ThoMi',
      date: '2025',
      description: 'Học tập với cả 2 lĩnh vực Backend và Frontend.',
    },
    {
      title: 'Cộng tác viên cho bộ phận Trung Tâm Thông Tin Tư Liệu @LHU',
      date: '2025',
      description: 'Chuyển đổi hệ thống sắp xếp và chuẩn hóa lịch dạy và học của sinh viên và giảng viên lên hệ thống FUI.',
    },
    {
      title: 'Đang chờ những thứ tốt đẹp xảy ra nè :))',
      date: '2025',
      description: 'Vẫn đang chờ ☕',
    },
  ]

  const categories = [
    {
      title: 'FRONTEND',
      items: [
        { name: 'Next.js', icon: '/icons/nextjs-original.svg' },
        { name: 'Vue', icon: '/icons/vuejs-original.svg' },
        { name: 'React', icon: '/icons/react-original.svg' },
        { name: 'Tailwind CSS', icon: '/icons/tailwind-original.png' },
      ],
    },
    {
      title: 'BACKEND',
      items: [
        { name: 'Nest.js', icon: '/icons/nestjs-original.svg' },
        { name: 'Express.js', icon: '/icons/expressjs-original.svg' },
      ],
    },
    {
      title: 'DATABASE',
      items: [
        { name: 'PostgreSQL', icon: '/icons/elephant.png' },
        { name: 'MySQL', icon: '/icons/mysql-original.svg' },
        { name: 'MongoDB', icon: '/icons/mongodb.svg' },
        { name: 'Redis', icon: '/icons/Redis.png' }
      ],
    },
    {
      title: 'TOOLS',
      items: [
        { name: 'Git', icon: '/icons/git-original.svg' },
        { name: 'Postman', icon: '/icons/postman-original.svg' },
        { name: 'Docker', icon: '/icons/docker-original.svg' },
        { name: 'n8n', icon: '/icons/n8n-original.svg' },
      ],
    },
  ]

  return (
    <div className="max-w-7xl mx-auto">
      <div className="main-content w-full">
        <FluidBackground />
        <Profile />
        <Journey steps={steps} />
        <Skills skillCategory={categories} />
      </div>
    </div>
  );
}
