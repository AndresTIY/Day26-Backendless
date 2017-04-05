import taskItemView from './task_item_view.js';
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
        <input id="important" type="checkbox" />
        <button class="add-item" type="button" name="button">Add Task</button>
      </div>
    </div>`);

  var taskItems = state.tasks.map(function(item){
    return taskItemView(store, item);
  });

  let $addBtn = $($htmlTasks).find('.add-item');

  $addBtn.on('click', function(e){
    console.log('add button works');
    let important = $($htmlTasks).find('#important').is(':checked')
    let task;
    let date;
    let started;
    let complete;
    let description;
    console.log("1", important);
    // store.dispatch({
    //   // type:"ADD_TO_LIST",
    //
    // })
  })







  $($htmlTasks).find('.list').html(taskItems)

  return $htmlTasks
}
