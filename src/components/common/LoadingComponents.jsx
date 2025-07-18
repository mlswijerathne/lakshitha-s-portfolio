import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = ({ size = 'md', color = 'yellow' }) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const colorClasses = {
    yellow: 'border-yellow-500',
    blue: 'border-blue-500',
    green: 'border-green-500',
    red: 'border-red-500',
    purple: 'border-purple-500'
  };

  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className={`${sizeClasses[size]} border-4 border-gray-200 dark:border-gray-700 ${colorClasses[color]} border-t-transparent rounded-full`}
    />
  );
};

const PageLoader = () => {
  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-900 flex items-center justify-center z-50">
      <div className="text-center">
        <LoadingSpinner size="xl" />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-gray-600 dark:text-gray-400 font-medium"
        >
          Loading Portfolio...
        </motion.p>
      </div>
    </div>
  );
};

const SkeletonLoader = ({ className = "" }) => {
  return (
    <div className={`animate-pulse bg-gray-200 dark:bg-gray-700 rounded ${className}`} />
  );
};

const ProjectCardSkeleton = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
      <SkeletonLoader className="h-48 mb-4" />
      <SkeletonLoader className="h-6 mb-2" />
      <SkeletonLoader className="h-4 mb-2" />
      <SkeletonLoader className="h-4 w-3/4 mb-4" />
      <div className="flex space-x-2">
        <SkeletonLoader className="h-6 w-16" />
        <SkeletonLoader className="h-6 w-16" />
        <SkeletonLoader className="h-6 w-16" />
      </div>
    </div>
  );
};

export { LoadingSpinner, PageLoader, SkeletonLoader, ProjectCardSkeleton };
