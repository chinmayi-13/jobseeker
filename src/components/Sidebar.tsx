import React from 'react';
import {
  LayoutDashboard,
  Search,
  ClipboardCheck,
  Bookmark,
  Cpu,
  BarChart3,
  Target,
  TrendingUp,
  Globe,
  Bell,
  Sliders,
  Zap
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const menu = [
  {
    section: 'MAIN MENU',
    items: [
      {
        id: 'dashboard',
        label: 'Dashboard',
        icon: LayoutDashboard,
        subtitle: 'Overview & insights',
        selected: true,
      },
      {
        id: 'job-discovery',
        label: 'Job Discovery',
        icon: Search,
        subtitle: 'Find opportunities',
      },
      {
        id: 'applications',
        label: 'Applications',
        icon: ClipboardCheck,
        subtitle: 'Track progress',
        badge: 24,
      },
      {
        id: 'saved-jobs',
        label: 'Saved Jobs',
        icon: Bookmark,
        subtitle: 'Your favorites',
        badge: 8,
      },
    ],
  },
  {
    section: 'AI TOOLS',
    items: [
      {
        id: 'ai-job-matcher',
        label: 'AI Job Matcher',
        icon: Cpu,
        subtitle: 'Smart recommendations',
      },
      {
        id: 'salary-insights',
        label: 'Salary Insights',
        icon: BarChart3,
        subtitle: 'Market analysis',
      },
      {
        id: 'trends',
        label: 'Trends',
        icon: TrendingUp,
        subtitle: 'Market trends',
      },
    ],
  },
  {
    section: 'SCRAPING HUB',
    items: [
      {
        id: 'platform-status',
        label: 'Platform Status',
        icon: Globe,
        subtitle: 'Scraping health',
      },
      {
        id: 'job-alerts',
        label: 'Job Alerts',
        icon: Bell,
        subtitle: 'Smart notifications',
        badge: 12,
      },
      {
        id: 'filters',
        label: 'Filters',
        icon: Sliders,
        subtitle: 'Customize search',
      },
    ],
  },
];

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // Map menu item id to route
  const getRoute = (id: string) => {
    if (id === 'dashboard') return '/user';
    if (id === 'applications') return '/user/tracker';
    if (id === 'ai-job-matcher') return '/user/skill-gap';
    if (id === 'salary-insights') return '/user/growth';
    if (id === 'trends') return '/user/job-compare';
    if (id === 'platform-status') return '/user/peer-compare';
    // Add more routes as needed
    return null;
  };
  return (
    <aside className="w-72 bg-white h-full flex flex-col select-none border-r border-gray-200">
      {/* Logo and Tagline */}
      <div className="flex flex-col items-center pt-8 pb-6">
        <div className="bg-blue-600 rounded-2xl h-14 w-14 flex items-center justify-center mb-3">
          <Zap className="h-8 w-8 text-white" />
        </div>
        <h1 className="text-2xl font-extrabold text-gray-900">JobScape</h1>
        <span className="text-gray-500 text-sm mt-1">AI-Powered Job Discovery</span>
      </div>
      <div className="flex-1 overflow-y-auto px-6 pb-6">
        {menu.map((section) => (
          <div key={section.section} className="mb-7">
            <div className="text-xs font-bold text-gray-400 mb-3 tracking-widest uppercase">
              {section.section}
            </div>
            <ul className="space-y-1">
              {section.items.map((item) => {
                const Icon = item.icon;
                const route = getRoute(item.id);
                // Determine if this item is selected based on the current route
                const isSelected = route && location.pathname === route;
                return (
                  <li key={item.id}>
                    <button
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-2xl transition-colors duration-200 group
                        ${isSelected ? 'bg-blue-600 text-white font-bold shadow' : 'text-gray-900 hover:bg-gray-100'}`}
                      onClick={() => route && navigate(route)}
                    >
                      <span className={`flex items-center justify-center h-8 w-8 rounded-xl ${isSelected ? 'bg-white/20' : 'bg-gray-100 group-hover:bg-blue-50'}`}>
                        <Icon className={`h-5 w-5 ${isSelected ? 'text-white' : 'text-blue-600'}`} />
                      </span>
                      <span className="flex-1 min-w-0 flex flex-col items-start">
                        <span className={`truncate ${isSelected ? 'text-white font-bold' : 'font-semibold'}`}>{item.label}</span>
                        <span className={`text-xs ${isSelected ? 'text-blue-200' : 'text-gray-500'} font-normal -mt-0.5`}>{item.subtitle}</span>
                      </span>
                      {item.badge && (
                        <span className={`ml-2 text-xs font-bold px-2 py-0.5 rounded-full ${isSelected ? 'bg-white/20 text-white' : 'bg-blue-600 text-white'}`}>
                          {item.badge}
                        </span>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;