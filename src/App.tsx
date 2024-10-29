import "./App.css";
import Home from "./routes/home/Home.tsx";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/Navigation.tsx";

function Shop() {
  return <h1>I am the shop page</h1>;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path={"shop"} element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
