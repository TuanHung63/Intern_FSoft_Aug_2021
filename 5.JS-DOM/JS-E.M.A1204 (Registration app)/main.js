
function Ready(){
    username=document.getElementById("username").value;
    pwd=document.getElementById("pwd").value;
    cfPwd=document.getElementById("cfPwd").value;

}
function Errors(id,message){
    document.getElementById(id).innerHTML=message;
}
function Success(id,message){
    document.getElementById(id).innerHTML=message;
}



function checkInput (){
    Ready();
    Errors('username-text','');
    Errors('pwd-text','');
    Errors('cfPwd-text','');
    Success('info','');    
    if(pwd==cfPwd&& pwd!='' && username!=''){
        Success('info','You have registered successfully');

    }
    if(username==''){
        Errors('username-text','User name is required');

    }
    if(pwd==''){
        Errors('pwd-text','Password is required');

    }
    if(cfPwd==''){
        Errors('cfPwd-text','Confirm password is required');

    }
    if(pwd!=cfPwd){
        if(pwd!=''&&cfPwd!=''){
        Errors('cfPwd-text','Password and confirm password do not match');
    }    
    }

}