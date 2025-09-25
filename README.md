# ATS-Friendly Resume - Samuel Smith

## Overview

This project is an ATS-friendly resume built with React, TypeScript, and Tailwind CSS. It features a clean, professional design optimized for Applicant Tracking Systems while maintaining excellent readability for human reviewers.

## Features

- **ATS-Optimized Format**: Structured to be easily parsed by Applicant Tracking Systems
- **Responsive Design**: Looks great on all devices from mobile to desktop
- **PDF Download**: One-click PDF generation for easy sharing
- **Modern Tech Stack**: Built with React, TypeScript, Vite, and Tailwind CSS

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- html2pdf.js (for PDF generation)
- React Icons

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/samuelsmith442/resume.git

# Navigate to the project directory
cd resume

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Building for Production

```bash
npm run build
```

## Deployment

This resume can be easily deployed to platforms like Netlify, Vercel, or GitHub Pages.

## License

MIT
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
