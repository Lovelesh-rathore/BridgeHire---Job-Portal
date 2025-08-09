# 🚀 BridgeHire Backend API

The backend API server for BridgeHire job portal, built with Node.js, Express, and MongoDB.

## 🌟 Features

- **RESTful API**: Well-structured REST endpoints
- **Authentication & Authorization**: JWT-based secure authentication
- **Role-based Access Control**: Different permissions for users, recruiters, and admins
- **Database Integration**: MongoDB with Mongoose ODM
- **File Upload**: Cloudinary integration for resume and image uploads
- **Email Service**: Automated email notifications
- **Data Validation**: Input validation and sanitization
- **Error Handling**: Comprehensive error handling middleware
- **Logging**: Request logging with Morgan
- **CORS**: Cross-origin resource sharing configuration

## 🛠️ Tech Stack

- **Node.js** - JavaScript runtime environment
- **Express.js 5.1.0** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose 8.16.0** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcrypt 6.0.0** - Password hashing
- **Cloudinary 2.7.0** - Cloud storage for files
- **Nodemailer 7.0.5** - Email sending service
- **Multer 2.0.1** - File upload middleware
- **Morgan 1.10.0** - HTTP request logger

## 📁 Project Structure

```
server/
├── src/
│   ├── controllers/        # Route handlers and business logic
│   │   ├── authController.js      # Authentication logic
│   │   ├── userController.js      # User-specific operations
│   │   ├── recruiterController.js # Recruiter operations
│   │   └── publicController.js    # Public endpoints
│   ├── models/            # Database schemas
│   │   ├── userModels.js         # User schema
│   │   ├── jobModel.js           # Job posting schema
│   │   ├── appliedJobs.js        # Job applications schema
│   │   └── contactMessage.js     # Contact messages schema
│   ├── routes/            # API route definitions
│   │   ├── authRouter.js         # Authentication routes
│   │   ├── userRouter.js         # User routes
│   │   ├── recruiterRouter.js    # Recruiter routes
│   │   ├── adminRouter.js        # Admin routes
│   │   └── publicRouter.js       # Public routes
│   ├── middlewares/       # Custom middleware
│   │   └── authMiddleware.js     # Authentication middleware
│   ├── config/           # Configuration files
│   │   ├── db.js                # Database connection
│   │   └── cloudinary.js        # Cloudinary configuration
│   └── utils/            # Utility functions
│       ├── auth.js              # Auth helpers
│       └── sendEmail.js         # Email utilities
├── package.json          # Dependencies and scripts
└── index.js             # Server entry point
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- Cloudinary account
- Email service credentials

### Installation

1. **Navigate to server directory**
   ```bash
   cd server
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the server directory:
   ```env
   PORT=5000
   NODE_ENV=development
   
   # Database
   MONGODB_URI=mongodb://localhost:27017/bridgehire
   # or for MongoDB Atlas:
   # MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/bridgehire
   
   # JWT Configuration
   JWT_SECRET=your_super_secure_jwt_secret_key_here
   JWT_EXPIRE=7d
   
   # Cloudinary Configuration
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   
   # Email Configuration (Gmail example)
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_app_specific_password
   EMAIL_FROM=noreply@bridgehire.com
   ```

4. **Start the server**
   ```bash
   # Development with auto-restart
   npm run dev
   
   # Production
   npm start
   ```

5. **Verify installation**
   ```
   GET http://localhost:5000/
   Response: {"message": "Welcome to server!"}
   ```

## 📚 API Documentation

### Base URL
```
http://localhost:5000
```

### Authentication Endpoints

#### Register User
```http
POST /auth/register
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "password": "securePassword123",
  "phone": "1234567890",
  "role": "user" // or "recruiter"
}
```

#### Login
```http
POST /auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securePassword123"
}
```

#### Update Profile
```http
PUT /auth/update
Content-Type: multipart/form-data
Authorization: Bearer <token>

firstName: John
lastName: Doe
phone: 1234567890
image: <file>
```

#### Change Password
```http
POST /auth/change-password
Content-Type: application/json
Authorization: Bearer <token>

{
  "currentPassword": "oldPassword",
  "newPassword": "newPassword123"
}
```

