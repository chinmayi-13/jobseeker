import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  GraduationCap, 
  Menu, 
  X, 
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
  Bell,
  Settings,
  Search,
  ChevronRight,
  Plus,
  Filter,
  Grid3X3,
  List
} from 'lucide-react';
import JobFilters from './JobFilters';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
  role: 'student' | 'admin';
  viewMode?: 'grid' | 'list';
  onViewModeChange?: (mode: 'grid' | 'list') => void;
}

const Layout: React.FC<LayoutProps> = ({ children, role, viewMode: propViewMode, onViewModeChange }) => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false); // Sidebar is closed by default
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [filterModalOpen, setFilterModalOpen] = useState(false);
  const [appliedFilters, setAppliedFilters] = useState<any>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>(propViewMode || 'grid');
  const navigate = useNavigate();

  // Add state and handler for sidebar toggle
  const handleSidebarToggle = () => setSidebarOpen((open) => !open);

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
      if (window.innerWidth < 1024 && !target.closest('.sidebar-container') && !target.closest('.menu-button') && !target.closest('button')) {
        setSidebarOpen(false);
      }
    };

    if (profileDropdownOpen || (sidebarOpen && window.innerWidth < 1024)) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [profileDropdownOpen, sidebarOpen]);



  // Helper to determine if sidebar should be expanded
  const isDashboard = location.pathname === '/user' || location.pathname === '/admin';
  // Keep sidebar expanded on all pages, but allow hamburger menu to toggle
  const expandedSidebar = sidebarOpen; // Allow hamburger menu to control sidebar

  // Navigation handler - only navigate, don't change sidebar state
  const handleMenuClick = (path: string) => {
    console.log('Navigating to:', path); // Debug log
    console.log('Current location:', location.pathname); // Debug current location
    console.log('Target path:', path); // Debug target path
    // Do NOT change sidebar state on navigation - keep current state
    // Sidebar state should only be controlled by hamburger menu
    
    // NUCLEAR OPTION - Disable everything before navigation
    const disableAllTransitions = () => {
      // Disable all elements
      const allElements = document.querySelectorAll('*');
      allElements.forEach(element => {
        (element as HTMLElement).style.setProperty('transition', 'none', 'important');
        (element as HTMLElement).style.setProperty('animation', 'none', 'important');
        (element as HTMLElement).style.setProperty('transform', 'none', 'important');
        (element as HTMLElement).style.setProperty('transition-property', 'none', 'important');
        (element as HTMLElement).style.setProperty('transition-duration', '0s', 'important');
        (element as HTMLElement).style.setProperty('transition-timing-function', 'none', 'important');
        (element as HTMLElement).style.setProperty('transition-delay', '0s', 'important');
      });
      
      // Disable document and body
      document.documentElement.style.setProperty('transition', 'none', 'important');
      document.body.style.setProperty('transition', 'none', 'important');
      document.documentElement.style.setProperty('animation', 'none', 'important');
      document.body.style.setProperty('animation', 'none', 'important');
      document.documentElement.style.setProperty('transform', 'none', 'important');
      document.body.style.setProperty('transform', 'none', 'important');
      
      // Inject CSS
      const style = document.createElement('style');
      style.textContent = `
        *, *::before, *::after {
          transition: none !important;
          animation: none !important;
          transform: none !important;
          transition-property: none !important;
          transition-duration: 0s !important;
          transition-timing-function: none !important;
          transition-delay: 0s !important;
        }
      `;
      document.head.appendChild(style);
    };
    
    // Run immediately
    disableAllTransitions();
    
    // Also run after a small delay to catch any late transitions
    setTimeout(disableAllTransitions, 0);
    setTimeout(disableAllTransitions, 10);
    setTimeout(disableAllTransitions, 50);
    
    // Navigate immediately
    navigate(path);
    
    // Debug: Log after navigation
    console.log('Navigation completed to:', path);
    
    // Force disable all transitions after navigation
    requestAnimationFrame(() => {
      const allElements = document.querySelectorAll('*');
      allElements.forEach(element => {
        (element as HTMLElement).style.setProperty('transition', 'none', 'important');
        (element as HTMLElement).style.setProperty('animation', 'none', 'important');
        (element as HTMLElement).style.setProperty('transform', 'none', 'important');
      });
    });
    
    // Also run after navigation to catch any post-navigation transitions
    setTimeout(disableAllTransitions, 100);
    setTimeout(disableAllTransitions, 200);
    setTimeout(disableAllTransitions, 500);
  };

  const handleLogout = () => {
    navigate('/');
  };

  const toggleSidebar = () => {
    console.log('Hamburger menu clicked! Current sidebar state:', sidebarOpen);
    setSidebarOpen(!sidebarOpen);
    console.log('New sidebar state will be:', !sidebarOpen);
  };

  const handleFilterClick = () => {
    setFilterModalOpen(true);
  };

  const handleApplyFilters = (filters: any) => {
    setAppliedFilters(filters);
    console.log('Applied filters:', filters);
  };

  const breadcrumbs = generateBreadcrumbs();

  return (
    <div className="h-screen bg-background flex flex-row">
      {/* Sidebar */}
      <div className={`sidebar-container z-40 w-72 ${sidebarOpen ? 'block' : 'hidden'} h-full bg-white fixed`}>
        <Sidebar />
      </div>
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 z-30 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}
      {/* Main Content Area (navbar + page content) */}
      <div className={`flex-1 flex flex-col min-w-0 transition-all duration-300 ${sidebarOpen ? 'ml-72' : ''} lg:ml-0`}>
        {/* Top Navbar - Fixed */}
        <nav className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-6 w-full">
            {/* Menu Icon and App Name */}
            <button className="menu-button p-2 rounded-lg hover:bg-gray-100 mr-2" aria-label="Toggle sidebar" onClick={handleSidebarToggle}>
              <Menu className="h-6 w-6 text-gray-600" />
            </button>
            <span className="text-xl font-extrabold text-blue-700 tracking-tight whitespace-nowrap">Career Companion</span>
            {/* Search Bar */}
            <div className="flex-1 flex items-center ml-6">
              <div className="relative w-full max-w-xl">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search jobs, companies..."
                  className="pl-12 pr-4 py-3 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-blue-500 focus:outline-none w-full text-lg text-gray-700 placeholder-gray-400 shadow-sm"
                />
              </div>
            </div>
            {/* User Actions */}
            <div className="flex items-center gap-4 ml-6">
              <button className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-200 bg-white hover:bg-blue-50 transition">
                <Bell className="h-6 w-6 text-blue-600" />
              </button>
              <button className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-200 bg-white hover:bg-blue-50 transition">
                <Settings className="h-6 w-6 text-gray-500" />
              </button>
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-100 font-bold text-blue-700 text-lg">AJ</div>
              <span className="font-medium text-gray-900 ml-2 whitespace-nowrap">Alex Johnson</span>
            </div>
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
        <div className="flex-1 overflow-auto min-w-0">
          {children}
        </div>
      </div>

      {/* Job Filters Modal */}
      <JobFilters
        isOpen={filterModalOpen}
        onClose={() => setFilterModalOpen(false)}
        onApplyFilters={handleApplyFilters}
        viewMode={viewMode}
        onViewModeChange={(mode) => {
          setViewMode(mode);
          onViewModeChange?.(mode);
        }}
      />
    </div>
  );
};

export default Layout;