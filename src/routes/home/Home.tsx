import Directory from "../../components/directory/Directory.tsx";
import { categories } from "../../categories.ts";

function Home() {
  return <Directory categories={categories} />;
}
export default Home;