### User Endpoints (Protected)

#### Apply for Job
```http
POST /user/apply/:jobId
Authorization: Bearer <token>
```

#### Save Job
```http
POST /user/save/:jobId
Authorization: Bearer <token>
```

#### Get Applied Jobs
```http
GET /user/allAppliedJobs
Authorization: Bearer <token>
```

#### Get Saved Jobs
```http
GET /user/allSavedJobs
Authorization: Bearer <token>
```

#### Withdraw Application
```http
PATCH /user/withdraw/:applicationId
Authorization: Bearer <token>
```

#### Apply for Saved Job
```http
PATCH /user/applysaved?applicationId=<id>
Authorization: Bearer <token>
```

#### Unsave Job
```http
DELETE /user/unsave/:applicationId
Authorization: Bearer <token>
```

### Recruiter Endpoints (Protected)

#### Create Job Posting
```http
POST /recruiter/addJob
Content-Type: application/json
Authorization: Bearer <token>

{
  "jobTitle": "Frontend Developer",
  "company": "TechCorp",
  "jobLocation": "New York, NY",
  "salaryRange": "$70,000 - $90,000",
  "workMode": "Remote",
  "jobType": "Full-time",
  "description": "We are looking for...",
  "preferedQualification": "Bachelor's degree in CS",
  "experienceRequired": "2-3 years",
  "numberOfOpenings": 3,
  "applicationDeadline": "2024-12-31"
}
```

#### Get All Posted Jobs
```http
GET /recruiter/viewAllJobs
Authorization: Bearer <token>
```

#### Update Job Posting
```http
PUT /recruiter/editJob/:jobId
Content-Type: application/json
Authorization: Bearer <token>

{
  "jobTitle": "Senior Frontend Developer",
  "salaryRange": "$80,000 - $100,000",
  // ... other fields
}
```

#### Delete Job Posting
```http
DELETE /recruiter/deleteJob/:jobId
Authorization: Bearer <token>
```

#### Get All Applications
```http
GET /recruiter/getAllApplications
Authorization: Bearer <token>
```

#### Update Application Status
```http
PATCH /recruiter/application/:applicationId
Content-Type: application/json
Authorization: Bearer <token>

{
  "status": "interview" // "applied", "interview", "offered", "rejected"
}
```

### Public Endpoints

#### Get All Jobs
```http
GET /public/jobs
```

#### Submit Contact Message
```http
POST /public/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I have a question..."
}
```

## 🗄️ Database Models

### User Model
```javascript
{
  firstName: String (required),
  lastName: String (required),
  email: String (required, unique),
  password: String (required, hashed),
  phone: String,
  role: String (enum: ["user", "recruiter", "admin"]),
  image: String (Cloudinary URL),
  otp: String,
  otpExpires: Date,
  createdAt: Date,
  updatedAt: Date
}
```

### Job Model
```javascript
{
  userid: ObjectId (ref: User),
  jobTitle: String (required),
  company: String (required),
  salaryRange: String,
  description: String (required),
  preferedQualification: String,
  experienceRequired: String,
  jobLocation: String (required),
  jobType: String (enum: ["Full-time", "Part-time", "Contract", "Internship"]),
  workMode: String (enum: ["On-site", "Remote", "Hybrid"]),
  numberOfOpenings: Number (default: 1),
  postedDate: Date (default: Date.now),
  applicationDeadline: Date
}
```

### Applied Jobs Model
```javascript
{
  userId: ObjectId (ref: User),
  jobId: ObjectId (ref: Job),
  recruiterID: ObjectId (ref: User),
  status: String (enum: ["applied", "saved", "interview", "offered", "rejected", "withdrawn"]),
  appliedOn: Date (default: Date.now)
}
```

### Contact Message Model
```javascript
{
  name: String (required),
  email: String (required),
  message: String (required),
  createdAt: Date (default: Date.now)
}
```

## 🔐 Authentication & Authorization

### JWT Token Structure
```javascript
{
  id: user._id,
  email: user.email,
  role: user.role,
  iat: issuedAt,
  exp: expiresAt
}
```

