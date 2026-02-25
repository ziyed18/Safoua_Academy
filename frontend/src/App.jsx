import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import AdminDashboard from "./pages/AdminDashboard";
import Catalogue from "./pages/Catalogue";
import CourseDetails from "./pages/CourseDetails";
import LessonPlayer from "./pages/LessonPlayer";
import TeacherDashboard from "./pages/TeacherDashboard";
//Frondend/react-vite-tailwind/src/App.jsx
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/lesson/:id" element={<LessonPlayer />} />
        <Route path="/teacher" element={<TeacherDashboard />} />
      
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;