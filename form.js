function registration() {

    var name = document.getElementById("t1").value;
    var mob = document.getElementById("t2").value;
    var uid = document.getElementById("t3").value;
    var addr = document.getElementById("t4").value;
    var dept = document.getElementById("t5").value;
    var pwd = document.getElementById("t6").value;
    var cpwd = document.getElementById("t7").value;

    //email id expression code
    var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    var letters = /^[A-Za-z]+$/;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (name == '') {
        alert('Please enter your name');
    } else if (mob == '') {
        alert('Please enter mobile number');
    } else if (uid == '') {
        alert('Please enter the user id.');
    } else if (addr == '') {
        alert('Please enter address');
    } else if (dept == '') {
        alert('Please enter dept');
    } else if (pwd == '') {
        alert('Please enter Password');
    } else if (cpwd == '') {
        alert('Enter Confirm Password');
    } else if (!pwd_expression.test(pwd)) {
        alert('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
    } else if (pwd != cpwd) {
        alert('Password not Matched');
    } else {
        alert('Thank You for Login & You are Redirecting to homepage');
        // Redirecting to other page or webste code. 
        window.location = "index.html";
    }
}

function clearFunc() {
    document.getElementById("t1").value = "";
    document.getElementById("t2").value = "";
    document.getElementById("t3").value = "";
    document.getElementById("t4").value = "";
    document.getElementById("t5").value = "";
    document.getElementById("t6").value = "";
    document.getElementById("t7").value = "";
}

// function WriteToFile(passForm) {

//     let fso = CreateObject("Scripting.FileSystemObject");
//     let s = fso.CreateTextFile(uid + ".txt", True);

//     var name = document.getElementById('t1');
//     var mob = document.getElementById('t2');

//     s.writeline("Name :" + t1);
//     s.writeline("Last Name :" + lastName);

//     s.writeline("-----------------------------");
//     s.Close();
// }

function login() {
    window.location = "index.html";
}