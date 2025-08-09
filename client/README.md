# 🌉 BridgeHire Frontend

The frontend application for BridgeHire job portal, built with React, Vite, and Tailwind CSS.

## 🚀 Features

- **Modern React 19**: Latest React features with hooks and context
- **Lightning Fast Vite**: Super fast development server and build tool
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Responsive Design**: Mobile-first approach with responsive layouts
- **Component Architecture**: Modular and reusable component structure
- **Client-side Routing**: React Router DOM for seamless navigation
- **State Management**: React Context for global state management
- **Real-time Notifications**: Toast notifications for user feedback

## 🛠️ Tech Stack

- **React 19.1.0** - UI library with latest features
- **Vite 6.3.5** - Next generation frontend tooling
- **Tailwind CSS 4.1.8** - Utility-first CSS framework
- **React Router DOM 7.6.2** - Declarative routing
- **Axios 1.10.0** - Promise-based HTTP client
- **React Hot Toast 2.5.2** - Notifications library
- **React Icons 5.5.0** - Icon components

## 📁 Project Structure

```
src/
├── components/              # Reusable UI components
│   ├── AdminDashboard/     # Admin-specific components
│   ├── RecruiterDashboard/ # Recruiter-specific components
│   ├── UserDashboard/      # User-specific components
│   ├── Jobs/               # Job-related components
│   ├── FeaturedJob.jsx     # Featured job display
│   ├── Hero.jsx            # Landing page hero
│   ├── Navbar.jsx          # Navigation component
│   └── ...                 # Other shared components
├── pages/                  # Page components
│   ├── Dashboard/          # Dashboard pages
│   ├── Home.jsx            # Home page
│   ├── Jobs.jsx            # Jobs listing page
│   ├── Login.jsx           # Login page
│   └── ...                 # Other pages
├── context/                # React context providers
│   └── AuthContext.jsx     # Authentication context
├── config/                 # Configuration files
│   └── api.jsx             # API configuration
├── assets/                 # Static assets
│   ├── images/             # Image files
│   └── icons/              # Icon files
├── App.jsx                 # Main app component
└── main.jsx                # Application entry point
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Navigate to client directory**
   ```bash
   cd client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

## 🔧 Available Scripts

```bash
npm run dev      # Start development server with HMR
npm run build    # Build for production
npm run preview  # Preview production build locally
npm run lint     # Run ESLint for code quality
```

## 🎨 Component Architecture

### Dashboard Components

#### User Dashboard
- **Overview**: Application statistics and recent activity
- **Profile**: Personal information and resume management
- **Applications**: Track job application status
- **Saved Jobs**: Manage bookmarked positions

#### Recruiter Dashboard
- **Overview**: Job posting analytics and metrics
- **Profile**: Company/recruiter information
- **Post Jobs**: Create and manage job listings
- **Applications**: Review and manage candidate applications

#### Admin Dashboard
- **Overview**: Platform-wide statistics
- **Profile**: Admin account management
- **Applications**: System-wide application monitoring
- **Saved Jobs**: Platform job management

### Shared Components
- **Navbar**: Responsive navigation with role-based menus
- **Hero**: Landing page hero section with CTAs
- **Services**: Service offerings display
- **Testimonials**: User testimonials section
- **Working**: How the platform works explanation
- **UploadCV**: Resume upload functionality

### Modal Components
- **UserEditModal**: Profile editing interface
- **AddJobModal**: Job creation form
- **EditJobModal**: Job editing interface
- **ViewJobModal**: Job details display

## 🔗 API Integration

The frontend communicates with the backend through Axios HTTP client:

```javascript
// API configuration
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000',
  withCredentials: true
});
```

### Authentication Context
```javascript
// Global authentication state management
const AuthContext = createContext();

// Usage in components
const { user, isLogin, isRecruiter, setUser } = useAuth();
```

## 🎯 Key Features Implementation

### Role-based Access Control
```javascript
// Protected routes based on user roles
{isLogin && isRecruiter && (
  <Route path="/recruiterDashboard" element={<RecruiterDashboard />} />
)}
```

### Responsive Design
```javascript
// Tailwind CSS responsive classes
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
```

### Form Handling
```javascript
// Controlled form components with validation
const [formData, setFormData] = useState({
  jobTitle: '',
  company: '',
  location: ''
});
```

## 🔐 Authentication Flow

1. **Login/Register**: User credentials validation
2. **Token Storage**: JWT token management
3. **Route Protection**: Conditional route rendering
4. **Role-based UI**: Different interfaces for different user types
5. **Automatic Logout**: Session expiration handling

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px and above

## 🎨 Styling Guidelines

### Tailwind CSS Utility Classes
```css
/* Common patterns used */
.btn-primary: bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded
.card: bg-white rounded-lg shadow-md p-6
.container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
```

### Color Scheme
- **Primary**: Pink (pink-500, pink-600)
- **Secondary**: Blue (blue-500, blue-600)
- **Success**: Green (green-500)
- **Warning**: Yellow (yellow-500)
- **Danger**: Red (red-500)
- **Neutral**: Gray (gray-100 to gray-900)

## 🚀 Performance Optimizations

- **Code Splitting**: Lazy loading of route components
- **Image Optimization**: Proper image sizing and formats
- **Bundle Analysis**: Vite bundle analyzer for optimization
- **Tree Shaking**: Automatic dead code elimination
- **Hot Module Replacement**: Fast development experience

## 🧪 Development Guidelines

### Component Creation
```javascript
// Functional component template
import React, { useState, useEffect } from 'react';

const ComponentName = ({ props }) => {
  const [state, setState] = useState(initialValue);
  
  useEffect(() => {
    // Side effects
  }, [dependencies]);

  return (
    <div className="component-wrapper">
      {/* Component JSX */}
    </div>
  );
};

export default ComponentName;
```

### State Management
- Use `useState` for local component state
- Use `useContext` for global state (AuthContext)
- Lift state up when multiple components need access

### Error Handling
```javascript
// API error handling with toast notifications
try {
  const response = await api.get('/endpoint');
  toast.success('Success message');
} catch (error) {
  toast.error(error.response?.data?.message || 'Something went wrong');
}
```

## 🔧 Build & Deployment

### Development Build
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deployment Preparation
1. Update API base URL for production
2. Configure environment variables
3. Optimize assets and images
4. Test responsive design
5. Validate all user flows

## 📦 Dependencies

### Core Dependencies
- **react**: ^19.1.0
- **react-dom**: ^19.1.0
- **react-router-dom**: ^7.6.2
- **axios**: ^1.10.0
- **tailwindcss**: ^4.1.8

### Development Dependencies
- **@vitejs/plugin-react**: ^4.4.1
- **vite**: ^6.3.5
- **eslint**: ^9.25.0

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   # Change port in vite.config.js or kill existing process
   lsof -ti:5173 | xargs kill -9
   ```

2. **API connection errors**
   - Check backend server is running
   - Verify API base URL in config
   - Check CORS configuration

3. **Build errors**
   - Clear node_modules and reinstall
   - Check for syntax errors
   - Verify all imports are correct

## 🤝 Contributing

1. Follow component naming conventions
2. Use Tailwind CSS for styling
3. Implement proper error handling
4. Add comments for complex logic
5. Test responsive design on multiple devices

---

**Part of BridgeHire Job Portal Platform**
