# PredictaCare AI – Intelligent AI-Based Symptom Checker Platform

## 📘 Project Overview
PredictaCare AI is an intelligent web-based healthcare platform designed for early disease detection and personalized health insights. It uses Artificial Intelligence (AI) and Natural Language Processing (NLP) to analyze symptoms, predict possible conditions, and guide users toward preventive care.  
The platform also includes interactive health quizzes, online counseling booking, and progress visualization through a responsive dashboard.

---

## 🧠 Key Features
- **AI-Powered Symptom Checker** – Predicts potential diseases and risk levels from entered symptoms.  
- **Natural Language Processing (NLP)** – Understands user text inputs naturally.  
- **Personalized Insights** – Displays customized health recommendations.  
- **Interactive Quizzes** – Engages users and improves model accuracy.  
- **Online Counseling Booking** – Connects users with healthcare professionals.  
- **Dashboard Visualization** – Tracks past analyses and risk trends.  

---

## ⚙️ Technology Stack
**Frontend:** React.js, HTML, CSS, JavaScript  
**Backend:** Node.js (Express)  
**Database:** Mock data (can integrate MySQL or MongoDB)  
**Libraries:** Chart.js / Matplotlib (for visualization), Scikit-learn / TensorFlow (for AI logic)  

---

## 🏗️ Project Structure
predictacare-ai/
├─ package.json
├─ server/
│ └─ server.js
└─ client/
├─ public/
│ └─ index.html
└─ src/
├─ index.js
├─ App.js
├─ styles.css
└─ components/
├─ Header.js
├─ Dashboard.js
├─ SymptomChecker.js
├─ QuizModule.js
└─ Booking.js


---

## 🚀 How to Run the Project

### 1️⃣ **Install Node.js**
Download and install Node.js (v14 or higher).

### 2️⃣ **Clone or Download Project**


git clone https://github.com/akashsamuel/predictacare-ai.git

cd predictacare-ai


### 3️⃣ **Install Dependencies**


npm install
cd client && npm install
cd ..


### 4️⃣ **Start Backend and Frontend**


npm start

This command will run both:
- **Backend server** → http://localhost:5000  
- **Frontend app** → http://localhost:3000

---

## 🧩 API Endpoints (Mock Server)
| Method | Endpoint | Description |
|---------|-----------|-------------|
| POST | `/api/predict` | Accepts symptoms array and returns prediction results |
| POST | `/api/book` | Books a counseling session |
| POST | `/api/feedback` | Receives user feedback and ratings |
| GET | `/api/quiz` | Returns quiz questions for user engagement |

---

## 🧭 Workflow Summary
1. User inputs symptoms via web interface.  
2. Symptoms are processed by the backend AI model.  
3. The system predicts possible diseases and risk levels.  
4. User receives results, can take quizzes, or book counseling.  
5. Data and feedback are stored for model improvement.

---

## 💡 Future Enhancements
- Real-time AI model integration (TensorFlow or PyTorch).  
- Multilingual NLP support for regional accessibility.  
- Integration with wearable health tracking devices.  
- Cloud deployment using AWS or Google Cloud for scalability.

---

## 👨‍💻 Developer Info
**Author:** Akash samuel 
**Project Title:** PredictaCare AI – Intelligent AI-Based Symptom Checker Platform  
**Registration No:** 22MID0262
**Institution:** VELLORE INSTITUTE OF TECHNOLOGY

---
