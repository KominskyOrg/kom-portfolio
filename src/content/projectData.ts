const projectData = [
  {
    title: "Kominsky Auth Platform",
    img: "/github-mark.svg",
    desc: "Production-ready authentication platform built with microservices architecture. React/TypeScript frontend communicates through a Flask API Gateway to backend services with SQLAlchemy and Alembic migrations. Docker images and Helm charts published to self-hosted Harbor registry, deployed to bare-metal Kubernetes with automated CI/CD using reusable GitHub Actions workflows. Features JWT authentication, token refresh, password reset, and account management.",
    url: "https://github.com/orgs/KominskyOrg/repositories?q=auth",
    badge: "NEW",
  },
  {
    title: "Job Scanner - LLM Automation",
    img: "/openai.svg",
    desc: "Automated job screening pipeline leveraging LLM-based evaluation with GPT-4. Scrapes LinkedIn listings via Playwright, scores role fit against user profiles, and applies deterministic gates for dealbreakers. Generates tailored cover letters and recruiter outreach messages for high-match roles. Features full audit trail with prompt versioning, regression testing, and structured output validation.",
    url: "https://github.com/KominskyOrg/job-scanner",
    badge: "NEW",
  },
  {
    title: "UnifyOps - Internal Developer Platform",
    img: "/docker.svg",
    desc: "Full-stack Internal Developer Platform (IDP) enabling visual infrastructure management through a drag-and-drop designer. Backend built with FastAPI and PostgreSQL, with Alembic migrations and Docker containerization. Frontend uses React, TypeScript, and Shadcn/ui with dnd-kit for interactive infrastructure planning. Docker images and Helm charts published to self-hosted Harbor registry, deployed to bare-metal Kubernetes. Includes microservice architecture with API Gateway pattern and reusable service templates.",
    url: "https://github.com/KominskyOrg/unifyops-core",
    badge: "NEW",
  },
  {
    title: "Home Infrastructure - Infrastructure",
    img: "/EKS Cloud.svg",
    desc: "Modular Terraform infrastructure managing VPC, Kubernetes (EKS), and RDS resources with multi-environment support (dev/staging/prod). Features GitOps CI/CD workflows, S3/DynamoDB state management, ALB Ingress Controller, and ACM certificate automation. Deployed to bare-metal Kubernetes on home server infrastructure.",
    url: "https://github.com/KominskyOrg/kom_aws_tf",
  },
  {
    title: "Stack Templates",
    img: "/github-mark.svg",
    desc: "Production-ready microservice architecture templates implementing a three-tier pattern (App → API Gateway → Service). Each template includes Flask/React foundations, multi-environment Dockerfiles, and Terraform for Kubernetes deployment. Docker images and Helm charts publish to self-hosted Harbor registry with pre-configured GitHub Actions CI/CD. Replace 'stack' placeholder with your service name for rapid microservice scaffolding.",
    url: "https://github.com/orgs/KominskyOrg/repositories?q=template",
    badge: "NEW",
  },
  {
    title: "Kominsky Terraform Modules",
    img: "/terraform.svg",
    desc: "Reusable Terraform modules for Kubernetes and database infrastructure. EKS module provides configurable Kubernetes Deployments with health probes, dynamic environment variables, and node selectors. DB module integrates AWS Secrets Manager with Kubernetes secrets and Lambda-based database provisioning. Consumed via Git refs for versioned, consistent infrastructure patterns.",
    url: "https://github.com/KominskyOrg/kom-tf-modules",
  },
  {
    title: "Python Core Package",
    img: "/python-logo.svg",
    desc: "Foundational Python library providing standardized utilities across all organization microservices. Includes HTTPClient for service-to-service communication with timeout and error handling, LoggingConfig with JSON formatting and rotating file handlers, and typed API exceptions (ValidationError, AuthenticationError, DatabaseError). Published to self-hosted Harbor registry on bare-metal Kubernetes infrastructure.",
    url: "https://github.com/KominskyOrg/kom_python_core",
    badge: "NEW",
  },
  {
    title: "Automated Repo Creation",
    img: "/github-mark.svg",
    desc: "Infrastructure-as-Code tool for GitHub repository management. Converts JSON configuration files into Terraform resources for github_repository, github_branch_protection, and github_branch_default. Enforces consistent branch protection rules, merge strategies, and code owner requirements across 18+ organization repositories.",
    url: "https://github.com/KominskyOrg/repo-creation",
  },
  {
    title: "Kominsky Portfolio",
    img: "/github-mark.svg",
    desc: "My CV/Portfolio website, powered by Astro, serves as an interactive hub, presenting my career highlights, project links, and contact information, encapsulating my professional narrative in a sleek, minimalistic, user-friendly format.",
    url: "https://github.com/KominskyOrg/kom-portfolio",
  },
];

export default projectData;
