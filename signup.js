/** we'll have a function on key press up, wherein both password fields align; when they do, we'll update the
 * button to have submit as a class
 */


var userpass = document.getElementById('password');

var confirmpass = document.getElementById('confirm_password');









function checkmatch(pass,confirm){
    console.log('ssss');
    console.log(pass.value,confirm.value)
    var warning = document.querySelector("#war")
    if(pass.value === confirm.value){
        
        warning.textContent = ''
        document.getElementById('submit').disabled = false

    }
    else{
        warning.textContent = '*passwords must match'
        document.getElementById('submit').disabled = true
        
    }
}

userpass.addEventListener('keyup', () => {
    checkmatch(userpass,confirmpass)
    console.log('ssss')



})

confirmpass.addEventListener('keyup',() =>{
    checkmatch(userpass,confirmpass)
    console.log('fff')
})

