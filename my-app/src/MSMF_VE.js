import React, { useState } from 'react';

const MSMFExperience = () => {
  const companies = [
    { name: "CSL Limited (Healthcare/Biotech)", website: "https://www.csl.com" },
    { name: "BHP Group (Mining & Resources)", website: "https://www.bhp.com" },
    { name: "Woolworths Group (Retail & Supermarkets)", website: "https://www.woolworthsgroup.com.au" },
    { name: "Commonwealth Bank of Australia (CBA)", website: "https://www.commbank.com.au" },
    { name: "REA Group (Digital Property Platforms)", website: "https://www.rea-group.com" }
  ];

  const introText = `The Investment Memo Challenge
Welcome to the Monash Student Managed Fund (MSMF) Virtual Experience!

At MSMF, student analysts research real-world companies and make recommendations to a live investment committee. In this simulation, you’ll step into the shoes of an analyst and prepare a short investment thesis on a well-known Australian company.

You’ll be given a list of five companies with brief summaries and optional links to their annual reports. Your task is to analyze the business and decide whether you’d recommend the fund to Buy, Hold, or Sell the stock — just like a real MSMF team member.

This experience is designed to give you a taste of what it’s like to make real investment decisions with real stakes. It’s not about getting it “right” — it’s about thinking critically and communicating clearly.`;

  const questions = [
    "What does the company do?\nBriefly explain its business model and core operations.",
    "What’s the financial story?\nIs revenue and profit growing? Are margins improving or under pressure?",
    "What risks should MSMF consider?\nThink about industry trends, competitive threats, regulatory risks, or financial red flags.",
    "What is your investment recommendation?\nChoose Buy, Hold, or Sell, and explain your reasoning clearly."
  ];

  const [responses, setResponses] = useState(Array(questions.length).fill(""));

  const handleChange = (index, value) => {
    const newResponses = [...responses];
    newResponses[index] = value;
    setResponses(newResponses);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Responses:", responses);
  };

  return (
    <div style={styles.outerContainer}>
      <div style={styles.container}>
        <h1 style={styles.title}>📊 MSMF Investment Memo Challenge</h1>

        <pre style={styles.background}>{introText}</pre>

        <div style={styles.section}>
          <h2 style={styles.subtitle}>Companies to Choose From:</h2>
          <ul>
            {companies.map((company, index) => (
              <li key={index}>
                <a href={company.website} target="_blank" rel="noopener noreferrer" style={styles.link}>
                  {company.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={handleSubmit} style={styles.form}>
          {questions.map((question, index) => (
            <div key={index} style={styles.questionBlock}>
              <label style={styles.label}>{question}</label>
              <textarea
                value={responses[index]}
                onChange={(e) => handleChange(index, e.target.value)}
                style={styles.textarea}
                rows="5"
                placeholder="Your answer here..."
              />
            </div>
          ))}
          <button type="submit" style={styles.button}>Submit</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  outerContainer: {
    backgroundColor: '#f9f9f9',
    padding: '40px 20px',
    display: 'flex',
    justifyContent: 'center',
  },
  container: {
    maxWidth: '800px',
    width: '100%',
    backgroundColor: '#f9f9f9',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 0 15px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, sans-serif',
    fontSize: '18px',
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'center'
  },
  subtitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px'
  },
  background: {
    backgroundColor: '#f0f0f0',
    padding: '20px',
    borderRadius: '10px',
    whiteSpace: 'pre-wrap',
    marginBottom: '30px'
  },
  section: {
    marginBottom: '30px'
  },
  link: {
    color: '#1a0dab',
    textDecoration: 'none'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '25px'
  },
  questionBlock: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  label: {
    fontWeight: 'bold'
  },
  textarea: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc'
  },
  button: {
    padding: '10px 20px',
    fontSize: '18px',
    fontWeight: 'bold',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};

export default MSMFExperience;