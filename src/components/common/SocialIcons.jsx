import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

const SocialIcons = ({ className = '', iconSize = 24, showLabels = false }) => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/mlswijerathne',
      icon: Github,
      color: 'hover:text-gray-700 dark:hover:text-gray-300'
    },
    {
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/lakshitha-wijerathne/',
      icon: Linkedin,
      color: 'hover:text-blue-600'
    },
    {
      name: 'Medium',
      url: 'https://medium.com/@lakshithaa',
      icon: FileText,
      color: 'hover:text-green-600'
    },
    {
      name: 'Email',
      url: 'mailto:mlswijerathne@gmail.com',
      icon: Mail,
      color: 'hover:text-red-600'
    }
  ];

  const handleClick = (url) => {
    if (url.startsWith('mailto:')) {
      window.location.href = url;
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {socialLinks.map((social) => (
        <div key={social.name} className="flex flex-col items-center">
          <button
            onClick={() => handleClick(social.url)}
            className={`p-2 text-gray-600 dark:text-gray-400 ${social.color} transition-colors duration-200`}
            aria-label={`Visit ${social.name} profile`}
            title={social.name}
          >
            <social.icon size={iconSize} />
          </button>
          {showLabels && (
            <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              {social.name}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default SocialIcons;
