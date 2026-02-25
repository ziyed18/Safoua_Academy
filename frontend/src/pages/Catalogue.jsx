function Catalogue() {
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
              Catalogue
            </a>
            <a href="#" className="text-gray-600 hover:text-emerald-600">
              Mes cours
            </a>
            <a href="#" className="text-gray-600 hover:text-emerald-600">
              Progression
            </a>
          </nav>

          <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition font-semibold">
            Mon compte
          </button>

        </div>
      </header>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Catalogue des cours
        </h2>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">

          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Filtres
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {/* Catégorie */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Catégorie
              </label>
              <select className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                <option value="">Toutes</option>
                <option value="Coran">Coran</option>
                <option value="Langue">Langue</option>
                <option value="Jurisprudence">Jurisprudence</option>
                <option value="Histoire">Histoire</option>
              </select>
            </div>

            {/* Niveau */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Niveau
              </label>
              <select className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                <option value="">Tous</option>
                <option value="Débutant">Débutant</option>
                <option value="Intermédiaire">Intermédiaire</option>
                <option value="Expert">Expert</option>
              </select>
            </div>

            {/* Langue */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Langue
              </label>
              <select className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                <option value="">Toutes</option>
                <option value="Français">Français</option>
                <option value="Arabe">Arabe</option>
                <option value="Anglais">Anglais</option>
              </select>
            </div>

          </div>
        </div>

        {/* Course Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition">

            <div className="relative h-48 bg-emerald-100">
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=250&fit=crop"
                alt="Tajwid Avancé"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3">
                <span className="bg-emerald-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                  Expert
                </span>
              </div>
            </div>

            <div className="p-5">

              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900">
                  Tajwid Avancé
                </h3>
                <span className="font-semibold text-gray-900 text-sm">
                  ⭐ 4.9
                </span>
              </div>

              <p className="text-sm text-gray-600 mb-3">
                Coran
              </p>

              <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                <span>⏳ 8 semaines</span>
                <span>👥 234</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-emerald-600 font-bold text-xl">
                  €89
                </span>
                <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition font-semibold">
                  Voir le cours
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Catalogue;