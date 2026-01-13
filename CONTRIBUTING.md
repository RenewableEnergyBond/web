# Contributing to rebond.eco

## Git Workflow

This project follows a structured Git workflow to ensure code quality and safe deployments.

> 📋 **Pull Request Template**: We use a standardized PR template located in `.github/pull_request_template.md` to ensure all necessary information is provided for efficient code reviews.

### Branch Strategy

```
feature/issue-123-add-login    ┐
fix/urgent-security-patch      ├──► main (protected) ──► cloudflare/main (deploy)
hotfix/production-bug          ┘
```

### Step-by-Step Process

#### 1. Create Feature/Fix Branch
```bash
# For new features
git checkout -b feature/issue-123-description

# For bug fixes  
git checkout -b fix/issue-456-description

# For hotfixes
git checkout -b hotfix/critical-bug-description
```

#### 2. Development & Commits
```bash
# Make your changes
git add .
git commit -m "feat: add user authentication system"

# Push to remote
git push origin feature/issue-123-description
```

#### 3. Pull Request to main
- Open PR from your branch → `main`
- **Required checks:**
  - ✅ Code review from team member
  - ✅ All CI/CD checks pass (type-check, build, tests)
  - ✅ Branch is up-to-date with main

#### 4. Merge to main
- Only team members can merge
- Use "Squash and merge" for clean history
- Delete feature branch after merge

#### 5. Deploy to Production
```bash
# Manual sync to deployment branch
git checkout cloudflare/main
git merge main
git push origin cloudflare/main

# This triggers Cloudflare Pages deployment
```

### Branch Protection Rules

#### main branch
- ✅ Require pull request reviews
- ✅ Require status checks to pass
- ✅ Require branches to be up to date
- ✅ No direct pushes allowed

#### cloudflare/main branch
- ✅ Only used for production deployments
- ✅ Should always reflect production state

### Commit Message Convention

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add new payment gateway integration
fix: resolve authentication token expiration
docs: update API documentation
style: format code according to prettier rules
refactor: restructure user service architecture
test: add unit tests for payment processing
chore: update dependencies to latest versions
```

### Emergency Hotfix Process

For critical production issues:

1. Create hotfix branch from `cloudflare/main`
2. Fix the issue with minimal changes
3. Open PR to `main` for review
4. After merge, immediately sync to `cloudflare/main`

```bash
git checkout cloudflare/main
git checkout -b hotfix/critical-issue
# ... make fixes ...
git push origin hotfix/critical-issue
# Open PR to main, get review, merge
git checkout cloudflare/main
git merge main
git push origin cloudflare/main
```

### Local Development Setup

```bash
# Clone the repository
git clone git@github.com:RenewableEnergyBond/web.git
cd web

# Install dependencies
yarn install

# Start development server
yarn dev

# Run type checking
yarn type-check

# Build for production
yarn build
```

### Code Quality Standards

- **TypeScript**: All code must be properly typed
- **ESLint**: Code must pass linting checks
- **Prettier**: Code must be formatted consistently
- **Tests**: New features should include appropriate tests
- **Documentation**: Update docs for API changes

### Getting Help

- 🐛 **Bug reports**: Open an issue with reproduction steps
- 💡 **Feature requests**: Discuss in issues before implementation
- ❓ **Questions**: Ask in team discussions or code reviews

---

*This workflow ensures code quality while maintaining deployment safety. All team members should follow these guidelines.*