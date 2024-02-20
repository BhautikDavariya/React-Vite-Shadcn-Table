import { useState, useEffect } from 'react';
import { columns } from './components/columns';
import { DataTable } from './components/data-table';
import { task } from './data/tasks';



const DataTableUI = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchTasks() {
      const tasksData = task;
      setTasks(tasksData);
    }

    fetchTasks();
  }, []);

  return (<DataTable data={tasks} columns={columns} />);
}

export default DataTableUI;
