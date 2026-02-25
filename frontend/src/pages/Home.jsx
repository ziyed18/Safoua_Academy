// ...existing code...
import { Link } from "react-router-dom";
function Home() {
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
      <main className="flex-grow">
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1800&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/70 via-emerald-900/40 to-black/20" />
        <div className="relative py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-emerald-200 font-semibold tracking-[0.2em] text-xs uppercase">
                Safoua Academy
              </p>
              <h2 className="mt-4 text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow">
                Maîtrisez le Coran et l’Arabe avec un{" "}
                <span className="text-emerald-200">apprentissage intelligent</span>
              </h2>
              <p className="mt-5 text-lg md:text-xl text-white/90">
                Cours structurés, parcours personnalisé, aide vocale IA et communauté bienveillante.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
        <Link
  to="/signup"
  className="bg-emerald-500 text-white px-8 py-3 rounded-xl text-lg font-semibold hover:bg-emerald-600 transition shadow-lg shadow-emerald-600/20 inline-block text-center"
>
  Commencer
</Link>
                <button className="bg-white/10 text-white border border-white/25 px-8 py-3 rounded-xl text-lg font-semibold hover:bg-white/15 transition">
                  Voir les cours
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-12">Nos Avantages Uniques</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-6">
              <div className="inline-flex items-center justify-center p-3 rounded-full bg-emerald-100 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-zap w-6 h-6 text-emerald-600"
                  aria-hidden="true"
                >
                  <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Aide Vocale IA</h4>
              <p className="text-gray-600">Évaluation instantanée de votre Tajwid et de votre prononciation arabe.</p>
            </div>

            <div className="p-6">
              <div className="inline-flex items-center justify-center p-3 rounded-full bg-emerald-100 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-heart w-6 h-6 text-emerald-600"
                  aria-hidden="true"
                >
                  <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Parcours Personnalisé</h4>
              <p className="text-gray-600">L'IA adapte le contenu et le rythme en fonction de vos progrès et lacunes.</p>
            </div>

            <div className="p-6">
              <div className="inline-flex items-center justify-center p-3 rounded-full bg-emerald-100 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-shield w-6 h-6 text-emerald-600"
                  aria-hidden="true"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Environnement Sécurisé</h4>
              <p className="text-gray-600">Connectez-vous avec des enseignants qualifiés dans un espace d'apprentissage protégé.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Nos Cours Populaires</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full">Expert</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-book-open w-5 h-5 text-yellow-600"
                    aria-hidden="true"
                  >
                    <path d="M12 7v14" />
                    <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Tajwid Avancé</h4>
                <p className="text-gray-600 text-sm mb-4">Apprenez les règles complexes du Tajwid pour une récitation parfaite.</p>
                <button className="text-emerald-600 font-semibold hover:text-emerald-800 transition duration-300 flex items-center">Voir le cours</button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full">Débutant</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-book-open w-5 h-5 text-yellow-600"
                    aria-hidden="true"
                  >
                    <path d="M12 7v14" />
                    <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Arabe Classique</h4>
                <p className="text-gray-600 text-sm mb-4">Apprenez les règles complexes du Tajwid pour une récitation parfaite.</p>
                <button className="text-emerald-600 font-semibold hover:text-emerald-800 transition duration-300 flex items-center">Voir le cours</button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full">Intermédiaire</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-book-open w-5 h-5 text-yellow-600"
                    aria-hidden="true"
                  >
                    <path d="M12 7v14" />
                    <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Fiqh et Usul</h4>
                <p className="text-gray-600 text-sm mb-4">Apprenez les règles complexes du Tajwid pour une récitation parfaite.</p>
                <button className="text-emerald-600 font-semibold hover:text-emerald-800 transition duration-300 flex items-center">Voir le cours</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>
    </>
  );
}

export default Home;
// ...existing code...