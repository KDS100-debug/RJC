# Overview

This is a comprehensive School Management System (SMS) built as a SaaS-grade web application. The system is designed to streamline academic operations across multiple schools with features including student/teacher portals, fee collection, performance tracking, attendance management, grading systems, and teacher review platforms. It serves different user roles including super admins, school admins, teachers, students, and parents, each with role-based access controls and customized dashboards.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The client is built with **React 18** using **TypeScript** and **Vite** as the build tool. The UI framework is **shadcn/ui** with **Tailwind CSS** for styling, providing a modern, responsive design system. State management is handled through **TanStack Query** for server state and React's built-in state management for local UI state. Routing is implemented using **wouter** for a lightweight client-side routing solution.

## Backend Architecture
The server uses **Express.js** with **TypeScript** in an ESM configuration. Session-based authentication is implemented using **express-session** with password hashing via **bcrypt**. The API follows RESTful conventions with structured error handling and request/response logging middleware.

## Database Layer
**Drizzle ORM** is used with **PostgreSQL** as the primary database, specifically configured for **Neon Database** serverless PostgreSQL. The schema defines comprehensive tables for multi-tenant school management including users, schools, classes, subjects, grades, attendance, teacher reviews, invoices, payments, and notifications. The database design supports role-based access control with enums for user roles, attendance status, payment status, and grade letters.

## Authentication & Authorization
Session-based authentication with role-based access control (RBAC) supporting multiple user types: super_admin, admin, teacher, student, and parent. Each role has specific permissions and access to different parts of the application. Authentication middleware enforces role-based route protection.

## Multi-tenant Architecture
The system supports multiple schools through a school-based tenant separation model. Each school has its own data isolation while sharing the same application instance. The schema includes school references across all relevant entities to ensure proper data separation.

## Component Architecture
The frontend follows a modular component structure with shared UI components, role-specific dashboard components, and feature-specific components for attendance tracking, grade management, fee collection, and teacher reviews. Components are built using the composition pattern with proper TypeScript interfaces.

## API Design
RESTful API endpoints are organized by feature domain (auth, dashboard, students, teachers, grades, attendance, fees, reviews). The API uses consistent response patterns and error handling. Query parameters and request/response validation is implemented using Zod schemas.

# External Dependencies

## Database & ORM
- **Neon Database** - Serverless PostgreSQL hosting
- **Drizzle ORM** - Type-safe database operations
- **@neondatabase/serverless** - Neon database client

## Authentication & Security
- **bcrypt** - Password hashing
- **express-session** - Session management
- **connect-pg-simple** - PostgreSQL session store

## Frontend Libraries
- **React** - UI framework
- **TanStack Query** - Server state management
- **wouter** - Client-side routing
- **shadcn/ui** - UI component library
- **Radix UI** - Headless UI primitives
- **Tailwind CSS** - Utility-first CSS framework

## Build Tools & Development
- **Vite** - Build tool and dev server
- **TypeScript** - Type safety
- **ESBuild** - Production bundling
- **PostCSS** - CSS processing

## Form Handling & Validation
- **react-hook-form** - Form state management
- **@hookform/resolvers** - Form validation
- **zod** - Schema validation

## Utilities
- **date-fns** - Date manipulation
- **clsx** - Conditional CSS classes
- **class-variance-authority** - Component variants
- **nanoid** - ID generation
- **lucide-react** - Icon library