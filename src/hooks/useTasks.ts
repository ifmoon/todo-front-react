import { useRef, useState } from 'react';

import { Todo } from '@/types';

const useTasks = () => {
  const [tasks, setTasks] = useState<Todo[]>([]);
  const innerId = useRef(0);

  const addTask = (text: string) => {
    const newTask: Todo = { id: innerId.current, text, isCompleted: false };
    innerId.current += 1;
    setTasks(prev => [...prev, newTask]);
  };
  const deleteTask = (id: number) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const toggleTaskCompleted = (id: number) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task,
      ),
    );
  };

  return { tasks, addTask, deleteTask, toggleTaskCompleted };
};

export default useTasks;
export type UseTasksType = ReturnType<typeof useTasks>;
