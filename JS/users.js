class UserManager{

    static get arrayUser(){
        return JSON.parse(sessionStorage.arrayUser);
    }

    static get currentUser(){
        return JSON.parse(sessionStorage.currentUser);
    }

    static get currentUserIndex(){
        let userIndex = null
        if(this.isLogged){
            this.arrayUser.forEach((el, index) => {
            if (el.email == this.currentUser.email){
                userIndex = index
            }
        });}
        return userIndex
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

    static logar(user){
        sessionStorage.currentUser = JSON.stringify(user)
    }

    static deslogar(){
        sessionStorage.currentUser = '{}'
    }

    static findUser(nome){
        let user = null
        this.arrayUser.forEach(el => {
            if (el['nome'] == nome || el['email'] == nome){
                user = el
            }
        });
        return user
    }

    static findUserIndex(email){
        let userIndex = null
        this.arrayUser.forEach((el, index) => {
            if (el['email'] == email){
                userIndex = index
            }
        });
        return userIndex
    }

}

export {UserManager}