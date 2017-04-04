import { createStore } from 'redux'
export default function app() {
  const url = 'http://api.backendless.com/v1/data';
  const appId = '892747C4-CCC9-E96F-FF91-006B50E61400';
  const restKey = '30D82F23-700A-52A1-FF7B-1BC275C5F700';

  const userLogin = {
    user: null,
    password: null,
  }

  const initialState = {
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

      default:
      return currentState;
    }

  }//end of reducer

  const store = createStore(reducer, initialState);

  const render = function(){
    let state = store.getState();
    $('#app').html(state.view(store))
  }

//   $.ajax({
//   url: url + "/task_mgmt",
//   method: "GET",
//   headers: {
//     "application-id": appId,
//     "secret-key": restKey
//   }
// })
//
//   $.ajax({
//     url: url + "/task_mgmt/users/login",
//     method: 'POST',
//     headers: {
//       "application-id": appId,
//       "secret-key": restKey,
//       "Content-Type": "application/json",
//       "application-type": "REST"
//     },
//     body: {
//       "login": undefined,
//       "password": undefined
//     }
//
//   }).then(function(data,i,arr){
//     console.log(data);
//   })
//






}//end of export
