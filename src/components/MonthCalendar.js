import { format, startOfMonth, endOfMonth, eachDayOfInterval, subMonths, addMonths } from 'date-fns';
import { useState } from 'react';
import TaskTable from './TaskTable';
import Summary from './Summary';

const MonthCalendar = ({ tasks, startDate }) => {
  const [currentMonth, setCurrentMonth] = useState(startDate || new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const startOfCurrentMonth = startOfMonth(currentMonth);
  const endOfCurrentMonth = endOfMonth(currentMonth);
  const daysInMonth = eachDayOfInterval({ start: startOfCurrentMonth, end: endOfCurrentMonth });

  const handlePreviousMonth = () => {
    setCurrentMonth(prev => subMonths(prev, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(prev => addMonths(prev, 1));
  };

  const monthlyTasks = tasks.filter(task => {
    const taskDate = new Date(task.date);
    return taskDate >= startOfCurrentMonth && taskDate <= endOfCurrentMonth;
  });

  const handleDayClick = (day) => {
    setSelectedDate(day);
  };

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={handlePreviousMonth}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Previous
        </button>
        <h2 className="text-2xl font-semibold">
          {format(startOfCurrentMonth, 'MMMM yyyy')}
        </h2>
        <button
          onClick={handleNextMonth}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Next
        </button>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {daysInMonth.map(day => (
          <div
            key={day.toString()}
            className={`flex items-center justify-center p-2 border border-gray-300 rounded-md cursor-pointer ${format(day, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd') ? 'bg-purple-600 text-gray-100' : ''}`}
            onClick={() => handleDayClick(day)}
          >
            <div className="text-center">
              <p className={`text-sm ${format(day, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd') ? 'text-gray-100' : 'text-gray-900'}`}>
                {format(day, 'd')}
              </p>
            </div>
          </div>
        ))}
      </div>
      <TaskTable tasks={monthlyTasks.filter(task => format(new Date(task.date), 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd'))} />
      <Summary tasks={monthlyTasks} view="month" />
    </div>
  );
};

export default MonthCalendar;
