"use client"

import React, { useState } from 'react';
import DateTimePicker from '@/components/DateTimePicker';
const HomePage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Date and Time Picker Example</h1>
      <DateTimePicker selectedDate={selectedDate} onChange={handleDateChange} />
      <p className="mt-4">Selected Date: {selectedDate.toLocaleString()}</p>
    </div>
  );
};

export default HomePage;
