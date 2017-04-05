export default function(store){
  let $htmlTasks = $(`
    <div class="task-card">
      <h4>My To Do List</h4>
      <ul class="list">
      </ul>
      <label for="add-task-btn">Add more to your list!</label>
      <input class="add-task-btn" type="text" name="" value="">
      <button type="button" name="button">Add</button>
    </div>`)


  let $htmlTaskItem = $(`
    <li>
      <button class="del-btn">X</button>
      <span="task-name">task name</span>
    </li`)

  return $htmlTasks
}
