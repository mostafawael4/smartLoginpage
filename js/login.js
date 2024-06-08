var loginMail = document.querySelector('#mail');
var loginPass = document.querySelector('#pass');
var login = document.querySelector('.login');

if (localStorage.getItem('accounts')) {
  var accountArr = JSON.parse(localStorage.getItem('accounts'));
} else {
  var accountArr = [];
}


function logins() {
    if (loginMail.value == "" || loginPass.value == "")
        {
            document.querySelector('.inputreq').classList.replace('d-none', 'd-block');
            document.querySelector('.warning').classList.replace('d-block', 'd-none');
        }
        else
        {

            for (var i = 0; i < accountArr.length; i++) {
              if (loginMail.value == accountArr[i].mail &&loginPass.value == accountArr[i].pass) {
                  document.querySelector('.warning').classList.replace('d-block', 'd-none');
                  document.querySelector('.inputreq').classList.replace('d-block', 'd-none');

                localStorage.setItem("index" , JSON.stringify(i));
                window.location.replace('./database.html');
              }
            }


            document.querySelector('.warning').classList.replace('d-none', 'd-block');
            document.querySelector('.inputreq').classList.replace('d-block', 'd-none');
        }
      

}

function clear() {
  loginMail.value = '';
  loginPass.value = '';
}

login.addEventListener('click', logins);
login.addEventListener('click', clear);
