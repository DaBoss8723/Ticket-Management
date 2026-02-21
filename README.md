# Ticket App

## Local development

1. Install deps

```powershell
npm install
```

2. Create your local env file

- Copy `.env.example` to `.env.local`
- Set `MONGODB_URI`

3. Run the dev server

```powershell
npm run dev
```

## GitHub (without exposing `.env.local`)

- `.env.local` is ignored via `.gitignore`.
- Do not put secrets in files you commit.

```powershell
git add -A
git commit -m "Initial commit"
```

Create a new GitHub repo, then:

```powershell
git branch -M main
git remote add origin https://github.com/<you>/<repo>.git
git push -u origin main
```

## Deploy on Vercel

1. In Vercel: **Add New → Project** → Import your GitHub repo.

2. Set environment variables in Vercel (Project → Settings → Environment Variables):

- `MONGODB_URI` (same value you use locally)

3. Deploy.

## If you already committed a secret

1. Remove the file and commit the removal.
2. Rotate the leaked secret.
3. (Optional but recommended) Rewrite git history to remove the secret from past commits.
