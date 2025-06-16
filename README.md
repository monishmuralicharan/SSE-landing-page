[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fnexi-launch%2Ffinwise-landing-page)

# Social Stock Exchange - Landing Page

A modern, responsive landing page for the Social Stock Exchange platform built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, professional design targeting influencers and content creators
- **Responsive**: Fully responsive design that works on all devices
- **Interactive Elements**:
  - Mouse-following cursor effects in hero section
  - Smooth scroll animations
  - Dynamic scrolling social media platform showcase
- **Waitlist Integration**: Seamless Supabase integration for collecting user signups
- **Performance Optimized**: Built with Next.js 14 for optimal performance
- **TypeScript**: Fully typed for better development experience

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Database**: Supabase
- **Deployment**: Vercel
- **Font**: Inter

## 📝 Project Structure

```
src/
├── app/                 # App router pages
├── components/          # React components
├── data/               # Static data and configuration
├── lib/                # Utility libraries (Supabase client)
└── types.ts            # TypeScript type definitions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account

### Installation

1. **Clone the repository**

   ```bash
   git clone [repository-url]
   cd SSE-landing-page
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:

   ```env
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

4. **Set up Supabase database**

   Create a table named `sse_waitlist` with the following SQL:

   ```sql
   CREATE TABLE sse_waitlist (
     id BIGSERIAL PRIMARY KEY,
     first_name TEXT NOT NULL,
     last_name TEXT NOT NULL,
     primary_email TEXT NOT NULL,
     primary_influence_platform TEXT NOT NULL,
     created_at TIMESTAMPTZ DEFAULT NOW()
   );
   ```

5. **Run the development server**

   ```bash
   npm run dev
   ```

6. **View your project**: Open [localhost:3000](http://localhost:3000)

## 🚀 Deployment

### Deploy to Vercel

1. **Push to GitHub**: Ensure your code is pushed to a GitHub repository

2. **Connect to Vercel**:

   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Configure environment variables in Vercel dashboard

3. **Environment Variables**: Add the following to your Vercel project settings:

   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

4. **Deploy**: Vercel will automatically deploy your application

## 📊 Analytics & Monitoring

- Add Google Analytics ID to `src/data/siteDetails.ts`
- Monitor form submissions through Supabase dashboard
- Track user engagement through Vercel Analytics

## 🎨 Customization

### Brand Colors

Update colors in `src/app/globals.css`:

- `--primary`: Primary yellow color
- `--secondary`: Secondary blue color
- `--foreground`: Text color

### Content

Update content in the `src/data/` directory:

- `hero.ts`: Hero section content
- `faq.ts`: FAQ questions and answers
- `benefits.tsx`: Platform features
- `siteDetails.ts`: Site metadata

## 🔧 Build & Production

```bash
# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 📧 Contact

For questions about the Social Stock Exchange platform, email: thesocialstockexchange@gmail.com

## 📄 License

This project is private and proprietary to Social Stock Exchange.
