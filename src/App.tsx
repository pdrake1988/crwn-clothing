import "./App.css";
import Home from "./routes/home/Home.tsx";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/Navigation.tsx";
import SignIn from "./routes/sign-in/Sign-In.tsx";

function Shop() {
  return <h1>I am the shop page</h1>;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path={"shop"} element={<Shop />} />
        <Route path={"sign-in"} element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
