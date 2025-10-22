# Liberty Gardens Estate Website

A modern and responsive real estate website for **Liberty Gardens Estate**, showcasing available properties, estate amenities, pricing, and development plans.  
The site is designed using **HTML5, CSS3, Bootstrap 5, and JavaScript** to ensure a clean, mobile-friendly experience.

---

## 🌐 Live Demo
👉 [Your Deployed Link Here](#)

---

## 📂 Project Structure

liberty-gardens-estate/ ├── index.html              # Home Page ├── about.html              # About Us Page ├── properties.html         # Properties & Site Layout Page ├── amenities.html          # Amenities Page ├── contact.html            # Contact Form Page ├── featured-4bedroom.html  # Featured 4-Bedroom Flyer Page ├── css/ │   └── style.css           # Custom styles ├── js/ │   └── main.js             # Custom scripts ├── images/                 # Images & assets │   └── logo.png, slides, plans... └── videos/                 # Estate walkthroughs

---

## ✨ Features

- **Responsive Navbar** – Mobile-friendly, collapsible menu.
- **Property Slideshow** – Beautiful image carousel with fade effect.
- **Amenities & Pricing** – Detailed amenities list with pricing for 3 & 4 bedroom houses.
- **Site Layout Plans** – General and Phasing site plans with download & tour options.
- **Contact Form** – Visitors can send inquiries directly to your email (via Node.js backend).
- **WhatsApp Floating Button** – Quick access to WhatsApp chat.
- **Modern Footer** – Contact info, address, and social media links.

---

## ⚙️ Backend (Contact Form)

The backend (in a separate folder `liberty-contact-backend/`) is built with **Node.js + Express + Nodemailer**.  
It securely sends form submissions to your email.

### Backend Structure

liberty-contact-backend/ ├── server.js        # Express server ├── package.json     # Dependencies ├── .env             # Environment variables (email + password) └── node_modules/

### Environment Variables (`.env`)

```env
PORT=5000
EMAIL_USER=youremail@gmail.com
EMAIL_PASS=your_app_password

⚠️ Use App Passwords (not your real Gmail password).
For Gmail: generate from Google Account > Security > App passwords.


---

🚀 Deployment

Frontend

Can be hosted on GitHub Pages, Vercel, or Netlify.


Backend

Host on Render (free tier).

After deploying, update your contact.html form action:


<form action="https://your-render-backend-url/contact" method="POST">


---

🛠️ Technologies Used

Frontend: HTML5, CSS3, Bootstrap 5, JavaScript, Boxicons

Backend: Node.js, Express, Nodemailer

Deployment: GitHub Pages / Netlify (Frontend), Render (Backend)



---

📸 Screenshots

Add screenshots of:

1. Home Page


2. Properties Slideshow


3. Amenities & Pricing Section


4. Site Layout with download/tour buttons


5. Contact Form




---

📞 Contact

Liberty Gardens Estate
📍 Accra, Ghana
📧 info@libertygardenestate.com
📞 +233 245 002 044

Follow us on:
Facebook | Instagram | Twitter


---

© 2025 Liberty Gardens Estate. All Rights Reserved.

---

