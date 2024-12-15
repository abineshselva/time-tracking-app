import { useState } from 'react';
import DatePicker from 'react-datepicker';
import Link from 'next/link';
import Image from 'next/image';
import 'react-datepicker/dist/react-datepicker.css';
import { CalendarIcon, TagIcon, UserIcon, DocumentTextIcon, ClockIcon } from '@heroicons/react/24/outline';

const icons = {
  taskId: TagIcon,
  project: DocumentTextIcon,
  status: DocumentTextIcon,
  description: DocumentTextIcon,
  date: CalendarIcon,
  timeSpent: ClockIcon,
  developer: UserIcon,
};

const Home = () => {
  const [task, setTask] = useState({
    taskId: '',
    project: '',
    status: '',
    description: '',
    date: '',
    timeSpent: '',
    developer: '',
  });
  const [alertMessage, setAlertMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleDateChange = (date) => {
    setTask((prevTask) => ({
      ...prevTask,
      date: date.toISOString().split('T')[0],
    }));
  };

  const validateTask = (task) => {
    if (!task.taskId || !task.date) {
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateTask(task)) {
      setAlertMessage('Please fill out all required fields.');
      return;
    }

    const res = await fetch('/api/saveTask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });

    if (res.ok) {
      setTask({
        taskId: '',
        project: '',
        status: '',
        description: '',
        date: '',
        timeSpent: '',
        developer: '',
      });
      setAlertMessage('Task saved successfully!');
    } else {
      setAlertMessage('Error saving task. Please try again.');
    }
  };

  return (
    <div className="flex min-h-full flex-1">
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <h1 className="text-4xl font-bold mb-6">Enter Daily Task</h1>
          {alertMessage && (
            <div
              className={`mb-4 p-4 rounded-md ${
                alertMessage.includes('successfully') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}
            >
              {alertMessage}
            </div>
          )}
          <div className="bg-white p-4">
            <h2 className="text-2xl font-semibold mb-4">Task Details</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.keys(task).map((key) => {
                  const Icon = icons[key];
                  return (
                    <div key={key} className="relative mb-4 flex items-center">
                      {Icon && (
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                          <Icon className="h-5 w-5 text-gray-400" />
                        </div>
                      )}
                      {key === 'date' ? (
                        <div className="relative flex items-center">
                          <DatePicker
                            selected={task.date ? new Date(task.date) : null}
                            onChange={handleDateChange}
                            placeholderText={`Enter ${key}`}
                            className="pl-10 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                      ) : (
                        <input
                          type="text"
                          name={key}
                          value={task[key]}
                          onChange={handleChange}
                          placeholder={`Enter ${key}`}
                          className="pl-10 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      )}
                    </div>
                  );
                })}
              </div>
              <button
                type="submit"
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Save Task
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="relative hidden w-0 flex-1 lg:block">
        <Image
          alt=""
          src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
      </div>
    </div>
  );
};

export default Home;
