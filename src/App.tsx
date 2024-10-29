import "./App.css";
import Directory from "./components/directory/Directory.tsx";
import { categories } from "../public/categories.ts";

function App() {
  return <Directory categories={categories} />;
}

export default App;
