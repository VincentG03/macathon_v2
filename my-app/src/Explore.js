import React, { useState } from 'react';
import './Explore.css'; // Import the CSS file

const jobs = [
  {
    id: 1,
    title: 'Simulations Engineer',
    company: 'Monash High Powered Rocketry',
    paragraph: `<strong> What is this role?</strong> \n
As a Simulations Engineer within the Dynamics subteam at Monash High Powered Rocketry, you are at the forefront of modelling and simulating the flight behaviour of all our rockets. This includes developing and maintaining SATURN, our in-house Python-based 6-degree-of-freedom (6DOF) trajectory simulator, which is used to predict how a rocket will behave under various conditions. Your responsibilities also include performing Computational Fluid Dynamics (CFD) analysis to understand airflow and forces acting on the rocket, and assessing simulation outputs to guide key design decisions throughout the project lifecycle. 

<strong>Why is this important?</strong> \n
Simulations are critical for both the performance and safety of our rockets. They allow us to validate flight profiles, predict failure modes, and optimize the design before physical tests take place—saving time, money, and reducing risk. Your work directly contributes to our mission success by ensuring that every launch is based on thorough analysis and accurate modelling. With real-world constraints such as launch regulations, weather, and manufacturing tolerances, the simulations team plays a vital role in integrating all factors into a single, coherent flight prediction framework.

<strong> What will you do?</strong> \n`,
    points: [
      'Working with SATURN, our custom python-based 6 degree of freedom trajectory simulator.',
      'Performing Computational Fluid Dynamics analysis.',
      'Analyzing and assessing the trajectory and performance of rockets based on SATURN simulations.',
      'Having input into rocket design decisions to ensure a safe and successful flight.',
    ],
    tags: ['Others', 'Found 32d ago', 'Python', 'Space', 'Rockets'],
  },
  {
    id: 2,
    title: 'Member',
    company: 'Monash DeepNeuron',
    paragraph: `<strong>What is this role?</strong> \n
The Monash Deep Neuron Team is a student-led initiative at Monash University dedicated to exploring the frontiers of artificial intelligence, deep learning, and neural computation.`,
    points: [
      'Deep neural networks and large language models',
      'Computer vision, natural language processing, and reinforcement learning',
      'Brain-computer interfaces and biologically-inspired algorithms',
      'Industry collaboration and academic publishing',
    ],
    tags: ['Data Science', 'Machine Learning', 'AI'],
  },
  {
    id: 3,
    title: 'Investment Analyst',
    company: 'Monash Student Managed Fund',
    paragraph: `<strong>About Us</strong> \n
The Monash Student Managed Fund is a prestigious, student-run investment fund operating within Monash Business School. It provides high-achieving students with real-world experience in managing a live investment portfolio, with the goal of delivering long-term, risk-adjusted returns. The fund is structured to mirror professional asset management firms, incorporating rigorous investment processes and governance frameworks.

The SMF is overseen by academic staff and industry advisors, and contributes returns to philanthropic initiatives, making it both an educational and socially impactful experience.
<strong>What you will do</strong>
`,
    points: [
      'Conduct equity research and valuation of ASX-listed companies using methods such as DCF, relative valuation, and precedent transactions.',
    'Perform industry and macroeconomic analysis to inform investment theses.',
    'Build and maintain financial models to forecast company performance and assess investment viability.',
    'Present investment recommendations to an internal investment committee for approval and inclusion in the portfolio.',
    'Monitor portfolio performance, track news/events affecting holdings, and provide regular updates.',
    'Work collaboratively within a sector team to develop well-researched, evidence-based proposals.',
    'Develop professional communication skills by writing research reports and delivering presentations to stakeholders.',
    'Gain exposure to ethical investment practices and responsible portfolio management.',
    ],
    tags: ['Data Science', 'Machine Learning', 'AI'],
  },
];

function Explore() {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div className="explore-container">
      {/* Job List */}
      <div className="job-list">
        <h2 className="section-title">Role Listings</h2>
        {jobs.map((job) => (
          <div
            key={job.id}
            className={`job-card ${selectedJob?.id === job.id ? 'job-card-selected' : ''}`}
            onClick={() => setSelectedJob(job)}
          >
            <h3 className="job-title">{job.title}</h3>
            <p className="job-company">{job.company}</p>
            <div className="job-tags">
              {job.tags.map((tag, index) => (
                <span key={index} className="job-tag">
                  {tag}
                </span>
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
      {/* Render paragraphs dynamically */}
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
      <button className="apply-button" onClick={() => alert('Apply Now functionality can be implemented here!')}>
        Apply Now
      </button>
    </div>
  ) : (
    <p className="job-details-placeholder">Select a job to view details</p>
  )}
</div>
    </div>
  );
}

export default Explore;