
function createAccount(){
    return {
        //properties
        name: "",
        password: "",
        timeOfCreation: "",
        permissionFriend: true,
        permissionFriendRequest: false,
        picture: ""
    };
    
}

function draw(input){
    console.log(input);
}

let yusha = createAccount();
yusha.name = "yusha";
yusha.password = "Admin123";
yusha.timeOfCreation = 0;

draw(yusha.name);
console.log(yusha.password);

//constructor
function CreateAccount(){
    private:
        this.name = "flipy";
        this.password = "123Password";
}

let flipy = new CreateAccount();
// this.flipy.name = "flipy";
// flipy.name = "flipy";
// flipy.password = "Admin123";

draw(flipy.name);
// console.log(yusha.password);
