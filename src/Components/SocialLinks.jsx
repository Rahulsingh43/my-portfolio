import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const SocialLinks = () => {
  return (
    <div className="social-box" style={{ display: 'flex', justifyContent: 'center', padding: '20px', backgroundColor: 'yellow', borderRadius: '8px' }}>
      <a 
        href="https://www.linkedin.com/in/your-profile" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="social-icon"
        style={{ margin: '0 15px', fontSize: '2rem', color: '#0e76a8' }}>
        {/* <FontAwesomeIcon icon={faLinkedin} /> */}
      </a>
      <a 
        href="https://github.com/your-profile" 
        target="_blank" 
        className="social-icon"
        rel="noopener noreferrer" 
        style={{ margin: '0 15px', fontSize: '2rem', color: '#333' }}>
        {/* <FontAwesomeIcon icon={faGithub} /> */}
      </a>
    </div>
  );
};

export default SocialLinks;
