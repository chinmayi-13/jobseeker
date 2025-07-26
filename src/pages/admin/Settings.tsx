import React, { useState } from 'react';
import { 
  Shield, 
  Settings as SettingsIcon,
  Trash2, 
  Save,
  Users,
  Database,
  Globe,
  Activity,
  User,
  Camera,
  Edit2,
  Calendar,
  MapPin,
  Mail,
  Phone,
  Briefcase,
  GraduationCap,
  Link,
  Plus,
  X
} from 'lucide-react';
import Layout from '../../components/Layout';

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [generalSettings, setGeneralSettings] = useState({
    siteName: 'Career Companion',
    siteDescription: 'AI-powered job search platform for students',
    maintenanceMode: false,
    allowRegistrations: true,
    emailNotifications: true
  });

  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: true,
    sessionTimeout: '24',
    maxLoginAttempts: '5',
    passwordPolicy: 'strong',
    ipWhitelist: false
  });

  const [userManagement, setUserManagement] = useState({
    autoApproveUsers: false,
    requireEmailVerification: true,
    allowProfileEditing: true,
    userDataRetention: '365'
  });

  const [adminProfile, setAdminProfile] = useState({
    firstName: 'Admin',
    lastName: 'User',
    email: 'admin@careercompanion.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    role: 'System Administrator',
    bio: 'System administrator with 5+ years of experience in platform management.',
    dateOfBirth: '1985-03-15',
    gender: 'Prefer not to say',
    department: 'IT Administration',
    employeeId: 'ADM001',
    hireDate: '2020-01-15',
    permissions: ['user_management', 'system_settings', 'analytics', 'content_moderation'],
    skills: ['System Administration', 'Database Management', 'Security', 'User Support'],
    languages: ['English', 'Spanish'],
    linkedinUrl: 'https://linkedin.com/in/admin-user',
    githubUrl: 'https://github.com/admin-user',
    emergencyContact: {
      name: 'Jane Doe',
      relationship: 'Spouse',
      phone: '+1 (555) 987-6543',
      email: 'jane.doe@email.com'
    }
  });

  const tabs = [
    { id: 'general', label: 'General', icon: SettingsIcon },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'users', label: 'User Management', icon: Users },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'system', label: 'System', icon: Database }
  ];

  const handleSave = () => {
    // Handle save logic
    console.log('Admin settings saved');
  };

  return (
    <Layout role="admin">
      <div className="min-h-screen bg-gray-50 p-0"> {/* Full width, no outer padding */}
        <h1 className="text-3xl font-bold text-gray-900 mb-2 px-8 pt-8">Admin Settings</h1>
        <p className="text-gray-600 mb-6 px-8">Manage system configuration and preferences</p>
        <div className="bg-white rounded-none shadow-sm border border-gray-200 mx-0 px-8"> {/* Full width, edge-to-edge */}
          {/* Tab Navigation */}
          <div className="flex space-x-8 px-6 py-4 border-b border-gray-200"> {/* Horizontal bar */}
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
                  <Icon className="h-4 w-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'general' && (
              <div className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Site Name</label>
                    <input
                      type="text"
                      value={generalSettings.siteName}
                      onChange={(e) => setGeneralSettings({...generalSettings, siteName: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Site Description</label>
                    <textarea
                      value={generalSettings.siteDescription}
                      onChange={(e) => setGeneralSettings({...generalSettings, siteDescription: e.target.value})}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
<<<<<<< HEAD
                  <div className="flex items-center justify-between">
=======
                  <button
                    onClick={() => setGeneralSettings({...generalSettings, allowRegistrations: !generalSettings.allowRegistrations})}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      generalSettings.allowRegistrations ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                  >
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      generalSettings.allowRegistrations ? 'translate-x-6' : 'translate-x-1'
                    }`} />
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Email Notifications</h3>
                    <p className="text-sm text-gray-500">Send email notifications to admins</p>
                  </div>
                  <button
                    onClick={() => setGeneralSettings({...generalSettings, emailNotifications: !generalSettings.emailNotifications})}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      generalSettings.emailNotifications ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                  >
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      generalSettings.emailNotifications ? 'translate-x-6' : 'translate-x-1'
                    }`} />
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Two-Factor Authentication</h3>
                    <p className="text-sm text-gray-500">Require 2FA for admin accounts</p>
                  </div>
                  <button
                    onClick={() => setSecuritySettings({...securitySettings, twoFactorAuth: !securitySettings.twoFactorAuth})}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      securitySettings.twoFactorAuth ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                  >
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      securitySettings.twoFactorAuth ? 'translate-x-6' : 'translate-x-1'
                    }`} />
                  </button>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Session Timeout (hours)</label>
                  <select
                    value={securitySettings.sessionTimeout}
                    onChange={(e) => setSecuritySettings({...securitySettings, sessionTimeout: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="1">1 hour</option>
                    <option value="8">8 hours</option>
                    <option value="24">24 hours</option>
                    <option value="168">1 week</option>
                  </select>
                </div>

          <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Max Login Attempts</label>
                  <select
                    value={securitySettings.maxLoginAttempts}
                    onChange={(e) => setSecuritySettings({...securitySettings, maxLoginAttempts: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="3">3 attempts</option>
                    <option value="5">5 attempts</option>
                    <option value="10">10 attempts</option>
                  </select>
          </div>

          <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Password Policy</label>
                  <select
                    value={securitySettings.passwordPolicy}
                    onChange={(e) => setSecuritySettings({...securitySettings, passwordPolicy: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="basic">Basic (6+ characters)</option>
                    <option value="strong">Strong (8+ chars, uppercase, lowercase, number)</option>
                    <option value="very-strong">Very Strong (10+ chars, special chars)</option>
                  </select>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">IP Whitelist</h3>
                    <p className="text-sm text-gray-500">Restrict admin access to specific IPs</p>
                  </div>
                  <button
                    onClick={() => setSecuritySettings({...securitySettings, ipWhitelist: !securitySettings.ipWhitelist})}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      securitySettings.ipWhitelist ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                  >
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      securitySettings.ipWhitelist ? 'translate-x-6' : 'translate-x-1'
                    }`} />
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'users' && (
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Auto-Approve Users</h3>
                    <p className="text-sm text-gray-500">Automatically approve new user registrations</p>
                  </div>
                  <button
                    onClick={() => setUserManagement({...userManagement, autoApproveUsers: !userManagement.autoApproveUsers})}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      userManagement.autoApproveUsers ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                  >
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      userManagement.autoApproveUsers ? 'translate-x-6' : 'translate-x-1'
                    }`} />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Require Email Verification</h3>
                    <p className="text-sm text-gray-500">Require users to verify their email address</p>
                  </div>
                  <button
                    onClick={() => setUserManagement({...userManagement, requireEmailVerification: !userManagement.requireEmailVerification})}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      userManagement.requireEmailVerification ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                  >
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      userManagement.requireEmailVerification ? 'translate-x-6' : 'translate-x-1'
                    }`} />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Allow Profile Editing</h3>
                    <p className="text-sm text-gray-500">Allow users to edit their profiles</p>
                  </div>
                  <button
                    onClick={() => setUserManagement({...userManagement, allowProfileEditing: !userManagement.allowProfileEditing})}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      userManagement.allowProfileEditing ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                  >
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      userManagement.allowProfileEditing ? 'translate-x-6' : 'translate-x-1'
                    }`} />
                  </button>
          </div>

          <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">User Data Retention (days)</label>
                  <select
                    value={userManagement.userDataRetention}
                    onChange={(e) => setUserManagement({...userManagement, userDataRetention: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="30">30 days</option>
                    <option value="90">90 days</option>
                    <option value="365">1 year</option>
                    <option value="0">Never (keep forever)</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'system' && (
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="text-sm font-medium text-blue-800 mb-2">System Information</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
>>>>>>> db575fc4dfbca5b0e2ff6bb96496eaeee1b20d35
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">Maintenance Mode</h3>
                      <p className="text-sm text-gray-500">Put the site in maintenance mode</p>
                    </div>
                    <button
                      onClick={() => setGeneralSettings({...generalSettings, maintenanceMode: !generalSettings.maintenanceMode})}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        generalSettings.maintenanceMode ? 'bg-blue-600' : 'bg-gray-200'
                      }`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        generalSettings.maintenanceMode ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">Allow Registrations</h3>
                      <p className="text-sm text-gray-500">Allow new users to register</p>
                    </div>
                    <button
                      onClick={() => setGeneralSettings({...generalSettings, allowRegistrations: !generalSettings.allowRegistrations})}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        generalSettings.allowRegistrations ? 'bg-blue-600' : 'bg-gray-200'
                      }`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        generalSettings.allowRegistrations ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">Email Notifications</h3>
                      <p className="text-sm text-gray-500">Send email notifications to admins</p>
                    </div>
                    <button
                      onClick={() => setGeneralSettings({...generalSettings, emailNotifications: !generalSettings.emailNotifications})}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        generalSettings.emailNotifications ? 'bg-blue-600' : 'bg-gray-200'
                      }`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        generalSettings.emailNotifications ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">Two-Factor Authentication</h3>
                      <p className="text-sm text-gray-500">Require 2FA for admin accounts</p>
                    </div>
                    <button
                      onClick={() => setSecuritySettings({...securitySettings, twoFactorAuth: !securitySettings.twoFactorAuth})}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        securitySettings.twoFactorAuth ? 'bg-blue-600' : 'bg-gray-200'
                      }`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        securitySettings.twoFactorAuth ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Session Timeout (hours)</label>
                    <select
                      value={securitySettings.sessionTimeout}
                      onChange={(e) => setSecuritySettings({...securitySettings, sessionTimeout: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="1">1 hour</option>
                      <option value="8">8 hours</option>
                      <option value="24">24 hours</option>
                      <option value="168">1 week</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Max Login Attempts</label>
                    <select
                      value={securitySettings.maxLoginAttempts}
                      onChange={(e) => setSecuritySettings({...securitySettings, maxLoginAttempts: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="3">3 attempts</option>
                      <option value="5">5 attempts</option>
                      <option value="10">10 attempts</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Password Policy</label>
                    <select
                      value={securitySettings.passwordPolicy}
                      onChange={(e) => setSecuritySettings({...securitySettings, passwordPolicy: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="basic">Basic (6+ characters)</option>
                      <option value="strong">Strong (8+ chars, uppercase, lowercase, number)</option>
                      <option value="very-strong">Very Strong (10+ chars, special chars)</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">IP Whitelist</h3>
                      <p className="text-sm text-gray-500">Restrict admin access to specific IPs</p>
                    </div>
                    <button
                      onClick={() => setSecuritySettings({...securitySettings, ipWhitelist: !securitySettings.ipWhitelist})}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        securitySettings.ipWhitelist ? 'bg-blue-600' : 'bg-gray-200'
                      }`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        securitySettings.ipWhitelist ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'users' && (
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">Auto-Approve Users</h3>
                      <p className="text-sm text-gray-500">Automatically approve new user registrations</p>
                    </div>
                    <button
                      onClick={() => setUserManagement({...userManagement, autoApproveUsers: !userManagement.autoApproveUsers})}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        userManagement.autoApproveUsers ? 'bg-blue-600' : 'bg-gray-200'
                      }`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        userManagement.autoApproveUsers ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">Require Email Verification</h3>
                      <p className="text-sm text-gray-500">Require users to verify their email address</p>
                    </div>
                    <button
                      onClick={() => setUserManagement({...userManagement, requireEmailVerification: !userManagement.requireEmailVerification})}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        userManagement.requireEmailVerification ? 'bg-blue-600' : 'bg-gray-200'
                      }`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        userManagement.requireEmailVerification ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">Allow Profile Editing</h3>
                      <p className="text-sm text-gray-500">Allow users to edit their profiles</p>
                    </div>
                    <button
                      onClick={() => setUserManagement({...userManagement, allowProfileEditing: !userManagement.allowProfileEditing})}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        userManagement.allowProfileEditing ? 'bg-blue-600' : 'bg-gray-200'
                      }`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        userManagement.allowProfileEditing ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">User Data Retention (days)</label>
                    <select
                      value={userManagement.userDataRetention}
                      onChange={(e) => setUserManagement({...userManagement, userDataRetention: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="30">30 days</option>
                      <option value="90">90 days</option>
                      <option value="365">1 year</option>
                      <option value="0">Never (keep forever)</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'profile' && (
              <div className="space-y-8">
                {/* Admin Profile Avatar and Basic Info */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h3>
                  <div className="flex items-center space-x-6 mb-6">
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xl font-semibold">A</span>
                      </div>
                      <button className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-md border border-gray-200">
                        <Camera className="h-4 w-4 text-gray-600" />
                      </button>
                    </div>
                    <div>
                      <h4 className="text-md font-medium text-gray-900">Admin Profile Picture</h4>
                      <p className="text-sm text-gray-500">Upload a new profile picture</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                      <div className="relative">
                        <input
                          type="text"
                          value={adminProfile.firstName}
                          onChange={(e) => setAdminProfile({ ...adminProfile, firstName: e.target.value })}
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
                          value={adminProfile.lastName}
                          onChange={(e) => setAdminProfile({ ...adminProfile, lastName: e.target.value })}
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
                          value={adminProfile.email}
                          onChange={(e) => setAdminProfile({ ...adminProfile, email: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none pr-10"
                        />
                        <Mail className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <div className="relative">
                        <input
                          type="tel"
                          value={adminProfile.phone}
                          onChange={(e) => setAdminProfile({ ...adminProfile, phone: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none pr-10"
                        />
                        <Phone className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                      <div className="relative">
                        <input
                          type="date"
                          value={adminProfile.dateOfBirth}
                          onChange={(e) => setAdminProfile({ ...adminProfile, dateOfBirth: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none pr-10"
                        />
                        <Calendar className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                      <div className="relative">
                        <select
                          value={adminProfile.gender}
                          onChange={(e) => setAdminProfile({ ...adminProfile, gender: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none pr-10"
                        >
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                          <option value="Prefer not to say">Prefer not to say</option>
                        </select>
                        <User className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                      <div className="relative">
                        <input
                          type="text"
                          value={adminProfile.location}
                          onChange={(e) => setAdminProfile({ ...adminProfile, location: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none pr-10"
                        />
                        <MapPin className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                      <div className="relative">
                        <textarea
                          value={adminProfile.bio}
                          onChange={(e) => setAdminProfile({ ...adminProfile, bio: e.target.value })}
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
                        <input
                          type="text"
                          value={adminProfile.role}
                          onChange={(e) => setAdminProfile({ ...adminProfile, role: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none pr-10"
                        />
                        <Briefcase className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                      <div className="relative">
                        <select
                          value={adminProfile.department}
                          onChange={(e) => setAdminProfile({ ...adminProfile, department: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none pr-10"
                        >
                          <option value="IT Administration">IT Administration</option>
                          <option value="System Management">System Management</option>
                          <option value="Security">Security</option>
                          <option value="User Support">User Support</option>
                          <option value="Data Management">Data Management</option>
                        </select>
                        <Briefcase className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Employee ID</label>
                      <div className="relative">
                        <input
                          type="text"
                          value={adminProfile.employeeId}
                          onChange={(e) => setAdminProfile({ ...adminProfile, employeeId: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none pr-10"
                        />
                        <User className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Hire Date</label>
                      <div className="relative">
                        <input
                          type="date"
                          value={adminProfile.hireDate}
                          onChange={(e) => setAdminProfile({ ...adminProfile, hireDate: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none pr-10"
                        />
                        <Calendar className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Permissions */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">System Permissions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {adminProfile.permissions.map((permission, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm font-medium text-gray-700 capitalize">
                          {permission.replace('_', ' ')}
                        </span>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">Active</span>
                          <button className="text-red-500 hover:text-red-700">
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                    <button className="flex items-center justify-center p-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:text-gray-700 hover:border-gray-400">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Permission
                    </button>
                  </div>
                </div>

                {/* Skills and Languages */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Skills & Languages</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Technical Skills</label>
                      <div className="flex flex-wrap gap-2">
                        {adminProfile.skills.map((skill, index) => (
                          <span key={index} className="flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                            {skill}
                            <button
                              onClick={() => {
                                const newSkills = adminProfile.skills.filter((_, i) => i !== index);
                                setAdminProfile({ ...adminProfile, skills: newSkills });
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
                        {adminProfile.languages.map((language, index) => (
                          <span key={index} className="flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                            {language}
                            <button
                              onClick={() => {
                                const newLanguages = adminProfile.languages.filter((_, i) => i !== index);
                                setAdminProfile({ ...adminProfile, languages: newLanguages });
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
                          value={adminProfile.linkedinUrl}
                          onChange={(e) => setAdminProfile({ ...adminProfile, linkedinUrl: e.target.value })}
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
                          value={adminProfile.githubUrl}
                          onChange={(e) => setAdminProfile({ ...adminProfile, githubUrl: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none pr-10"
                          placeholder="https://github.com/username"
                        />
                        <Link className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Emergency Contact */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Emergency Contact</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Contact Name</label>
                      <div className="relative">
                        <input
                          type="text"
                          value={adminProfile.emergencyContact.name}
                          onChange={(e) => setAdminProfile({
                            ...adminProfile,
                            emergencyContact: { ...adminProfile.emergencyContact, name: e.target.value }
                          })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none pr-10"
                        />
                        <User className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Relationship</label>
                      <div className="relative">
                        <select
                          value={adminProfile.emergencyContact.relationship}
                          onChange={(e) => setAdminProfile({
                            ...adminProfile,
                            emergencyContact: { ...adminProfile.emergencyContact, relationship: e.target.value }
                          })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none pr-10"
                        >
                          <option value="Spouse">Spouse</option>
                          <option value="Parent">Parent</option>
                          <option value="Sibling">Sibling</option>
                          <option value="Friend">Friend</option>
                          <option value="Other">Other</option>
                        </select>
                        <User className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Contact Phone</label>
                      <div className="relative">
                        <input
                          type="tel"
                          value={adminProfile.emergencyContact.phone}
                          onChange={(e) => setAdminProfile({
                            ...adminProfile,
                            emergencyContact: { ...adminProfile.emergencyContact, phone: e.target.value }
                          })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none pr-10"
                        />
                        <Phone className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Contact Email</label>
                      <div className="relative">
                        <input
                          type="email"
                          value={adminProfile.emergencyContact.email}
                          onChange={(e) => setAdminProfile({
                            ...adminProfile,
                            emergencyContact: { ...adminProfile.emergencyContact, email: e.target.value }
                          })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none pr-10"
                        />
                        <Mail className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'system' && (
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h3 className="text-sm font-medium text-blue-800 mb-2">System Information</h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Version:</span>
                        <span className="ml-2 text-gray-900">1.0.0</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Last Updated:</span>
                        <span className="ml-2 text-gray-900">2024-01-15</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Database Size:</span>
                        <span className="ml-2 text-gray-900">2.3 GB</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Active Users:</span>
                        <span className="ml-2 text-gray-900">1,247</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-sm font-medium text-gray-900">System Actions</h3>
                    <div className="space-y-2">
                      <button className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 rounded-lg flex items-center">
                        <Activity className="h-4 w-4 mr-3" />
                        Clear Cache
                      </button>
                      <button className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 rounded-lg flex items-center">
                        <Database className="h-4 w-4 mr-3" />
                        Backup Database
                      </button>
                      <button className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 rounded-lg flex items-center">
                        <Globe className="h-4 w-4 mr-3" />
                        Check for Updates
                      </button>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-lg font-semibold text-red-600 mb-4">Danger Zone</h3>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <h4 className="text-sm font-medium text-red-800 mb-2">Reset System</h4>
                      <p className="text-sm text-red-600 mb-4">
                        This will reset all system settings to default. This action cannot be undone.
                      </p>
                      <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 flex items-center">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Reset System
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Save Button */}
          <div className="border-t border-gray-200 px-6 py-4 bg-gray-50 flex justify-end"> {/* Remove rounded-b-xl */}
            <button
              onClick={handleSave}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 flex items-center"
            >
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Settings; 