class UserManager{

    static get arrayUser(){
        return JSON.parse(sessionStorage.arrayUser);
    }

    static get currentUser(){
        return JSON.parse(sessionStorage.currentUser);
    }

    static get isLogged(){
        if(sessionStorage.currentUser == '{}'){
            return false
        }else{
            return true
        }
    }

}

export {UserManager}