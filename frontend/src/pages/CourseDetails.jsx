function CourseDetails() {
    return (
<div class="min-h-screen bg-gray-50">



  {/* CONTENT */}
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

    {/*<!-- COURSE CARD -->*/}
    <div class="bg-white rounded-xl shadow-sm overflow-hidden mb-6">

      {/*<!-- Image -->*/}
      <div class="relative h-64 bg-emerald-100">
        <img
          src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=400&fit=crop"
          alt="Tajwid Avancé"
          class="w-full h-full object-cover"
        />
        <div class="absolute top-4 left-4">
          <span class="bg-emerald-600 text-white text-sm px-4 py-2 rounded-full font-semibold">
            Expert
          </span>
        </div>
      </div>

      {/* Info */}
      <div class="p-6">

        {/* Title & Rating */}
        <div class="flex items-start justify-between mb-4">
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-2">
              Tajwid Avancé
            </h2>
            <p class="text-gray-600">
              Par Cheikh Ahmed Al-Mansouri
            </p>
          </div>

          <div class="flex items-center gap-2">
            <span class="text-2xl font-bold text-gray-900">4.9</span>
            <span class="text-gray-500">(234)</span>
          </div>
        </div>

        {/* Description */}
        <p class="text-gray-700 mb-6">
          Maîtrisez les règles avancées du Tajwid pour une récitation parfaite du Coran.
          Ce cours approfondit les subtilités de la prononciation arabe et les règles de récitation.
        </p>

        {/* Course Stats */}
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

          <div>
            <p class="text-sm text-gray-500">Durée</p>
            <p class="font-semibold text-gray-900">8 semaines</p>
          </div>

          <div>
            <p class="text-sm text-gray-500">Étudiants</p>
            <p class="font-semibold text-gray-900">234</p>
          </div>

          <div>
            <p class="text-sm text-gray-500">Modules</p>
            <p class="font-semibold text-gray-900">4</p>
          </div>

        </div>

        {/* Price & Button */}
        <div class="flex items-center justify-between pt-4 border-t border-gray-200">
          <div>
            <p class="text-3xl font-bold text-emerald-600">€89</p>
            <p class="text-sm text-gray-500">Prix unique</p>
          </div>

          <button class="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition font-semibold text-lg">
            S'inscrire maintenant
          </button>
        </div>

      </div>
    </div>

    {/* OBJECTIFS */}
    <div class="bg-white rounded-xl shadow-sm p-6 mb-6">
      <h3 class="text-xl font-bold text-gray-900 mb-4">
        Objectifs d'apprentissage
      </h3>

      <ul class="space-y-2 text-gray-700">
        <li>Comprendre les règles complexes du Tajwid</li>
        <li>Améliorer la prononciation des lettres arabes</li>
        <li>Maîtriser les pauses et les arrêts</li>
        <li>Appliquer les règles dans la récitation</li>
      </ul>
    </div>

    {/* PRÉREQUIS */}
    <div class="bg-white rounded-xl shadow-sm p-6 mb-6">
      <h3 class="text-xl font-bold text-gray-900 mb-4">
        Prérequis
      </h3>

      <ul class="space-y-2 text-gray-700">
        <li>Niveau intermédiaire en arabe</li>
        <li>Connaissance de base du Tajwid</li>
      </ul>
    </div>

    {/* PROGRAMME */}
    <div class="bg-white rounded-xl shadow-sm p-6">
      <h3 class="text-xl font-bold text-gray-900 mb-4">
        Programme du cours
      </h3>

      <div class="space-y-3">

        <div class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
          <h4 class="font-semibold text-gray-900">1. Introduction au Tajwid</h4>
          <p class="text-sm text-gray-600">5 leçons • 2h</p>
        </div>

        <div class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
          <h4 class="font-semibold text-gray-900">2. Les règles de prononciation</h4>
          <p class="text-sm text-gray-600">8 leçons • 4h</p>
        </div>

        <div class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
          <h4 class="font-semibold text-gray-900">3. Les pauses et arrêts</h4>
          <p class="text-sm text-gray-600">6 leçons • 3h</p>
        </div>

        <div class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
          <h4 class="font-semibold text-gray-900">4. Pratique avancée</h4>
          <p class="text-sm text-gray-600">10 leçons • 6h</p>
        </div>

      </div>
    </div>

  </div>
</div>
 )
}

export default CourseDetails
