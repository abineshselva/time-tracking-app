const Summary = ({ tasks, view }) => {
  const totalHours = tasks.reduce((sum, task) => sum + parseFloat(task.timeSpent), 0);

  return (
    <div className="mt-4 p-4 border-t border-gray-300">
      <h2 className="text-xl font-semibold">
        Total Hours for {view.charAt(0).toUpperCase() + view.slice(1)}: {totalHours.toFixed(2)}
      </h2>
    </div>
  );
};

export default Summary;
