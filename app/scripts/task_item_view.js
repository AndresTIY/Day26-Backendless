export default function taskItemView(store, item){


  let $htmlTaskItem = $(`
    <li>
      <button class="del-btn">X</button>
      <span class="task-name">${item.task}</span>
      <span class="hidden exclamation"> ! </span><br>
      <span class="description">${item.description}</span><br>
      <span class="due">due on ${item.due_date}<span><br>
      <button class="started">Started?</button>
      <button class="completed">Completed?</button>
    </li>`)


  let $taskDelBtn = $($htmlTaskItem).find('.del-btn');
  let $startedBtn = $($htmlTaskItem).find('.started');
  let $completedBtn = $($htmlTaskItem).find('.completed');

  $taskDelBtn.on('click', function(e){
    store.dispatch({type:"DELETE_ITEM", item: item});
    console.log('del button clicks');
  })

  $startedBtn.on('click', function(e){
    console.log('start button clicks');
  })

  $completedBtn.on('click', function(e){
    console.log('complete button clicks');
  })


  return $htmlTaskItem;
}
