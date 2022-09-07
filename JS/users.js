class UserManager{

    static get arrayUser(){
        return JSON.parse(sessionStorage.arrayUser);
    }

    static get currentUser(){
        return JSON.parse(sessionStorage.currentUser);
    }

}

export {UserManager}