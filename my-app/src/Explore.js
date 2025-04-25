// filepath: src/Explore.js
import React, { useState } from 'react';
import './Explore.css';

const jobs = [
  {
    id: 1,
    title: 'Simulations Engineer',
    company: 'Monash High Powered Rocketry',
    paragraph: `<strong> What is this role?</strong> \n
As a Simulations Engineer within the Dynamics subteam at Monash High Powered Rocketry...`,
    points: [
      'Working with SATURN, our custom python-based 6 degree of freedom trajectory simulator.',
      'Performing Computational Fluid Dynamics analysis.',
      'Analyzing and assessing the trajectory and performance of rockets based on SATURN simulations.',
      'Having input into rocket design decisions to ensure a safe and successful flight.',
    ],
    tags: ['Others', 'Found 32d ago', 'Python', 'Space', 'Rockets'],
    industry: 'Aerospace',
  },
  {
    id: 2,
    title: 'Member',
    company: 'Monash DeepNeuron',
    paragraph: `<strong>What is this role?</strong> \n
The Monash Deep Neuron Team is a student-led initiative...`,
    points: [
      'Deep neural networks and large language models',
      'Computer vision, natural language processing, and reinforcement learning',
      'Brain-computer interfaces and biologically-inspired algorithms',
      'Industry collaboration and academic publishing',
    ],
    tags: ['Data Science', 'Machine Learning', 'AI'],
    industry: 'Artificial Intelligence',
  },
  {
    id: 3,
    title: 'Investment Analyst',
    company: 'Monash Student Managed Fund',
    paragraph: `<strong>About Us</strong> \n
The Monash Student Managed Fund is a prestigious, student-run investment fund...`,
    points: [
      'Conduct equity research and valuation of ASX-listed companies...',
      'Perform industry and macroeconomic analysis...',
      'Build and maintain financial models...',
      'Present investment recommendations...',
      'Monitor portfolio performance...',
      'Work collaboratively within a sector team...',
      'Develop professional communication skills...',
      'Gain exposure to ethical investment practices...',
    ],
    tags: ['Data Science', 'Machine Learning', 'AI'],
    industry: 'Finance',
  },
];

function Explore({ goToHome, refreshExplore }) {
  const [selectedJob, setSelectedJob] = useState(null);
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const filteredJobs = selectedIndustry === 'All'
    ? jobs
    : jobs.filter((job) => job.industry === selectedIndustry);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleIndustrySelect = (industry) => {
    setSelectedIndustry(industry);
    setIsDropdownOpen(false);
    setSelectedJob(null); // Optional: reset selected job on filter
  };

  return (
    <div className="explore-page">
      {/* Navigation Buttons */}
      <div className="nav-buttons" style={{ marginTop: '1rem' }}>
        <button onClick={goToHome}>Home</button>
        <button onClick={refreshExplore}>Explore</button>
      </div>

      {/* Navbar for Filters */}
      <div className="navbar">
        <div className="filter-dropdown">
          <button className="dropdown-button" onClick={toggleDropdown}>
            Industry: {selectedIndustry === 'All' ? 'All' : selectedIndustry}
          </button>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <div onClick={() => handleIndustrySelect('All')}>All</div>
              <div onClick={() => handleIndustrySelect('Aerospace')}>Aerospace</div>
              <div onClick={() => handleIndustrySelect('Artificial Intelligence')}>Artificial Intelligence</div>
              <div onClick={() => handleIndustrySelect('Finance')}>Finance</div>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="explore-container">
        {/* Job List */}
        <div className="job-list">
          <h2 className="section-title">Role Listings</h2>
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className={`job-card ${selectedJob?.id === job.id ? 'job-card-selected' : ''}`}
              onClick={() => setSelectedJob(job)}
            >
              <h3 className="job-title">{job.title}</h3>
              <p className="job-company">{job.company}</p>
              <div className="job-tags">
                {job.tags.map((tag, index) => (
                  <span key={index} className="job-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Job Details */}
        <div className="job-details">
          {selectedJob ? (
            <div className="job-details-box">
              <h2 className="job-details-title">{selectedJob.title}</h2>
              <h3 className="job-details-company">{selectedJob.company}</h3>
              {selectedJob.paragraph.split('\n').map((text, index) => (
                <p
                  key={index}
                  className="job-details-paragraph"
                  dangerouslySetInnerHTML={{ __html: text.trim() }}
                ></p>
              ))}
              <ul className="job-details-points">
                {selectedJob.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
              <button
                className="apply-button"
                onClick={() => alert('Apply Now functionality can be implemented here!')}
              >
                Apply Now
              </button>
            </div>
          ) : (
            <p className="job-details-placeholder">Select a job to view details</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Explore;
