import { format, startOfWeek, endOfWeek, eachDayOfInterval, subWeeks, addWeeks } from 'date-fns';
import { useState } from 'react';
import Summary from './Summary';
import TaskTable from './TaskTable';

const WeekCalendar = ({ tasks, startDate }) => {
  const [currentWeek, setCurrentWeek] = useState(startDate || new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const startOfCurrentWeek = startOfWeek(currentWeek, { weekStartsOn: 0 }); // Sunday start
  const endOfCurrentWeek = endOfWeek(currentWeek, { weekStartsOn: 0 }); // Sunday end
  const daysInWeek = eachDayOfInterval({ start: startOfCurrentWeek, end: endOfCurrentWeek });

  const handlePreviousWeek = () => {
    setCurrentWeek(prev => subWeeks(prev, 1));
  };

  const handleNextWeek = () => {
    setCurrentWeek(prev => addWeeks(prev, 1));
  };

  const weeklyTasks = tasks.filter(task => {
    const taskDate = new Date(task.date);
    return taskDate >= startOfCurrentWeek && taskDate <= endOfCurrentWeek;
  });

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={handlePreviousWeek}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Previous
        </button>
        <h2 className="text-2xl font-semibold">
          Week of {format(startOfCurrentWeek, 'MMMM d, yyyy')}
        </h2>
        <button
          onClick={handleNextWeek}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Next
        </button>
      </div>
      <div className="flex py-4 bg-white justify-start md:justify-center md:mx-12 mx-auto px-2 rounded-lg shadow-md">
        {daysInWeek.map(day => (
          <div
            key={day.toString()}
            className={`duration-300 transition-all cursor-pointer flex group hover-dark-shadow hover:bg-purple-500 hover:shadow-lg justify-center mx-1 rounded-lg w-16 ${format(day, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd') ? 'bg-purple-600 text-gray-100' : 'bg-white text-gray-900'}`}
            onClick={() => setSelectedDate(day)}
          >
            <div className="flex py-4 items-center px-4">
              <div className="text-center">
                <p className={`duration-300 transition-all group-hover:text-gray-100 text-sm ${format(day, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd') ? 'font-bold' : ''}`}>
                  {format(day, 'E')}
                </p>
                <p className={`duration-300 transition-all group-hover:text-gray-100 ${format(day, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd') ? 'font-bold' : ''} mt-3`}>
                  {format(day, 'd')}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <TaskTable tasks={weeklyTasks.filter(task => format(new Date(task.date), 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd'))} />
      <Summary tasks={weeklyTasks.filter(task => format(new Date(task.date), 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd'))} view="week" />
    </div>
  );
};

export default WeekCalendar;
