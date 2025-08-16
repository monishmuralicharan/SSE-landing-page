# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` (runs on localhost:3000)
- **Production build**: `npm run build`
- **Start production server**: `npm start`
- **Lint code**: `npm run lint`

## Architecture Overview

This is a Next.js 14 landing page for the Social Stock Exchange platform built with TypeScript, Tailwind CSS, and Framer Motion. The application targets influencers and content creators, allowing fans to invest in their success.

### Key Technology Stack
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript (fully typed)
- **Styling**: Tailwind CSS with custom CSS variables
- **Animations**: Framer Motion for smooth interactions
- **Database**: Supabase for waitlist management
- **Deployment**: Vercel (configured with vercel.json)

### Directory Structure
- `src/app/`: Next.js App Router pages and global styles
- `src/components/`: React components organized by feature
- `src/data/`: Static configuration and content data
- `src/lib/`: Utility libraries (Supabase client)
- `src/types.ts`: TypeScript interface definitions
- `public/images/`: Static assets and images

### Data Management
- All content is centralized in `src/data/` directory files
- Site metadata managed in `src/data/siteDetails.ts`
- Component data (benefits, FAQ, pricing) in separate data files
- TypeScript interfaces defined in `src/types.ts`

### Supabase Integration
- Database client configured in `src/lib/supabase.ts`
- Waitlist functionality with `sse_waitlist` table
- Environment variables required: `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Database schema documented in `SUPABASE_SETUP.md`

### Styling Approach
- Tailwind CSS with custom CSS variables in `globals.css`
- Color scheme: Primary yellow (`--primary`), Secondary blue (`--secondary`)
- Inter font family for friendly, professional appearance
- Responsive design with mobile-first approach

### Interactive Features
- Mouse-following cursor effects in hero section
- Smooth scroll animations throughout
- Dynamic scrolling social media platform showcase
- Framer Motion animations for enhanced UX

### Content Customization
To update site content, modify files in `src/data/`:
- `hero.ts`: Hero section content and copy
- `benefits.tsx`: Platform features and benefits
- `faq.ts`: FAQ questions and answers
- `siteDetails.ts`: Site metadata and configuration

### Environment Setup
- Requires `.env.local` with Supabase credentials
- Development setup documented in `README.md`
- Deployment checklist available in `DEPLOYMENT.md`

### Build Considerations
- Static site generation optimized for performance
- Vercel deployment configuration included
- All dependencies locked with package-lock.json
- TypeScript strict mode enabled