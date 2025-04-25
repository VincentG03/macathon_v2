// filepath: src/Explore.js
import React, { useState } from 'react';
import './Explore.css';
import { useNavigate } from 'react-router-dom';

const jobs = [
  {
    id: 1,
    title: 'Simulations Engineer',
    company: 'Monash High Powered Rocketry',
    paragraph: `As a Simulations Engineer within the Dynamics subteam at Monash High Powered Rocketry...`,
    points: [
      'Working with SATURN, our custom python-based 6 degree of freedom trajectory simulator.',
      'Performing Computational Fluid Dynamics analysis.',
      'Analyzing and assessing the trajectory and performance of rockets based on SATURN simulations.',
      'Having input into rocket design decisions to ensure a safe and successful flight.',
    ],
    tags: ['Python', 'Space', 'Rockets'],
    industry: 'Aerospace',
    hiringStatus: 'Active',
    hasVirtualExperience: true,
  },
  {
    id: 2,
    title: 'Artificial Intelligence Member',
    company: 'Monash DeepNeuron',
    paragraph: `The Monash Deep Neuron Team is a student-led initiative...`,
    points: [
      'Deep neural networks and large language models',
      'Computer vision, natural language processing, and reinforcement learning',
      'Brain-computer interfaces and biologically-inspired algorithms',
      'Industry collaboration and academic publishing',
    ],
    tags: ['Data Science', 'Machine Learning', 'AI'],
    industry: 'Artificial Intelligence',
    hiringStatus: 'Active',
    hasVirtualExperience: true,
  },
  {
    id: 3,
    title: 'Investment Analyst',
    company: 'Monash Student Managed Fund',
    paragraph: `The Monash Student Managed Fund is a prestigious, student-run investment fund...`,
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
    tags: ['Modelling', 'Fundamental Analysis', 'Financial Markets'],
    industry: 'Finance',
    hiringStatus: 'Active',
    hasVirtualExperience: true,
  },
];

function Explore() {

  const [selectedJob, setSelectedJob] = useState(null);
  const [selectedIndustry, setSelectedIndustry] = useState("All");
  const [selectedHiringStatus, setSelectedHiringStatus] = useState("All");
  const [selectedVirtualExperience, setSelectedVirtualExperience] = useState("All");
  const [isIndustryDropdownOpen, setIsIndustryDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleIndustryDropdown = () => setIsIndustryDropdownOpen(prev => !prev);

  const filteredJobs = jobs.filter((job) => {
    const matchesIndustry = selectedIndustry === "All" || job.industry === selectedIndustry;
    const matchesHiring = selectedHiringStatus === "All" || job.hiringStatus === selectedHiringStatus;
    const matchesVirtual = selectedVirtualExperience === "All" ||
      (selectedVirtualExperience === "Yes" && job.hasVirtualExperience) ||
      (selectedVirtualExperience === "No" && !job.hasVirtualExperience);
    return matchesIndustry && matchesHiring && matchesVirtual;
  });

  const resetFilters = () => {
    setSelectedIndustry("All");
    setSelectedHiringStatus("All");
    setSelectedVirtualExperience("All");
    setSelectedJob(null);
  };

  return (
    <div className="explore-page">
      {/* Back Button */}
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h1 className="explore-title">Student Teams</h1>

      <div className="filter-bar">
        <div className="navbar">
          <div className="filter-dropdown">
            <button className="dropdown-button" onClick={toggleIndustryDropdown}>
              Industry: {selectedIndustry}
            </button>
            {isIndustryDropdownOpen && (
              <div className="dropdown-content">
                {["All", "Aerospace", "Artificial Intelligence", "Finance"].map(ind => (
                  <div key={ind} onClick={() => { setSelectedIndustry(ind); setIsIndustryDropdownOpen(false); }}>
                    {ind}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="filter-dropdown">
            <select value={selectedHiringStatus} onChange={e => setSelectedHiringStatus(e.target.value)}>
              <option value="All">Hiring Status: All</option>
              <option value="Active">Active</option>
              <option value="Non-active">Non-active</option>
            </select>
          </div>

          <div className="filter-dropdown">
            <select value={selectedVirtualExperience} onChange={e => setSelectedVirtualExperience(e.target.value)}>
              <option value="All">Has Virtual Experience: All</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <button className="reset-button" onClick={resetFilters}>
            Reset Filters
          </button>
        </div>
      </div>

      {/* MAIN LAYOUT */}
      <div className="explore-container">
        {filteredJobs.length === 0 ? (
          <div className="no-results-panel">
            <div className="job-details-box">
              <p className="job-details-placeholder">No results found.</p>
            </div>
          </div>
        ) : (
          <>
            <div className="job-list">
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

            <div className="job-details">
              <div className="job-details-box">
                {selectedJob ? (
                  <>
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
                    <div className="button-container">
                      <button className="apply-button" onClick={() => alert("Apply Now functionality can be implemented here!")}>
                        Apply Now
                      </button>
                      {selectedJob.title === "Simulations Engineer" && (
                        <button className="apply-button" onClick={() => navigate("/rocket-simulator")}>
                          Go to Rocket Simulator
                        </button>
                      )}
                      {selectedJob.title === "Artificial Intelligence Member" && (
                        <button className="apply-button" onClick={() => navigate("/ai-virtual-experience")}>
                          Go to AI Virtual Experience
                        </button>
                      )}
                      {selectedJob.title === "Investment Analyst" && (
                        <button className="apply-button" onClick={() => navigate("/finance-virtual-experience")}>
                          Go to Finance Virtual Experience
                        </button>
                      )}
                    </div>
                  </>
                ) : (
                  <p className="job-details-placeholder">Select a job to view more details and try a virtual challenge.</p>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Explore;
