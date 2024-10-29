import Directory from "../../components/directory/Directory.tsx";
import { categories } from "../../categories.ts";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div>
      <Outlet />
      <Directory categories={categories} />
    </div>
  );
}
export default Home;
