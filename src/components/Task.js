
function Task({ task, deleteTask }) {
  return (
    <div className="flex items-center w-1/2 py-4 px-8 my-2 bg-white shadow-md rounded-lg text-lg">
      <p className="flex-initial mt-2 text-gray-600">
        {task.description}
      </p>
      <button
        id={task.key}
        onClick={deleteTask}
        className="flex-initial ml-auto mt-2 bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-1 px-2 border border-red-500 hover:border-transparent rounded"
      >
        Borrar
      </button>
    </div>
  );
}

export default Task;
