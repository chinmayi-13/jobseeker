import React, { useState } from 'react';
import { Search, Filter, Plus, Bell, Briefcase, ClipboardList, Target, Users, Zap, Search as SearchIcon, FileText, Compass, MapPin, Clock, CheckCircle, Circle, Dot, ArrowUpRight, TrendingUp, } from 'lucide-react';
import QuickApplyModal from '../../components/QuickApplyModal';

const platformStats = [
  { icon: <Briefcase className="h-7 w-7 text-[#7b4cff]" />, label: 'LinkedIn', value: 1234 },
  { icon: <Target className="h-7 w-7 text-[#ff4c60]" />, label: 'Naukri.com', value: 856 },
  { icon: <SearchIcon className="h-7 w-7 text-[#4ccfff]" />, label: 'Google Jobs', value: 445 },
  { icon: <FileText className="h-7 w-7 text-[#ffb14c]" />, label: 'Indeed', value: 312 },
];

  const stats = [
  { icon: <Zap className="h-7 w-7 text-white bg-blue-500 rounded-lg p-1" />, label: 'Jobs Scraped Today', value: '2,847', trend: '+12%', desc: 'From LinkedIn, Naukri, Google', trendColor: 'text-green-500' },
  { icon: <ClipboardList className="h-7 w-7 text-white bg-green-500 rounded-lg p-1" />, label: 'Active Applications', value: '24', trend: '+5%', desc: 'Tracking responses', trendColor: 'text-green-500' },
  { icon: <Target className="h-7 w-7 text-white bg-yellow-500 rounded-lg p-1" />, label: 'Interview Rate', value: '18%', trend: '+3%', desc: 'Above industry average', trendColor: 'text-green-500' },
  { icon: <Users className="h-7 w-7 text-white bg-gray-400 rounded-lg p-1" />, label: 'Profile Views', value: '156', trend: '+23%', desc: 'This week', trendColor: 'text-green-500' },
];

const iconColors = [
  'bg-gradient-to-br from-pink-400 to-red-400',
  'bg-gradient-to-br from-blue-400 to-indigo-400',
  'bg-gradient-to-br from-orange-400 to-yellow-400',
  'bg-gradient-to-br from-green-400 to-teal-400',
  'bg-gradient-to-br from-purple-400 to-pink-400',
];

const trendingJobs = [
  {
    title: 'Senior Frontend Engineer',
    company: 'Google',
    location: 'Bangalore',
    salary: '₹25-40L',
    type: 'Full-time',
    applicants: '50+',
    time: '2h ago',
    skills: ['React', 'TypeScript', 'GraphQL'],
  },
  {
    title: 'Product Manager',
    company: 'Microsoft',
    location: 'Hyderabad',
    salary: '₹35-55L',
    type: 'Full-time',
    applicants: '30+',
    time: '4h ago',
    skills: ['Strategy', 'Analytics', 'Leadership'],
  },
  {
    title: 'DevOps Engineer',
    company: 'Amazon',
    location: 'Mumbai',
    salary: '₹28-45L',
    type: 'Full-time',
    applicants: '80+',
    time: '6h ago',
    skills: ['AWS', 'Kubernetes', 'Docker'],
  },
];

const activities = [
  { color: 'bg-green-500', label: 'Application submitted', company: 'Flipkart', job: 'Senior SDE', time: '2 minutes ago' },
  { color: 'bg-blue-500', label: 'Interview scheduled', company: 'Paytm', job: 'Frontend Lead', time: '1 hour ago' },
  { color: 'bg-yellow-500', label: 'Profile viewed', company: 'Zomato', job: 'React Developer', time: '3 hours ago' },
];

const scrapingStatus = [
  { icon: <Briefcase className="h-7 w-7 text-[#7b4cff]" />, label: 'LinkedIn', value: 1234 },
  { icon: <Target className="h-7 w-7 text-[#ff4c60]" />, label: 'Naukri.com', value: 856 },
  { icon: <SearchIcon className="h-7 w-7 text-[#4ccfff]" />, label: 'Google Jobs', value: 445 },
  { icon: <FileText className="h-7 w-7 text-[#ffb14c]" />, label: 'Indeed', value: 312 },
];

