//use this to login user
//this is going to be soley backend stuff 

//check if the entry is valid by running it through the DB
//than continue
//else warn that it is not


//object.onclick = function(){doSomething()};
function verifyLogin() {
    //run it onClick in the button
    const usrName = document.getElementsByClassName("user-input").value;
    const password = document.getElementsByClassName("pass-input").value;

    console.log(usrName);
}


//run that throught the databse
//usrName must be unique
//look up how to route users based on loagin
//since not everyone is going to have the same homefeed (different followers and likes and stuff)
//also how to implement functionality that when they tweet it will automaticlly know who it is
//could do it based on port or ip for simplicty for now
//usericon and stuff needs to show at the buttom of the feed aswell
//all this is realated to the users login (how do we control the app based on who logins)


export default verifyLogin;