# 🚗 Smart Parking System for Smart Cities

A web-based Smart Parking System designed to simplify parking slot booking and management. The system allows users to check slot availability, reserve a parking slot, generate a digital ticket, and view booking details in real time using Firebase Realtime Database.

---

## 📌 Features

* ✅ Real-time parking slot status
* ✅ Online parking slot booking
* ✅ Automatic booking ID generation
* ✅ Parking duration and price calculation
* ✅ Ticket generation
* ✅ QR Code support
* ✅ Release slot functionality
* ✅ Firebase Realtime Database integration
* ✅ Live status updates
* ✅ Responsive user interface

---

## 🛠 Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Firebase Realtime Database

### Other Tools

* Firebase SDK
* QR Code Generator
* VS Code

---

## 📂 Project Structure

```text
smart-parking-system-for-smart-cities/
│
├── assets/
│   ├── car.jpg
│   ├── car.png
│   └── qrcode.png
│
├── booking.html
├── firebase-config.js
├── index.html
├── script.js
├── style.css
├── ticket.html
├── data.json
├── package.json
├── package-lock.json
├── README.md
└── .gitignore
```

---

## ⚙️ System Workflow

1. User opens the dashboard.
2. System displays current parking slot status.
3. User enters booking details.
4. Booking information is stored in Firebase.
5. Ticket is generated automatically.
6. QR code is displayed for verification.
7. Slot can be released after usage.

---

## 🗄 Firebase Database Structure

```json
{
  "parkingSlot": {
    "status": "free",
    "bookedBy": "",
    "vehicleNumber": "",
    "startTime": "",
    "endTime": "",
    "price": "",
    "bookingId": ""
  }
}
```

---

## 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/rohitt08-l/smart-parking-system-for-smart-cities.git
cd smart-parking-system-for-smart-cities
```

### Install Dependencies

```bash
npm install
```

### Configure Firebase

Create a Firebase project and enable:

* Realtime Database
* Web App

Update the `firebase-config.js` file with your Firebase credentials.

---

## ▶️ Running the Project

Using Live Server:

```bash
npx live-server
```

or open:

```text
index.html
```

using the VS Code Live Server extension.

---

## 📸 Pages

### Home Page

* Displays parking slot status
* Book Now button

### Booking Page

* User Name
* Vehicle Number
* Start Time
* End Time
* Price Preview

### Ticket Page

* Booking ID
* Vehicle Number
* Booking Duration
* Price
* QR Code

---

## 🔄 Future Enhancements

* Multiple parking slots
* Admin dashboard
* User authentication
* Booking history
* Payment gateway integration
* Email notifications
* Mobile application support
* IoT sensor integration

---

## 👨‍💻 Developed By

**Rohit Ramesh Patil**

B.Tech Artificial Intelligence & Machine Learning

Dr. D. Y. Patil Agriculture and Technical University, Talsande

GitHub: https://github.com/rohitt08-l

LinkedIn: https://linkedin.com/in/rohit-patil-1b8654277

Demo - https://drive.google.com/file/d/1GT50CEKn-lB05G7mKPHWK9wjbB1wq3Ui/view?usp=drivesdk
---
