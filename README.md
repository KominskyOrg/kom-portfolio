# KOM Portfolio Project

## Introduction

Welcome to the KOM Portfolio Project! This is a modern, responsive web portfolio designed to showcase professional skills and achievements. Built using the Astro framework and styled with Tailwind CSS, it offers a sleek, performant platform for personal branding.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js: A JavaScript runtime environment. [Download Node.js](https://nodejs.org/)
- Git: A version control system. [Download Git](https://git-scm.com/downloads)

## Installation

Follow these steps to get your development environment running:

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   ```
2. **Navigate to project directory**
   ```bash
   cd kom-portfolio
   ```
3. **Install dependencies**
   ```bash
   make install
   ```

## Running the Project

To start the project locally, run the following command:

`make dev`

## Building for Production

To create a production build, use:

`make build`

## Makefile Summary

The project includes a `Makefile` for automating common tasks. Here’s a summary of what you can do with it:

- **Build the project**: Compiles the source code.

`make build`

- **Test the project**: Runs any defined tests.

`make test`

## Project Structure

- `src`: Source code including HTML, JavaScript, and CSS.
- `public`: Static assets like images and fonts.
- `dist`: Production build output.
- `node_modules`: Project dependencies.
- `tailwind.config.cjs`: Tailwind CSS configuration.
- `astro.config.mjs`: Astro framework configuration.
