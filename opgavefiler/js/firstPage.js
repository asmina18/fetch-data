

/* Opgave 1*/
// din kode her

const userURI = "https://jsonplaceholder.typicode.com/users";

const myUserlistElement = document.getElementById("userList");
 

// mi berem data s fetch
 fetch (userURI)
//then eto kogda ti sdelala fetch  togda ti idesh na .Then potom indesh na drugoy .Then 
 .then(
   (myResponse)=> {
       return myResponse.json();
   }
 )
.then (
     (data) =>{
        console.log('   Her er min data: ', data);
        buildUsers(data);
     }
)
//finder fejl tidligt/ i ishesh oshibku  s nachinaya s Fetch

.catch(  
        (error) => {
            console.error(error);
       
 });

function buildUsers(myUserData){
    myUserData.map((myUser)=>{
    let myUserHTML=`<h2>${myUser.name}</h2>

    <p>Adresse: ${myUser.address.street}  ${myUser.address.suite}</br>post nummer: ${myUser.address.zipcode}</br>by: ${myUser.address.city}</p>`;
    myUserlistElement.innerHTML+=myUserHTML;
    })
};


/* Opgave 2*/

// din kode her

/* Opgave 3 - skriv videre på koden her: */
const myDataFileUrl = "../../opgavefiler/data/story.json";
const myStoryElement = document.getElementById("theStory");


/* Opgave 3*/
// din kode her

const myListElement = document.getElementById("userSelect");
const myPostElement = document.getElementById("userPosts");

//entry point
getUsers("https://jsonplaceholder.typicode.com/users");
