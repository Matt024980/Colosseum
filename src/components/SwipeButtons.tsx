import React from 'react';

interface SwipeButtonsProps {
  onLike: () => void;
  onPass: () => void;   
}

const SwipeButtons: React.FC<SwipeButtonsProps> = ({ onLike, onPass }) => {
  return (
    <div className="flex justify-center gap-8 mt-6">
      <button
        onClick={onPass}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-200"
      >
        Pass
      </button>
      <button
        onClick={onLike}
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-200"
      >
        Like
      </button>
    </div>
  );
}

export default SwipeButtons;
