# Node.js TypeScript Codebase

A ready-to-use Node.js project setup with TypeScript and essential development tools pre-configured.

## Features

- **TypeScript** - Modern JavaScript with type safety
- **ESLint** - Code linting with TypeScript rules
- **Prettier** - Code formatting
- **Nodemon** - Hot reload during development
- **Path aliases** - Clean imports with `~/` prefix
- **ES Modules** - Modern module system

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build TypeScript to JavaScript
- `npm start` - Run production build
- `npm run lint` - Check code with ESLint
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run prettier` - Check code formatting
- `npm run prettier:fix` - Format code with Prettier

## Project Structure

```
src/
├── index.ts          # Entry point
dist/                 # Built files (generated)
eslint.config.mts     # ESLint configuration
tsconfig.json         # TypeScript configuration
package.json          # Dependencies and scripts
```

## Configuration

- **TypeScript**: Strict mode enabled with modern ES modules
- **ESLint**: TypeScript rules with Prettier integration
- **Path aliases**: Use `~/` to import from `src/` directory
