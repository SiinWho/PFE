# HR Portal - PFE Project

## Team
- Ghorbel
- Tounsi el fechel

## Project Structure
- `angular-front/` - Web admin interface (Angular + TailAdmin)
- `flutter-front/` - Mobile app (Flutter)
- `backend/` - API (Laravel) - Coming soon

## Quick Start

### Angular Setup
\`\`\`bash
cd angular-front/
npm install
npm start
# Opens at http://localhost:4200
\`\`\`

### Flutter Setup
\`\`\`bash
cd flutter-front/
flutter pub get
flutter run
\`\`\`

## Branch Strategy
- `main` - Stable code
- `dev` - Development branch
- `feature/your-name-feature-name` - Individual features

## Before Pushing
1. Test your code
2. Run `git status` to check files
3. Commit with clear message
4. Pull latest changes first: `git pull origin dev`
5. Push: `git push origin your-branch`

## Environment Setup
1. Copy `.env.example` to `.env` in each project
2. Ask team for API keys/credentials
3. Never commit `.env` files

## Contact
- Your Name: your.email@example.com
- Binôme: binome.email@example.com