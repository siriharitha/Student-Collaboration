# 🌟 Student Collaboration Platform

> “Collaborate. Create. Grow.”

A web platform that empowers students to connect, share ideas, and work together on academic and creative projects — building a smarter, more connected campus community.

---

## 🎓 Project Overview

The **Student Collaboration Platform** is a web-based application designed to bring students together from different departments, colleges, or universities.  
It acts as a central hub for students to post project ideas, find teammates, join collaborations, and build innovative solutions together.

The system bridges the gap between talented individuals and opportunities for teamwork, fostering a strong academic community that thrives on creativity and cooperation.

---

## 💡 Key Features

### 👤 User Authentication
- Secure user registration and login using **JWT authentication**.  
- Passwords are encrypted with **Bcrypt.js** for enhanced security.  

### 🧩 Project Management
- Students can **create, edit, and delete** their projects.  
- Each project contains essential details like **title, description, skills required, and members**.  

### 🔍 Project Discovery
- Browse through projects created by others.  
- Search based on **skills, domains, or keywords** to find ideal collaborations.  

### 👥 Team Collaboration
- Students can join teams that need members.  
- Collaborators can communicate, share ideas, and work efficiently toward a common goal.  

### 🧠 Profile System
- Each user can maintain a profile showing their **skills, interests, and active projects**.  
- Helps students connect with like-minded peers and build networks.  

### 📢 Events & Innovation Sharing
- Users can share **hackathons, competitions, or innovation ideas**.  
- Encourages participation in campus-wide or inter-college collaborations.  

### 🔒 Admin & Security
- Admin access to manage users and monitor project activity.  
- Strong backend with **Node.js, Express, and MongoDB** ensures data integrity and reliability.  

---

## ⚙️ Technologies Used

| Category | Technologies |
|-----------|---------------|
| **Frontend** | React, Vite, JavaScript, Tailwind CSS |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB |
| **Authentication** | JWT (JSON Web Token), Bcrypt.js |
| **Environment** | .env configuration for secure keys |

---

## 🎯 Project Goal

The main goal of the **Student Collaboration Platform** is to create a unified space where students can collaborate easily, build innovative ideas, and learn teamwork while enhancing their technical and creative skills.  
It encourages active learning, project-based exploration, and a sense of community among students.

---

## 📖 Summary

The **Student Collaboration Platform** transforms how students interact and collaborate in academic environments.  
By offering tools for communication, project discovery, and teamwork, it helps students turn ideas into impactful projects while gaining real-world collaboration experience.

---

## 🚀 How to Run Locally

```bash
# Clone the repository
git clone https://github.com/siriharitha/Student-Collaboration.git

# Navigate to the server folder
cd server
npm install
npm run dev

# In another terminal, navigate to the client folder
cd client
npm install
npm run dev
