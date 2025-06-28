import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import AdminDashboard from './pages/dashboards/AdminDashboard';
import EditorDashboard from './pages/dashboards/EditorDashboard';
import ReviewerDashboard from './pages/dashboards/ReviewerDashboard';
import AuthorDashboard from './pages/dashboards/AuthorDashboard';
import ReaderDashboard from './pages/dashboards/ReaderDashboard';
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
import EditionsPage from './pages/EditionsPage';
import AdminArticles from './pages/admin/AdminArticles';
import AdminEditions from './pages/admin/AdminEditions';
import AuthorArticles from './pages/author/AuthorArticles';
import EditorArticles from './pages/editor/EditorArticles';
import EditorReviews from './pages/editor/EditorReviews';
import ReviewerReviews from './pages/reviewer/ReviewerReviews';
import ReaderArticles from './pages/reader/ReaderArticles';
import ArticlePage from "./pages/ArticlePage";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/admin"
          element={
            <DashboardLayout role="admin">
              <AdminDashboard />
            </DashboardLayout>
          }
        />
        <Route
          path="/editor"
          element={
            <DashboardLayout role="editor">
              <EditorDashboard />
            </DashboardLayout>
          }
        />
        <Route
          path="/reviewer"
          element={
            <DashboardLayout role="reviewer">
              <ReviewerDashboard />
            </DashboardLayout>
          }
        />
        <Route
          path="/author"
          element={
            <DashboardLayout role="author">
              <AuthorDashboard />
            </DashboardLayout>
          }
        />
        <Route
          path="/reader"
          element={
            <DashboardLayout role="reader">
              <ReaderDashboard />
            </DashboardLayout>
          }
        />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/publisher" element={<PublisherPage />} />
        <Route path="/issn" element={<IssnPage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/editions" element={<EditionsPage />} />
        <Route path="/ethics" element={<Ethics />} />
        <Route path="/plagiarism" element={<Plagiarism />} />
        <Route path="/editorial-board" element={<EditorialBoard />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/write" element={<WriteContent />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin/articles" element={<AdminArticles />} />
        <Route path="/admin/editions" element={<AdminEditions />} />
        <Route path="/author/articles" element={<AuthorArticles />} />
        <Route path="/editor/articles" element={<EditorArticles />} />
        <Route path="/editor/reviews" element={<EditorReviews />} />
        <Route path="/reviewer/reviews" element={<ReviewerReviews />} />
        <Route path="/reader/articles" element={<ReaderArticles />} />
        <Route path="/article/:articleSlug" element={<ArticlePage />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
