'use client'
import React, { useState } from 'react';

const ContentScheduler = () => {
  const [scheduledDate, setScheduledDate] = useState('');

  const handleSchedule = () => {
    // Implement your logic to schedule content here
    console.log('Content scheduled for:', scheduledDate);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Content Scheduler</h2>
      <label htmlFor="scheduledDate" className="block mb-2">Scheduled Date:</label>
      <input
        type="datetime-local"
        id="scheduledDate"
        value={scheduledDate}
        onChange={(e) => setScheduledDate(e.target.value)}
        className="block w-full border border-gray-300 rounded-lg py-2 px-3 mb-4"
      />
      <button onClick={handleSchedule} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg">
        Schedule Content
      </button>
    </div>
  );
};

export default ContentScheduler;
