# CRM Dashboard — Frontend Engineer Technical Assignment

This repository contains my solution for the **Frontend Engineer Technical Assignment**.  
It implements a responsive, single-page **CRM Dashboard** using **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS v4**, matching the provided _dashboard-01_ Figma with usability-driven adaptations.

**Live Demo:** [https://karan-soni-uniqus-assignment.vercel.app](https://karan-soni-uniqus-assignment.vercel.app)

---

## 📁 Project Overview

The goal was to replicate the given dashboard design using reusable, maintainable components and modern frontend practices.  
Since only one page was required, slight design adaptations were made to improve user flow and logical interactions while maintaining the spirit of the provided layout.

---

## ⚙️ Tech Stack

| Category        | Tools / Libraries                                                 |
| --------------- | ----------------------------------------------------------------- |
| Framework       | **Next.js 16 (App Router)**                                       |
| Language        | **TypeScript 5 (strict mode)**                                    |
| Styling         | **Tailwind CSS v4**, **@tailwindcss/postcss**, **tailwind-merge** |
| Icons           | **lucide-react**                                                  |
| Utilities       | **clsx**                                                          |
| Analytics       | **@vercel/analytics**                                             |
| Package Manager | **npm**                                                           |
| Font            | **Geist (default Next.js system font)**                           |

---

## 🧩 Project Structure

karan-soni-uniqus-assignment/
├─ app/
│ ├─ favicon.ico
│ ├─ globals.css
│ ├─ layout.tsx
│ └─ page.tsx
├─ components/
│ └─ dashboard/
│ ├─ bottom-nav.tsx
│ ├─ messages-sidebar.tsx
│ ├─ sales-table.tsx
│ ├─ sidebar.tsx
│ ├─ top-header.tsx
│ └─ top-metrics.tsx
├─ hooks/
│ └─ use-mobile.ts
├─ lib/
│ ├─ dashboardData.json
│ ├─ data-provider.tsx
│ └─ utils.tsx
├─ public/
│ ├─ AccountSettings.jpg
│ ├─ Macbook.jpg
│ ├─ assets.tsx
│ └─ brand-logo.png
├─ types/
│ └─ dashboard.ts
├─ .gitignore
├─ eslint.config.mjs
├─ next.config.ts
├─ package.json
├─ postcss.config.mjs
├─ tsconfig.json
└─ README.md

---

## 🧠 Architecture & Design Decisions

### Componentization

Each dashboard section (Header, Sidebar, Metrics, Table, Messages) is built as a separate **typed React component** under `components/dashboard`.  
This ensures:

- **Reusability:** Components can be reused independently.
- **Maintainability:** Logical separation of structure and function.
- **Performance:** Prevents unnecessary re-renders and improves modularity.

### Context-Driven Data Layer

A global context (`DashboardProvider` in `lib/data-provider.tsx`) manages mock data sourced from `lib/dashboardData.json`.  
This abstraction allows the UI to stay completely independent of data fetching logic, meaning:

- Only the provider will need updates when integrating real APIs.
- All UI components remain unchanged.
- Easier debugging and scalability.

### Styling & Responsiveness

- **Tailwind CSS v4** is used for utility-first styling.
- Responsive and mobile-first design:
  - **BottomNav** appears on mobile only.
  - **Sidebar** collapses automatically on smaller screens.
  - Metric cards and tables scale fluidly.
- Safe-area adjustments handled through a resize observer for better device support.

### TypeScript Configuration

- **Strict mode enabled** with type definitions for every major component and data structure.
- `paths` alias (`"@/*"`) simplifies imports and keeps code clean.
- JSON modules imported directly for mock data handling.

---

## 💻 Installation & Setup

### Prerequisites

- Node.js **≥ 18**
- npm (default package manager)

### Setup

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build for production
npm run build

# 4. Run production build
npm start
```

## 🧮 Features Implemented

| Feature                      | Description                                  |
| ---------------------------- | -------------------------------------------- |
| **Top Header**               | Navigation bar with search and action icons  |
| **Sidebar Navigation**       | Collapsible, active state navigation menu    |
| **Metrics Cards**            | KPI display from mock data                   |
| **Sales Table**              | Paginated data table with color-coded status |
| **Messages Sidebar**         | List of recent user messages                 |
| **Mobile Bottom Navigation** | Safe-area adaptive mobile nav                |
| **Data Context Provider**    | Single source of truth for data              |
| **Responsive Design**        | Works across mobile, tablet, and desktop     |

## 🎨 Design Fidelity & Adaptations

This dashboard was implemented based on the **“dashboard-01”** Figma reference provided in the assignment.

### Adjustments made to fit a single-page user flow:

- Simplified side navigation for better continuity within one-page design.
- Adjusted spacing and font scale to improve readability and hierarchy.
- Added hover and active states to enhance interactivity.
- Ensured responsive layout behavior across breakpoints.

These changes preserve the overall essence and visual identity of the original design while improving usability and consistency for a standalone page experience.

## 🔍 Linting & Code Quality

- **ESLint** configured via `eslint.config.mjs` with TypeScript and Next.js rules.
- Strict typing enforced across all components and data models.
- Consistent Tailwind CSS utility ordering for maintainable styling.
- No unused variables, imports, or redundant logic in the codebase.

---

## 📊 Mock Data

The dashboard operates using static mock JSON data stored in `lib/dashboardData.json`, representing:

- **KPI Metrics** — Revenue, Growth, Conversion, etc.
- **Sales Table** — ID, amount, date, status, and customer details.
- **Messages Sidebar** — List of recent conversations and timestamps.

All data is provided via the **Context API**, simulating realistic API calls without needing a backend.  
This ensures the UI layer remains decoupled from the data source and can later integrate live APIs with zero component changes.

---

## 🚀 Deployment

Deployed on **Vercel** for optimal Next.js hosting and build performance.

**Live Demo:** [https://karan-soni-uniqus-assignment.vercel.app](https://karan-soni-uniqus-assignment.vercel.app)

---

## 🧾 Assignment Deliverables Checklist

| Requirement                            | Status |
| -------------------------------------- | ------ |
| Modular, reusable component structure  | ✅     |
| Design fidelity with Figma reference   | ✅     |
| TypeScript strict mode enabled         | ✅     |
| Context-based data architecture        | ✅     |
| Responsive and mobile support          | ✅     |
| Detailed README with setup & rationale | ✅     |
| Live deployment on Vercel              | ✅     |

---

## 👨‍💻 Author

**Karan Soni**  
Frontend Engineer  
[GitHub: karansoni1072002](https://github.com/karansoni1072002)
