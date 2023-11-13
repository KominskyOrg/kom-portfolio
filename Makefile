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

# Terraform commands
tf-init:
	(cd tf && terraform init)

tf-validate:
	(cd tf && terraform validate)

tf-plan:
	(cd tf && terraform plan)

tf-apply:
	(cd tf && terraform apply)

tf-destroy:
	(cd tf && terraform destroy)

tf-fmt:
	(cd tf && terraform fmt)

tf-output:
	(cd tf && terraform output)

.PHONY: all install dev start build preview astro format format-check \
        tf-init tf-validate tf-plan tf-apply tf-destroy tf-fmt tf-output

