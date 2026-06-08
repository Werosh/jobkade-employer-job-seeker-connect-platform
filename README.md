# JobKade

**JobKade** is a modern job board and hiring platform MVP that connects job seekers with employers. Built with Next.js and Firebase, it provides job discovery, employer job posting, user authentication, and a dashboard for managing applications and listings.

> **Suggested repository name:** `jobkade-nextjs-firebase-job-search-and-recruitment-platform`

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Application Routes](#application-routes)
- [Firebase Setup](#firebase-setup)
- [Architecture Notes](#architecture-notes)
- [MVP Status & Roadmap](#mvp-status--roadmap)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

JobKade helps professionals find career opportunities and enables employers to post openings and manage applicants. The platform is designed as a minimum viable product with a clean UI, responsive layout, and a foundation ready for full Firebase-backed persistence.

**Target users:**

| Role            | Capabilities                                                              |
| --------------- | ------------------------------------------------------------------------- |
| **Job Seekers** | Browse and filter jobs, view details, apply (planned), track applications |
| **Employers**   | Post jobs, manage listings, review applications (planned)                 |

---

## Features

### Public

- **Landing page** -Hero section, feature highlights, and call-to-action
- **Job search** -Search by keyword, filter by location and job type (full-time, part-time, contract, freelance)
- **Job details** -Full job description, requirements, benefits, and apply flow

### Authentication

- Email/password registration and login via **Firebase Authentication**
- Auth state management with a custom `useAuth` hook
- Protected dashboard access (Firebase-backed)

### Employer & Job Seeker Dashboard

- **Overview** -Quick actions and activity summary
- **Post a job** -Multi-section form (title, company, salary, description, contact info)
- **Manage jobs** -View and manage posted listings
- **Applications** -Track application status (UI scaffolded)

### UI & UX

- Responsive navbar with mobile menu
- Reusable components: `Button`, `Input`, `Card`, `JobCard`, `EmptyState`
- Consistent design tokens (primary blue, secondary amber, accent green)
- Footer with quick links and legal pages

---

## Tech Stack

| Layer          | Technology                                                  |
| -------------- | ----------------------------------------------------------- |
| Framework      | [Next.js 16](https://nextjs.org/) (App Router)              |
| Language       | [TypeScript 5](https://www.typescriptlang.org/)             |
| UI             | [React 19](https://react.dev/)                              |
| Styling        | [Tailwind CSS 4](https://tailwindcss.com/)                  |
| Backend / Auth | [Firebase](https://firebase.google.com/) (Auth + Firestore) |
| Utilities      | `clsx`, `tailwind-merge`                                    |
| Linting        | ESLint + `eslint-config-next`                               |

---

## Project Structure

```
JobKade/
├── README.md                 # This file
└── jobkade/                  # Next.js application
    ├── src/
    │   ├── app/              # App Router pages and layouts
    │   │   ├── (auth)/       # Login & register (route group)
    │   │   ├── dashboard/    # Dashboard, post-job, manage jobs
    │   │   ├── jobs/         # Job search & detail pages
    │   │   ├── layout.tsx    # Root layout (Navbar + Footer)
    │   │   ├── page.tsx      # Home page
    │   │   └── globals.css   # Global styles & CSS variables
    │   ├── components/
    │   │   ├── layout/       # Navbar, Footer
    │   │   ├── shared/       # JobCard, EmptyState
    │   │   └── ui/           # Button, Input, Card
    │   ├── hooks/            # useAuth, useLocalStorage
    │   ├── lib/              # firebase, auth, utils
    │   └── types/            # Job, User, Application interfaces
    ├── public/               # Static assets
    ├── next.config.ts
    ├── package.json
    ├── tsconfig.json
    └── postcss.config.mjs
```

---

## Prerequisites

Before you begin, ensure you have:

- **Node.js** 18.17 or later (20+ recommended)
- **npm** or **yarn**
- A **Firebase** project (for authentication and future Firestore integration)

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/jobkade-nextjs-firebase-job-search-and-recruitment-platform.git
cd jobkade-nextjs-firebase-job-search-and-recruitment-platform/jobkade
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the `jobkade/` directory (see [Environment Variables](#environment-variables)).

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for production

```bash
npm run build
npm start
```

---

## Environment Variables

Create `jobkade/.env.local` with your Firebase project credentials:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

| Variable                                   | Description                       |
| ------------------------------------------ | --------------------------------- |
| `NEXT_PUBLIC_FIREBASE_API_KEY`             | Firebase Web API key              |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`         | Auth domain (`*.firebaseapp.com`) |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID`          | Firebase project ID               |
| `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`      | Cloud Storage bucket              |
| `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | FCM sender ID                     |
| `NEXT_PUBLIC_FIREBASE_APP_ID`              | Firebase app ID                   |

> **Note:** Without valid Firebase credentials, the app falls back to demo placeholder values. Authentication will not work until real keys are configured.

---

## Available Scripts

Run these from the `jobkade/` directory:

| Command         | Description                              |
| --------------- | ---------------------------------------- |
| `npm run dev`   | Start development server with hot reload |
| `npm run build` | Create an optimized production build     |
| `npm start`     | Serve the production build               |
| `npm run lint`  | Run ESLint                               |

---

## Application Routes

| Route                     | Description                 |
| ------------------------- | --------------------------- |
| `/`                       | Landing page                |
| `/login`                  | User login                  |
| `/register`               | User registration           |
| `/jobs/find`              | Job search with filters     |
| `/jobs/[id]`              | Individual job detail page  |
| `/dashboard`              | User dashboard overview     |
| `/dashboard/post-job`     | Create a new job listing    |
| `/dashboard/jobs`         | Manage posted jobs          |
| `/dashboard/applications` | View applications (planned) |

---

## Firebase Setup

1. Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
2. Add a **Web app** and copy the configuration object.
3. Enable **Authentication** → **Email/Password** sign-in method.
4. Create a **Cloud Firestore** database (for future job and application persistence).
5. Paste the config values into `jobkade/.env.local`.

### Planned Firestore Collections

| Collection     | Purpose                                     |
| -------------- | ------------------------------------------- |
| `users`        | User profiles (job seeker / employer roles) |
| `jobs`         | Job listings                                |
| `applications` | Job applications with status tracking       |

Type definitions for these models live in `src/types/job.ts`.

---

## Architecture Notes

- **App Router** -Pages use Next.js 16 App Router with client components where interactivity is needed (`'use client'`).
- **Auth hook** -`useAuth` wraps Firebase `onAuthStateChanged`, login, register, and logout.
- **Design system** -CSS custom properties in `globals.css` define brand colors used across components.
- **Component pattern** -UI primitives in `components/ui/`, domain components in `components/shared/`, layout in `components/layout/`.

---

## MVP Status & Roadmap

### Currently implemented

- [x] Responsive UI with landing, search, and dashboard pages
- [x] Firebase Authentication (email/password)
- [x] Job search UI with client-side filtering (mock data)
- [x] Job posting form UI
- [x] TypeScript models for jobs, users, and applications

### In progress / planned

- [ ] Persist jobs and applications to Firestore
- [ ] Replace mock data with live API queries
- [ ] Role-based views (job seeker vs employer)
- [ ] Application submission and status workflow
- [ ] User profile management
- [ ] Password reset flow
- [ ] Legal pages (Terms, Privacy, Contact)

---

## Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request.

Please follow existing code style, use TypeScript strictly, and run `npm run lint` before submitting.

---

## License

This project is proprietary. All rights reserved.

---

<p align="center">
  <strong>JobKade</strong> -Connecting talented professionals with amazing opportunities.
</p>
