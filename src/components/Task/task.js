function Task({ task }) {
  return (
    <div className="w-1/3 py-4 px-8 my-2 bg-white shadow-md rounded-lg text-lg">
      <div>
        <p className="mt-2 text-gray-600">{task}</p>
      </div>
    </div>
  );
}

export default Task;
