# Smart Classroom Frontend

This is the **React + Vite** based frontend for the **Smart Classroom Management System**, developed as part of our Software Engineering coursework.

## 🌐 Project Overview

The Smart Classroom platform is a unified solution for educational institutions, aiming to connect all key stakeholders:

- **Students**
- **Teachers**
- **Administrators**
- **Parents**

The frontend provides a clean, responsive, and interactive interface for managing users, departments, courses, and more. It communicates with a [Django-based backend](https://github.com/gun03-hub/classroom-management) through RESTful APIs.

---

## 🚀 Tech Stack

- **React** (with Hooks & Context)
- **Vite** (for fast development)
- **Tailwind CSS** (for modern UI)
- **Axios** (for API communication)
- **React Router** (for routing/navigation)

---

## 📦 Local Setup

### 1. Clone the Repository

```bash
git clone https://github.com/gun03-hub/classroom-management.git
cd classroom-management
cd frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env` file in the root directory and add:

```env
VITE_BACKEND_URL=http://localhost:8000/api
```

Make sure this matches the URL of your running Django backend server.

### 4. Run the Development Server

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) to open the frontend.

---

## 🧪 Running Frontend Tests (optional)

If you've added tests using a framework like Jest or Vitest:

```bash
npm run test
```

---

## 📁 Project Structure

```bash
src/
├── components/        # Reusable UI components
├── assets/            # All Images
├── styles/            # All CSS effects
├── App.jsx            # App container
└── main.jsx           # Entry point
```

---

## 🔗 Backend Repository

This frontend works with the [Smart Classroom Django Backend](https://github.com/gun03-hub/classroom-management). Please follow the setup guide in that repository to get the backend up and running.

---

## 🛠 Build for Production

```bash
npm run build
```

The production-ready files will be created in the `dist/` folder.

---

## 🤝 Contributing

Pull requests are welcome! For major changes, open an issue first to discuss what you want to improve or add.

---

Let me know if you’d like to add screenshots, contributors' section, deployment instructions, or feature list to this README!
