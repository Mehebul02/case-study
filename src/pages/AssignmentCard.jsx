import React from 'react';

const AssignmentCard = ({assignment}) => {
    const { thumbnail, title, mark, difficulty } = assignment;
    return (
        <div className="bg-white rounded-lg shadow-md p-4">
        <img
          src={thumbnail}
          className=""
        />
        <h3 className="text-lg font-poppins font-semibold">{title}</h3>
        <p className="text-gray-600 mb-2">Marks: {mark}</p>
        <p className="text-gray-600 mb-2">Difficulty: {difficulty}</p>
        <div className="flex justify-between mt-4">
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            Delete
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Update
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            View
          </button>
        </div>
      </div>
    );
};

export default AssignmentCard;