### Middleware Protection
```javascript
// Protect route (authentication required)
router.get('/protected', Protect, handler);

// Role-specific protection
router.get('/user-only', Protect, isUser, handler);
router.get('/recruiter-only', Protect, isRecruiter, handler);
router.get('/admin-only', Protect, isAdmin, handler);
```

### Password Security
- Passwords are hashed using bcrypt with salt rounds
- Minimum password requirements enforced
- Secure password change workflow with current password verification

## 📧 Email Service

### Email Configuration
```javascript
// Nodemailer configuration
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});
```

### Email Templates
- Welcome email on registration
- Password reset instructions
- Application status updates
- Job posting notifications

## ☁️ File Upload (Cloudinary)

### Configuration
```javascript
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});
```

### Supported File Types
- Images: JPG, PNG, GIF (profile pictures)
- Documents: PDF (resumes)
- Size limits: 10MB per file

## 🛡️ Security Features

- **Input Validation**: Request data validation and sanitization
- **Rate Limiting**: Protection against brute force attacks
- **CORS**: Controlled cross-origin requests
- **Helmet**: Security headers configuration
- **Environment Variables**: Sensitive data protection
- **Error Handling**: Prevents information leakage

## 🔧 Development Scripts

```bash
npm run dev      # Start development server with nodemon
npm start        # Start production server
npm test         # Run tests (if configured)
```

## 📊 Error Handling

### Global Error Handler
```javascript
app.use((err, req, res, next) => {
  const message = err.message || "Internal server error";
  const statusCode = err.statusCode || 500;
  
  console.error(err.stack);
  res.status(statusCode).json({ message });
});
```

### Custom Error Classes
```javascript
// Usage in controllers
const error = new Error("Resource not found");
error.statusCode = 404;
return next(error);
```

## 🚀 Deployment

### Environment Variables for Production
```env
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/bridgehire
JWT_SECRET=production_secret_key_very_long_and_secure
CLOUDINARY_CLOUD_NAME=production_cloud_name
CLOUDINARY_API_KEY=production_api_key
CLOUDINARY_API_SECRET=production_api_secret
EMAIL_USER=production_email@domain.com
EMAIL_PASS=production_email_password
```

### Deployment Platforms
- **Heroku**: Easy deployment with git integration
- **Railway**: Modern deployment platform
- **DigitalOcean**: VPS deployment
- **AWS**: EC2 or Elastic Beanstalk
- **Google Cloud**: App Engine or Compute Engine

### Pre-deployment Checklist
- [ ] Update environment variables
- [ ] Configure production database
- [ ] Set up email service
- [ ] Configure Cloudinary for production
- [ ] Enable HTTPS
- [ ] Set up monitoring and logging
- [ ] Configure backup strategy

## 🧪 Testing

### Manual Testing with Postman
1. Import the API collection
2. Set up environment variables
3. Test all endpoints with various scenarios
4. Verify authentication flows
5. Test error handling

### Automated Testing (Future)
```bash
# Install testing dependencies
npm install --save-dev jest supertest

# Run tests
npm test
```

## 📈 Performance Optimization

- **Database Indexing**: Indexes on frequently queried fields
- **Pagination**: Large result set pagination
- **Caching**: Redis for session storage (future enhancement)
- **Connection Pooling**: MongoDB connection optimization
- **Compression**: Gzip compression for responses

## 🐛 Common Issues & Solutions

### Database Connection Issues
```javascript
// Check MongoDB connection
mongoose.connection.on('connected', () => {
  console.log('MongoDB connected successfully');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});
```

### CORS Issues
```javascript
// Configure CORS properly
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:5173",
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
```

### JWT Token Issues
- Verify token secret matches between environments
- Check token expiration settings
- Ensure proper token storage on frontend

## 📝 API Response Format

### Success Response
```json
{
  "message": "Operation successful",
  "data": {
    // Response data
  }
}
```

### Error Response
```json
{
  "message": "Error description",
  "statusCode": 400
}
```

## 🤝 Contributing

1. Follow RESTful API design principles
2. Implement proper error handling
3. Add input validation for all endpoints
4. Write clear commit messages
5. Test thoroughly before submitting PR

---

**Part of BridgeHire Job Portal Platform**
