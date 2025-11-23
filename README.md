# Lucas Garbadh de Camargo - Portfolio

A modern, responsive portfolio website built with Next.js, React, TypeScript, and Tailwind CSS. Features smooth animations, multi-language support, and a working contact form with email integration.

## 🚀 Features

- **Responsive Design** - Works seamlessly on all devices (mobile, tablet, desktop)
- **Smooth Animations** - Scroll-triggered animations using Framer Motion
- **Multi-Language Support** - English (Canada) and Portuguese (Brazil)
- **Contact Form** - Working email system with Gmail integration
- **Dark/Light Mode Support** - Professional styling with Tailwind CSS
- **Professional Icons** - React Icons integration for social links
- **SEO Optimized** - Built with Next.js best practices

## 🛠️ Tech Stack

- **Framework**: Next.js 16.0.1 with Turbopack
- **Language**: TypeScript
- **UI Library**: React 19.2.0
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Scroll Detection**: react-intersection-observer
- **Icons**: react-icons (Font Awesome)
- **Email**: Nodemailer with Gmail SMTP

## 📋 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` and add your Gmail credentials:
```bash
EMAIL_PROVIDER=gmail
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-app-password
```

## 🚀 Getting Started

Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 📦 Building for Production

Build the production bundle:
```bash
npm run build
```

## 🌐 Deployment on Vercel

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "Add New" → "Project"
4. Select your GitHub repository
5. Add environment variables:
   - `EMAIL_PROVIDER=gmail`
   - `GMAIL_USER=your-email@gmail.com`
   - `GMAIL_APP_PASSWORD=your-app-password`
6. Click "Deploy"

Your portfolio will be live in minutes!

## 📝 Customization

### Update Your Information
- **About Section**: Edit `components/About.tsx`
- **Projects**: Update `constants/index.ts` with your projects
- **Services**: Modify `components/Services.tsx`
- **Contact Email**: Update `.env.local`

### Colors
Edit the brand colors in `globals.css`:
- Primary: `#0B1E3F` (Dark Navy)
- Accent: `#2E5090` (Medium Blue)
- Text: `#F5F6FA` (Off-White)
- Footer: `#1F2937` (Neutral Gray)

### Languages
Translations are in `context/LanguageContext.tsx`. Add new translations for both English and Portuguese.

## 📁 Project Structure

```
├── app/
│   ├── api/contact/route.ts      # Email API endpoint
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
├── components/
│   ├── About.tsx                 # About section with social links
│   ├── Contact.tsx               # Contact form
│   ├── Footer.tsx                # Footer
│   ├── Header.tsx                # Header/Hero section
│   ├── Navigation.tsx             # Navbar
│   ├── Projects.tsx              # Projects section
│   ├── Services.tsx              # Services section
│   └── LanguageSwitcher.tsx       # Language toggle
├── constants/
│   └── index.ts                  # Project data, social links
├── context/
│   └── LanguageContext.tsx        # Multi-language support
└── public/
    └── aboutPicture.jpg          # Profile image
```

## 📧 Email Setup

The contact form uses Gmail SMTP via Nodemailer. When someone submits the form:
1. You receive a notification with their message
2. They receive a confirmation email

**Important**: Never commit `.env.local` to Git. It's in `.gitignore` automatically.

## 🎨 Customizing Sections

### Projects Section
Edit `constants/index.ts` and update the `PROJECTS` array with your own projects.

### Skills/About
Update `About.tsx` component with your skills and experience.

### Services
Modify `Services.tsx` to showcase your services.

## 🔐 Security

- Environment variables stored in `.env.local` (not committed)
- App Password used instead of real password for Gmail
- Email validation on server-side
- Error handling without exposing sensitive details

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Vercel Deployment](https://vercel.com/docs)

## 📄 License

This project is open source and available under the MIT License.

## 👋 Contact

Have questions? You can reach me through the portfolio contact form or check out my social links in the About section.

---

Built with ❤️ using Next.js and Tailwind CSS
