# 🌉 BridgeHire - Job Portal Platform

BridgeHire is a comprehensive full-stack job portal application that connects job seekers with recruiters, providing a seamless experience for job discovery, application management, and recruitment processes.

## 🚀 Features

### For Job Seekers (Users)
- **Job Search & Discovery**: Browse available jobs with advanced filtering
- **Application Management**: Apply for jobs, save favorites, and track application status
- **Profile Management**: Maintain personal profile with resume upload
- **Application Tracking**: View applied jobs with status updates (applied, interview, offered, rejected)
- **Saved Jobs**: Bookmark interesting positions for later application

### For Recruiters
- **Job Posting**: Create and manage job listings with detailed requirements
- **Application Management**: Review applications, schedule interviews, make offers
- **Candidate Tracking**: Track applicant status through the hiring pipeline
- **Profile Management**: Maintain company/recruiter profile
- **Analytics Dashboard**: Overview of posted jobs and application metrics

### For Administrators
- **User Management**: Oversee user accounts and activity
- **Platform Analytics**: Monitor platform usage and statistics
- **Content Moderation**: Manage job postings and user content

### General Features
- **Authentication & Authorization**: Secure role-based access control
- **Responsive Design**: Mobile-friendly interface built with Tailwind CSS
- **Email Notifications**: Automated email updates for important actions
- **File Upload**: Resume and profile image upload with Cloudinary integration
- **Real-time Updates**: Live status updates and notifications

## 🛠️ Tech Stack

### Frontend
- **React 19.1.0** - Modern UI library
- **Vite** - Fast build tool and development server
- **Tailwind CSS 4.1.8** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API requests
- **React Hot Toast** - Toast notifications
- **React Icons** - Icon library

### Backend
- **Node.js** - JavaScript runtime
- **Express.js 5.1.0** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose 8.16.0** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcrypt** - Password hashing
- **Cloudinary** - Image and file upload service
- **Nodemailer** - Email service
- **Multer** - File upload middleware

### Development Tools
- **ESLint** - Code linting
- **Morgan** - HTTP request logger
- **CORS** - Cross-origin resource sharing
- **Cookie Parser** - Cookie parsing middleware
- **Nodemon** - Development server auto-restart

## 📁 Project Structure

```
BridgeHire/
├── client/                    # Frontend React application
│   ├── public/               # Static assets
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   ├── pages/           # Page components
│   │   ├── context/         # React context providers
│   │   ├── config/          # Configuration files
│   │   └── assets/          # Images and static files
│   ├── package.json         # Frontend dependencies
│   └── vite.config.js       # Vite configuration
├── server/                  # Backend Node.js application
│   ├── src/
│   │   ├── controllers/     # Route handlers
│   │   ├── models/          # Database schemas
│   │   ├── routes/          # API routes
│   │   ├── middlewares/     # Custom middleware
│   │   ├── config/          # Database & service configs
│   │   └── utils/           # Helper functions
│   ├── package.json         # Backend dependencies
│   └── index.js             # Server entry point
└── README.md               # Project documentation
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local installation or MongoDB Atlas)
- Cloudinary account (for file uploads)
- Email service credentials (for notifications)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Lovelesh-rathore/BridgeHire---Job-Portal.git
   cd BridgeHire
   ```

2. **Install backend dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../client
   npm install
   ```

4. **Environment Setup**
   
   Create a `.env` file in the `server` directory:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   JWT_EXPIRE=7d
   
   # Cloudinary Configuration
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   
   # Email Configuration
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_email_password
   ```

5. **Start the development servers**

   **Backend server:**
   ```bash
   cd server
   npm run dev
   ```

   **Frontend server:**
   ```bash
   cd client
   npm run dev
   ```

6. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000

## 📚 API Documentation

### Authentication Endpoints
- `POST /auth/register` - User registration
- `POST /auth/login` - User login
- `POST /auth/logout` - User logout
- `PUT /auth/update` - Update user profile
- `POST /auth/change-password` - Change password

### User Endpoints
- `GET /user/allJobs` - Get all user applications
- `GET /user/allAppliedJobs` - Get applied jobs
- `GET /user/allSavedJobs` - Get saved jobs
- `POST /user/apply/:id` - Apply for a job
- `POST /user/save/:id` - Save a job
- `PATCH /user/withdraw/:id` - Withdraw application
- `DELETE /user/unsave/:id` - Unsave a job

### Recruiter Endpoints
- `POST /recruiter/addJob` - Create job posting
- `GET /recruiter/viewAllJobs` - Get recruiter's jobs
- `PUT /recruiter/editJob/:id` - Update job posting
- `DELETE /recruiter/deleteJob/:id` - Delete job posting
- `GET /recruiter/getAllApplications` - Get all applications
- `PATCH /recruiter/application/:id` - Update application status

### Public Endpoints
- `GET /public/jobs` - Get all public job listings
- `POST /public/contact` - Submit contact message

## 🔐 User Roles & Permissions

### User (Job Seeker)
- Browse and search jobs
- Apply for positions
- Save jobs for later
- Manage applications
- Update profile

### Recruiter
- Post job openings
- Manage job listings
- Review applications
- Update application status
- Manage recruiter profile

### Admin
- User management
- Platform oversight
- Content moderation
- System analytics

## 🎨 UI Components

### Dashboard Components
- **User Dashboard**: Applications, saved jobs, profile management
- **Recruiter Dashboard**: Job postings, applications, candidate management
- **Admin Dashboard**: User oversight, platform analytics

### Shared Components
- **Navbar**: Navigation with role-based menu items
- **Hero Section**: Landing page hero with call-to-action
- **Job Cards**: Display job information and actions
- **Modals**: Edit profiles, job details, applications
- **Forms**: Authentication, job posting, profile updates

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop computers (1024px+)
- Tablets (768px - 1023px)
- Mobile phones (320px - 767px)

## 🔧 Development Scripts

### Frontend (client/)
```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

### Backend (server/)
```bash
npm run dev       # Start with nodemon
npm start         # Start production server
```

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify)
1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting service
3. Configure environment variables in your hosting dashboard

### Backend Deployment (Heroku/Railway/DigitalOcean)
1. Set up environment variables
2. Configure your database connection
3. Deploy the server directory

### Environment Variables for Production
```env
NODE_ENV=production
PORT=5000
MONGODB_URI=your_production_mongodb_uri
JWT_SECRET=strong_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
EMAIL_USER=your_production_email
EMAIL_PASS=your_email_password
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Lovelesh Rathore**
- GitHub: [@Lovelesh-rathore](https://github.com/Lovelesh-rathore)

## 🆘 Support

If you encounter any issues or have questions:
1. Check the [Issues](https://github.com/Lovelesh-rathore/BridgeHire---Job-Portal/issues) page
2. Create a new issue with detailed information
3. Contact the maintainer

## 🔮 Future Enhancements

- [ ] Real-time chat between recruiters and candidates
- [ ] Advanced job search filters and sorting
- [ ] Integration with professional networks (LinkedIn)
- [ ] Mobile application (React Native)
- [ ] AI-powered job recommendations
- [ ] Video interview scheduling
- [ ] Salary insights and market data
- [ ] Company reviews and ratings

---

**Built with ❤️ by Lovelesh Rathore**
