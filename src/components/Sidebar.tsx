import React from 'react';
import {
  LayoutDashboard,
  Search,
  Cpu,
  ClipboardCheck,
  BarChart3,
  Target,
  TrendingUp,
  Users,
  Settings as SettingsIcon,
  User as UserIcon,
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const menu = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'job-discovery', label: 'Find Jobs', icon: Search },
  { id: 'ai-job-matcher', label: 'Skill Analyzer', icon: Cpu },
  { id: 'applications', label: 'Application Tracker', icon: ClipboardCheck },
  { id: 'job-compare', label: 'Job Compare', icon: Target },
  { id: 'growth', label: 'Growth Tracker', icon: TrendingUp },
  { id: 'peer-compare', label: 'Peer Comparison', icon: Users },
  // Divider here
  { id: 'profile', label: 'My Profile', icon: UserIcon },
  { id: 'settings', label: 'Settings', icon: SettingsIcon },
];

const getRoute = (id: string) => {
  if (id === 'dashboard') return '/user';
  if (id === 'job-discovery') return '/user/jobs';
  if (id === 'ai-job-matcher') return '/user/skill-gap';
  if (id === 'applications') return '/user/tracker';
  if (id === 'job-compare') return '/user/job-compare';
  if (id === 'growth') return '/user/growth';
  if (id === 'peer-compare') return '/user/peer-compare';
  if (id === 'profile') return '/user/profile';
  if (id === 'settings') return '/user/settings';
  return null;
};

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <aside className="w-72 bg-white h-full flex flex-col select-none border-r border-gray-100">
      {/* Logo and App Name */}
      <div className="flex items-center h-20 px-8 border-b border-gray-100">
        <span className="text-xl font-extrabold text-blue-700 tracking-tight">Student Portal</span>
      </div>
      <nav className="flex-1 flex flex-col justify-between py-6">
        <ul className="px-2 space-y-1">
          {menu.map((item, idx) => {
            const Icon = item.icon;
            const route = getRoute(item.id);
            const isSelected = route && location.pathname.startsWith(route);
            // Divider before profile/settings
            if (item.id === 'profile') {
              return (
                <React.Fragment key={item.id}>
                  <li>
                    <div className="my-3 border-t border-gray-200" />
                  </li>
                  <li>
                    <button
                      className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors duration-200
                        ${isSelected ? 'bg-blue-50 text-blue-700 font-semibold' : 'text-gray-600 hover:bg-gray-50'}
                      `}
                      onClick={() => route && navigate(route)}
                    >
                      <Icon className={`h-5 w-5 ${isSelected ? 'text-blue-700' : 'text-gray-400'} transition-colors`} />
                      <span className="text-base font-medium">{item.label}</span>
                    </button>
                  </li>
                </React.Fragment>
              );
            }
            return (
              <li key={item.id}>
                <button
                  className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors duration-200
                    ${isSelected ? 'bg-blue-50 text-blue-700 font-semibold' : 'text-gray-600 hover:bg-gray-50'}
                  `}
                  onClick={() => route && navigate(route)}
                >
                  <Icon className={`h-5 w-5 ${isSelected ? 'text-blue-700' : 'text-gray-400'} transition-colors`} />
                  <span className="text-base font-medium">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;