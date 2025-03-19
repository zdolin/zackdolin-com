# zack-dolin.com

## Overview

This is the codebase for my personal website, built with Next.js, Storybook, and Tailwind CSS. The site is designed to be modern, fast, and easy to maintain.

## Getting Started

To run the site locally, follow these steps:

### 1. Install Dependencies

Run the following command to install all necessary dependencies:

```bash
npm install
```

### 2. Start the Development Server

Run the development server using:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

### 3. Build for Production

To create a production build of the site, run:

```bash
npm run build
```

To start the production server after building:

```bash
npm run start
```

## Storybook

This project includes Storybook for developing and testing UI components in isolation.

### Running Storybook

To start Storybook locally, run:

```bash
npm run storybook
```

Storybook will be available at [http://localhost:6006](http://localhost:6006).

### Building Storybook

To generate a static build of Storybook:

```bash
npm run build-storybook
```

## Linting and Formatting

This project uses ESLint and Prettier for code linting and formatting.

To run linting:

```bash
npm run lint
```

## Adding New Components

New components can be added using Plop. Run the following command and follow the prompts:

```bash
npm run add-component
```

## Technologies Used

- **Next.js** (14.2.22) - React framework for production-grade applications
- **React** (18.3.1) - JavaScript library for building UI
- **Tailwind CSS** (3.4.10) - Utility-first CSS framework
- **Storybook** (8.6.4) - UI component development environment
- **Framer Motion** (11.5.4) - Animation library for React
- **Headless UI** (2.1.6) - Accessible UI components
- **Heroicons** (2.1.3) - Beautiful icons for UI
- **Contentful** (11.4.4) - CMS integration
- **GraphQL Request** (7.1.2) - Minimal GraphQL client

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

[Zack Dolin](https://zackdolin.com/)