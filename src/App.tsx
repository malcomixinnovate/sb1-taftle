import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import FAQ from './pages/FAQ';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminJobs from './pages/admin/AdminJobs';
import AdminUsers from './pages/admin/AdminUsers';
import AdminSettings from './pages/admin/AdminSettings';
import PostJob from './pages/employer/PostJob';
import EmployerDashboard from './pages/employer/EmployerDashboard';
import EmployerJobs from './pages/employer/EmployerJobs';
import EmployerSettings from './pages/employer/EmployerSettings';
import Employers from './pages/Employers';
import CategoryJobs from './pages/CategoryJobs';
import AdminAccessButton from './components/AdminAccessButton';
import ProtectedRoute from './components/auth/ProtectedRoute';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/jobs/categories/:slug" element={<CategoryJobs />} />
            <Route path="/employers" element={<Employers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            {/* Protected Admin Routes */}
            <Route path="/admin" element={
              <ProtectedRoute userType="admin">
                <AdminDashboard />
              </ProtectedRoute>
            } />
            <Route path="/admin/jobs" element={
              <ProtectedRoute userType="admin">
                <AdminJobs />
              </ProtectedRoute>
            } />
            <Route path="/admin/users" element={
              <ProtectedRoute userType="admin">
                <AdminUsers />
              </ProtectedRoute>
            } />
            <Route path="/admin/settings" element={
              <ProtectedRoute userType="admin">
                <AdminSettings />
              </ProtectedRoute>
            } />
            
            {/* Protected Employer Routes */}
            <Route path="/employer/post-job" element={
              <ProtectedRoute userType="employer">
                <PostJob />
              </ProtectedRoute>
            } />
            <Route path="/employer/dashboard" element={
              <ProtectedRoute userType="employer">
                <EmployerDashboard />
              </ProtectedRoute>
            } />
            <Route path="/employer/jobs" element={
              <ProtectedRoute userType="employer">
                <EmployerJobs />
              </ProtectedRoute>
            } />
            <Route path="/employer/settings" element={
              <ProtectedRoute userType="employer">
                <EmployerSettings />
              </ProtectedRoute>
            } />
          </Routes>
        </main>
        <Footer />
        <AdminAccessButton />
      </div>
    </Router>
  );
}

export default App;