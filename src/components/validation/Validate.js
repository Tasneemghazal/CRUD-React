export  const validateData =(user)=>{
    let errors ={};
    if(user.name.trim()==""){
        errors.name ='name is required';
    }else if(user.name.trim().length<6){
        errors.name='# of chars must be greater than 6 ';
    }
    if(user.email.trim()==""){
        errors.email ='email is required';
    }else if(user.email.trim().length<8){
        errors.email='# of chars must be greater than 8 ';
    }
    if(user.password.trim()==""){
        errors.password ='password is required';
    }else if(user.password.trim().length<4){
        errors.password='# of chars must be greater than 4 ';
    }
    return errors;
}