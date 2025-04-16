# EduAI Frontend

This is the frontend of the EduAI educational platform, built with Next.js 14, TypeScript, and TailwindCSS.

The frontend is responsible for the user interface, including public pages (landing page) and the authenticated application area (dashboard, AI mentor, study path).

This project was bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
frontend/
├── app/                # Routes and pages
│   ├── (app)/         # Authenticated area
│   │   ├── app/       # Authenticated routes
│   │   │   ├── dashboard/    # Main dashboard
│   │   │   ├── study-path/   # Study path
│   │   │   └── ai-mentor/    # AI mentor interface
│   │   └── layout.tsx  # Shared layout for authenticated area
│   ├── (public)/      # Public pages (landing page)
│   │   ├── about/     # About page
│   │   ├── login/     # Login page
│   │   ├── register/  # Registration page
│   │   └── page.tsx   # Main landing page
│   ├── layout.tsx     # Root layout
│   └── providers.tsx  # Context providers
├── components/        # Reusable components
│   ├── ui/            # Basic UI components
│   ├── Navbar.tsx     # Public navigation bar
│   ├── AppNavbar.tsx  # Authenticated area navigation bar
│   ├── Sidebar.tsx    # Sidebar for authenticated area
│   └── ...           # Other components
└── public/           # Static files
```

## Implemented Features

- Responsive layout with TailwindCSS
- Light/dark theme
- Public and authenticated routes
- Reusable UI components
- Backend API integration

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to optimize and load custom fonts.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy

The frontend will be deployed on Vercel when it's ready for production.

## Current Status

- [x] Route structure implemented
- [x] Basic UI components
- [x] Responsive layout
- [x] Light/dark theme
- [x] Public pages (landing page)
- [x] Authenticated area structure
- [ ] Complete backend integration
- [ ] Dashboard with statistics
- [ ] AI mentor interface
- [ ] Interactive study path

> Updated on 04/16/2025
