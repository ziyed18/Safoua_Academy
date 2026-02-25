import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
          const role = data.user.role;
          if (role === "admin") {
            navigate("/admin");
          } 
          else if (role === "enseignante") {
            navigate("/teacher");
          } 
          else {
            navigate("/catalogue");
          }
        }
       else {
        alert("Email ou mot de passe incorrect");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
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
<section className="py-20 bg-gradient-to-b from-slate-50 to-white">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-5xl rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="relative p-10 text-white bg-gradient-to-br from-emerald-600 via-teal-600 to-sky-600">

          <svg
            viewBox="0 0 600 600"
            aria-hidden="true"
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="none"
            style={{ opacity: 0.28 }}
          >
            <defs>
              <radialGradient id="b1" cx="30%" cy="30%" r="60%">
                <stop offset="0" stopColor="rgba(255,255,255,0.95)" />
                <stop offset="1" stopColor="rgba(255,255,255,0)" />
              </radialGradient>

              <radialGradient id="b2" cx="70%" cy="40%" r="55%">
                <stop offset="0" stopColor="rgba(255,255,255,0.85)" />
                <stop offset="1" stopColor="rgba(255,255,255,0)" />
              </radialGradient>

              <radialGradient id="b3" cx="55%" cy="75%" r="55%">
                <stop offset="0" stopColor="rgba(255,255,255,0.9)" />
                <stop offset="1" stopColor="rgba(255,255,255,0)" />
              </radialGradient>
            </defs>

            <rect x="0" y="0" width="600" height="600" fill="transparent" />
            <circle cx="140" cy="150" r="120" fill="url(#b1)" />
            <circle cx="440" cy="190" r="150" fill="url(#b2)" />
            <circle cx="340" cy="460" r="170" fill="url(#b3)" />
          </svg>

          <div className="relative">
            <div className="inline-flex items-center space-x-2 bg-white/15 border border-white/20 px-3 py-1.5 rounded-full text-xs font-semibold">
              <span>Safoua Academy</span>
            </div>

            <h2 className="mt-6 text-4xl font-extrabold tracking-tight">
              WELCOME BACK
            </h2>

            <p className="mt-3 text-white/85 leading-relaxed">
              Accès aux cours, suivi vocal et espace enseignants.
            </p>

            <div className="mt-8 space-y-3 text-sm text-white/85">
              <p className="flex items-center space-x-2">
                <span>Connexion sécurisée (UI)</span>
              </p>
              <p className="flex items-center space-x-2">
                <span>Support: support@demo.com</span>
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="p-10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold">
                Login Account
              </p>
              <p className="text-lg font-bold text-gray-900 mt-2">
                Safoua Academy
              </p>
            </div>
          </div>

          <form onSubmit={handleLogin} className="mt-8 space-y-5">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <label className="block text-sm">
                <span className="font-semibold text-gray-800">Email</span>
                <div className="mt-2 relative">
                  <input
                    type="text"
                    placeholder="etudiant@exemple.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-900 transition pl-11"
                  />
                </div>
              </label>

              <label className="block text-sm">
                <span className="font-semibold text-gray-800">Rôle</span>
                <div className="mt-2 relative">
                  <input
                    type="text"
                    placeholder="Étudiant / Enseignant"
                    className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-900 transition pl-11"
                  />
                </div>
              </label>

            </div>

            <label className="block text-sm">
              <span className="font-semibold text-gray-800">
                Mot de passe
              </span>
              <div className="mt-2 relative">
                <input
                  type="password"
                  placeholder="Votre mot de passe"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-900 transition pl-11"
                />
              </div>
            </label>

            <button type="submit" className="w-full py-3.5 rounded-2xl font-semibold text-white shadow-lg transition bg-emerald-600 hover:bg-emerald-700">
              Se connecter
            </button>

            <div className="flex items-center justify-between text-sm text-gray-600">
              <label className="inline-flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-gray-900 focus:ring-gray-500 focus:ring-offset-0"
                />
                <span>Remember me</span>
              </label>

              <button type="button" className="inline-flex items-center space-x-1 text-gray-700 hover:text-gray-900 font-semibold">
                <span>Forgot?</span>
              </button>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4 text-sm text-gray-700">
              <p className="font-semibold text-gray-900 mb-2">
                Accès démo
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <p className="text-xs text-gray-500">Email</p>
                  <p className="font-mono">admin@demo.com</p>
                </div>

                <div>
                  <p className="text-xs text-gray-500">Mot de passe</p>
                  <p className="font-mono">Password123!</p>
                </div>
              </div>

              <p className="text-gray-600 mt-2">
                Choisissez votre rôle (Étudiant / Enseignant) pour charger le bon tableau de bord.
              </p>
            </div>

          </form>

        </div>

      </div>
    </div>
  </div>
</section>
    </>
  );
}

export default Login;