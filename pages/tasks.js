import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import DatePicker from '../src/components/DatePicker';
import WeekCalendar from '../src/components/WeekCalendar';
import MonthCalendar from '../src/components/MonthCalendar';
import FilterSection from '../src/components/FilterSection';
import TaskTable from '../src/components/TaskTable';
import Summary from '../src/components/Summary';
import Feedback from '../src/components/Feedback';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [view, setView] = useState('day');

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await fetch('/api/getTasks');
      const data = await res.json();
      setTasks(data);
    };
    fetchTasks();
  }, []);

  const getTasksForDay = (date) => {
    return tasks.filter(task => task.date === format(date, 'yyyy-MM-dd'));
  };

  const getTasksForWeek = (startOfWeek, endOfWeek) => {
    return tasks.filter(task => {
      const taskDate = new Date(task.date);
      return taskDate >= startOfWeek && taskDate <= endOfWeek;
    });
  };

  const getTasksForMonth = (startOfMonth, endOfMonth) => {
    return tasks.filter(task => {
      const taskDate = new Date(task.date);
      return taskDate >= startOfMonth && taskDate <= endOfMonth;
    });
  };

  return (
    <div>
      <div className="container mx-auto p-4">
        <FilterSection />

        {/* View Switcher */}
        <div className="mb-4">
          <button
            onClick={() => setView('day')}
            className={`px-4 py-2 ${view === 'day' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Day
          </button>
          <button
            onClick={() => setView('week')}
            className={`px-4 py-2 ${view === 'week' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Week
          </button>
          <button
            onClick={() => setView('month')}
            className={`px-4 py-2 ${view === 'month' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Month
          </button>
          <button
            onClick={() => setView('all')}
            className={`px-4 py-2 ${view === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            All
          </button>
        </div>

        {/* View Components */}
        {view === 'day' && (
          <div>
            <DatePicker selectedDate={selectedDate} onDateChange={setSelectedDate} />
            <TaskTable tasks={getTasksForDay(selectedDate)} />
            <Summary tasks={getTasksForDay(selectedDate)} view="day" />
          </div>
        )}

        {view === 'week' && (
          <WeekCalendar tasks={tasks} startDate={selectedDate} />
        )}

        {view === 'month' && (
          <MonthCalendar tasks={tasks} startDate={selectedDate} />
        )}

        {view === 'all' && (
          <div>
            <TaskTable tasks={tasks} />
            <Summary tasks={tasks} view="all" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Tasks;
