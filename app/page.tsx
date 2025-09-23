import Profile from "@/components/Home/Profile";
import "@/public/styles/home.css";


export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="main-content w-full">
          <Profile/>
      </div>
    </div>
  );
}
