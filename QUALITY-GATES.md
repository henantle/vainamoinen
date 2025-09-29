# Quality Gates

## Code Quality
- Backend: Ktlint + Detekt
- Frontend: ESLint + Prettier
- No lint/format errors allowed.

## Testing
- Backend coverage ≥ 80% lines, 65% branches
- Frontend coverage ≥ 80% statements, 65% branches
- Critical paths ≥ 90%

## Security
- No High/Critical vulnerabilities (OWASP, npm audit)
- No secrets committed (Gitleaks)
- Containers scanned with Trivy

## Build & Performance
- Backend builds reproducibly
- Frontend bundles < 300KB gz (warn), < 500KB (fail)

## Accessibility
- No serious/critical Axe violations on main flows.
