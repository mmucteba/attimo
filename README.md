# Full-Stack Skeleton (Django + Next.js)
## Prerequisites

- Python 3.12+ (or any version compatible with Django 6)
- Node.js 20+ and npm

## Setup (Backend)

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install django djangorestframework django-cors-headers
django-admin startproject core .
python manage.py startapp api
python manage.py migrate
```

## Setup (Frontend)

```bash
cd frontend
npx create-next-app@latest . --typescript --eslint --app --src-dir --import-alias "@/*" --use-npm --no-tailwind --yes
cp .env.local.example .env.local
```

## How to run

Backend:

```bash
cd backend
source .venv/bin/activate
python manage.py runserver 127.0.0.1:8000
```

Frontend:

```bash
cd frontend
npm run dev
```

Then open `http://localhost:3000`.

## Smoke tests

1. Backend health:
   - `curl http://127.0.0.1:8000/api/health/`
   - Expected: `{"ok": true}`
2. Frontend API check:
   - Open `http://localhost:3000`
   - Click `Check API`
   - Expected UI output contains `{"ok":true}`
