import React from "react";

function TeacherDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <header className="bg-white shadow-md border-t-4 border-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">

          <h1 className="text-3xl font-extrabold text-emerald-700 tracking-wider">
            Safoua Academy
          </h1>

          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-emerald-600 font-semibold">
              Espace Enseignant
            </a>
            <a href="#" className="text-gray-600 hover:text-emerald-600">
              Analytiques
            </a>
            <a href="#" className="text-gray-600 hover:text-emerald-600">
              Paramètres
            </a>
          </nav>

          <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition font-semibold">
            Mon compte
          </button>

        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Title + Button */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Espace Enseignant
          </h2>

          <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition font-semibold flex items-center gap-2">
            ➕ Créer un cours
          </button>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-4 mb-6">
          <button className="px-6 py-3 rounded-lg font-semibold transition bg-emerald-600 text-white">
            Mes cours
          </button>

          <button className="px-6 py-3 rounded-lg font-semibold transition bg-white text-gray-700 hover:bg-gray-50">
            Analytiques
          </button>
        </div>

        {/* Courses List */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Mes cours
          </h3>

          <div className="space-y-4">

            {/* Course 1 */}
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
              <div className="flex items-center justify-between">

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-semibold text-gray-900">
                      Tajwid Avancé
                    </h4>
                    <span className="px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                      Publié
                    </span>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>234 étudiants</span>
                    <span>Progression: 100%</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition text-sm font-semibold">
                    ✏ Modifier
                  </button>

                  <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition text-sm font-semibold">
                    📊 Statistiques
                  </button>
                </div>

              </div>
            </div>

            {/* Course 2 */}
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
              <div className="flex items-center justify-between">

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-semibold text-gray-900">
                      Arabe Classique
                    </h4>
                    <span className="px-2 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-700">
                      Brouillon
                    </span>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>456 étudiants</span>
                    <span>Progression: 80%</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition text-sm font-semibold">
                    ✏ Modifier
                  </button>

                  <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition text-sm font-semibold">
                    📊 Statistiques
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default TeacherDashboard;