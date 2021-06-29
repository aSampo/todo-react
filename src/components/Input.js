function Input({ newTaskAdded }) {
  return (
    <form onSubmit={newTaskAdded} className="w-full max-w-sm">
      <div className="flex items-center border-b border-teal-500 py-2">
        <input
          autoComplete="off"
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          id="taskInput"
          type="text"
          placeholder="Ingrese tarea"
        />
        <button
          className="flex-shrink-0 border-transparent border-4 text-gray-500 hover:text-gray-700 text-sm py-1 px-2 rounded"
          type="submit"
        >
          Guardar
        </button>
      </div>
    </form>
  );
}

export default Input;