export default function UserDashboard() {
  const [quickApplyOpen, setQuickApplyOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#f7f8fa] pb-12">
          {/* Header */}
      <header className="flex items-center justify-between px-8 py-6 bg-white border-b border-gray-100 sticky top-0 z-30">
        <div className="flex items-center gap-4">
          {/* Hamburger menu icon on the far left */}
          <button className="p-2 rounded-lg hover:bg-gray-100 mr-2">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
              <rect x="4" y="7" width="16" height="2" rx="1" fill="#222"/>
              <rect x="4" y="15" width="16" height="2" rx="1" fill="#222"/>
            </svg>
          </button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">Hello Chinmayi!</h1>
            <div className="text-gray-500 text-lg mt-1">Ready to find your next opportunity?</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input type="text" placeholder="Search jobs, companies..." className="pl-10 pr-4 py-2 rounded-xl bg-[#f3f4f8] border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none w-80 text-base" />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 font-medium"><Filter className="h-5 w-5" /> Filters</button>
          <button onClick={() => setQuickApplyOpen(true)} className="flex items-center gap-2 px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg"><Plus className="h-5 w-5" /> Quick Apply</button>
          <div className="relative">
            <Bell className="h-6 w-6 text-gray-600" />
            <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">3</span>
          </div>
        </div>
      </header>

      {/* Blue Hero Section */}
      <section className="max-w-7xl mx-auto px-4 mt-8">
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl p-8 flex flex-col md:flex-row md:items-center md:justify-between relative overflow-hidden shadow-md">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Find Your Dream Job</h2>
            <p className="text-white text-lg mb-6">We've scraped 2,847 new opportunities from top platforms today</p>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-blue-700 font-semibold text-lg shadow hover:bg-blue-50"><Search className="h-5 w-5" /> Browse Jobs</button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 mt-8 md:mt-0 md:ml-8">
            {platformStats.map((p) => (
              <div key={p.label} className="flex flex-col items-center bg-blue-500 bg-opacity-20 rounded-xl px-6 py-4 min-w-[120px]">
                {p.icon}
                <div className="text-white text-xl font-bold mt-2">{p.value}</div>
                <div className="text-white text-sm opacity-80">{p.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="max-w-7xl mx-auto px-4 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="bg-white rounded-2xl shadow p-6 flex flex-col gap-2 border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all duration-200 cursor-pointer">
            <div className="flex items-center gap-3 mb-2">
              {s.icon}
              <div className="text-gray-500 text-sm font-medium">{s.label}</div>
            </div>
            <div className="flex items-end gap-2">
              <div className="text-3xl font-bold text-gray-900">{s.value}</div>
              <div className={`${s.trendColor} font-semibold text-lg`}>{s.trend}</div>
            </div>
            <div className="text-gray-400 text-sm">{s.desc}</div>
          </div>
        ))}
      </section>

      {/* Recommended Jobs & Recent Activity */}
      <section className="max-w-7xl mx-auto px-4 mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recommended Jobs */}
        <div className="col-span-2 bg-white rounded-2xl shadow p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2"><TrendingUp className="h-6 w-6 text-blue-600" /> Recommended Jobs</h3>
              <div className="text-gray-500 text-base">Hot opportunities matching your profile</div>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 text-blue-700 font-semibold hover:bg-blue-100 transition-colors duration-200"><span>View All</span> <ArrowUpRight className="h-4 w-4" /></button>
          </div>
          <div className="flex flex-col gap-4">
            {trendingJobs.map((job, idx) => (
              <div key={idx} className="flex items-center justify-between bg-[#f7f8fa] rounded-xl px-6 py-5 border border-gray-100 hover:bg-blue-50 hover:border-blue-200 hover:shadow-md transition-all duration-200 cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className={`h-10 w-10 rounded-full flex items-center justify-center text-white text-lg font-bold uppercase ${iconColors[idx % iconColors.length]}`}>{job.company[0]}</div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">{job.title}</div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm mt-1">
                      <Compass className="h-4 w-4" /> {job.company}
                      <MapPin className="h-4 w-4 ml-2" /> {job.location}
                    </div>
                    <div className="flex gap-2 mt-2">
                      {job.skills.map((skill) => (
                        <span key={skill} className="bg-white border border-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2 min-w-[120px]">
                  <div className="text-blue-600 font-bold text-lg">{job.salary}</div>
                  <div className="text-gray-500 text-sm">{job.type}</div>
                  <div className="text-gray-400 text-xs">{job.applicants} applicants</div>
                  <div className="text-gray-400 text-xs">{job.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Recent Activity */}
        <div className="bg-white rounded-2xl shadow p-6 border border-gray-100 flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2"><Clock className="h-6 w-6 text-blue-600" /> Recent Activity</h3>
          </div>
          <div className="flex flex-col gap-4 flex-1">
            {activities.map((a, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
                <span className={`h-3 w-3 rounded-full ${a.color} block`} />
                <div className="flex-1">
                  <div className="text-gray-900 font-medium text-base">{a.label}</div>
                  <div className="text-gray-500 text-sm">{a.company} • {a.job}</div>
                </div>
                <div className="text-gray-400 text-xs">{a.time}</div>
              </div>
            ))}
          </div>
          <button className="mt-8 flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 font-medium transition-colors duration-200"><Bell className="h-5 w-5" /> View Activity Status</button>
        </div>
      </section>

      {/* Job Scraping Status */}
      <section className="max-w-7xl mx-auto px-4 mt-10">
        <div className="bg-white rounded-2xl shadow p-8 border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2 mb-2"><GlobeIcon className="h-6 w-6 text-blue-600" /> Job Scraping Status</h3>
          <div className="text-gray-500 text-base mb-8">Real-time data from major job platforms</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {scrapingStatus.map((p) => (
              <div key={p.label} className="flex flex-col items-center bg-[#f7f8fa] rounded-xl px-6 py-6 border border-gray-100 hover:bg-blue-50 hover:border-blue-200 hover:shadow-md transition-all duration-200 cursor-pointer">
                {p.icon}
                <div className="text-blue-700 text-2xl font-bold mt-2">{p.value}</div>
                <div className="text-gray-700 text-base font-medium">{p.label}</div>
                <div className="text-green-500 text-xs mt-1 flex items-center gap-1"><CheckCircle className="h-3 w-3" /> Active</div>
                <div className="text-gray-400 text-xs mt-1">jobs found</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <QuickApplyModal open={quickApplyOpen} onClose={() => setQuickApplyOpen(false)} />
      </div>
  );
}

function GlobeIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}><circle cx="12" cy="12" r="10" stroke="#2563eb" strokeWidth="2" /><path d="M2 12h20M12 2c2.5 2.5 4 6.5 4 10s-1.5 7.5-4 10c-2.5-2.5-4-6.5-4-10s1.5-7.5 4-10z" stroke="#2563eb" strokeWidth="2" /></svg>
  );
}