import React, { useState } from 'react';
import { Search, Filter, Plus, Bell, Briefcase, ClipboardList, Target, Users, Zap, Search as SearchIcon, FileText, Compass, MapPin, Clock, CheckCircle, Circle, Dot, ArrowUpRight, TrendingUp, } from 'lucide-react';
import QuickApplyModal from '../../components/QuickApplyModal';
import Layout from '../../components/Layout';

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
  { color: 'bg-red-500', label: 'Offer received', company: 'Amazon', job: 'DevOps Engineer', time: '5 hours ago' },
  { color: 'bg-purple-500', label: 'Resume updated', company: 'Google', job: 'Software Engineer', time: 'Yesterday' },
  { color: 'bg-pink-500', label: 'Application withdrawn', company: 'Microsoft', job: 'Product Manager', time: '2 days ago' },
  { color: 'bg-indigo-500', label: 'Referral sent', company: 'Uber', job: 'Backend Developer', time: '3 days ago' },
  { color: 'bg-teal-500', label: 'Feedback received', company: 'Swiggy', job: 'QA Analyst', time: '4 days ago' },
];

const scrapingStatus = [
  { icon: <Briefcase className="h-7 w-7 text-[#7b4cff]" />, label: 'LinkedIn', value: 1234 },
  { icon: <Target className="h-7 w-7 text-[#ff4c60]" />, label: 'Naukri.com', value: 856 },
  { icon: <SearchIcon className="h-7 w-7 text-[#4ccfff]" />, label: 'Google Jobs', value: 445 },
  { icon: <FileText className="h-7 w-7 text-[#ffb14c]" />, label: 'Indeed', value: 312 },
];

export default function UserDashboard() {
  const [quickApplyOpen, setQuickApplyOpen] = useState(false);
  const [showApplyNotification, setShowApplyNotification] = useState(false);
  const [appliedCount, setAppliedCount] = useState(0);

  // Notification handler for QuickApplyModal
  const handleJobApplied = (count: number) => {
    setAppliedCount(count);
    setShowApplyNotification(true);
    setTimeout(() => setShowApplyNotification(false), 2500);
  };

  return (
    <Layout role="student">
      {/* Notification Banner */}
      {showApplyNotification && (
        <div className="fixed top-0 left-0 w-full z-[100] flex justify-center pointer-events-none">
          <div className="bg-green-100 text-green-800 text-center py-3 px-6 rounded-b-2xl font-semibold shadow-lg flex items-center gap-2 mt-0 pointer-events-auto">
            <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2l4 -4" /><circle cx="12" cy="12" r="10" /></svg>
            {appliedCount === 1 ? 'Job applied successfully!' : `${appliedCount} jobs applied successfully!`}
          </div>
        </div>
      )}
      {/* Main content area */}
      <div className="flex-1 transition-all duration-300">
        {/* Header */}
        <header className="flex items-center justify-between px-8 py-6 bg-white border-b border-gray-100 z-30">
          <div className="flex items-center gap-4">
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
        <section className="max-w-7xl mx-auto px-4 mt-10 grid grid-cols-1 lg:grid-cols-3 gap-0">
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
                      <div className="text-gray-500 text-sm">{job.company} • {job.location} • {job.salary}</div>
                      <div className="flex gap-2 mt-1">
                        {job.skills.map((skill) => (
                          <span key={skill} className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded-full">{skill}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-gray-400 text-xs mb-1">{job.time}</span>
                    <span className="text-gray-700 text-sm font-semibold">{job.applicants} applicants</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Recent Activity */}
          <div className="col-span-1 bg-white rounded-2xl shadow p-6 border border-gray-100 ml-0 lg:ml-6 mt-10 lg:mt-0">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2"><Zap className="h-6 w-6 text-green-500" /> Recent Activity</h3>
            <div className="flex flex-col gap-4">
              {activities.map((activity, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className={`h-3 w-3 rounded-full ${activity.color}`}></span>
                  <div className="flex-1">
                    <div className="text-gray-900 font-semibold text-sm">{activity.label}</div>
                    <div className="text-gray-500 text-xs">{activity.company} • {activity.job}</div>
                  </div>
                  <div className="text-gray-400 text-xs">{activity.time}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Quick Apply Modal */}
        <QuickApplyModal open={quickApplyOpen} onClose={() => setQuickApplyOpen(false)} onJobApplied={handleJobApplied} />
      </div>
    </Layout>
  );
}

function GlobeIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}><circle cx="12" cy="12" r="10" stroke="#2563eb" strokeWidth="2" /><path d="M2 12h20M12 2c2.5 2.5 4 6.5 4 10s-1.5 7.5-4 10c-2.5-2.5-4-6.5-4-10s1.5-7.5 4-10z" stroke="#2563eb" strokeWidth="2" /></svg>
  );
}