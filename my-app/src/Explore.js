// filepath: src/Explore.js
import React, { useState } from 'react';
import './Explore.css';
import { useNavigate } from 'react-router-dom';

import hprLogo from './assets/hpr.png';
import mdnLogo from './assets/mdn.jpeg';
import msmfLogo from './assets/msmf.jpeg';
import novaLogo from './assets/novarova.png';
import mmsLogo from './assets/motorsport.png';
import aimLogo from './assets/aim.png';
import writeLogo from './assets/writers.jpg';
import brewLogo from './assets/brew.png';

const jobs = [
  {
    id: 1,
    title: 'Simulations Engineer',
    company: 'Monash High Powered Rocketry',
    logo: hprLogo,
    paragraph: `Monash High Powered Rocketry designs, builds, and launches rockets to compete in international competitions such as the Spaceport America Cup. The team brings together students from engineering, science, and computer science to create sophisticated aerospace systems.
    <span class="bold-only">In this role, you may:</span>`,
    points: [
      'Working with SATURN, our custom python-based 6 degree of freedom trajectory simulator.',
      'Performing Computational Fluid Dynamics analysis.',
      'Analyzing and assessing the trajectory and performance of rockets based on SATURN simulations.',
      'Having input into rocket design decisions to ensure a safe and successful flight.',
    ],
    tags: ['Space', 'Rockets'],
    industry: ['Engineering', 'Technology'],
    hiringStatus: 'Active',
    hasVirtualExperience: true,
  },
  {
    id: 2,
    title: 'Artificial Intelligence Member',
    company: 'Monash DeepNeuron',
    logo: mdnLogo,
    paragraph: `Monash DeepNeuron is a student-led research initiative focused on artificial intelligence and neuroscience. The team explores cutting-edge technologies including neural networks, brain-computer interfaces, and biologically-inspired models.
    <span class="bold-only">In this role, you may:</span>`,
    points: [
      'Deep neural networks and large language models',
      'Computer vision, natural language processing, and reinforcement learning',
      'Brain-computer interfaces and biologically-inspired algorithms',
      'Industry collaboration and academic publishing',
    ],
    tags: ['Data Science', 'Machine Learning', 'AI'],
    industry: ['Technology'],
    hiringStatus: 'Active',
    hasVirtualExperience: true,
  },
  {
    id: 3,
    title: 'Investment Analyst',
    company: 'Monash Student Managed Fund',
    logo: msmfLogo,
    paragraph: `Monash Student Managed Fund is a student-run investment fund managing real capital on behalf of the Monash Foundation. It provides hands-on experience in stock research, valuation, and portfolio management.
    <span class="bold-only">In this role, you may:</span>`,
    points: [
      'Conduct equity research and valuation of ASX-listed companies...',
      'Perform industry and macroeconomic analysis...',
      'Build and maintain financial models...',
      'Present investment recommendations...',
      'Gain exposure to ethical investment practices...',
    ],
    tags: ['Modelling', 'Fundamental Analysis', 'Financial Markets'],
    industry: ['Finance', 'Consulting'],
    hiringStatus: 'Active',
    hasVirtualExperience: true,
  },
  {
    id: 4,
    title: 'Robotics Engineer',
    company: 'Monash Nova Rova',
    logo: novaLogo,
    paragraph: `Monash Nova Rover is a student-led team that designs, builds, and operates Mars rovers to compete in international competitions such as the University Rover Challenge (URC). The team brings together students from engineering, science, IT, and design to develop advanced robotic systems capable of autonomous navigation, science exploration, and remote operation in challenging environments.
    <span class="bold-only">In this role, you may:</span>`,
    points: [
      'Work on autonomous navigation algorithms using sensor fusion and computer vision.',
      'Develop and test robotic subsystems including the manipulator arm, drivetrain, and science module.',
      'Analyze system performance through real-world testing and simulation environments.',
      'Contribute to software and hardware integration to ensure reliable and mission-ready rover operations.',
      'Participate in multidisciplinary design reviews and decision-making processes for rover development.',
    ],
    tags: ['Python', 'Space', 'Rovers'],
    industry: ['Engineering', 'Technology'],
    hiringStatus: 'Active',
    hasVirtualExperience: false,
  },
  {
    id: 5,
    title: 'Electrical Engineer',
    company: 'Monash MotorSport',
    logo: mmsLogo,
    paragraph: `Monash Motorsport is a student-run team that designs, builds, and races Formula Student electric and autonomous race cars to compete in global competitions such as Formula SAE-A and Formula Student Germany. The team brings together students from engineering, science, IT, and commerce to push the boundaries of automotive innovation through advanced engineering, research, and testing.
    <span class="bold-only">In this role, you may:</span>`,
    points: [
      'Design and develop high-voltage systems including the accumulator, inverters, and motor controllers.',
      'Implement low-voltage electronics for data acquisition, telemetry, and control systems.',
      'Develop PCB designs for custom sensors, power distribution, and embedded systems.',
      'Work with CAN bus protocols to integrate and debug communication across the vehicle.',
      'Perform validation and testing of electrical systems to ensure safety, performance, and reliability on the track.',
      'Collaborate closely with software and mechanical teams to deliver a seamless and high-performance vehicle.',
    ],
    tags: ['PCB', 'MotorSport', 'Cars'],
    industry: ['Engineering', 'Technology'],
    hiringStatus: 'Active',
    hasVirtualExperience: false,
  },
  {
    id: 6,
    title: 'Developer',
    company: 'Monash AIM',
    logo: aimLogo,
    paragraph: `Monash AIM is a student-led initiative harnessing the power of AI to revolutionise medical imaging. We’re developing innovative solutions for disease classification and detection, using a diverse skillset that includes Python, machine learning, and image processing.
    We AIM to be at the forefront of AI-driven medical imaging solutions, enabling the advancement of clinical practice by bringing passionate students from various disciplines in order to collaborate and create innovative solutions.
    <span class="bold-only">In this role, you may:</span>`,
    points: [
      'Develop and train deep learning models (e.g. CNNs, transformers) for medical image classification, segmentation, and anomaly detection.',
      'Work with medical datasets such as X-rays, MRIs, or CT scans—handling preprocessing, augmentation, and annotation.',
      'Implement and fine-tune models using frameworks like TensorFlow, PyTorch, or Keras.',
      'Optimize model performance for accuracy, sensitivity, and clinical relevance.',
    ],
    tags: ['Medical Imaging', 'AI', 'Machine Learning'],
    industry: ['Medicine', 'Technology'],
    hiringStatus: 'Active',
    hasVirtualExperience: false,
  },
  {
    id: 7,
    title: 'Writer',
    company: 'Creative Writers Monash',
    logo: writeLogo,
    paragraph: `We are a writing community that encourages our members to write in all forms! We give talks about writing topics and provide feedback for each other's work at weekly meetings. We publish our members' work online and in print, run a yearly winter writers' retreat, spoken word events, and more!
    <span class="bold-only">As a writer, you may:</span>`,
    points: [
      'Share your work and receive thoughtful, constructive feedback.',
      'Offer feedback to others, sharpening your editing and critique skills.',
      'Participate in writing prompts or mini-workshops.',
      'Submit pieces for publication in the community\'s online platform and print collections.',
    ],
    tags: ['Medical Imaging', 'AI', 'Machine Learning'],
    industry: ['Writing', 'Journalism'],
    hiringStatus: 'Active',
    hasVirtualExperience: false,
  },
  {
    id: 8,
    title: 'People and Culture',
    company: 'Monash BrewLab',
    logo: brewLogo,
    paragraph: `Are you an alcoholic in need to quench your thirst? Join Monash BrewLab, a student-run brewery that produces high-quality craft beer. We are looking for passionate individuals to join our People and Culture team to help us create a positive and inclusive environment for all members.
    <span class="bold-only">As a P&C officer, you may:</span>`,
    points: [
      'Collect feedback through surveys or informal chats to gauge team morale and identify areas for improvement.',
      'Help with recruitment logistics—posting job ads, scheduling interviews, and supporting candidate experience.',
      'Promote diversity, equity, and inclusion through events, education, and policy.',
      'Maintain and update internal tools like org charts, calendars, or HR systems.',
    ],
    tags: ['HR', 'Brewing', 'Beer'],
    industry: ['Brewery'],
    hiringStatus: 'Active',
    hasVirtualExperience: false,
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
    const matchesIndustry =
      selectedIndustry === "All" || job.industry.includes(selectedIndustry);
    const matchesHiring =
      selectedHiringStatus === "All" || job.hiringStatus === selectedHiringStatus;
    const matchesVirtual =
      selectedVirtualExperience === "All" ||
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
                {["All", "Consulting", "Finance", "Technology", "Engineering"].map(ind => (
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

      <div className="explore-container">
        {filteredJobs.length === 0 ? (
          <div className="no-results-panel">
            <div className="job-details-box">
              <p className="job-details-placeholder">No results found.</p>
            </div>
          </div>
        ) : (
          <>
            <div className="job-left-column">
              <div className="job-list">
                {filteredJobs.map((job) => (
                  <div
                    key={job.id}
                    className={`job-card ${selectedJob?.id === job.id ? 'job-card-selected' : ''}`}
                    onClick={() => setSelectedJob(job)}
                  >
                    <div className="job-header">
                      <div>
                        <h3 className="job-title">{job.title}</h3>
                        <p className="job-company">{job.company}</p>
                      </div>
                      <img src={job.logo} alt="Team logo" className="job-logo-left" />
                    </div>
                    <div className="job-tags">
                      {job.tags.map((tag, index) => (
                        <span key={index} className="job-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="job-details">
              <div className="job-details-box">
                {selectedJob ? (
                  <>
                    <div className="job-details-header">
                      <div>
                        <h2 className="job-details-title">{selectedJob.title}</h2>
                        <h3 className="job-details-company">{selectedJob.company}</h3>
                      </div>
                      <img src={selectedJob.logo} alt="Team logo" className={`job-logo-right ${selectedJob.title.replaceAll(' ', '-').toLowerCase()}`} />
                    </div>
                    <hr className="job-details-divider" />
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
                      <button className="apply-button" onClick={() => alert("Apply Now functionality can be implemented here!")}>Apply Now</button>
                      {selectedJob.title === "Simulations Engineer" && (
                        <button className="apply-button" onClick={() => navigate("/rocket-simulator")}>Go to Rocket Simulator Experience</button>
                      )}
                      {selectedJob.title === "Artificial Intelligence Member" && (
                        <button className="apply-button" onClick={() => navigate("/ai-virtual-experience")}>Go to AI Experience</button>
                      )}
                      {selectedJob.title === "Investment Analyst" && (
                        <button className="apply-button" onClick={() => navigate("/finance-virtual-experience")}>Go to Financial Analysis Experience</button>
                      )}
                    </div>
                  </>
                ) : (
                  <p className="job-details-placeholder">Select a job to view more details and try a virtual challenge 📚</p>
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
