document.getElementById('submit-buttton').addEventListener('click', function () {

    const newEmailAddress = document.getElementById('user-email');
    const myEmailAddress = newEmailAddress.value;

    const newPassword = document.getElementById('user-password');
    const myPassword = newPassword.value;

    if (myEmailAddress == 'faizahuma@gmail.com' && myPassword == '12345') {
        window.location.href = "../banking.html";
    }
    else {
        alert('sorry! you do not have access');
    }
})