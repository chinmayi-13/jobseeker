import React, { useState, useRef, useEffect } from 'react';
import Layout from '../../components/Layout';
import { Upload, FileText, Linkedin, CheckCircle, TrendingUp, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SkillGapAnalyzer: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<null | { title: string; company: string; match: string }>(null);
  const [activeTab, setActiveTab] = useState<'skill-gap' | 'skills-have' | 'recommendations' | 'trending-skills'>('skill-gap');
  const [uploadMethod, setUploadMethod] = useState<'resume' | 'linkedin' | 'manual'>('resume');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [showManualEntry, setShowManualEntry] = useState(false);
  const [manualSkills, setManualSkills] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [showRoleModal, setShowRoleModal] = useState(false);
  const [targetRole, setTargetRole] = useState('Senior Frontend Developer');
  const [readinessScore, setReadinessScore] = useState(65);
  const [skillsHave] = useState(['JavaScript', 'React', 'HTML/CSS', 'Git', 'Communication', 'Problem Solving']);
  const [skillsGap, setSkillsGap] = useState(['GraphQL', 'Docker', 'Kubernetes']);
  const navigate = useNavigate();

  // Restore state from localStorage on mount
  useEffect(() => {
    const savedResumeName = localStorage.getItem('resumeName');
    const savedManualSkills = localStorage.getItem('manualSkills');
    if (savedResumeName) {
      // We can't restore the actual File, but we can show the name as uploaded
      setSelectedFile({ name: savedResumeName } as File);
    }
    if (savedManualSkills) {
      setManualSkills(savedManualSkills);
    }
  }, []);

  const handleResumeUploadClick = () => {
    fileInputRef.current?.click();
  };

  // Save resume name to localStorage on upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      localStorage.setItem('resumeName', file.name);
      console.log('Uploaded file:', file.name);
      // Here you would typically process the file
    }
  };

  const handleLinkedInConnect = () => {
    setUploadMethod('linkedin');
    // Here you would typically open LinkedIn OAuth
    console.log('Connecting to LinkedIn...');
  };

  const handleManualEntry = () => {
    setUploadMethod('manual');
    setShowManualEntry(true);
  };

  // Save manual skills to localStorage on submit
  const handleManualSkillsSubmit = () => {
    console.log('Manual skills submitted:', manualSkills);
    setShowManualEntry(false);
    localStorage.setItem('manualSkills', manualSkills);
    setManualSkills(manualSkills);
  };

  const handleLearnNow = (skill: string) => {
    console.log(`Learning ${skill}...`);
    // Here you would typically redirect to a learning platform
  };

  const handleChangeTargetRole = () => {
    setShowRoleModal(true);
  };
  const handleSelectRole = (role: string) => {
    setTargetRole(role);
    // Simulate skill gap and readiness score update based on role and uploaded resume/manual skills
    if (role === 'Senior Frontend Developer') {
      setSkillsGap(['GraphQL', 'Docker', 'Kubernetes']);
      setReadinessScore(65);
    } else if (role === 'Backend Developer') {
      setSkillsGap(['Node.js', 'MongoDB', 'Docker']);
      setReadinessScore(55);
    } else if (role === 'Full Stack Developer') {
      setSkillsGap(['GraphQL', 'AWS', 'Kubernetes']);
      setReadinessScore(60);
    }
    setShowRoleModal(false);
  };

  const handleQuickAction = (action: string) => {
    console.log(`Quick action clicked: ${action}`);
    
    // Add visual feedback
    const button = document.querySelector(`[data-action="${action}"]`) as HTMLButtonElement;
    if (button) {
      button.style.backgroundColor = '#dbeafe'; // Light blue background
      setTimeout(() => {
        button.style.backgroundColor = '';
      }, 200);
    }
    
    // Handle different actions
    switch (action) {
      case 'View Detailed Analysis':
        navigate('/analysis');
        break;
      case 'Find Certifications':
        navigate('/certifications');
        break;
      case 'Track Progress':
        navigate('/progress');
        break;
      default:
        console.log(`Unknown action: ${action}`);
    }
  };

  const jobDetails: Record<string, { description: string; requirements: string[]; salary: string; location: string }> = {
    'Frontend Developer': {
      description: 'Build modern web applications using React and TypeScript. Work with a dynamic team to create user-friendly interfaces.',
      requirements: ['React', 'TypeScript', 'CSS', 'JavaScript'],
      salary: '$80,000 - $100,000',
      location: 'San Francisco, CA',
    },
    'Junior Full Stack Developer': {
      description: 'Join our fast-growing startup to build scalable web applications from frontend to backend.',
      requirements: ['Node.js', 'React', 'MongoDB', 'Express'],
      salary: '$70,000 - $90,000',
      location: 'New York, NY',
    },
    'React Developer': {
      description: 'Develop cutting-edge e-commerce platforms using React and modern JavaScript frameworks.',
      requirements: ['React', 'Redux', 'JavaScript', 'Git'],
      salary: '$75,000 - $95,000',
      location: 'Austin, TX',
    },
  };

  const jobRecommendations = [
    { title: 'Frontend Developer', company: 'TechCorp', match: '89%' },
    { title: 'Junior Full Stack Developer', company: 'StartupXYZ', match: '76%' },
    { title: 'React Developer', company: 'WebSolutions', match: '92%' }
  ];

  // Add a function to clear localStorage and reset state
  const handleStartOver = () => {
    localStorage.removeItem('resumeName');
    localStorage.removeItem('manualSkills');
    setSelectedFile(null);
    setManualSkills('');
    setUploadMethod('resume');
    setActiveTab('skill-gap');
  };

    return (
      <Layout role="student">
      <div className="p-6 bg-gray-50 min-h-screen">
          <div className="max-w-7xl mx-auto">
          {/* Upload Section */}
          <div className="bg-blue-50 rounded-xl border border-blue-100 p-8 flex flex-col md:flex-row items-center justify-between mb-6">
            <div className="flex-1 flex flex-col items-center md:items-start">
              <Upload className="h-12 w-12 text-blue-400 mb-4" />
              <h2 className="text-xl font-semibold mb-1 text-gray-900">Upload Your Resume or LinkedIn Profile</h2>
              <p className="text-gray-600 mb-4">Get instant analysis of your skill gaps</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button 
                  onClick={handleResumeUploadClick} 
                  className={`px-4 py-2 rounded-lg font-medium flex items-center gap-2 ${
                    uploadMethod === 'resume' 
                      ? 'bg-blue-600 text-white' 
                      : 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Upload className="h-5 w-5" /> 
                  {selectedFile ? `Uploaded: ${selectedFile.name}` : 'Upload Resume (PDF/DOC)'}
                </button>
                <button 
                  onClick={handleLinkedInConnect}
                  className={`px-4 py-2 rounded-lg font-medium flex items-center gap-2 ${
                    uploadMethod === 'linkedin' 
                      ? 'bg-blue-600 text-white' 
                      : 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Linkedin className="h-5 w-5" /> Connect LinkedIn
                </button>
                <button 
                  onClick={handleManualEntry}
                  className={`px-4 py-2 rounded-lg font-medium flex items-center gap-2 ${
                    uploadMethod === 'manual' 
                      ? 'bg-blue-600 text-white' 
                      : 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <FileText className="h-5 w-5" /> Enter Skills Manually
                </button>
              </div>
              <input type="file" accept=".pdf,.doc,.docx" ref={fileInputRef} onChange={handleFileChange} style={{ display: 'none' }} />
            </div>
            <button
              onClick={handleStartOver}
              className="mt-4 md:mt-0 md:ml-6 px-4 py-2 bg-red-100 hover:bg-red-200 text-red-700 rounded font-medium"
            >
              Start Over
            </button>
          </div>

          {/* Manual Entry Modal */}
          {showManualEntry && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
                <h3 className="text-lg font-semibold mb-4">Enter Your Skills</h3>
                <textarea
                  value={manualSkills}
                  onChange={(e) => setManualSkills(e.target.value)}
                  placeholder="Enter your skills separated by commas (e.g., React, JavaScript, Python)"
                  className="w-full p-3 border border-gray-300 rounded-lg mb-4 h-32"
                />
                <div className="flex gap-3">
                  <button 
                    onClick={() => setShowManualEntry(false)}
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={handleManualSkillsSubmit}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Target Role Modal */}
          {showRoleModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
                <h3 className="text-lg font-semibold mb-4">Select Target Role</h3>
                <div className="flex flex-col gap-3 mb-4">
                  {['Senior Frontend Developer', 'Backend Developer', 'Full Stack Developer'].map((role) => (
                    <button
                      key={role}
                      onClick={() => handleSelectRole(role)}
                      className={`px-4 py-2 rounded-lg font-medium ${targetRole === role ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                    >
                      {role}
                    </button>
                  ))}
                </div>
                <button onClick={() => setShowRoleModal(false)} className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">Cancel</button>
              </div>
            </div>
          )}

          {/* Only show the rest of the page if resume is uploaded or manual entry is submitted */}
          {(selectedFile || (!showManualEntry && manualSkills.length > 0)) && (
            <>
              {/* Main Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left: Tabs and Skill Gap */}
                <div className="lg:col-span-2">
                  {/* Tabs */}
                  <div className="flex gap-2 mb-4">
                    <button 
                      onClick={() => setActiveTab('skill-gap')}
                      className={`flex-1 px-4 py-2 rounded-t font-medium ${
                        activeTab === 'skill-gap' 
                          ? 'bg-white border-b-2 border-blue-600' 
                          : 'bg-gray-100 border-b-2 border-transparent'
                      }`}
                    >
                      Skill Gap
                    </button>
                    <button 
                      onClick={() => setActiveTab('skills-have')}
                      className={`flex-1 px-4 py-2 rounded-t font-medium ${
                        activeTab === 'skills-have' 
                          ? 'bg-white border-b-2 border-blue-600' 
                          : 'bg-gray-100 border-b-2 border-transparent'
                      }`}
                    >
                      Skills I Have
                    </button>
                    <button 
                      onClick={() => setActiveTab('recommendations')}
                      className={`flex-1 px-4 py-2 rounded-t font-medium ${
                        activeTab === 'recommendations' 
                          ? 'bg-white border-b-2 border-blue-600' 
                          : 'bg-gray-100 border-b-2 border-transparent'
                      }`}
                    >
                      Recommendations
                    </button>
              <button
                      onClick={() => setActiveTab('trending-skills')}
                      className={`flex-1 px-4 py-2 rounded-t font-medium ${
                        activeTab === 'trending-skills' 
                          ? 'bg-white border-b-2 border-blue-600' 
                          : 'bg-gray-100 border-b-2 border-transparent'
                      }`}
                    >
                      Trending Skills
              </button>
            </div>

                  {/* Tab Content */}
                  {activeTab === 'skill-gap' && (
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
                      <div className="flex items-center mb-2">
                        <span className="text-yellow-500 mr-2">⚠️</span>
                        <h2 className="text-lg font-semibold text-gray-900">Missing Skills for {targetRole}</h2>
                      </div>
                      <p className="text-gray-600 mb-4">These skills are highly demanded for your target role</p>
                      <div className="space-y-3">
                        {skillsGap.map((skill, index) => (
                          <div key={index} className="p-4 bg-red-50 rounded-lg flex items-center justify-between border border-red-200">
                            <div>
                              <div className="font-semibold text-red-800">{skill}</div>
                              <div className="text-sm text-red-600">Demand: <span className="font-bold">High</span></div>
                            </div>
                            <div className="flex gap-2">
                              <span className="px-3 py-1 rounded-full bg-white border border-red-300 text-red-600 text-xs font-medium">Missing</span>
                              <button 
                                onClick={() => handleLearnNow(skill)}
                                className="px-3 py-1 rounded bg-red-100 text-red-700 text-xs font-semibold hover:bg-red-200"
                              >
                                Learn Now
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === 'skills-have' && (
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
                <div className="flex items-center mb-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                  <h2 className="text-xl font-semibold text-gray-900">Skills You Have</h2>
                </div>
                <div className="space-y-2">
                        {skillsHave.map((skill, index) => (
                    <div key={index} className="flex items-center p-3 bg-green-50 rounded-lg">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-green-800 font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
                  )}

                  {activeTab === 'recommendations' && (
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
                <div className="flex items-center mb-4">
                        <BookOpen className="h-6 w-6 text-blue-600 mr-2" />
                        <h2 className="text-xl font-semibold text-gray-900">Learning Recommendations</h2>
                </div>
                <div className="space-y-3">
                        {[
                          { skill: 'GraphQL', course: 'Complete GraphQL Tutorial', provider: 'Udemy', duration: '8 hours', rating: 4.8, price: '₹1,299' },
                          { skill: 'Docker', course: 'Docker & Kubernetes Complete Course', provider: 'Coursera', duration: '12 hours', rating: 4.9, price: 'Free' },
                          { skill: 'AWS', course: 'AWS Certified Developer', provider: 'AWS Training', duration: '40 hours', rating: 4.7, price: '₹2,999' }
                        ].map((course, index) => (
                          <div key={index} className="p-4 border rounded-lg hover:shadow-md">
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <h4 className="font-medium mb-1">{course.course}</h4>
                                <p className="text-sm text-gray-600 mb-2">For: <span className="px-2 py-1 rounded bg-blue-100 text-blue-700 text-xs">{course.skill}</span></p>
                                <div className="flex items-center gap-4 text-sm text-gray-500">
                                  <span>{course.provider}</span>
                                  <span>{course.duration}</span>
                                  <div className="flex items-center gap-1">
                                    <span className="text-yellow-400">★</span>
                                    <span>{course.rating}</span>
                                  </div>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="font-semibold text-lg text-blue-600 mb-2">{course.price}</div>
                                <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
                                  Enroll Now
                                </button>
                              </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
                  )}

                  {activeTab === 'trending-skills' && (
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
                      <div className="flex items-center mb-4">
                        <TrendingUp className="h-6 w-6 text-purple-600 mr-2" />
                        <h2 className="text-xl font-semibold text-gray-900">Trending Skills</h2>
                      </div>
                      <div className="space-y-3">
                        {[
                          { skill: 'React', demand: 'High', reason: 'Most in-demand frontend framework' },
                          { skill: 'Node.js', demand: 'High', reason: 'Popular for backend development' },
                          { skill: 'Python', demand: 'Medium', reason: 'Versatile for data science and AI' },
                          { skill: 'AWS', demand: 'High', reason: 'Cloud computing and infrastructure' },
                          { skill: 'Docker', demand: 'High', reason: 'Containerization and DevOps' },
                          { skill: 'Kubernetes', demand: 'Medium', reason: 'Container orchestration' }
                        ].map((skill, index) => (
                          <div key={index} className="p-4 border rounded-lg hover:shadow-md">
                            <div className="flex items-center justify-between mb-2">
                  <div>
                                <h4 className="font-medium text-gray-900">{skill.skill}</h4>
                                <p className="text-sm text-gray-600">{skill.reason}</p>
                    </div>
                              <div className="text-right text-sm text-gray-500">
                                <span>Demand: <span className="font-bold text-green-600">{skill.demand}</span></span>
                    </div>
                  </div>
                    </div>
                        ))}
                    </div>
                  </div>
                  )}
                    </div>

                {/* Right: Readiness Score, Target Role, Quick Actions */}
                <div className="flex flex-col gap-6">
                  {/* Job Readiness Score */}
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
                    <h2 className="text-lg font-semibold mb-2">Job Readiness Score</h2>
                    <div className="relative flex items-center justify-center mb-2">
                      <svg className="w-24 h-24" viewBox="0 0 36 36">
                        <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#e5e7eb" strokeWidth="3" />
                        <path d={`M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831`} fill="none" stroke="#2563eb" strokeWidth="3" strokeDasharray={`${readinessScore}, 100`} />
                      </svg>
                      <span className="absolute text-2xl font-bold text-blue-600">{readinessScore}%</span>
                    </div>
                    <div className="text-gray-600 mb-2">You're {readinessScore}% ready for your target role</div>
                    <div className="flex justify-between text-sm text-gray-700 mb-1">
                      <span>Skills You Have: <span className="font-bold text-green-600">5</span></span>
                      <span>Skills to Learn: <span className="font-bold text-red-600">7</span></span>
                  </div>
                    <div className="text-right text-sm text-blue-600">Market Demand: <span className="font-bold">Very High</span></div>
              </div>

                  {/* Target Role */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <h2 className="text-lg font-semibold mb-2 flex items-center gap-2"><span className="text-gray-700">&#9679;</span> Target Role</h2>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-blue-700">{targetRole}</span>
                      <span className="font-bold text-green-700">₹15-25L</span>
                </div>
                    <div className="flex justify-between items-center text-sm">
                      <span>Market Demand:</span>
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">Very High</span>
                    </div>
                    <button 
                      onClick={handleChangeTargetRole}
                      className="w-full mt-4 px-4 py-2 rounded bg-gray-100 text-gray-700 font-medium hover:bg-gray-200"
                    >
                      Change Target Role
                    </button>
                </div>
              </div>
            </div>

              {/* Quick Actions - Full Width */}
              <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6 w-full">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button 
                    onClick={() => handleQuickAction('View Detailed Analysis')}
                    data-action="View Detailed Analysis"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 bg-gray-50 hover:bg-gray-100 font-medium w-full transition-colors duration-200"
                  >
                    <TrendingUp className="h-5 w-5 text-blue-600" />
                    View Detailed Analysis
                  </button>
                  <button 
                    onClick={() => handleQuickAction('Find Certifications')}
                    data-action="Find Certifications"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 bg-gray-50 hover:bg-gray-100 font-medium w-full transition-colors duration-200"
                  >
                    <BookOpen className="h-5 w-5 text-green-600" />
                    Find Certifications
                  </button>
                  <button 
                    onClick={() => handleQuickAction('Track Progress')}
                    data-action="Track Progress"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 bg-gray-50 hover:bg-gray-100 font-medium w-full transition-colors duration-200"
                  >
                    <CheckCircle className="h-5 w-5 text-purple-600" />
                    Track Progress
                  </button>
                </div>
              </div>

              {/* Recommendations Section - full width below */}
            <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Recommended Jobs Based on Your Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {jobRecommendations.map((job, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md">
                    <h3 className="font-semibold text-gray-900 mb-1">{job.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{job.company}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-blue-600">Match: {job.match}</span>
                      <button className="text-blue-600 text-sm hover:underline" onClick={() => setSelectedJob(job)}>View Details</button>
                    </div>
                  </div>
                ))}
              </div>
              {selectedJob && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                  <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4 max-h-[90vh] overflow-auto">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-2xl font-semibold text-gray-900">{selectedJob.title}</h2>
                      <button
                        onClick={() => setSelectedJob(null)}
                        className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
                      >
                        ✕
                      </button>
                    </div>
                    <div className="mb-2 text-gray-700 font-medium">{selectedJob.company}</div>
                    <div className="mb-4 text-sm text-gray-500">{jobDetails[selectedJob.title]?.location} &bull; {jobDetails[selectedJob.title]?.salary}</div>
                    <div className="mb-4">
                      <h3 className="font-semibold mb-1">Description</h3>
                      <p className="text-gray-700 text-sm">{jobDetails[selectedJob.title]?.description}</p>
                    </div>
                    <div className="mb-4">
                      <h3 className="font-semibold mb-1">Requirements</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700">
                        {jobDetails[selectedJob.title]?.requirements.map((req, i) => (
                          <li key={i}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default SkillGapAnalyzer;
