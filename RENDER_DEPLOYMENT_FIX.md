# Render Deployment Fix

## Issue
**Error**: `Type error: Parameter 'r' implicitly has an 'any' type`

This error occurs when deploying to Render because TypeScript is in strict mode and requires explicit type annotations.

## Fixes Applied

### 1. TypeScript Strict Mode Errors

Fixed missing type annotations in three files:

#### `app/restaurant/[id]/page.tsx`
- Added `Restaurant` to imports from `@/types`
- Changed: `mockRestaurants.find((r) => r.id === id)`
- To: `mockRestaurants.find((r: Restaurant) => r.id === id)`

#### `app/admin/page.tsx`
- Changed: `data.filter((r) => r.id !== id)`
- To: `data.filter((r: Restaurant) => r.id !== id)`
- Changed: `data.map((r) => ...)`
- To: `data.map((r: Restaurant) => ...)`

#### `app/api/restaurants/route.ts`
- Changed: `restaurants.map(r => ({...}))`
- To: `restaurants.map((r: any) => ({...}))`

### 2. Environment Variables for Render

**CRITICAL**: You need to set environment variables in your Render dashboard:

1. Go to your Render dashboard
2. Select your Right Eats service
3. Go to "Environment" tab
4. Add the following environment variable:

```
DATABASE_URL=file:./dev.db
```

### 3. Build Command for Render

Make sure your Render build command includes Prisma generation:

```bash
npx prisma generate && npm run build
```

Or update your `package.json` scripts to:

```json
{
  "scripts": {
    "build": "npx prisma generate && next build"
  }
}
```

## Testing Locally

To test the build locally before deploying:

```bash
npm run build
```

This should now complete without TypeScript errors.

## Deploy to Render

After making these changes:

1. Commit and push to GitHub:
```bash
git add .
git commit -m "Fix TypeScript strict mode errors for Render deployment"
git push
```

2. Render will automatically trigger a new deployment
3. The build should now succeed

## Alternative: Disable Strict Mode (Not Recommended)

If you want to temporarily disable strict mode (not recommended in production):

In `tsconfig.json`, change:
```json
{
  "compilerOptions": {
    "strict": false
  }
}
```

However, it's better to fix the type errors as we did above.
