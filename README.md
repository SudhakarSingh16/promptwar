# Indian Election Assistant 🇮🇳

An interactive, smart, and beautifully designed web application that acts as a step-by-step guide to the Indian election process. Built with React and Vite, this tool takes users from "I know nothing" to "I am ready to vote" in minutes.

## 🚀 Live Demo
**[View the Live Application](https://election-assistant-492376442883.us-central1.run.app)** *(Deployed on Google Cloud Run)*

## ✨ Features

- **Smart Personalization Dashboard:** Answers simple questions (Age, State, EPIC status) to generate a personalized action plan and eligibility status.
- **Guided Journey Mode:** A highly interactive 6-step wizard taking users through Eligibility, Registration (Form 6), Voter ID, Polling Booth, and the Voting Process itself.
- **"Explain Simply" Mode:** A toggle built into the journey to simplify formal Election Commission of India (ECI) guidelines into bite-sized, easy-to-understand terms.
- **Interactive EVM Simulation:** A working prototype of the Electronic Voting Machine, complete with realistic beep sounds and a printed VVPAT confirmation slip.
- **Interactive Timeline:** A collapsible timeline highlighting the Registration, Campaign, Voting, and Counting phases.
- **3D Flashcards:** Flippable CSS-based flashcards to quickly learn key election terminology like EPIC, EVM, NOTA, and Form 6.
- **Safety & Fraud Awareness:** Actionable tips to keep voters secure from fake URLs, OTP fraud, and polling booth violations.
- **Premium UI/UX:** Built entirely with Vanilla CSS using a custom design system inspired by the Indian flag (Saffron, White, Green, and Navy Blue), featuring soft gradients, glassmorphism, and confetti celebration animations.

## 🛠️ Technology Stack

- **Frontend Framework:** React 18 (via Vite)
- **Styling:** Vanilla CSS (CSS Variables, Flexbox/Grid, Animations, Glassmorphism)
- **Icons:** Lucide React
- **Animations:** Canvas Confetti for the completion experience
- **Deployment:** Docker & Google Cloud Run

## 💻 Running Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SudhakarSingh16/promptwar.git
   cd promptwar
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 🐳 Docker Support

The project includes a multi-stage `Dockerfile` configured to serve the production build via Nginx.

```bash
docker build -t election-assistant .
docker run -p 8080:80 election-assistant
```

## 📜 Disclaimer
This application is an educational tool and is **not** an official platform of the Election Commission of India (ECI). Always refer to the [official ECI Voter Portal](https://voters.eci.gov.in/) for actual voter registration and official guidelines.
