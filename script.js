// Your code goes here.  

/*
Name: Olamide Owolabi
Date: 5th Movember-2022
Section: 22F_CST8285_301 ......
This is the javascript for Lab 4
Some labs I have done during CST 8285 .......
*/

const EmailDoc = document.querySelector("#email"),
LoginDoc = document.querySelector("#login"),
PassDoc = document.querySelector("#pass"),
PassDoc2 = document.querySelector("#pass2"),
checkdoc = document.querySelector("#newsletter"),
checkdoc2 = document.querySelector("#terms");


const spanEmail =document.querySelector("#emailerr"),
spanUser = document.querySelector("#usererr"),
spanpass = document.querySelector("#passerr"),
spanpassii = document.querySelector("#passiierr"),
spancheck = document.querySelector("#checkerr");



//This fucntion is gotten online from Simplilearn
//site: https://www.simplilearn.com/tutorials/javascript-tutorial/email-validation-in-javascript
//it purpose is to check if the email enter is valid
function ValidateEmail(val) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  

    if (val.match(validRegex)) {
  
     // alert("Valid email address!");
  
     // document.form1.text1.focus();
  
      return true;
  
    } else {
  
    //  alert("Invalid email address!");
  
     // document.form1.text1.focus();
  
     return false;
  
    }
  
  }

  //Will be used for checking Passwords
  // got from stackoverflow
  // https://stackoverflow.com/questions/7844359/password-regex-with-min-6-chars-at-least-one-letter-and-one-number-and-may-cont

  function checkPwd(str) {
    if (str.length < 6) {
        return("Password is too short");
    } else if (str.length > 50) {
        return("Password is too long");
    } else if (str.search(/\d/) == -1) {
        return("Password Must contain at least one Number");
    } else if (str.search(/[a-zA-Z]/) == -1) {
        return("Password must contain atleast one letter");
    
    } else if (str.search(/[A-Z]/) == -1) {
        return("Password must contain atleast one Uppercase");
    
    } else if (str.search(/[a-z]/) == -1) {
        return("Password must contain atleast one Lowercase");
    
    } else if (str.search(/[\!\@\#\$\%\^\&\*\(\)\_\+]/) == -1) {
        return("Password must contain atleast one special character");
    }
    return("ok");
}

    var alertcall = false;


    function clearAll()
    {
        //alertcall =false;
         //Clear all need to rmeove the error classlist
    EmailDoc.classList.remove("wronginput");
    LoginDoc.classList.remove("wronginput");
    PassDoc.classList.remove("wronginput");
    PassDoc2.classList.remove("wronginput");

    //the span stuff
    spanEmail.classList.remove("active");
    spanUser.classList.remove("active");
    spanpass.classList.remove("active");
    spanpassii.classList.remove("active");
    spancheck.classList.remove("active");

    console.log("Olam");

    }

    onload = clearAll();
  function validate()
  {

   
        clearAll();

    //Check Email Validation

    if(EmailDoc == null)
    {
        console.log("Emaildoc  Is Missing");

        return false;
    }

    var em = EmailDoc.value;

    if(em == null || em == "Email" || em == " " || em.length<=1)
    {
        //error
        console.log("Email Is Blank");
        EmailDoc.classList.add("wronginput");
        spanEmail.classList.add("active");
        return false;
    }
    else if(!ValidateEmail(em))
    {
        //error invalid email
        console.log("Invalid Email " + em);
        EmailDoc.classList.add("wronginput");
        spanEmail.classList.add("active");
        return false;
    }

   

    //Check Login Validation

    var Lg = LoginDoc.value;
    
    if(Lg == null || Lg.length<1)
    {
        //error
        console.log("Login is Blank");
        LoginDoc.classList.add("wronginput");
        spanUser.classList.add("active");
       
        spanUser.innerHTML = '&#10008;'+" Username should be Non-empty and within 20 Characters";
        return false;
    }
   
    else if(Lg.length>=20)
    {
        //error too Long
        console.log("Loginname is too long");
        LoginDoc.classList.add("wronginput");
        spanUser.classList.add("active");
        spanUser.innerHTML = '&#10008;'+"Username should be Non-empty and within 20 Characters";
        return false;
    }

    var lg = Lg.toLowerCase();

    //Check PassWord Validation

    var Pwd = PassDoc.value;
    var Pwdii = PassDoc2.value;

    if(Pwd == null || Pwd.length<=1)
    {
        //error
        console.log("Password is blank");
        PassDoc.classList.add("wronginput");
        spanpass.classList.add("active");
        spanpass.innerHTML = '&#10008;'+"Password should be atleast 6 Characters: 1 Uppercase 1 Number 1 Special";
        return false;
    }
    else if(Pwdii ==null || Pwdii.length<=1)
    {
        //error
        console.log("Password 2 is blank");
        PassDoc.classList.add("wronginput");
        PassDoc2.classList.add("wronginput");
        spanpassii.classList.add("active");
        spanpassii.innerHTML = '&#10008;'+"Passwords do not match"
        return false;
    }

    var ResultPas = checkPwd(Pwd);

    if(ResultPas != "ok")
    {
        //error

    console.log("Password failed "+ ResultPas);
    PassDoc.classList.add("wronginput");
    spanpass.classList.add("active");
    spanpass.innerHTML = '&#10008;'+ " " + ResultPas;

        return false;
    }

    if(Pwd != Pwdii)
    {
        //error No match

        console.log("Password dont Match");
        PassDoc.classList.add("wronginput");
        PassDoc2.classList.add("wronginput");
        spanpassii.classList.add("active");
        spanpassii.innerHTML = '&#10008;'+"Passwords do not match"
        return false;
    }

    //checkbox validation
    if(checkdoc.checked && !alertcall)
    {
        //alert of spam
        alert(" Am here to warn you war about a possible spam setting "+
        " By agreeing to receive Weekly Kitten Pictures newsletters.");

        alertcall = true;
        return false;
    }


    if(!checkdoc2.checked)
    {
        //error
        spancheck.classList.add("active");
        return false;
    }

    console.log("Passed All");
    return false;
  }