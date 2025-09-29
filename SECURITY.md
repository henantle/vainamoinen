# Security Guidelines

- Never commit secrets; use `.env` locally and CI secrets in pipelines.
- Rotate JWT secrets regularly and on leaks.
- Validate all inputs (backend via @Valid, frontend via Zod/Yup).
- Enable rate limiting on auth and booking APIs.
- Restrict CORS to known origins.
- Log authentication and admin actions with correlation IDs.
