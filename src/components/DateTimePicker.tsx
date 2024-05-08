'use client '
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';

interface DateTimePickerProps {
  selectedDate: Date;
  onChange: (date: Date) => void;
}

const DateTimePicker: React.FC<DateTimePickerProps> = ({ selectedDate, onChange }) => {
  const [startDate, setStartDate] = useState(selectedDate);

  const handleDateChange = (date: Date | null) => {
    if (date) {
      setStartDate(date);
      onChange(date);
    }
  };

  return (
    <div className="flex items-center">
      <DatePicker
        selected={startDate}
        onChange={handleDateChange}
        showTimeSelect
        timeIntervals={15}
        dateFormat="MM/dd/yyyy h:mm aa"
        className="border border-gray-300 rounded px-3 py-2 mr-4 focus:outline-none focus:ring focus:border-blue-300"
      />
    </div>
  );
};

export default DateTimePicker;
