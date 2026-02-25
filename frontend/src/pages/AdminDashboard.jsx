function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">

        {/* SIDEBAR */}
        <aside className="w-72 hidden md:flex flex-col border-r border-gray-200 bg-white sticky top-0 h-screen">

          <div className="px-6 py-5 border-b-4 bg-emerald-600 border-emerald-600">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-lg">
                📘
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/80 font-semibold">
                  Admin
                </p>
                <p className="text-lg font-extrabold text-white">
                  Safoua Academy
                </p>
              </div>
            </div>
          </div>

          <div className="px-4 py-4 flex-1">
            <p className="px-2 text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold mb-2">
              Gestion
            </p>

            <div className="space-y-1">
              <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition border bg-emerald-600 text-white border-transparent">
                <span className="font-semibold">Étudiants</span>
              </button>

              <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition border bg-white text-gray-700 border-gray-100 hover:bg-gray-50">
                <span className="font-semibold">Cours</span>
              </button>
            </div>
          </div>

          <div className="px-4 pb-6">
            <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200 transition">
              <span className="font-semibold">Paramètres</span>
            </button>
          </div>

        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1">
          <div className="px-4 sm:px-6 lg:px-10 py-8">

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">

              {/* HEADER */}
              <div className="px-6 py-5 border-b border-gray-100 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                <div>
                  <h2 className="text-xl font-extrabold text-gray-900">
                    Gestion des Étudiants
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">
                    CRUD statique (create / edit / delete) sans API.
                  </p>
                </div>

                <button className="text-white px-4 py-2.5 rounded-xl font-semibold bg-emerald-600 hover:bg-emerald-700 transition">
                  Ajouter
                </button>

              </div>

              {/* TABLE */}
              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-sm">

                  <thead className="bg-gray-50 text-gray-600">
                    <tr>
                      <th className="px-6 py-3 font-semibold uppercase text-xs tracking-wide">
                        ID
                      </th>
                      <th className="px-6 py-3 font-semibold uppercase text-xs tracking-wide">
                        Nom
                      </th>
                      <th className="px-6 py-3 font-semibold uppercase text-xs tracking-wide">
                        Cours
                      </th>
                      <th className="px-6 py-3 font-semibold uppercase text-xs tracking-wide">
                        Progression
                      </th>
                      <th className="px-6 py-3 font-semibold uppercase text-xs tracking-wide">
                        Actions
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-100">

                    <tr className="hover:bg-gray-50/60">
                      <td className="px-6 py-3 whitespace-nowrap">301</td>
                      <td className="px-6 py-3 whitespace-nowrap">M. Ait Ali</td>
                      <td className="px-6 py-3 whitespace-nowrap">Tajwid Avancé</td>
                      <td className="px-6 py-3 whitespace-nowrap">64%</td>
                      <td className="px-6 py-3">
                        <div className="flex gap-2">
                          <button className="px-3 py-2 rounded-xl border border-gray-200 hover:bg-gray-100 transition">
                            Modifier
                          </button>
                          <button className="px-3 py-2 rounded-xl border border-red-200 text-red-700 hover:bg-red-50 transition">
                            Supprimer
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr className="hover:bg-gray-50/60">
                      <td className="px-6 py-3 whitespace-nowrap">302</td>
                      <td className="px-6 py-3 whitespace-nowrap">S. Rahmani</td>
                      <td className="px-6 py-3 whitespace-nowrap">Arabe Classique</td>
                      <td className="px-6 py-3 whitespace-nowrap">52%</td>
                      <td className="px-6 py-3">
                        <div className="flex gap-2">
                          <button className="px-3 py-2 rounded-xl border border-gray-200 hover:bg-gray-100 transition">
                            Modifier
                          </button>
                          <button className="px-3 py-2 rounded-xl border border-red-200 text-red-700 hover:bg-red-50 transition">
                            Supprimer
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr className="hover:bg-gray-50/60">
                      <td className="px-6 py-3 whitespace-nowrap">303</td>
                      <td className="px-6 py-3 whitespace-nowrap">L. Bernard</td>
                      <td className="px-6 py-3 whitespace-nowrap">Fiqh & Usul</td>
                      <td className="px-6 py-3 whitespace-nowrap">41%</td>
                      <td className="px-6 py-3">
                        <div className="flex gap-2">
                          <button className="px-3 py-2 rounded-xl border border-gray-200 hover:bg-gray-100 transition">
                            Modifier
                          </button>
                          <button className="px-3 py-2 rounded-xl border border-red-200 text-red-700 hover:bg-red-50 transition">
                            Supprimer
                          </button>
                        </div>
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>

            </div>
          </div>
        </main>

      </div>
    </div>
  )
}

export default AdminDashboard