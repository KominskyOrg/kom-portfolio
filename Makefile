# Makefile

# Default target
all: dev

# Install dependencies
install:
	npm install

# Development server
dev:
	npm run dev

# Alias for 'dev'
start:
	npm run start

# Build the project
build:
	npm run build

# Preview the build
preview:
	npm run preview

# General astro command
astro:
	npm run astro

# Format code using Prettier
format:
	npx prettier --write .

# Check code format using Prettier
format-check:
	npx prettier --check .

.PHONY: all install dev start build preview astro format format-check