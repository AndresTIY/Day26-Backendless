
export default function(store){

  let state = store.getState();
  console.log(state.tasks);

  state.tasks.forEach(function(item, i, arr){
    console.log(item.task);
  })


  let $htmlTasks = $(`
    <div class="task-card">
      <h2>My To Do List</h2>
      <ul class="list">

      </ul>
      <label for="add-task-btn">Add more to your list!</label>
      <input placeholder="new task" class="add-task" type="text" name="" value="">
      <button class="add-item" type="button" name="button">Add Task</button>
      <input placeholder="task description" class="add-desc" type="text" name="" value="">
      <button class="add-desc-btn" type="button" name="button">Add Description</button>
    </div>`)


  let $htmlTaskItem = $(`
    <li>
      <button class="del-btn">X</button>
      <span class="task-name">task name</span><br>
      <span class="description">how long can this description be</span>

    </li>
`)

  $($htmlTasks).find('.list').html($htmlTaskItem)

  return $htmlTasks
}
