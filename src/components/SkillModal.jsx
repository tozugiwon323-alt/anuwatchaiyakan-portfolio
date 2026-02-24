import React, { useState } from 'react';
import anime from 'animejs';

const SkillModal = ({ skill, detail, onClose }) => {
  if (!skill) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-gray-900 rounded-lg p-8 max-w-md w-full border border-blue-400"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-2xl font-bold text-blue-400 mb-4">{skill}</h3>
        <p className="text-gray-300 mb-6">{detail}</p>
        <button 
          onClick={onClose}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SkillModal;
