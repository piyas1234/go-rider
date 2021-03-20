import firebase from "firebase/app";

export const firebaseConfig = {

    apiKey: "AIzaSyBBCqVrfQeWYt1Nkkfz89c2Tnchgv1-WJQ",
    authDomain: "go-riders-67527.firebaseapp.com",
    projectId: "go-riders-67527",
    storageBucket: "go-riders-67527.appspot.com",
    messagingSenderId: "334098989890",
    appId: "1:334098989890:web:41cf6af32905f968f9bedb"
};



export const socialLoin = (provider, setlogin, goHistotyPage,seterrMsg) => {
    firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            const credential = result.credential;
            const token = credential.accessToken;
            const user = result.user;
            setlogin(user)
            goHistotyPage()
        }).catch((error) => {
            const errorMessage = error.message;
            seterrMsg(errorMessage)
        });
}


export const emailLogin = (setlogin, goHistotyPage, email, password,seterrMsg) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            setlogin(user);
            goHistotyPage()
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            seterrMsg(errorMessage);
        });
}


export const emailSignup = (setlogin, goHistotyPage, name, email, password,seterrMsg) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            setlogin(user)
            goHistotyPage()
            user.updateProfile({
                displayName: name,
            }).then(function (data) {
                
            }).catch(function (error) {
                console.log(error)
                const errorMessage = error.message;
                seterrMsg(errorMessage)
            });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
            seterrMsg(errorMessage)
            // ..
        });
}