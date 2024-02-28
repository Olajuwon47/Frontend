function LoginSignupValidation(values) {
    alert('')
    let error ={}
    const email_pattern =/^[^\s@]+@[^\S@]+\.[^\s@]+$/
    const password_pattern =/^(?=.*\d(?=.*[a-z]))(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
    if(values.surname === ``){
        error.surname ="name should not be empty"
    }else{
        error.surname=``
    }
    if(values.firstname === ``){
        error.firstname ="name should not be empty"
    }else{
        error.firstname=``
    }
    if(values.lastname === ``){
        error.lastname ="name should not be empty"
    }else{
        error.lastname=``
    }
    if(values.date === ``){
        error.date="name should not be empty"
    }else{
        error.date=``
    }
    if(values.email === ``){
        error.email ="name should not be empty"
    }
    else if (!email_pattern.test(values.email)){
        error.email ="email didn't match"
    }else{
        error.email = ``
    }
    if (values.password_pattern === ``){
        error.password="password should not be empty"
    }
    else if (!password_pattern.test(values.password)){
        error.password ="password didn't match"
    }else{
        error.password = ``
    }
    return error;
}
export default LoginSignupValidation;