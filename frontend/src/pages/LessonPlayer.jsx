import React from "react";
import { useNavigate } from "react-router-dom";

function LessonPlayer() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">

      {/* HEADER */}
      <header className="bg-white shadow-md border-t-4 border-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-gray-100 rounded-lg transition"
          >
            ←
          </button>

          <h1 className="text-3xl font-extrabold text-emerald-700 tracking-wider">
            Safoua Academy
          </h1>
        </div>
      </header>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* LEFT SIDE */}
          <div className="lg:col-span-2">

            {/* VIDEO */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
              <div className="relative bg-black aspect-video flex items-center justify-center text-white">
                Lecteur Vidéo
              </div>

              <div className="p-4 bg-gray-900 text-white text-sm">
                0:00 / 30:00
              </div>
            </div>

            {/* LESSON INFO */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Les règles de prononciation - Partie 1
              </h2>

              <p className="text-gray-600 mb-4">
                Module 2: Les règles de prononciation
              </p>

              <p className="text-gray-700">
                Dans cette leçon, nous allons apprendre les règles fondamentales 
                de la prononciation des lettres arabes...
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">

            {/* RESSOURCES */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Ressources
              </h3>

              <div className="space-y-3">
                <div className="p-3 border rounded-lg">
                  PDF - Règles de prononciation
                </div>

                <div className="p-3 border rounded-lg">
                  Audio - Exemples de récitation
                </div>
              </div>
            </div>

            {/* NAVIGATION */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Navigation
              </h3>

              <div className="space-y-2">
                <button className="w-full text-left p-3 border border-emerald-200 bg-emerald-50 rounded-lg">
                  Leçon actuelle
                </button>

                <button className="w-full text-left p-3 border rounded-lg hover:bg-gray-50 transition">
                  Leçon suivante
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default LessonPlayer;