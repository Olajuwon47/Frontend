function LoginSignupValidation(values) {
    // Alert statement (empty alert)
    alert('');
    
    // Initialize error object
    let error = {};
    
    // Regular expressions for email and password patterns
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.\d)(?=.[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
    
    // Validation for surname field
    if(values.surname === '') {
        error.surname = "Surname should not be empty";
    } else {
        error.surname = '';
    }
    
    // Validation for firstname field
    if(values.firstname === '') {
        error.firstname = "Firstname should not be empty";
    } else {
        error.firstname = '';
    }
    
    // Validation for lastname field
    if(values.lastname === '') {
        error.lastname = "Lastname should not be empty";
    } else {
        error.lastname = '';
    }
    
    // Validation for date field
    if(values.date === '') {
        error.date = "Date should not be empty";
    } else {
        error.date = '';
    }
    
    // Validation for email field
    if(values.email === '') {
        error.email = "Email should not be empty";
    } else if (!email_pattern.test(values.email)) {
        error.email = "Email format is invalid";
    } else {
        error.email = '';
    }
    
    // Validation for password field
    if (values.password === '') {
        error.password = "Password should not be empty";
    } else if (!password_pattern.test(values.password)) {
        error.password = "Password format is invalid";
    } else {
        error.password = '';
    }
    
    // Return the error object
    return error;
}

// Sample usage of the LoginSignupValidation function
const sampleValues = {
    surname: 'Doe',
    firstname: 'John',
    lastname: 'Smith',
    date: '1990-01-01',
    email: 'johndoe@example.com',
    password: 'Password123'
};

const errors = LoginSignupValidation(sampleValues);
console.log(errors);
export default LoginSignupValidation;
/*function LoginSignupValidation(values) {
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
export default LoginSignupValidation;*/
