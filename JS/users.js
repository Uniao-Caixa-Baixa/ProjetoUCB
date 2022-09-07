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

    static nomeExiste(nome){
        let valido = false
        this.arrayUser.forEach(user => {
            if (user['nome'] == nome){
                valido = true
            }
        });
        return valido
    }
    
    static emailExiste(email){
        let valido = false
        this.arrayUser.forEach(user => {
            if (user['email'] == email){
                valido = true
            }
        });
        return valido
    }

}

export {UserManager}