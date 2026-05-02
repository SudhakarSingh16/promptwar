# Election AI Assistant

An intelligent, interactive web application designed to simplify the **Indian election process** through a guided, personalized, and visually rich experience.

Built for **PromptWars Virtual Challenge**, this assistant helps users go from  
👉 *“I don’t understand voting”*  
to  
👉 *“I am election-ready ✅”*  

in just a few minutes.

---

## 🚀 Live Demo

🌐 **Application:**  
https://election-assistant-492376442883.us-central1.run.app  

💻 **Source Code:**  
https://github.com/SudhakarSingh16/promptwar  

---

## ❓ Problem Statement

Understanding the election process in India can be overwhelming, especially for:

- First-time voters  
- Users unfamiliar with registration procedures  
- People confused about EVM, NOTA, and polling steps  

This lack of clarity reduces awareness and participation.

---

## 💡 Solution

The **Election AI Assistant** provides:

- A **step-by-step guided journey** through the voting process  
- **Personalized recommendations** based on user inputs  
- **Interactive learning tools** for better understanding  
- A **modern, app-like experience** instead of static information  

---

## ✨ Key Features

### 🧭 Guided Voting Journey (Core Feature)

A structured, interactive flow:

1. Eligibility Check  
2. Registration (Form 6)  
3. Document Submission  
4. Voter ID (EPIC)  
5. Polling Booth Discovery  
6. Voting Process (EVM)  
7. Result Awareness  

✔ Includes progress tracking  
✔ Step-by-step guidance  
✔ Completion feedback  

---

### 🧠 Smart Personalization Engine

- Collects:
  - Age  
  - State  
  - Voter ID status  

- Generates a **Smart Summary Dashboard**:
  - Eligibility status  
  - Registration status  
  - Next recommended action  

---

### 🎮 Interactive EVM Simulation

- Simulates real voting experience  
- Includes:
  - Candidate selection  
  - NOTA option  
  - Confirmation feedback (VVPAT-style)  

👉 Helps users understand how voting actually works

---

### 📅 Interactive Timeline

- Visual breakdown of election phases:
  - Registration  
  - Campaign  
  - Voting  
  - Counting  

- Expandable and user-friendly  

---

### 🃏 3D Flashcards

Quick learning cards for:

- EPIC  
- EVM  
- NOTA  
- Form 6  
- Required documents  

---

### 😵 “Explain Simply” Mode

- Converts complex election rules into:
  - Simple  
  - Easy-to-understand steps  

👉 Ideal for beginners  

---

### 🔗 Official Resource Integration

- Direct access to verified portals of the Election Commission of India  

Includes:

- Voter registration  
- Status tracking  
- Polling booth search  

---

### ⚠️ Safety & Awareness

- What to carry on voting day  
- Common mistakes to avoid  
- Fraud prevention tips (OTP, fake links)  

---

## 🛠️ Tech Stack

- **Frontend:** React 18 (Vite)  
- **Styling:** Vanilla CSS (Custom Design System, Glassmorphism, Gradients)  
- **Icons:** Lucide React  
- **Animations:** Canvas Confetti  
- **Deployment:** Docker + Google Cloud Run  
- **Development Platform:** Google Antigravity  

---

## ⚙️ How It Works

1. User starts the application  
2. Inputs basic details  
3. System evaluates eligibility  
4. Generates a personalized dashboard  
5. Guides through each election step  
6. Provides interactive learning tools  
7. Ends with:  
   👉 **“You are Election-Ready ✅”**

---

## 🧪 Testing & Validation

- Manual testing of all user flows  
- UI interactions verified  
- Responsive design tested  
- Navigation and state handling validated  

---

## 🔐 Security Considerations

- No sensitive user data stored  
- No exposed API keys  
- Only trusted external links used  

---

## 📁 Project Structure

The project follows a modular and scalable React architecture:

### 📌 Folder Breakdown

- **components/**  
  Contains reusable UI elements such as:
  - Guided Journey steps  
  - Flashcards  
  - Quiz  
  - Chat Assistant  
  - Timeline components  

- **pages/**  
  Defines the main application views and layouts:
  - Home / Hero section  
  - Dashboard  
  - Feature screens  

- **assets/**  
  Stores static files like:
  - Images  
  - Icons  
  - Illustrations  

- **App.jsx**  
  The core component that:
  - Manages navigation  
  - Combines all sections  
  - Controls overall UI flow  

- **main.jsx**  
  Entry point of the application:
  - Renders the React app  
  - Connects to the DOM  

---

This structure ensures:
- ✔ Clean separation of concerns  
- ✔ Easy scalability  
- ✔ Maintainable codebase  



---

## 🐳 Docker Support

```bash
docker build -t election-assistant .
docker run -p 8080:80 election-assistant

