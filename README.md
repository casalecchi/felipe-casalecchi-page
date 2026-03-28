# Felipe Casalecchi Portfolio & Apps 🚀

Welcome to my personal developer portfolio and app showcase landing page. 

This project serves as a central hub to display my developed applications (such as **Brotto**) and host the necessary **Privacy Policies** required for publishing apps on the Apple App Store.

🌐 **Live at:** [casalecchi.dev.br](https://casalecchi.dev.br)

## 📌 Features

- **App Showcase:** A dedicated section displaying published apps mimicking the iOS App Store visual language.
- **App Store Compliant Privacy Policy:** Pre-configured legal texts detailing offline-first architectures, local storage usage, and third-party services (like RevenueCat and Analytics).
- **Internationalization (i18n):** Full support for English and Portuguese across all texts.
- **Premium Aesthetics:** Modern dark mode UI built with Glassmorphism effects and clean typography.
- **Responsive Design:** Completely optimized for mobile, tablet, and desktop viewing.

## 🛠 Technologies Used

- **Framework:** React 19 + Vite
- **Language:** TypeScript
- **Styling & Components:** Material-UI (MUI v7)
- **Routing:** React Router DOM (HashRouter for static hosting compatibility)
- **Internationalization:** `react-i18next`
- **Deployment:** CI/CD via GitHub Actions for GitHub Pages

## 🚀 Running Locally

To run the project on your local machine:

1. Clone the repository:
```bash
git clone https://github.com/casalecchi/felipe-casalecchi-page.git
```

2. Install the dependencies:
```bash
npm install
```

3. Start the Vite development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

## 📦 Adding a New App

To add a new application to the portfolio, simply update the `src/data/apps.ts` file and ensure its image logo is placed inside the `public/` directory. The UI will automatically generate the new iOS-style app card!

---
*© Felipe Casalecchi. All rights reserved.*
