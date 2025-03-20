import '../styling/insert.css'

export default function InsertTask({addTask}) {
  // component for the input of the interface
  return (
    <div>
        {/* input for the task name */}
        <input id='taskName' />
        {/* sumbit button for when the task is created and added to the list */}
        <div id='sumbit' onClick={addTask} >+</div>
    </div>
  );
}

