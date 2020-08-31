class User{
    constructor(username,email,password){                                          //constructors are methods that will run when the class is instentiated
       
        this.username = username;
        this.email = email;
        this.password = password;
        
    }

    register(){
        console.log(this.username + ' is now registered');
    }

    // static method

    static countUsers(){
        console.log('there are 30 users');
    }



}

let bob = new User('bob','bob@mail.com','123');

bob.register();
console.log(bob.email);
User.countUsers();


class Member extends User{
    constructor(username,email,password,memberPackage){
        super(username,email,password);
        this.package = memberPackage;
        
    }

    getPackage(){
        console.log(this.username+' is subscibed to '+this.package+' package');
    }

}


let mike = new Member('mike','mike@mail.com','xyzz','standard');

mike.getPackage();
mike.register();