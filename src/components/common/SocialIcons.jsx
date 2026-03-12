import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

const SocialIcons = ({ className = '', iconSize = 20 }) => {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/mlswijerathne', icon: Github, hoverColor: 'hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/lakshitha-wijerathne/', icon: Linkedin, hoverColor: 'hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/30' },
    { name: 'Medium', url: 'https://medium.com/@lakshithaa', icon: FileText, hoverColor: 'hover:text-green-600 hover:bg-green-50 dark:hover:bg-green-900/30' },
    { name: 'Email', url: 'mailto:mlswijerathne@gmail.com', icon: Mail, hoverColor: 'hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30' }
  ];

  const handleClick = (url) => {
    if (url.startsWith('mailto:')) window.location.href = url;
    else window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {socialLinks.map((social) => (
        <button key={social.name} onClick={() => handleClick(social.url)} className={`p-2.5 text-gray-400 dark:text-gray-500 ${social.hoverColor} rounded-xl transition-all duration-200`} aria-label={`Visit ${social.name} profile`} title={social.name}>
          <social.icon size={iconSize} />
        </button>
      ))}
    </div>
  );
};

export default SocialIcons;
