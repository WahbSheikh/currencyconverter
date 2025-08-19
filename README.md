# 💱 React Currency Converter App

A simple and elegant **Currency Converter** built with **React + Vite**, featuring:
- A reusable `Box` component for input and currency selection
- A custom React hook `useCurrencyInfo` for fetching live exchange rates
- Currency swap functionality
- Tailwind CSS for styling
- Background image with glassmorphism effect

---

## 📸 Demo
<img width="1253" height="637" alt="image" src="https://github.com/user-attachments/assets/2bc06a58-167a-4af6-818d-030666ce5326" />

---

## ⚡ Features
- Convert between any two currencies
- Real-time currency rates (via [@fawazahmed0/currency-api](https://github.com/fawazahmed0/currency-api))
- Swap "From" and "To" currencies with one click
- Responsive and modern UI with Tailwind CSS
- Clean and reusable component-based architecture

---

## 📂 Project Structure
src/
 ├── components/
 │    └── Box.jsx
 ├── hooks/
 │    └── useCurrencyInfo.js
 ├── App.jsx
 └── main.jsx

---

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/react-currency-converter.git
   cd react-currency-converter
   ```
2. **Install dependencies**
3. **Start development server**
   ```bash
   npm run dev
   ```
---
## 🔑 Technologies Used

- React(with hooks)
- Vite(fast bundler)
- Tailwind CSS(styling)
- Currency API(exchange rates)

 ---
 ## 📜 Code Overview

### **Box Component**
A reusable UI component that provides:
- Input field for entering the amount
- Dropdown for selecting the currency
- Props for disabling amount/currency fields

### **useCurrencyInfo Hook**
- Fetches exchange rates dynamically for the selected currency  
- Keeps data updated and ready for conversion  

---

## 🎯 Future Improvements
- Add error handling UI for failed API calls  
- Support for historical rates  
- Add graph visualization of currency trends  
- Offline caching of rates  

---
 


