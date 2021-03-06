import { createStore } from 'redux'
import loginView from './login-view.js'
import tasksView from './task-view.js'
import taskItemView from './task_item_view.js'
export default function app() {
  const url = 'http://api.backendless.com/v1';
  const appId = '892747C4-CCC9-E96F-FF91-006B50E61400';
  const restKey = '30D82F23-700A-52A1-FF7B-1BC275C5F700';
  const settingsGet = {
      url: url + "/data/task_table",
      method: "GET",
      headers: {
        "application-id": appId,
        "secret-key": restKey
      }
    }



  const initialState = {
    userInfo: {
      email: null,
      token: null
    },
    taskName: null,
    description: null,
    state: false,
    important: false,
    dueDate: null,
    view: loginView
  }

  const reducer = function (currentState, action){
    if (currentState === undefined){
      return initialState;
    }

    switch(action.type){
      case "VALIDATE_USER":
      $.ajax({
          url: url + "/users/login",
          method: 'POST',
          headers: {
            "application-id": appId,
            "secret-key": restKey,
            "Content-Type": "application/json",
            "application-type": "REST"
          },
          data: JSON.stringify({
            login: action.user,
            password: action.password
          })
        }).then(function(data,success,xhr){
        console.log(success);
        store.dispatch({
          type:"USER_LOGGED_IN",
          user: data.email,
          token: data["user-token"]})
      })
        return currentState

      case "USER_LOGGED_IN":
        $.ajax(settingsGet).then(function(data){
        store.dispatch({
          type: "TASKS_LOADED",
          user: action.user,
          token: action.token,
          tasks: data.data
        })
      });
        return currentState


      case "TASKS_LOADED":
        var newState = {
          userInfo: {
            email: action.user,
            token: action.token,
          },
          tasks: action.tasks,
          view: tasksView
        };

        return Object.assign({}, currentState, newState);

      case "ADD_TO_LIST":
        $.ajax({
          url: url + '/data/task_table',
          method: "POST",
          headers: {
            "application-id": appId,
            "secret-key": restKey,
            "Content-Type": "application/json",
            "application-type": "REST"
          },
          data: JSON.stringify({
            important: action.important,
            task: action.task,
            due_date: action.date,
            description: action.description
          })
        }).then(function(task,success,xhr){
          store.dispatch({type:"USER_LOGGED_IN"})

        })
        return currentState;

      case "DELETE_ITEM":
        var item = action.item;
        $.ajax({
          url: `${url}/data/task_table/${item.objectId}`,
          method: "DELETE",
          headers: {
            "application-id": appId,
            "secret-key": restKey
          }
        }).then(function(data){
          store.dispatch({type:"USER_LOGGED_IN"})
        })

        return currentState;



      case "NOOP":
        return currentState;

      default:
        return currentState;
    }

  }//end of reducer

  const store = createStore(reducer, initialState);

  const render = function(){
    let state = store.getState();
    $('#app').html(state.view(store))
  }
  store.subscribe(render);
  store.dispatch({type:'NOOP'})


}//end of export
