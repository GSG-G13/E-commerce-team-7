


const LogIn = function () {



    
    return (
    <div className="main-section">
    <div className="sidebar-image"></div>
    <div className="form-section"> 
        <h4>Sign up</h4>
        <p>By continuing, you agree to our <a href="#">User Agreementand</a> and <a href="#">Privacy Policy</a>.</p>
       <form action="/register" method="POST">
        <input type="text" name ="name" id="name" placeholder="CHOOSE A USERNAME"/>
        <input type="text" name="email" placeholder="EMAIL" id="email"/>
        <input type="text" name="password" placeholder="PASSWORD" id="password"/>
        <button id ='register'>SIGN UP!</button>
        <p>Forgot your <a href="#">username</a> or <a href="#">password?</a></p>
        <p>New to our site? <a href="#">SIGN UP</a></p>
        </form>
    </div>   
</div>
)
}

export default LogIn;