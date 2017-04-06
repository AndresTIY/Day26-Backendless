export default function taskItemView(store, item){

  let $htmlTaskItem = $(`
    <li>
      <button class="del-btn">X</button>
      <span class="task-name">${item.task}</span>
      <span class="hidden exclamation"> ! </span><br>
      <span class="description">${item.description}</span><br>
      <button class="started">Started?</button>
      <button class="completed">Completed?</button>
    </li>`)


  let $taskDelBtn = $($htmlTaskItem).find('.del-btn');
  let $startedBtn = $($htmlTaskItem).find('.started');
  let $completedBtn = $($htmlTaskItem).find('.completed');


  return $htmlTaskItem;
}
