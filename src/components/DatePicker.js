import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';

const DatePickerComponent = ({ selectedDate, onDateChange }) => {
  const handleChange = (date) => {
    onDateChange(date);
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700">Select Date</label>
      <DatePicker
        selected={selectedDate}
        onChange={handleChange}
        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
    </div>
  );
};

export default DatePickerComponent;
