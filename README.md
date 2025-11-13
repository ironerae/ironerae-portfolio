# Personal Portfolio Website

This repository contains the source code for my new personal portfolio website.
You can visit the live version here: [**ironerae.vercel.app**](https://ironerae.vercel.app)

---

## Environment Variables

To set up this project and ensure full functionality, create a `.env` file in the root directory and include the following environment variables:

```bash
# Google reCAPTCHA Keys
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=
RECAPTCHA_SECRET_KEY=

# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=

# Admin Configuration
ADMIN_EMAIL=your-admin-email@example.com

# Firebase Admin SDK (Private Key in Base64 Format)
FIREBASE_ADMIN_SDK=
```

> **Note:**
> The `FIREBASE_ADMIN_SDK` should be your Firebase Admin private key encoded in Base64 format.
> For security reasons, never share your actual key or commit it to version control.

---

## Getting Started

1. **Clone the Repository**

   ```bash
   git clone https://github.com/ironerae/ironerae-portfolio.git
   cd ironerae-portfolio
   ```

2. **Install Dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Add Environment Variables**
   Create a `.env` file and paste the variables listed above.

4. **Run the Development Server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Visit [**http://localhost:3000**](http://localhost:3000) to view your local build.

---

## About

This project serves as a fully functional and customizable personal portfolio built with modern web technologies.
You are welcome to **use**, **modify**, or **extend** this repository to create your own portfolio website.

---

## Contact

If you have any questions, suggestions, or would like to connect, feel free to reach out:

- **[ironerae@gmail.com](mailto:ironerae@gmail.com)**
- **[ironeraeabis@pm.me](mailto:ironeraeabis@pm.me)**
