# **Micro-Frontend POC using Module Federation**

## **📌 Project Overview**
This project consists of **three independent applications**:  
1. **Host Application** – The main app that integrates the micro-frontends.  
2. **Chat Application** – A standalone micro-frontend for chat functionality.  
3. **Email Application** – A standalone micro-frontend for email functionality.  

Each of these applications can be **developed, deployed, and scaled independently**, making it a true **micro-frontend architecture**. The apps are connected using **Webpack Module Federation**, allowing seamless communication and integration.  

### **🚀 Why Micro-Frontends?**
- **Scalability** – Different teams can work on different micro-apps independently.  
- **Code Maintainability** – Each micro-frontend has its own dependencies, reducing conflicts.  
- **Technology Agnostic** – Future micro-apps can be written in different frameworks if needed.  
- **Incremental Upgrades** – New features can be added without affecting the entire system.  

### **🎯 Why Module Federation?**
I chose **Webpack Module Federation** because:  
- It allows **runtime code sharing** without duplication.  
- Micro-frontends can be loaded dynamically **without recompiling the host**.  
- It's a **clean and modular** approach for building scalable frontend applications.  

---

## **🛠️ Technologies Used**
- **React** – Frontend framework  
- **Redux Toolkit** – Shared state management  
- **Webpack Module Federation** – Micro-frontend communication  
- **React Router DOM** – Client-side routing  
- **Tailwind CSS** – Styling  
- **React DOM** – Rendering  

---

## **📂 Folder Structure**
 ```sh
mfes/
│── hostApp/         # Host application (Main shell)
│── chatApp/         # Micro-frontend for Chat functionality
│── emailApp/        # Micro-frontend for Email functionality
│── README.md        # Documentation
 ```
Each app is **self-contained** and can run independently or be integrated into the host.

---

## **🚀 Setup & Installation**
1. **Clone the repository:**
 ```sh
   git clone [repo-url]
 ```
   
2. **Install dependencies for each app:**
```sh
cd hostApp && npm install
cd ../chatApp && npm install
cd ../emailApp && npm install
```
3. **Run the applications separately:**
```sh
cd hostApp && npm start
cd ../chatApp && npm start
cd ../emailApp && npm start
```

 **Open http://localhost:3000/ in your browser. The host will load both chat and email apps dynamically.**

---
## 🔗 Micro-Frontend Architecture

### 📡 Communication between Host and Micro-Apps
- Used **Redux Toolkit (shared state)** to facilitate communication between the host and remote apps.  
- Implemented **Module Federation** for dynamic imports in `webpack.config.js`.  

### 📦 Module Federation Configuration
- **Host (`hostApp/webpack.config.js`)**  
  - Loads `ChatApp` and `EmailApp` dynamically.  
- **Remotes (`chatApp` & `emailApp`)**  
  - Expose their components to be consumed by the host.

### 🖼️ Shared Components
The micro-frontends consume UI components like:
- **MainLayout**
- **MainWrapper**
- **ChatInputBox**
- **MailInputBox**  

These ensure **consistent design across all apps**.

---

## ⚡ Challenges & Solutions

### **Tailwind CSS Configuration Issue**
- Faced challenges in configuring Tailwind CSS across multiple apps.  
- Solved by tweaking the **PostCSS and Tailwind configs** for each micro-frontend.  

### **Why Module Federation?**
- **No need for shared dependencies** – Apps can share React and Redux **without duplication**.  
- **Independent deployment** – Each micro-app can be updated **without affecting the host**.  
- **Lazy loading of remote apps** – Host only loads the necessary micro-frontends, improving performance.

---

## 🚀 Future Enhancements
- **Deploy the applications** using Netlify/Vercel.  
- Add **more micro-apps**, such as a Calendar or Notes app, without modifying the host.  

