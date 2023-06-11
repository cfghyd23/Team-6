import React from "react";
import './JoinUs.css'
import '@fortawesome/fontawesome-free/css/all.min.css';


const JoinUs = () => {
  // Generate random social media links
  const socialMediaLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/example",
      icon: "fab fa-facebook-f",
    },
    {
      name: "Twitter",
      url: "https://www.twitter.com/example",
      icon: "fab fa-twitter",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/example",
      icon: "fab fa-instagram",
    },
    // Add more social media links as needed
  ];

  // Generate a random email address
  const emailAddress = "example@example.com";

  const handleEmailButtonClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <div>
      <h1>Join Us</h1>
      <div className="social-media-links">
        {socialMediaLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={link.icon}></i>
          </a>
        ))}
      </div>
      <div className="button">
      <button onClick={handleEmailButtonClick}>Send Email</button>
      </div>
    </div>
  );
};

export default JoinUs;
