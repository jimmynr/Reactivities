import { observer } from "mobx-react-lite";
import { useStore } from "../../lib/hooks/useStore";

const Counter = observer(() => {
  const { counterStore } = useStore();

  return (
    <div className="relative">
      {/* <IndeterminateProgressBar /> */}
      <div className="flex min-h-screen bg-gray-100 p-8 space-x-8">
        <div className="flex-1 bg-white p-6 rounded-lg shadow flex flex-col items-start space-y-6">
          <h1 className="text-4xl font-bold text-gray-800">
            {counterStore.title}
          </h1>
          <p className="text-2xl text-gray-700">
            The count is: {counterStore.count}
          </p>

          <div className="flex space-x-4">
            <button
              onClick={() => counterStore.increment()}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
            >
              Increment
            </button>
            <button
              onClick={() => counterStore.increment(5)}
              className="px-6 py-3 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
            >
              Increment by 5
            </button>
            <button
              onClick={() => counterStore.decrement()}
              className="px-6 py-3 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
            >
              Decrement
            </button>
          </div>
        </div>

        <div className="flex-1 bg-white p-6 rounded-lg shadow overflow-y-auto">
          <h2 className="text-2xl font-semibold mb-4">MobX Counter Events</h2>
          <ul className="list-disc list-inside space-y-2">
            {counterStore.events.map((event, index) => (
              <li key={index} className="text-gray-700">
                {event}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
});

export default Counter;
