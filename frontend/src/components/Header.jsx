import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="bg-white shadow-md border-t-4 border-emerald-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-extrabold text-emerald-700 tracking-wider">Safoua Academy</h1>
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-600 hover:text-emerald-600">Cours</a>
          <a href="#" className="text-gray-600 hover:text-emerald-600">Enseignants</a>
          <a href="#" className="text-gray-600 hover:text-emerald-600">Communauté</a>
        </nav>
        
        <Link to="/signup" className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition duration-300 font-semibold">Commencer</Link>
      </div>
    </header>
  )
}

export default Header