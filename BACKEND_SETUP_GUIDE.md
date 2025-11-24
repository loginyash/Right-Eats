# Right Eats - Backend Setup & GitHub Instructions

## Prerequisites Completed ✅
- ✅ Prisma ORM installed
- ✅ Database schema created
- ✅ Seed data prepared
- ✅ All API routes implemented
- ✅ README updated

## Step 1: Create .env File

The `.env` file is required to run the database. Create it in the root directory:

**File:** `.env`
```
DATABASE_URL="file:./dev.db"
```

## Step 2: Initialize Database

Run these commands in order:

```bash
# Generate Prisma Client
npx prisma generate

# Create database and tables
npm run db:push

# Seed database with restaurant data
npm run db:seed
```

## Step 3: Test the Application

```bash
# Start development server
npm run dev

# Open browser to http://localhost:3000
```

The app should now be using the database! You can verify by:
- Browsing restaurants
- Clicking on a restaurant to view details
- Trying to submit a review
- Making a booking

## Step 4: Initialize Git Repository

```bash
# Initialize git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Right Eats restaurant platform with backend"
```

## Step 5: Create GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Click the "+" icon → "New repository"
3. Name it: `right-eats`
4. Keep it **Public**
5. **Don't** initialize with README (we already have one)
6. Click "Create repository"

## Step 6: Push to GitHub

GitHub will show you commands, but here they are:

```bash
# Set main branch
git branch -M main

# Add remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/right-eats.git

# Push to GitHub
git push -u origin main
```

## Verification Checklist

After pushing, verify on GitHub:
- ✅ README.md displays properly
- ✅ `.env` file is NOT in the repository (it's gitignored)
- ✅ All source code files are present
- ✅ Database file (`dev.db`) is NOT in the repository (it's gitignored)

## Optional: View Database

To browse your database visually:

```bash
npm run db:studio
```

This opens Prisma Studio at `http://localhost:5555`

## Troubleshooting

**Error: "DATABASE_URL not found"**
- Make sure you created the `.env` file in the root directory
- Verify it contains: `DATABASE_URL="file:./dev.db"`

**Error: "Module '@prisma/client' not found"**
- Run: `npx prisma generate`

**Git push fails with authentication error**
- Use GitHub CLI: `gh auth login`
- Or generate a Personal Access Token on GitHub

## Next Steps

1. ✅ Test all features locally
2. ✅ Push to GitHub
3. Consider deploying to Vercel/Netlify
4. Add more features (authentication, admin panel, etc.)

---

🎉 **You're all set!** Your Right Eats platform is now a full-stack application with backend!
