import TaskItem from "./TaskItem"

export default function TasksList(props) {

  return (
    <>
      {props.tasks.map((t) => (
        <TaskItem
          task={t}
          key={t.id}
          toggleTask={props.toggleTask}
          deleteTask={props.deleteTask}
        />
      ))}
    </>
  )
}
