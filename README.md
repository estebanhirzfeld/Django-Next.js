# Django REST Framework with Next.js Authentication Example

This project demonstrates how to set up a Django REST Framework (DRF) backend with Next.js for the frontend. Authentication is implemented using dj-rest-auth and Django Allauth, with user information stored in HttpOnly cookies.

## Getting Started

1. Clone the repository:

```
git clone https://github.com/estebanhirzfeld/django-nextjs
```

### Backend (Django REST Framework)

1. Navigate to the frontend directory:

```
cd backend
```

2. Create a virtual environment (recommended):

   On Linux:

   ```
   python -m venv env source env/bin/activate
   ```

   On Windows:

   ```
   python -m venv env
   cd env/Scripts
   activate
   ```
3. Install backend dependencies:

```
pip install -r requirements.txt
```

4. Run migrations:

```
python manage.py migrate
```

5. Create a superuser (I recommend creating a superuser with these credentials for testing purposes)

   ```
   python manage.py createsuperuser
   ```

   - Username: admin
   - Email: admin@admin.com
   - Password: admin
6. Run the Django server:

```
python manage.py runserver
```

Now, you should have your virtual environment set up and the Django backend running.

### Frontend (Next.js)

1. Navigate to the frontend directory:
```
cd frontend
```

2. Install frontend dependencies:
```
npm install
```

3. Run the Next.js development server:

```
npm run dev
```

Now, you should have both the Django backend and Next.js frontend running.
Visit `http://localhost:8000` in your browser to access the Django API, and `http://localhost:3000` for the Next.js app.
