import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/main/Home";
import VerifyPage from "./pages/auth/Verify";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/verify" element={<VerifyPage />}></Route>
      </Routes>
    </>
  );
};

export default App;
