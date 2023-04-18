/**
 * A helper function that maps the keys of an object to a new set of keys
 *
 * @param {Object} obj - The object whose keys need to be mapped
 * @param {Object} keyMap - A mapping of the old keys to the new keys
 * @returns {Object} The new object with the updated keys
 */
const mapKeys = (obj, keyMap) => {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [keyMap[key], value])
  );
};

/**
 * A function that formats task data in a specific way for display
 *
 * @param {Object} data - The task data to be formatted
 * @returns {Array} The formatted task data
 * @throws {Error} If the data is not in the expected format
 */
const formatTaskData = (data) => {
  // Check if data is in expected format
  if (!data || !Object.keys(data).length) {
    throw new Error("Data is empty or not in expected format");
  }

  const keyMap = {
    low: "minor",
    high: "average",
    medium: "major",
    complex: "critical",
    total: "total",
  };

  const formatData = (data) => {
    return Object.values(data).flatMap((obj) => [
      { Done: mapKeys(obj.Completed_tasks, keyMap) },
      { Hold: mapKeys(obj.Pending_tasks, keyMap) },
      { "In Progress": mapKeys(obj.InProgress_tasks, keyMap) },
    ]);
  };

  const total = formatData(data).reduce(
    (acc, item) => {
      const [key, value] = Object.entries(item)[0];
      acc[key] = value.total;
      acc.total += value.total;
      return acc;
    },
    { total: 0 }
  );
  return [{"Total Tickets" :total},...formatData(data)];
};

export default formatTaskData;
