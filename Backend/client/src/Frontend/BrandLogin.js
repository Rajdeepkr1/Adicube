import Header from './Header'
import "./Header.css";


const BrandLogin = () => {

    return (
        <>
        <Header/>
        <div action="/brand" method="POST" className="BrandLogin">
            <h1 style={{color:'white',fontWeight:'bold'}} >Brand Login</h1>
            <div className="profile__pic">
                <img src="https://i.pinimg.com/originals/a1/2b/d0/a12bd0f468469a3b8424dab781268f4c.jpg" alt="profile__pic" />
            </div>
            <div className="BrandLogin__box">
                <input className="formbox" name ="firstname" type="text" placeholder="First Name*" />
                <input className="formbox" name ="lastname" type="text" placeholder="Last Name*" />
            </div>
            <div className="BrandLogin__box">
                <input className="form_box" name ="email" type="text" placeholder="Office E-mail address*"/>
            </div>
            <div className="BrandLogin__box">
                <input className="formbox" name ="number" type="text" placeholder="Mobile Number*" />
                <input className="formbox" name ="firstname" type="text" placeholder="Alternate Number" />
            </div>
            <div className="BrandLogin__box">
                <input className="formbox" name ="loginId" type="text" placeholder="Login ID*"/>
                <input className="formbox" name ="password" type="text" placeholder="Login Password*"/>
            </div>
            <button type='submit' className="formbox" style={{backgroundColor:"orange"}}>Submit</button>
            
        </div>
        </>
    )
}

export default BrandLogin
