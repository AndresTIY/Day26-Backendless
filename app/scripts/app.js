import { createStore } from 'redux'
export default function app() {
  const url = 'http://api.backendless.com/v1/data';
  const appId = '892747C4-CCC9-E96F-FF91-006B50E61400';
  const restKey = '30D82F23-700A-52A1-FF7B-1BC275C5F700';

  const userLogin = {
    user: null,
    token: null,
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
      case "LOGIN_USER":
        var newState;


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

//   $.ajax({
//   url: url + "/task_mgmt",
//   method: "GET",
//   headers: {
//     "application-id": appId,
//     "secret-key": restKey
//   }
// })
//
  // $.ajax({
  //   url: url + "/v1/users/login",
  //   method: 'POST',
  //   headers: {
  //     "application-id": appId,
  //     "secret-key": restKey,
  //     "Content-Type": "application/json",
  //     "application-type": "REST"
  //   },
  //   data: {
  //     "login": undefined,
  //     "password": undefined
  //   }
  //
  // }).then(function(data,i,arr){
  //   console.log(data);
  // })
//

  //------login view-----------
  function loginView(store){
    let $htmlLogin = $(`
      <div class="login-card">
        <label for="username">Use Your Email To Log In</label>
        <input id="username" type="email" name="" value="">
        <label for="password">The password is possibly "password"</label>
        <input id="password" type="password" name="" value="">
        <button>Enter</button>
      </div>`)




    $($htmlLogin).find('button').on('click', function(e){
      let $user = $($htmlLogin).find('#username').val();
      let $pw = $($htmlLogin).find('#password').val();
      console.log('login button clicks');

      // store.dispatch({type:"VALIDATE_USER", user: $user, password: $pw})

    })


    return $htmlLogin

  }//end of loginView

  function taskView(store){
    let $htmlTasks = $(``)

    return $htmlTasks
  }




}//end of export
