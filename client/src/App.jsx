import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import AdminDashboard from './pages/AdminDashboard';
import EditorDashboard from './pages/EditorDashboard';
import ReviewerDashboard from './pages/ReviewerDashboard';
import AuthorDashboard from './pages/AuthorDashboard';
import ReaderDashboard from './pages/ReaderDashboard';
import BlogPage from './pages/BlogPage';
import PublisherPage from './pages/PublisherPage';
import IssnPage from './pages/IssnPage';
import ContactPage from './pages/ContactPage';
import ResearchPage from './pages/ResearchPage';
import LandingPage from './pages/LandingPage';
import Ethics from './pages/Ethics';
import Plagiarism from './pages/Plagiarism';
import EditorialBoard from './pages/EditorialBoard';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import Signup from './pages/Signup';
import WriteContent from './pages/WriteContent';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<DashboardLayout role="admin"><AdminDashboard /></DashboardLayout>} />
        <Route path="/editor" element={<DashboardLayout role="editor"><EditorDashboard /></DashboardLayout>} />
        <Route path="/reviewer" element={<DashboardLayout role="reviewer"><ReviewerDashboard /></DashboardLayout>} />
        <Route path="/author" element={<DashboardLayout role="author"><AuthorDashboard /></DashboardLayout>} />
        <Route path="/reader" element={<DashboardLayout role="reader"><ReaderDashboard /></DashboardLayout>} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/publisher" element={<PublisherPage />} />
        <Route path="/issn" element={<IssnPage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/ethics" element={<Ethics />} />
        <Route path="/plagiarism" element={<Plagiarism />} />
        <Route path="/editorial-board" element={<EditorialBoard />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/write" element={<WriteContent />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
