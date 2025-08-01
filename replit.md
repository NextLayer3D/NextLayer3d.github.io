# NextLayer 3D Printing Services

## Overview

NextLayer 3D is a professional 3D printing services website that showcases the company's capabilities in rapid prototyping, production parts, and custom design solutions. The application presents a modern, responsive interface where potential customers can browse the company's portfolio, learn about their services, get information about the team, and request quotes for their projects.

The website features a clean, professional design with sections for displaying work galleries, company information, team profiles, and an interactive quote request system. It's built as a full-stack application with a React frontend and Express backend, designed to handle both content presentation and customer inquiries.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing, providing navigation between Home, Gallery, About, and Quote pages
- **UI Components**: Radix UI primitives with shadcn/ui component system for consistent, accessible design patterns
- **Styling**: Tailwind CSS with CSS custom properties for theming, supporting both light and dark modes
- **State Management**: TanStack Query (React Query) for server state management and data fetching
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework for HTTP server functionality
- **Language**: TypeScript throughout for consistent type safety across the stack
- **Database ORM**: Drizzle ORM for type-safe database operations and migrations
- **Storage Pattern**: Interface-based storage abstraction allowing for easy switching between in-memory and database implementations
- **API Design**: RESTful API structure with `/api` prefix for clear separation of concerns

### Data Storage
- **Database**: PostgreSQL as the primary database (configured via Drizzle)
- **Connection**: Neon Database serverless PostgreSQL for cloud-based data storage
- **Schema Management**: Drizzle Kit for database migrations and schema management
- **Development Storage**: In-memory storage implementation for development and testing

### Authentication & Session Management
- **Session Store**: PostgreSQL-based session storage using connect-pg-simple
- **User Schema**: Basic user model with username/password authentication structure
- **Validation**: Zod schemas for runtime type validation and data integrity

### Development & Deployment
- **Development Server**: Vite with HMR (Hot Module Replacement) for rapid development
- **Production Build**: ESBuild for server bundling and Vite for client optimization
- **Environment**: Replit-optimized with development tooling and error overlay
- **Code Quality**: TypeScript strict mode with comprehensive type checking

## External Dependencies

### UI & Styling
- **Radix UI**: Complete set of accessible, unstyled UI primitives for complex components
- **Tailwind CSS**: Utility-first CSS framework for rapid styling and responsive design
- **Lucide React**: Modern icon library providing consistent iconography
- **Inter Font**: Google Fonts integration for professional typography

### Database & ORM
- **Drizzle ORM**: Type-safe SQL ORM with PostgreSQL dialect support
- **Neon Database**: Serverless PostgreSQL platform for cloud database hosting
- **Drizzle Zod**: Integration between Drizzle ORM and Zod for schema validation

### Development Tools
- **Vite**: Build tool with React plugin for fast development and production builds
- **TypeScript**: Static type checking and enhanced developer experience
- **ESBuild**: Fast JavaScript bundler for server-side code compilation
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer plugins

### Runtime Libraries
- **React Query**: Server state management and caching for API interactions
- **React Hook Form**: Performant form library with minimal re-renders
- **Wouter**: Lightweight routing library for single-page application navigation
- **Date-fns**: Modern date utility library for date formatting and manipulation
- **Class Variance Authority**: Utility for creating variant-based component APIs