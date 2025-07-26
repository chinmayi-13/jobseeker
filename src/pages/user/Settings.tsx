import React, { useState } from 'react';
import {
  User,
  Bell,
  Shield,
  Key,
  Trash2,
  Save,
  Camera,
  Edit2,
  Calendar,
  Globe,
  Link,
  GraduationCap,
  Briefcase,
  Languages,
  Heart,
  Clock,
  DollarSign,
  MapPin,
  Plus,
  X
} from 'lucide-react';
import Layout from '../../components/Layout';

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const [profileData, setProfileData] = useState({
    firstName: 'Chinmayi',
    lastName: 'Student',
    email: 'chinmayi@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    role: 'Software Engineer',
    bio: 'Passionate student looking for opportunities in software development.',
    // Additional profile fields
    dateOfBirth: '1998-05-15',
    gender: 'Prefer not to say',
    nationality: 'Indian',
    linkedinUrl: 'https://linkedin.com/in/chinmayi-student',
    githubUrl: 'https://github.com/chinmayi-student',
    portfolioUrl: 'https://chinmayi-portfolio.com',
    education: 'Bachelor of Technology in Computer Science',
    university: 'Stanford University',
    graduationYear: '2024',
    experience: '2 years',
    skills: ['React', 'JavaScript', 'Python', 'Node.js', 'MongoDB'],
    languages: ['English', 'Hindi', 'Spanish'],
    interests: ['Machine Learning', 'Web Development', 'Open Source'],
    availability: 'Immediate',
    salaryExpectation: '$80,000 - $100,000',
    workPreference: 'Remote',
    timezone: 'PST (UTC-8)',
  });

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    pushNotifications: true,
    jobAlerts: true,
    applicationUpdates: true,
    weeklyDigest: false,
  });

  const [toggleAnimations, setToggleAnimations] = useState({
    emailNotifications: false,
    pushNotifications: false,
    jobAlerts: false,
    applicationUpdates: false,
    weeklyDigest: false,
    showEmail: false,
    showPhone: false,
    allowMessages: false,
  });

  const [privacy, setPrivacy] = useState({
    profileVisibility: 'public',
    showEmail: false,
    showPhone: false,
    allowMessages: true,
  });

  const [defaultFilters, setDefaultFilters] = useState({
    location: 'Bangalore',
    experience: '2-5 years',
    salary: '15-50',
  });

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'privacy', label: 'Privacy', icon: Shield },
    { id: 'account', label: 'Account', icon: Key },
  ];

  const handleSave = () => {
    console.log('Settings saved');
    // Add actual save logic here
  };

  return (
    <Layout role="student">
      <div className="min-h-screen bg-gray-50 p-0"> {/* Full width, no outer padding */}
        <h1 className="text-3xl font-bold text-gray-900 mb-2 px-8 pt-8">Settings</h1>
        <p className="text-gray-600 mb-6 px-8">Manage your account preferences and settings</p>
        <div className="bg-white rounded-none shadow-sm border border-gray-200 mx-0 px-8"> {/* Full width, edge-to-edge */}
          {/* Tabs as Horizontal Bar */}
          <div className="flex space-x-8 px-6 py-4 border-b border-gray-200">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-2 px-4 text-sm font-medium rounded-lg transition-colors ${
                    activeTab === tab.id
                      ? 'text-blue-600 bg-blue-50 border border-blue-200'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'profile' && (
              <div className="space-y-8">
                {/* Profile Avatar and Basic Info */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h3>
                  <div className="flex items-center space-x-6 mb-6">
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xl font-semibold">C</span>
                      </div>
                      <button className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-md border border-gray-200">
                        <Camera className="h-4 w-4 text-gray-600" />
                      </button>
                    </div>
                    <div>
                      <h4 className="text-md font-medium text-gray-900">Profile Picture</h4>
                      <p className="text-sm text-gray-500">Upload a new profile picture</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                      <div className="relative">
                        <input
                          type="text"
                          value={profileData.firstName}
                          onChange={(e) => setProfileData({ ...profileData, firstName: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none pr-10"
                        />
                        <Edit2 className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 cursor-pointer hover:text-gray-600" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                      <div className="relative">
                        <input
                          type="text"
                          value={profileData.lastName}
                          onChange={(e) => setProfileData({ ...profileData, lastName: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none pr-10"
                        />
                        <Edit2 className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 cursor-pointer hover:text-gray-600" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <div className="relative">
                        <input
                          type="email"
                          value={profileData.email}
                          onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none pr-10"
                        />
                        <Edit2 className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 cursor-pointer hover:text-gray-600" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <div className="relative">
                        <input
                          type="tel"
                          value={profileData.phone}
                          onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none pr-10"
                        />
                        <Edit2 className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 cursor-pointer hover:text-gray-600" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                      <div className="relative">
                        <input
                          type="date"
                          value={profileData.dateOfBirth}
                          onChange={(e) => setProfileData({ ...profileData, dateOfBirth: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none pr-10"
                        />
                        <Calendar className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                      <div className="relative">
                        <select
                          value={profileData.gender}
                          onChange={(e) => setProfileData({ ...profileData, gender: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none pr-10"
                        >
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                          <option value="Prefer not to say">Prefer not to say</option>
                        </select>
                        <Edit2 className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 cursor-pointer hover:text-gray-600" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Nationality</label>
                      <div className="relative">
                        <input
                          type="text"
                          value={profileData.nationality}
                          onChange={(e) => setProfileData({ ...profileData, nationality: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none pr-10"
                        />
                        <Globe className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                      <div className="relative">
                        <input
                          type="text"
                          value={profileData.location}
                          onChange={(e) => setProfileData({ ...profileData, location: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none pr-10"
                        />
                        <Edit2 className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 cursor-pointer hover:text-gray-600" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                      <div className="relative">
                        <textarea
                          value={profileData.bio}
                          onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                          rows={3}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none pr-10"
                        />
                        <Edit2 className="absolute right-2 top-4 h-4 w-4 text-gray-400 cursor-pointer hover:text-gray-600" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Professional Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Professional Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Role/Title</label>
                      <div className="relative">
                        <select
                          value={profileData.role}
                          onChange={(e) => setProfileData({ ...profileData, role: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none pr-10"
                        >
                          <option value="Software Engineer">Software Engineer</option>
                          <option value="Frontend Developer">Frontend Developer</option>
                          <option value="Backend Developer">Backend Developer</option>
                          <option value="Full Stack Developer">Full Stack Developer</option>
                          <option value="Data Scientist">Data Scientist</option>
                          <option value="Product Manager">Product Manager</option>
                          <option value="UI/UX Designer">UI/UX Designer</option>
                        </select>
                        <Briefcase className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Experience</label>
                      <div className="relative">
                        <select
                          value={profileData.experience}
                          onChange={(e) => setProfileData({ ...profileData, experience: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none pr-10"
                        >
                          <option value="0-1 years">0-1 years</option>
                          <option value="1-2 years">1-2 years</option>
                          <option value="2-3 years">2-3 years</option>
                          <option value="3-5 years">3-5 years</option>
                          <option value="5+ years">5+ years</option>
                        </select>
                        <Clock className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Salary Expectation</label>
                      <div className="relative">
                        <select
                          value={profileData.salaryExpectation}
                          onChange={(e) => setProfileData({ ...profileData, salaryExpectation: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none pr-10"
                        >
                          <option value="$50,000 - $70,000">$50,000 - $70,000</option>
                          <option value="$70,000 - $90,000">$70,000 - $90,000</option>
                          <option value="$80,000 - $100,000">$80,000 - $100,000</option>
                          <option value="$100,000 - $120,000">$100,000 - $120,000</option>
                          <option value="$120,000+">$120,000+</option>
                        </select>
                        <DollarSign className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Work Preference</label>
                      <div className="relative">
                        <select
                          value={profileData.workPreference}
                          onChange={(e) => setProfileData({ ...profileData, workPreference: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none pr-10"
                        >
                          <option value="Remote">Remote</option>
                          <option value="Hybrid">Hybrid</option>
                          <option value="On-site">On-site</option>
                          <option value="Flexible">Flexible</option>
                        </select>
                        <Globe className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Availability</label>
                      <div className="relative">
                        <select
                          value={profileData.availability}
                          onChange={(e) => setProfileData({ ...profileData, availability: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none pr-10"
                        >
                          <option value="Immediate">Immediate</option>
                          <option value="2 weeks notice">2 weeks notice</option>
                          <option value="1 month notice">1 month notice</option>
                          <option value="3 months notice">3 months notice</option>
                        </select>
                        <Clock className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Timezone</label>
                      <div className="relative">
                        <select
                          value={profileData.timezone}
                          onChange={(e) => setProfileData({ ...profileData, timezone: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none pr-10"
                        >
                          <option value="PST (UTC-8)">PST (UTC-8)</option>
                          <option value="EST (UTC-5)">EST (UTC-5)</option>
                          <option value="CST (UTC-6)">CST (UTC-6)</option>
                          <option value="MST (UTC-7)">MST (UTC-7)</option>
                          <option value="IST (UTC+5:30)">IST (UTC+5:30)</option>
                          <option value="GMT (UTC+0)">GMT (UTC+0)</option>
                        </select>
                        <Globe className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Education</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Degree</label>
                      <div className="relative">
                        <input
                          type="text"
                          value={profileData.education}
                          onChange={(e) => setProfileData({ ...profileData, education: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none pr-10"
                        />
                        <GraduationCap className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">University</label>
                      <div className="relative">
                        <input
                          type="text"
                          value={profileData.university}
                          onChange={(e) => setProfileData({ ...profileData, university: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none pr-10"
                        />
                        <GraduationCap className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Graduation Year</label>
                      <div className="relative">
                        <select
                          value={profileData.graduationYear}
                          onChange={(e) => setProfileData({ ...profileData, graduationYear: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none pr-10"
                        >
                          {Array.from({ length: 10 }, (_, i) => 2024 - i).map(year => (
                            <option key={year} value={year.toString()}>{year}</option>
                          ))}
                        </select>
                        <Calendar className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Skills and Languages */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Skills & Languages</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Technical Skills</label>
                      <div className="flex flex-wrap gap-2">
                        {profileData.skills.map((skill, index) => (
                          <span key={index} className="flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                            {skill}
                            <button
                              onClick={() => {
                                const newSkills = profileData.skills.filter((_, i) => i !== index);
                                setProfileData({ ...profileData, skills: newSkills });
                              }}
                              className="ml-2 text-blue-600 hover:text-blue-800"
                            >
                              <X className="h-3 w-3" />
                            </button>
                          </span>
                        ))}
                        <button className="flex items-center text-blue-600 hover:text-blue-800 text-sm">
                          <Plus className="h-3 w-3 mr-1" />
                          Add Skill
                        </button>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Languages</label>
                      <div className="flex flex-wrap gap-2">
                        {profileData.languages.map((language, index) => (
                          <span key={index} className="flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                            {language}
                            <button
                              onClick={() => {
                                const newLanguages = profileData.languages.filter((_, i) => i !== index);
                                setProfileData({ ...profileData, languages: newLanguages });
                              }}
                              className="ml-2 text-green-600 hover:text-green-800"
                            >
                              <X className="h-3 w-3" />
                            </button>
                          </span>
                        ))}
                        <button className="flex items-center text-green-600 hover:text-green-800 text-sm">
                          <Plus className="h-3 w-3 mr-1" />
                          Add Language
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Social Links</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn URL</label>
                      <div className="relative">
                        <input
                          type="url"
                          value={profileData.linkedinUrl}
                          onChange={(e) => setProfileData({ ...profileData, linkedinUrl: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none pr-10"
                          placeholder="https://linkedin.com/in/username"
                        />
                        <Link className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">GitHub URL</label>
                      <div className="relative">
                        <input
                          type="url"
                          value={profileData.githubUrl}
                          onChange={(e) => setProfileData({ ...profileData, githubUrl: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none pr-10"
                          placeholder="https://github.com/username"
                        />
                        <Link className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Portfolio URL</label>
                      <div className="relative">
                        <input
                          type="url"
                          value={profileData.portfolioUrl}
                          onChange={(e) => setProfileData({ ...profileData, portfolioUrl: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none pr-10"
                          placeholder="https://your-portfolio.com"
                        />
                        <Link className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Interests */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Interests</h3>
                  <div className="flex flex-wrap gap-2">
                    {profileData.interests.map((interest, index) => (
                      <span key={index} className="flex items-center bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                        {interest}
                        <button
                          onClick={() => {
                            const newInterests = profileData.interests.filter((_, i) => i !== index);
                            setProfileData({ ...profileData, interests: newInterests });
                          }}
                          className="ml-2 text-purple-600 hover:text-purple-800"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </span>
                    ))}
                    <button className="flex items-center text-purple-600 hover:text-purple-800 text-sm">
                      <Plus className="h-3 w-3 mr-1" />
                      Add Interest
                    </button>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'notifications' && (
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">Email Notifications</h3>
                      <p className="text-sm text-gray-500">Receive notifications via email</p>
                    </div>
                    <button
                      onClick={() => {
                        const newState = !notifications.emailNotifications;
                        setNotifications({ ...notifications, emailNotifications: newState });
                        // Trigger animation
                        setToggleAnimations(prev => ({ ...prev, emailNotifications: true }));
                        setTimeout(() => {
                          setToggleAnimations(prev => ({ ...prev, emailNotifications: false }));
                        }, 400);
                      }}
                      className={`toggle-switch relative inline-flex h-6 w-11 items-center rounded-full transition-all duration-300 ease-in-out ${notifications.emailNotifications ? 'bg-blue-600' : 'bg-gray-200'} ${toggleAnimations.emailNotifications ? (notifications.emailNotifications ? 'toggling-on' : 'toggling-off') : ''}`}
                    >
                      <span 
                        className="toggle-slider inline-block h-4 w-4 rounded-full bg-white shadow-md"
                        style={{ 
                          transform: notifications.emailNotifications ? 'translateX(22px)' : 'translateX(2px)',
                          transition: toggleAnimations.emailNotifications ? 'none' : 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                        }}
                      />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">Push Notifications</h3>
                      <p className="text-sm text-gray-500">Receive push notifications in browser</p>
                    </div>
                    <button
                      onClick={() => setNotifications({ ...notifications, pushNotifications: !notifications.pushNotifications })}
                      className={`toggle-switch relative inline-flex h-6 w-11 items-center rounded-full transition-all duration-300 ease-in-out ${notifications.pushNotifications ? 'bg-blue-600' : 'bg-gray-200'}`}
                      style={{ '--toggle-state': notifications.pushNotifications ? '1' : '0' } as React.CSSProperties}
                    >
                      <span 
                        className="toggle-slider inline-block h-4 w-4 rounded-full bg-white shadow-md transition-transform duration-400 ease-out"
                        style={{ 
                          transform: notifications.pushNotifications ? 'translateX(22px)' : 'translateX(2px)'
                        }}
                      />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">Job Alerts</h3>
                      <p className="text-sm text-gray-500">Get notified about new job opportunities</p>
                    </div>
                    <button
                      onClick={() => setNotifications({ ...notifications, jobAlerts: !notifications.jobAlerts })}
                      className={`toggle-switch relative inline-flex h-6 w-11 items-center rounded-full transition-all duration-300 ease-in-out ${notifications.jobAlerts ? 'bg-blue-600' : 'bg-gray-200'}`}
                      style={{ '--toggle-state': notifications.jobAlerts ? '1' : '0' } as React.CSSProperties}
                    >
                      <span 
                        className="toggle-slider inline-block h-4 w-4 rounded-full bg-white shadow-md transition-transform duration-400 ease-out"
                        style={{ 
                          transform: notifications.jobAlerts ? 'translateX(22px)' : 'translateX(2px)'
                        }}
                      />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">Application Updates</h3>
                      <p className="text-sm text-gray-500">Get notified about application status changes</p>
                    </div>
                    <button
                      onClick={() => setNotifications({ ...notifications, applicationUpdates: !notifications.applicationUpdates })}
                      className={`toggle-switch relative inline-flex h-6 w-11 items-center rounded-full transition-all duration-300 ease-in-out ${notifications.applicationUpdates ? 'bg-blue-600' : 'bg-gray-200'}`}
                      style={{ '--toggle-state': notifications.applicationUpdates ? '1' : '0' } as React.CSSProperties}
                    >
                      <span 
                        className="toggle-slider inline-block h-4 w-4 rounded-full bg-white shadow-md transition-transform duration-400 ease-out"
                        style={{ 
                          transform: notifications.applicationUpdates ? 'translateX(22px)' : 'translateX(2px)'
                        }}
                      />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">Weekly Digest</h3>
                      <p className="text-sm text-gray-500">Receive a weekly summary of your activity</p>
                    </div>
                    <button
                      onClick={() => setNotifications({ ...notifications, weeklyDigest: !notifications.weeklyDigest })}
                      className={`toggle-switch relative inline-flex h-6 w-11 items-center rounded-full transition-all duration-300 ease-in-out ${notifications.weeklyDigest ? 'bg-blue-600' : 'bg-gray-200'}`}
                      style={{ '--toggle-state': notifications.weeklyDigest ? '1' : '0' } as React.CSSProperties}
                    >
                      <span 
                        className="toggle-slider inline-block h-4 w-4 rounded-full bg-white shadow-md transition-transform duration-400 ease-out"
                        style={{ 
                          transform: notifications.weeklyDigest ? 'translateX(22px)' : 'translateX(2px)'
                        }}
                      />
                    </button>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'privacy' && (
              <div className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Profile Visibility</label>
                    <select
                      value={privacy.profileVisibility}
                      onChange={(e) => setPrivacy({ ...privacy, profileVisibility: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="public">Public</option>
                      <option value="private">Private</option>
                      <option value="connections">Connections Only</option>
                    </select>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">Show Email Address</h3>
                      <p className="text-sm text-gray-500">Allow others to see your email address</p>
                    </div>
                    <button
                      onClick={() => setPrivacy({ ...privacy, showEmail: !privacy.showEmail })}
                      className={`toggle-switch relative inline-flex h-6 w-11 items-center rounded-full transition-all duration-300 ease-in-out ${privacy.showEmail ? 'bg-blue-600' : 'bg-gray-200'}`}
                      style={{ '--toggle-state': privacy.showEmail ? '1' : '0' } as React.CSSProperties}
                    >
                      <span 
                        className="toggle-slider inline-block h-4 w-4 rounded-full bg-white shadow-md transition-transform duration-400 ease-out"
                        style={{ 
                          transform: privacy.showEmail ? 'translateX(22px)' : 'translateX(2px)'
                        }}
                      />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">Show Phone Number</h3>
                      <p className="text-sm text-gray-500">Allow others to see your phone number</p>
                    </div>
                    <button
                      onClick={() => setPrivacy({ ...privacy, showPhone: !privacy.showPhone })}
                      className={`toggle-switch relative inline-flex h-6 w-11 items-center rounded-full transition-all duration-300 ease-in-out ${privacy.showPhone ? 'bg-blue-600' : 'bg-gray-200'}`}
                      style={{ '--toggle-state': privacy.showPhone ? '1' : '0' } as React.CSSProperties}
                    >
                      <span 
                        className="toggle-slider inline-block h-4 w-4 rounded-full bg-white shadow-md transition-transform duration-400 ease-out"
                        style={{ 
                          transform: privacy.showPhone ? 'translateX(22px)' : 'translateX(2px)'
                        }}
                      />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">Allow Messages</h3>
                      <p className="text-sm text-gray-500">Allow others to send you messages</p>
                    </div>
                    <button
                      onClick={() => setPrivacy({ ...privacy, allowMessages: !privacy.allowMessages })}
                      className={`toggle-switch relative inline-flex h-6 w-11 items-center rounded-full transition-all duration-300 ease-in-out ${privacy.allowMessages ? 'bg-blue-600' : 'bg-gray-200'}`}
                      style={{ '--toggle-state': privacy.allowMessages ? '1' : '0' } as React.CSSProperties}
                    >
                      <span 
                        className="toggle-slider inline-block h-4 w-4 rounded-full bg-white shadow-md transition-transform duration-400 ease-out"
                        style={{ 
                          transform: privacy.allowMessages ? 'translateX(22px)' : 'translateX(2px)'
                        }}
                      />
                    </button>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'account' && (
              <div className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Change Password</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                        <input
                          type="password"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                        <input
                          type="password"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                        <input
                          type="password"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                        Update Password
                      </button>
                    </div>
                  </div>
                  
                  {/* Default Filters Section */}
                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Default Filters</h3>
                    <div className="bg-white rounded-lg border border-gray-200 p-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                          <input
                            type="text"
                            value={defaultFilters.location}
                            onChange={(e) => setDefaultFilters({ ...defaultFilters, location: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Enter location"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Experience</label>
                          <div className="relative">
                            <select
                              value={defaultFilters.experience}
                              onChange={(e) => setDefaultFilters({ ...defaultFilters, experience: e.target.value })}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                            >
                              <option value="0-1 years">0-1 years</option>
                              <option value="1-2 years">1-2 years</option>
                              <option value="2-5 years">2-5 years</option>
                              <option value="5-8 years">5-8 years</option>
                              <option value="8+ years">8+ years</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                              <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Salary (LPA)</label>
                          <input
                            type="text"
                            value={defaultFilters.salary}
                            onChange={(e) => setDefaultFilters({ ...defaultFilters, salary: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="e.g., 15-50"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-lg font-semibold text-red-600 mb-4">Danger Zone</h3>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <h4 className="text-sm font-medium text-red-800 mb-2">Delete Account</h4>
                      <p className="text-sm text-red-600 mb-4">
                        Once you delete your account, there is no going back. Please be certain.
                      </p>
                      <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 flex items-center">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete Account
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Save Button */}
          <div className="border-t border-gray-100 bg-gray-50 px-6 py-4 rounded-b-xl flex justify-end">
            <button
              onClick={handleSave}
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              <Save className="w-4 h-4" />
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;