import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  GraduationCap,
  Menu,
  User,
  LogOut,
  Home,
  Brain,
  Briefcase,
  Scale,
  TrendingUp,
  Users,
  BookOpen,
  BarChart3,
  Settings,
  ChevronRight
} from 'lucide-react';
import JobFilters from './JobFilters';

interface LayoutProps {
  children: React.ReactNode;
  role: 'student' | 'admin';
  viewMode?: 'grid' | 'list';
  onViewModeChange?: (mode: 'grid' | 'list') => void;
}

const Layout: React.FC<LayoutProps> = ({ children, role, viewMode: propViewMode, onViewModeChange }) => {
  const location = useLocation();
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [filterModalOpen, setFilterModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>(propViewMode || 'grid');
  const navigate = useNavigate();

  // Student menu items
  const studentMenuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home, path: '/user' },
    { id: 'skill-gap', label: 'Skill Gap Analyzer', icon: Brain, path: '/user/skill-gap' },
    { id: 'tracker', label: 'Application Tracker', icon: Briefcase, path: '/user/tracker' },
    { id: 'job-compare', label: 'Job Comparison Tool', icon: Scale, path: '/user/job-compare' },
    { id: 'peer-compare', label: 'Peer Resume Comparison', icon: Users, path: '/user/peer-compare' },
    { id: 'growth', label: 'Growth Tracker', icon: TrendingUp, path: '/user/growth' },
  ];

  // Admin menu items
  const adminMenuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home, path: '/admin' },
    { id: 'users', label: 'User Management', icon: Users, path: '/admin/users' },
    { id: 'roles', label: 'Role Library', icon: BookOpen, path: '/admin/roles' },
    { id: 'analytics', label: 'Analytics', icon: BarChart3, path: '/admin/analytics' },
  ];

  // Select menu items based on role
  const menuItems = role === 'student' ? studentMenuItems : adminMenuItems;

  // Generate breadcrumbs
  const generateBreadcrumbs = () => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const breadcrumbs = [];
    if (pathSegments.length > 0) {
      breadcrumbs.push({ label: 'Home', path: '/' });
      if (pathSegments[0] === 'user' || pathSegments[0] === 'admin') {
        breadcrumbs.push({
          label: pathSegments[0] === 'user' ? 'Student Portal' : 'Admin Portal',
          path: `/${pathSegments[0]}`
        });
        if (pathSegments[1]) {
          const currentItem = menuItems.find(item => item.path === `/${pathSegments[0]}/${pathSegments[1]}`);
          if (currentItem) {
            breadcrumbs.push({ label: currentItem.label, path: currentItem.path });
          }
        }
      }
    }
    return breadcrumbs;
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      // Close profile dropdown
      if (!target.closest('.profile-dropdown')) {
        setProfileDropdownOpen(false);
      }
      // Close sidebar on mobile when clicking outside (but not when clicking on sidebar options)
      // (Sidebar logic omitted if not used)
    };
    if (profileDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [profileDropdownOpen]);

  const breadcrumbs = generateBreadcrumbs();

  const handleApplyFilters = (filters: unknown) => {
    // Implement filter logic if needed
    console.log('Applied filters:', filters);
  };

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      {/* Top Navbar - Fixed */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between flex-shrink-0">
        <div className="flex items-center space-x-4">
          {/* Hamburger Menu Button (if used) */}
          <button
            className="menu-button p-2 rounded-lg hover:bg-gray-100"
            aria-label="Toggle sidebar"
          >
            <Menu className="h-5 w-5 text-gray-600" />
          </button>
          {/* Branding */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Career Companion</h2>
              <p className="text-sm text-gray-500">{role === 'student' ? 'Student Portal' : 'Admin Portal'}</p>
            </div>
          </div>
        </div>
        {/* Profile Dropdown */}
        <div className="relative profile-dropdown">
          <button
            onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100"
            aria-label="Profile menu"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-semibold">C</span>
            </div>
            <div className="hidden md:block text-left">
              <div className="text-sm font-medium text-gray-900">Chinmayi</div>
              <div className="text-xs text-gray-500">{role === 'student' ? 'Student' : 'Admin'}</div>
            </div>
          </button>
          {profileDropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50">
              <div className="px-4 py-3 border-b border-gray-100">
                <div className="text-sm font-medium text-gray-900">Chinmayi</div>
                <div className="text-xs text-gray-500">chinmayi@example.com</div>
              </div>
              <button
                onClick={() => {
                  setProfileDropdownOpen(false);
                  navigate(role === 'admin' ? '/admin/profile' : '/user/profile');
                }}
                className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 flex items-center"
              >
                <User className="h-4 w-4 mr-3" />
                My Profile
              </button>
              <button
                onClick={() => {
                  setProfileDropdownOpen(false);
                  navigate(role === 'admin' ? '/admin/settings' : '/user/settings');
                }}
                className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 flex items-center"
              >
                <Settings className="h-4 w-4 mr-3" />
                Settings
              </button>
              <div className="border-t border-gray-100 mt-2 pt-2">
                <button
                  onClick={() => {
                    setProfileDropdownOpen(false);
                    navigate('/');
                  }}
                  className="w-full text-left px-4 py-3 text-sm text-red-600 hover:bg-red-50 flex items-center"
                >
                  <LogOut className="h-4 w-4 mr-3" />
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
      {/* Breadcrumbs */}
      {breadcrumbs.length > 1 && (
        <div className="bg-white border-b border-gray-200 px-6 py-3 flex-shrink-0">
          <nav className="flex items-center space-x-2 text-sm">
            {breadcrumbs.map((breadcrumb, index) => (
              <div key={index} className="flex items-center">
                {index > 0 && <ChevronRight className="h-4 w-4 text-gray-400 mx-2" />}
                <button
                  onClick={() => navigate(breadcrumb.path)}
                  className={`hover:text-blue-600 ${
                    index === breadcrumbs.length - 1 ? 'text-gray-900 font-medium' : 'text-gray-500'
                  }`}
                >
                  {breadcrumb.label}
                </button>
              </div>
            ))}
          </nav>
        </div>
      )}
      {/* Page Content */}
      <div className="flex-1 overflow-auto">
        {children}
      </div>
      {/* Job Filters Modal */}
      <JobFilters
        isOpen={filterModalOpen}
        onClose={() => setFilterModalOpen(false)}
        onApplyFilters={handleApplyFilters}
        viewMode={viewMode}
        onViewModeChange={(mode: 'grid' | 'list') => {
          setViewMode(mode);
          onViewModeChange?.(mode);
        }}
      />
    </div>
  );
};

export default Layout;
