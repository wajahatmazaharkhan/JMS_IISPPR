# PROJECT_OVERVIEW.md

## Project Information
- **Repository**: [JMS_IISPPR](https://github.com/payal1612/JMS_IISPPR.git)
- **Type**: Academic Journal Management System (Frontend-Only)
- **Status**: Development/Active
- **Last Updated**: August 17, 2025

## Project Description
The **Law, Diplomacy, Tech & Public Policy Review (LDTPPR)** is a modern, frontend-only Journal Management System built for academic publishing. It simulates the complete journal article lifecycle, editorial workflow, and public-facing pages for an academic journal without requiring a backend infrastructure.

**Note**: This project has been restructured from a MERN-style `client/` folder structure to follow Vite+React best practices with all files in the root directory.

## Tech Stack & Architecture

### Core Technologies
- **React 19.1.0** - Frontend framework with JSX components
- **Vite 6.3.5** - Fast build tool and development server
- **Tailwind CSS 4.1.10** - Utility-first CSS framework for styling
- **React Router DOM 7.6.2** - Client-side routing
- **Framer Motion 12.23.5** - Animation library
- **Lucide React 0.523.0** - Icon library

### Additional Libraries
- **PDF Generation**: jsPDF, jsPDF-AutoTable, html2canvas
- **UI Enhancement**: react-countup, react-intersection-observer
- **Icons**: react-icons, lucide-react

### Development Tools
- **ESLint 9.29.0** - Code linting with React-specific rules
- **TypeScript definitions** - Type safety for React components
- **Vercel** - Deployment platform (configured with vercel.json)

## Project Structure

```
JMS_IISPPR/
├── .git/                           # Git repository
├── .github/                        # GitHub configuration & instructions
├── .gitignore                      # Git ignore rules
├── README.md                       # Project documentation
├── PROJECT_OVERVIEW.md             # This overview file
├── public/                         # Static assets
│   ├── vite.svg
│   └── assets/                     # Images (1.jpg, 2.jpg)
├── src/                            # Source code
│   ├── main.jsx                    # Application entry point
│   ├── App.jsx                     # Root component with routing (339 lines)
│   ├── App.css                     # Global styles
│   ├── index.css                   # Base styles
│   ├── assets/                     # Application assets
│   │   ├── logo.png
│   │   └── react.svg
│   ├── components/                 # Reusable UI components
│   │   ├── ArticlePage.jsx         # Article display component
│   │   ├── BlogCard.jsx            # Blog post cards
│   │   ├── FilterDropdown.jsx      # Article filtering
│   │   ├── ResearchCard.jsx        # Research article cards
│   │   ├── ResearchEnhancements.jsx
│   │   ├── ScrollToTop.jsx         # Navigation utility
│   │   ├── Sidebar.jsx             # Dashboard sidebar
│   │   └── TopNavbar.jsx           # Main navigation (165 lines)
│   ├── data/                       # Static data stores
│   │   ├── articles.js             # Article data (10,255 lines!)
│   │   ├── blogs.js                # Blog posts
│   │   ├── editions.js             # Journal editions
│   │   ├── staticUsers.js          # User accounts for simulation
│   │   └── users.js                # User data
│   ├── hooks/                      # Custom React hooks
│   │   ├── useArticles.js          # Article state management (41 lines)
│   │   └── useEditions.js          # Edition management
│   ├── layouts/                    # Layout components
│   │   └── DashboardLayout.jsx     # Dashboard layout wrapper
│   ├── pages/                      # Page components
│   │   ├── [Core Pages]            # 17 main pages
│   │   ├── admin/                  # Admin-specific pages
│   │   ├── author/                 # Author workflow pages
│   │   ├── dashboards/             # Role-based dashboards (5 roles)
│   │   ├── editions/               # Individual article pages (82 files!)
│   │   ├── editor/                 # Editorial workflow pages
│   │   ├── issues/                 # Issue management
│   │   ├── reader/                 # Reader interface
│   │   └── reviewer/               # Reviewer workflow pages
│   └── utils/                      # Utility functions
│       └── pdfExport.js            # PDF generation utilities
├── index.html                      # HTML entry point
├── package.json                    # Dependencies & scripts
├── package-lock.json               # Package lock file
├── vite.config.js                  # Vite configuration
├── eslint.config.js                # ESLint configuration
└── vercel.json                     # Vercel deployment config
```

## Application Architecture

### Data Management
- **No Backend**: Entirely frontend-based with static data
- **State Management**: React hooks (useState) with custom hooks
- **Data Storage**: Static JavaScript arrays in `/src/data/`
- **Persistence**: Local state only (resets on refresh)

### Data Structures
```javascript
// Article Structure
{
  id, issue, volume, title, author, authorAbbrev, abstract, 
  keywords, status, intro, content, conclusion, references,
  assignedReviewers, feedback
}

// User Structure  
{
  id, name, role, email, password
}

// Edition Structure
{
  id, title, releaseDate, articles, published
}
```

### User Roles & Authentication
- **No Real Authentication**: Simulated login with static credentials
- **5 User Roles**:
  - `admin` - Super Admin (admin@email.com / admin@1234)
  - `editor` - Editor (editor@email.com / editor@123)
  - `reviewer` - Reviewer (reviewer@email.com / reviewer@123)
  - `author` - Author (author@email.com / author@123)
  - `reader` - Reader (reader@email.com / reader@123)

## Key Features & Workflows

### Article Lifecycle Management
1. **Submission** (`/submit-article`) - Authors submit articles
2. **Editorial Review** (`/editor`) - Editors approve/reject submissions
3. **Reviewer Assignment** (`/editor/assign-reviewers`) - Assign reviewers
4. **Peer Review** (`/reviewer`) - Reviewers provide feedback
5. **Author Revision** (`/author/revise`) - Authors revise based on feedback
6. **Publication** (`/editor/publish`) - Final publication to editions

### Role-Based Dashboards
- **Admin Dashboard** (`/admin`) - User management, system overview
- **Editor Dashboard** (`/editor`) - Editorial workflow, article management
- **Reviewer Dashboard** (`/reviewer`) - Review assignments
- **Author Dashboard** (`/author`) - Article submissions, revisions
- **Reader Dashboard** (`/reader`) - Published content access

### Public Pages
- **Landing Page** (`/`) - Homepage with navigation
- **Research Articles** (`/research`) - Published research
- **Journal Editions** (`/editions`) - All published editions
- **Blog** (`/blog`) - Academic blog posts
- **Static Content**: Ethics, Plagiarism Policy, Editorial Board, Contact Info

## Article Content Management

### Individual Article Pages
- **82 Individual Article Components** in `/pages/editions/`
- Each article has its own route and dedicated component
- Articles are comprehensive academic papers with:
  - Abstract, Introduction, Content sections
  - Conclusions, References, Keywords
  - PDF export functionality

### Content Scale
- **10,255+ lines** of article content in `articles.js`
- Covers topics in Law, Diplomacy, Technology, Public Policy
- Real academic research with proper citations and structure

## Technical Features

### PDF Generation
- **jsPDF Integration** - Generate PDFs from articles
- **Batch Download** - Download multiple articles
- **Formatted Output** - Professional academic formatting

### UI/UX
- **Responsive Design** - Mobile, tablet, desktop support
- **Clean Academic Styling** - Professional journal appearance
- **Accessibility** - Proper semantic markup
- **Animations** - Framer Motion for smooth interactions

### Development Setup
```bash
# Installation
npm install

# Development
npm run dev        # Start development server

# Production
npm run build      # Build for production
npm run preview    # Preview production build

# Code Quality
npm run lint       # Run ESLint
```

## Deployment Configuration

### Vercel Setup
- **SPA Configuration**: All routes redirect to index.html
- **Static Site**: No server-side rendering required
- **Build Output**: Optimized production build via Vite

### Environment
- **Development**: Vite dev server with HMR
- **Production**: Static files served via CDN
- **No Environment Variables**: Fully static application

## Git Repository Status
- **Current Branch**: `main`
- **Remote Origin**: `https://github.com/payal1612/JMS_IISPPR.git`
- **Untracked Files**: `.github/` directory (contains instructions)
- **Clean Working Directory**: No uncommitted changes

## File Statistics
- **Total JS/JSX Files**: 97
- **Largest File**: `articles.js` (10,255 lines)
- **Component Count**: 80+ React components
- **Page Components**: 100+ individual pages

## Development Notes

### Current Limitations
1. **No Persistence**: Data resets on page refresh
2. **No Real Authentication**: Static login credentials
3. **No Backend Integration**: Ready for API integration
4. **Local State Only**: No global state management

### Extension Opportunities
1. **Backend Integration**: Connect to real API
2. **Database**: Persistent data storage
3. **Real Authentication**: JWT/OAuth implementation
4. **File Upload**: Real PDF/document upload
5. **Email Notifications**: Editorial workflow notifications
6. **Search Functionality**: Full-text article search

### Code Quality
- **ESLint Configuration**: Modern React best practices
- **Component Structure**: Well-organized, reusable components
- **Routing**: Comprehensive route structure
- **Styling**: Consistent Tailwind CSS usage

## Collaboration Guidelines

### For AI Agents & Developers
1. **Review this overview** before making changes
2. **Understand the role-based structure** - different user types have different interfaces
3. **Respect the academic context** - maintain professional, scholarly tone
4. **Test across all user roles** - ensure changes work for all 5 user types
5. **Maintain data structure consistency** - follow established patterns in `/data/`
6. **Consider the frontend-only nature** - no server-side dependencies

### Key Files to Understand
- `README.md` - Main project documentation and quick start guide
- `App.jsx` - Central routing and component imports
- `data/articles.js` - Core content data
- `hooks/useArticles.js` - State management patterns
- `components/TopNavbar.jsx` - Navigation structure
- `layouts/DashboardLayout.jsx` - Role-based layout system

This project represents a sophisticated simulation of an academic journal management system, ready for backend integration while providing a complete frontend experience for all stakeholders in the academic publishing process.
