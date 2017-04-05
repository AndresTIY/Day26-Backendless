
export default function(store){

  let state = store.getState();





  let $htmlTasks = $(`
    <div class="task-card">
      <h2>My To Do List</h2>
      <ul class="list">
      </ul>
      <div class="form">
        <h3>Add More Tasks</h3>
        <input placeholder="new task" class="add-task" type="text" name="" value="">
        <input placeholder="task description" class="add-desc" type="text" name="" value=""><br>
        <label for="due-date">Due Date</label>
        <input class="due-date" type="datetime-local" name="" value="">
        <label for="important">Make this a priority?</label>
        <input id="important" type="checkbox" name="" value="">
        <button class="add-item" type="button" name="button">Add Task</button>
      </div>

    </div>`)



    function taskItemView(item){
      let $htmlTaskItem = $(`
        <li>



          <button class="del-btn">X</button>
          <span class="task-name">${item.task}</span>
          <span class="exclamation"> ! </span><br>
          <span class="description">${item.description}</span><br>
          <button class="started">Started?</button>

          <button class="completed">Completed?</button>
        </li>`)
        //code for button

      return $htmlTaskItem;
    }

    var taskItems = state.tasks.map(function(item, i, arr){
      return taskItemView(item);
    });





  $($htmlTasks).find('.list').html(taskItems)

  return $htmlTasks
}
