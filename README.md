# 🎓 Safoua Academy

A full-stack MERN (MongoDB, Express, React, Node.js) web application designed to manage an academic platform with role-based authentication and secure backend integration.

---

## 🚀 Features

- 🔐 User Authentication (JWT)
- 👨‍🏫 Role-based access (Admin, Teacher, Student)
- 📊 Separate dashboards for each role
- 📁 Secure backend API
- 🌐 RESTful architecture
- ⚡ Modern React frontend (Tailwind CSS)
- 🗄 MongoDB database integration

---

## 🛠 Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Axios
- React Router DOM

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt

---

## 📂 Project Structure
Safoua_Academy
│
├── Backend
│   ├── config/          # Database configuration
│   ├── controllers/     # Business logic
│   ├── middleware/      # Authentication & authorization middleware
│   ├── models/          # Mongoose models
│   ├── routes/          # API routes
│   ├── server.js        # Entry point of the backend server
│   └── package.json
│
├── Frontend
│   ├── public/          # Static assets
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Application pages (Dashboard, Login, etc.)
│   │   ├── services/    # API calls (Axios)
│   │   └── App.jsx
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── .gitignore
└── README.md