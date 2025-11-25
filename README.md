Short project description: Workly is a modern and responsive service-booking web application built with Next.js, MongoDB, and Tailwind CSS.
Users can browse various services, view detailed information, and interact through a clean and fast user interface.
The project includes dynamic routing, server-side data fetching, and an optimized design suitable for all devices.


Setup & installation instructions:  git clone https://github.com/your-username/workly.git
cd workly
npm install


🛣 Route Summary:
📍 Public Routes (No Login Required)
Route	Description
/	Home Page
/services	All services list
/services/:id	Service details
/about	About Us Page
/contact	Contact Us Page
/login	User login
/register	User signup
🔒 Protected Routes (Login Required)
Route	Description
/dashboard	User dashboard
/add-service	Add new service
/manage-service	Manage your own services
🧩 API Routes (If used)
Route	Method	Description
/api/auth/login	POST	Login handler
/api/auth/register	POST	Register user
/api/services	GET	Fetch all services
/api/services/:id	GET	Fetch specific service
