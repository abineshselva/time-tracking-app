const Feedback = () => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-2">Feedback</h2>
      <textarea
        placeholder="Share your thoughts..."
        className="w-full p-2 border rounded"
        rows="4"
      ></textarea>
      <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2">Submit Feedback</button>
    </div>
  );
};

export default Feedback;
