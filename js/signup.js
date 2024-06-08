var userName = document.querySelector('#userName');
var userEmail = document.querySelector('#userEmail');
var userPass = document.querySelector('#userPassword');
var signup = document.querySelector('#signUp');




if (localStorage.getItem('accounts')) {
  var accountArr = JSON.parse(localStorage.getItem('accounts'));
} else {
  var accountArr = [];
}
signup.addEventListener('click', createAccount);
signup.addEventListener('click', clear);
function createAccount() {

  if (userName.value == '' || userEmail.value == '' || userPass.value == "") {
    document.querySelector('.inputreq').classList.replace('d-none', 'd-block');
    document.querySelector('.suc').classList.replace("d-block" , "d-none");
  }
  else
  {
      var accounts = {
        name: userName.value,
        mail: userEmail.value,
        pass: userPass.value,
      };

      accountArr.push(accounts);

      localStorage.setItem('accounts', JSON.stringify(accountArr));
      

      document
        .querySelector('.inputreq')
        .classList.replace('d-block', 'd-none');

        document.querySelector('.suc').classList.replace('d-none', 'd-block');
  }
  
}
function clear() {
  userName.value = '';
  userEmail.value = '';
  userPass.value = '';
}









