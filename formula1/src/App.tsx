import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainNavbar from "./components/shared/MainNavbar";
import DriversPage from "./pages/DriversPage";
import MainFooter from "./components/shared/MainFooter";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import "./index.css";
import AddDriverPage from "./pages/AddDriverPage";
import EditDriverPage from "./pages/EditDriverPage";
import TeamsPage from "./pages/TeamsPage";
import QuizPage from "./pages/QuizPage";
import RacesPage from "./pages/RacesPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <MainNavbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/drivers" element={<DriversPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/add-driver" element={<AddDriverPage />} />
            <Route path="/edit-driver" element={<EditDriverPage />} />
            <Route path="/teams" element={<TeamsPage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/races" element={<RacesPage />} />
          </Routes>
        </main>
        <div>
          <MainFooter></MainFooter>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
