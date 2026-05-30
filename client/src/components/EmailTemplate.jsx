import { useState } from "react";
import "./EmailTemplate.css";

function EmailTemplate() {
  const [isOpen, setIsOpen] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [role, setRole] = useState("");
  const [generatedEmail, setGeneratedEmail] = useState("");

  const userDetails = {
    name: "Ashwani Mishra",
    email: "ashwanimishraxyz@gmail.com",
    phone: "+91 8957652616",
  };

  const handleGenerateEmail = () => {
    const safeCompany = companyName.trim() || "[Company Name]";
    const safeRole = role.trim() || "Software Developer";

 const emailText = `Subject: Interest in ${safeRole} Opportunities at ${safeCompany}

Dear Hiring Team at ${safeCompany},

I hope you are doing well.

My name is ${userDetails.name}, and I am reaching out to express my interest in potential ${safeRole} opportunities at ${safeCompany}. I am passionate about building impactful software solutions and continuously improving my technical skills through hands-on projects.

I have been working on projects involving web development and modern technologies, and I am very interested in contributing my skills and enthusiasm to a dynamic team like yours. I would love the opportunity to connect and learn if there are any suitable openings now or in the future.

Thank you for your time and consideration. I would be happy to share more about my background and projects if needed.

Best regards,
${userDetails.name}
${userDetails.email}
${userDetails.phone}`;

    setGeneratedEmail(emailText);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedEmail);
      alert("Email copied to clipboard!");
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  return (
    <div className="email-template-wrapper">
      <button
        className="email-template-btn"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Close Email Template" : "Email Template"}
      </button>

      {isOpen && (
        <div className="email-template-panel">
          <h2>Cold Email Generator</h2>
          <p className="email-subtext">
            Enter company details and generate a ready-to-use cold email.
          </p>

          <div className="email-form">
            <input
              type="text"
              placeholder="Enter company name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Enter role (example: Frontend Developer)"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />

            <button className="generate-btn" onClick={handleGenerateEmail}>
              Generate Email
            </button>
          </div>

          {generatedEmail && (
            <div className="generated-email-box">
              <textarea value={generatedEmail} readOnly rows="16" />

              <button className="copy-btn" onClick={handleCopy}>
                Copy Email
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default EmailTemplate;
