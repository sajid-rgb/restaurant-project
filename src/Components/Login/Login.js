import React, { useContext, useState } from 'react';
import './Login.scss';
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from '../../firebase.config';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [haveAccount, setHaveAccount] = useState(true)
    const [signInUser,setSignInUser]=useState({
        name:'',
        email:'',
        image:'',
        password:'',
        confirm:'',
        isSignIn:false
        
    })
    let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } }
//   const handleIdToken=()=>{
//     firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
//     .then(function(idToken) {
//         localStorage.setItem('token',idToken)
//       }).catch(function(error) {
//         // Handle error
//       });
//   }
    const handleGoogleSignIn = (event) => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider)
            .then((result) => {
                const user = result.user;
                signInUser.name=user.displayName;
                signInUser.email=user.email;
                signInUser.image=user.photoURL
                // handleIdToken()
                // localStorage.setItem('email',signInUser.email)
                setSignInUser(signInUser)
                signInUser.isSignIn=true
                // localStorage.setItem('login',signInUser.isSignIn)
                setLoggedInUser(signInUser)
                history.replace(from);
            })
            .catch((error) => {

                const errorMessage = error.message;
            
            });
            event.preventDefault();
    }
    
    const handleEmailSignUp = ()=>{
  firebase.auth().createUserWithEmailAndPassword(signInUser.email, signInUser.password)
  .then((userCredential) => {
    const user = userCredential.user;
    const newSignInUser = {...signInUser}
    newSignInUser.email = user.email
    newSignInUser.name = user.displayName
    setSignInUser(newSignInUser)
    signInUser.isSignIn=true
    setLoggedInUser(signInUser)
    history.replace(from);
  })
  .catch((error) => {
    const  errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
  });
    }
    const handleEmailSignIn = () =>{
        firebase.auth().signInWithEmailAndPassword(signInUser.email, signInUser.password)
       .then((userCredential) => {
    const user = userCredential.user;
    const newSignInUser = {...signInUser}
    newSignInUser.email = user.email
    newSignInUser.name = user.displayName
    signInUser.isSignIn=true
    setSignInUser(newSignInUser)
    setLoggedInUser(signInUser)
    history.replace(from);
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
    }
    const handleOnBlur = (event)=>{
        if(event.target.name === 'name'){
            const newSignInUser = {...signInUser}
            newSignInUser.name=event.target.value;
            setSignInUser(newSignInUser)
        }
        if(event.target.name === 'email'){
            const newSignInUser = {...signInUser}
            newSignInUser.email=event.target.value;
            setSignInUser(newSignInUser)
        }
        if(event.target.name === 'password'){
            const newSignInUser = {...signInUser}
            newSignInUser.password=event.target.value;
            setSignInUser(newSignInUser)
        }
        if(event.target.name === 'confirm'){
            const newSignInUser = {...signInUser}
            newSignInUser.confirm=event.target.value;
            console.log(event.target.value);
            setSignInUser(newSignInUser)
        }
        
    }
    const user = firebase.auth().currentUser;

   if(user!=null){
    user.updateProfile({
        displayName: signInUser.name,
        photoURL: signInUser.image
      })
      .then(function() {
        console.log('updated')
      }).catch(function(error) {
        // An error happened.
      });
   }
    
    return (
        <div className="mx-auto text-center pt-5 pb-5  bg-dark rounded shadow login">
            {
                haveAccount ? <h3 className='text-dark'>Create Account here</h3> : <h3 className='text-dark'>Sign In here</h3>
            }
            <form action="">
                {
                    haveAccount && <div>
                        <input type="text" className='' name='name' onBlur={handleOnBlur} placeholder="Enter Name" style={{ width: '350px', height: '35px' }} required /> <br />
                    </div>
                }
                <input type="text" className=' mt-3' name='email' onBlur={handleOnBlur} placeholder="Enter Email" style={{ width: '350px', height: '35px' }} required /> <br />
                <input type="password" className=' mt-3' name='password' onBlur={handleOnBlur}  id="" style={{ width: '350px', height: '35px' }} placeholder="Enter Password" required /> <br />
                {
                    haveAccount && <div>
                        <input type="password" name='confirm' onBlur={handleOnBlur} className=' mt-3' style={{ width: '350px', height: '35px' }} placeholder='confirm Password' required /> <br />
                    </div>
                }
                {
                    haveAccount ? <Link to='/login' className='text-white'>
                    <button  className='btn btn-primary mt-3 ' onClick={handleEmailSignUp} style={{ width: '350px' }}>Sign Up</button>
                    </Link>:<Link to='/login' className='text-white'>
                <button  className='btn btn-primary mt-3 ' onClick={handleEmailSignIn} style={{ width: '350px' }}>Sign In</button>
                </Link>
                }
                {
                    haveAccount ? <p className='text-primary' onClick={() => setHaveAccount(false)} style={{ cursor: 'pointer' }}>I have an account</p> : <p className='text-primary' onClick={() => setHaveAccount(true)} style={{ cursor: 'pointer' }}>I have no account</p>
                }


            </form>
            <button className='btn btn-primary mt-1 ' onClick={handleGoogleSignIn} style={{ width: '350px' }}>Continue With Google</button> <br />
            <button className='btn btn-primary mt-3' style={{ width: '350px' }}>Continue With Facebook</button>

        </div>
    );
};

export default Login;