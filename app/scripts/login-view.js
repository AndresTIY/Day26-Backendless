export default function (store){
  let $htmlLogin = $(`
    <div class="login-card">
      <label for="username">Use Your Email To Log In</label>
      <input id="username" type="email" name="" value="user@example.com" autofocus>
      <label for="password">The password is possibly "password"</label>
      <input id="password" type="password" name="" value="password">
      <button>Enter</button>
    </div>`)




  $($htmlLogin).find('button').on('click', function(e){
    let $user = $($htmlLogin).find('#username').val();
    let $pw = $($htmlLogin).find('#password').val();

    store.dispatch({type:"VALIDATE_USER", user: $user, password: $pw})

  })


  return $htmlLogin

}//end of export
