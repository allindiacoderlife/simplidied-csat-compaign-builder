# Simplified CSAT Campaign Builder

A modern, interactive, real-time **Customer Satisfaction (CSAT) Campaign Builder** built with **React 19**, **Vite**, and **Tailwind CSS v4**. This application allows product and growth teams to design, configure, and customize mobile in-app CSAT feedback surveys with an instant, interactive mobile phone simulator.

---

## 🌟 Live Demo & Repository

- **GitHub Repository**: [https://github.com/allindiacoderlife/simplidied-csat-compaign-builder.git](https://github.com/allindiacoderlife/simplidied-csat-compaign-builder.git)
- **Live Deployment URL**: [`https://simplidied-csat-compaign-builder.vercel.app/`]

---

## 📋 Overview & Objectives

Customer Satisfaction (CSAT) is a critical metric used to measure customer satisfaction at specific interaction points. This project implements a comprehensive campaign builder where any change made across **Content** or **Styling** immediately updates the live mobile preview without requiring manual saves or page refreshes.

### Key Highlights

- **Zero-Latency Live Sync**: Controlled React state guarantees every keystroke, color tweak, or toggle updates the mobile mockup instantly.
- **Interactive Mobile Simulator**: A realistic iPhone 15 frame simulator with simulated mobile app backdrops, allowing full end-to-end testing of the feedback collection flow with confetti celebrations.
- **Dynamic Options**: Add, inline-edit, and delete feedback category tags with minimum safety guards.
- **Extensive Styling Controls**: Granular customization over colors, typography, sizing, border radii, button dimensions, and popup positioning.
- **Theme Presets & Export**: Instant 1-click theme presets (Indigo, Emerald, Sunset, Cyber Dark, Luxury Rose) and 1-click JSON configuration export to clipboard.

---

## ✨ Features

### 1. Content Configuration

Divided into three logical steps matching the user feedback lifecycle:

- **Initial Step (Prompt)**:
  - Customizable Title and Subtitle.
  - Action button text (e.g., _"Give Feedback"_).
- **Feedback Step (Rating & Dynamic Options)**:
  - **Rating Representation**: Toggle between **Star Rating (1–5)** and **Numbered Scale (1–5)**.
  - **Dynamic Options**: Dynamically add, update, and delete feedback tags/categories (e.g., _Customer Support_, _Ease of Use_, _Product Speed_).
  - **Additional Comments**: Toggle comment field visibility with editable placeholder text.
  - **Submit Button Text**: Custom CTA text (e.g., _"Submit Feedback"_).
- **Thank You Step (Celebration & Confirmation)**:
  - **Media Asset Upload**: Supports file upload for PNG, JPG, JPEG, GIF, and Lottie animations via `FileReader`.
  - **Media Presets**: Quick-select preloaded celebration illustrations.
  - **Confirmation Messaging**: Customizable completion Title, Subtitle, and Dismiss/Done button label.

### 2. Styling & Design Engine

- **Core Colors**: Background color, Title color, Subtitle color, Button color, and Button text color using dual input color pickers (visual color swatch + hex code input).
- **Rating Colors**: Independent color pickers for selected and unselected states.
- **Typography & Hierarchy**:
  - Font families: Inter, Plus Jakarta Sans, Outfit, System UI.
  - Font scale: Compact (Small), Standard (Medium), Spacious (Large).
  - Title Font Weight: Regular (400), Medium (500), SemiBold (600), Bold (700).
- **Geometry & Sizing**:
  - Card & Button Border Radius slider (0px to 32px).
  - Button width: Full width (100%) or Auto / Compact.
  - Button height: Compact (38px), Standard (46px), Large (54px).
  - Modal placement: Mobile Bottom Sheet or Centered Modal.

### 3. Interactive Live Mobile Preview

- **Realistic iPhone 15 Shell**: High-resolution bezel, status bar (time, signal, Wi-Fi, battery), and bottom home indicator.
- **Simulated In-App Environment**: Toggle between Light and Dark host app backdrops to test contrast and visibility.
- **Interactive Simulation**:
  - Click stars or number buttons to select ratings.
  - Click multi-select feedback tags.
  - Type sample responses into the comment area.
  - Click submit to trigger an animated confetti burst (`canvas-confetti`) and transition into the Thank You step.
  - Reset flow button to quickly replay the customer experience from step 1.

### 4. Header & Workflow Utilities

- **Editable Campaign Name**: Click-to-edit campaign title with real-time status indicator.
- **1-Click Theme Presets**: Pre-curated palettes (Modern Indigo, Emerald Fresh, Sunset Vibrant, Cyber Dark, Luxury Rose).
- **Export Configuration**: Copies the entire campaign state (name, content, styling) as formatted JSON for backend storage or deployment.
- **Reset to Defaults**: One-click restore back to initial state.

---

## 🛠️ Tech Stack

| Technology                  | Purpose                                                               |
| :-------------------------- | :-------------------------------------------------------------------- |
| **React 19**                | Core UI library & state management with controlled components         |
| **Vite 8**                  | Next-generation frontend build tool and lightning-fast HMR dev server |
| **Tailwind CSS v4**         | Modern utility-first styling with `@tailwindcss/vite`                 |
| **Lucide React**            | Cohesive, clean iconography                                           |
| **Canvas Confetti**         | Celebration micro-interactions upon survey completion                 |
| **JavaScript (ES Modules)** | Clean, modular ES6+ JavaScript                                        |

---

## 📁 Folder Structure

```
simplidied-csat-compaign-builder/
├── docs/
│   └── pro.md                     # Assignment requirements and guidelines
├── public/
│   ├── Iphone 15.png              # Realistic iPhone 15 frame mockup overlay
│   ├── favicon.svg                # Application favicon
│   └── icons.svg
├── src/
│   ├── assets/                    # Static assets
│   ├── components/
│   │   ├── common/
│   │   │   └── ColorPickerInput.jsx   # Reusable synchronized color & hex input
│   │   ├── content/
│   │   │   ├── InitialFeedbackForm.jsx# Step 1: Initial prompt form
│   │   │   ├── FeedbackPageForm.jsx   # Step 2: Rating & dynamic tags form
│   │   │   └── ThankYouPageForm.jsx   # Step 3: Media upload & confirmation form
│   │   ├── preview/
│   │   │   ├── CsatPopup.jsx          # Rendered popup component inside mockup
│   │   │   └── PhoneMockup.jsx        # iPhone frame, status bar & simulated app
│   │   ├── Content.jsx            # Content tab sub-router & wrapper
│   │   ├── Header.jsx             # Top bar, campaign title, presets & export JSON
│   │   ├── Preview.jsx            # Mobile preview controller, state & confetti
│   │   └── Styling.jsx            # Styling tab controls (colors, fonts, layout)
│   ├── constants/
│   │   └── defaultState.js        # Initial content, styling defaults, and presets
│   ├── App.jsx                    # Root app state & responsive 2-column layout
│   ├── index.css                  # Global styles & Tailwind imports
│   └── main.jsx                   # React DOM entry point
├── eslint.config.js               # ESLint configuration
├── index.html                     # HTML entry point with web fonts
├── package.json                   # Project dependencies and npm scripts
├── vite.config.js                 # Vite + React + Tailwind v4 configuration
└── README.md                      # Project documentation
```

---

## 🚀 Setup & Local Development Instructions

### Prerequisites

- **Node.js**: v18.0.0 or higher recommended
- **npm**: v9.0.0 or higher (or `pnpm` / `yarn`)

### Installation Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/allindiacoderlife/simplidied-csat-compaign-builder.git
   cd simplidied-csat-compaign-builder
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the local development server**:

   ```bash
   npm run dev
   ```

   Open your browser and navigate to `http://localhost:5173` (or the URL shown in your terminal).

4. **Build for production**:

   ```bash
   npm run build
   ```

   The optimized production bundle will be generated inside the `dist/` directory.

5. **Preview production build locally**:

   ```bash
   npm run preview
   ```

6. **Run linter**:
   ```bash
   npm run lint
   ```

---

## 🌐 Deployment Guide

This project can be deployed seamlessly to any modern static hosting provider:

### Option 1: Vercel

1. Push your repository to GitHub.
2. Log in to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import `simplidied-csat-compaign-builder`.
4. Framework Preset: **Vite**.
5. Build Command: `npm run build`.
6. Output Directory: `dist`.
7. Click **Deploy**.

### Option 2: Netlify

1. Log in to [Netlify](https://www.netlify.com/) and choose **"Add new site" > "Import an existing project"**.
2. Connect your GitHub repository.
3. Set Build command: `npm run build` and Publish directory: `dist`.
4. Click **Deploy Site**.

---

## 🧪 Functional Verification & Testing Checklist

- [x] **Real-time Live Sync**: All text, option changes, and styling properties reflect without delay or page refresh.
- [x] **Controlled Components**: All form controls are strictly controlled via React state.
- [x] **Dynamic Feedback Options**: Add, rename, and delete options with minimum threshold validation.
- [x] **Rating Switcher**: Instant transition between 1–5 Star Rating and 1–5 Numbered Scale.
- [x] **Custom Media & Presets**: Custom upload of PNG, JPG, GIF, or Lottie JSON with real-time preview and fallback handling.
- [x] **Styling Controls**: Background color, title/subtitle colors, button colors, border radius, font scale, and popup placement.
- [x] **Interactive Simulator**: User can complete an end-to-end feedback submission flow with confetti celebration.
- [x] **JSON Export**: Export full configuration directly to clipboard.
- [x] **Responsive Layout**: Desktop two-column split and mobile-optimized stacked interface.

---

## 📄 License

This project was built as part of the Frontend Intern Assignment for **AppStorys**. Distributed under the MIT License.
