

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

// ya polojila kopi suda a tak kod ya neponela kak polzovatsya  , ya doljna sprasiy u uchititelya  ne zabudt eto 
fetch(myDataFileUrl)
.then((response) => {

return response.json();

})
.then((data) => {
myStorydata = data;
setUpStory('DK');
})
.catch((error) => {
console.error(error);
});



function setUpStory(myLanguage) {
let myStory = null;

switch (myLanguage) {
case 'DK':
myStory = myStorydata.DK;
break;

case 'FI':
myStory = myStorydata.FI;
break;

case 'SE':
myStory = myStorydata.SE;
break;

case 'UK':
myStory = myStorydata.UK;
break;

default:
myStory = myStorydata.DK;
break;
}
createStory(myStory);
}

function createStory(myStory) {
myStoryElement.innerHTML = ''
createButtons();

let myHeadline = document.createElement('h2');
myHeadline.innerText = myStory.headline;
let myImage = document.createElement('img');
myImage.src = '../../opgavefiler/img/felix.jpg';
let myParagraf = document.createElement('p');
myParagraf.innerText = myStory.text;


myStoryElement.appendChild(myHeadline);
myStoryElement.appendChild(myImage);
myStoryElement.appendChild(myParagraf);

}

function createButtons() {
let myDkbutton = document.createElement('button');
myDkbutton.innerText = 'Dansk';
myDkbutton.addEventListener('click', (e) => {
setUpStory("DK");
});

let mySebutton = document.createElement('button');
mySebutton.innerText = 'Svenska';
mySebutton.addEventListener('click', (e) => {
setUpStory("SE");
});

let myFibutton = document.createElement('button');
myFibutton.innerText = 'Finsk';
myFibutton.addEventListener('click', (e) => {
setUpStory("FI");
});

let myUkbutton = document.createElement('button');
myUkbutton.innerText = 'English';
myUkbutton.addEventListener('click', (e) => {
setUpStory("UK");
});

myStoryElement.appendChild(myDkbutton);
myStoryElement.appendChild(mySebutton);
myStoryElement.appendChild(myFibutton);
myStoryElement.appendChild(myUkbutton);
}


/* Opgave 3*/
// din kode her

const myListElement = document.getElementById("userSelect");
const myPostElement = document.getElementById("userPosts");
    //entry point
    getUsers("https://jsonplaceholder.typicode.com/users");

    // ya polojila suda kopi koda , ya neponela koda nado sprasit kak polzovatsya s etim kodam toest znachenie etih kodov

    // get user list from api

    function getUsers(myUserURI) {
    fetch(myUserURI)
        .then((response) => {
        return response.json();
        })
        .then((data) => {
        setupUserSelection(data);
        //getPosts(myPostURI);
        })
        .catch((error) => {
        console.error(error);
        });
    }

    // show users in select

    function setupUserSelection(myUserList) {
    let mySelectHTML =
        '<select name="users" id="userSelect" placeholder="vælg bruger">';

    myUserList.map((myUser) => {
        mySelectHTML += `<option value="${myUser.id}">${myUser.name}</option>`;
    });

    mySelectHTML += "  </select>";
    myListElement.innerHTML = mySelectHTML;
    myListElement.addEventListener("change", (e) => {
        getPosts(e.target.value);
    });

    // show posts for user 1
    getPosts(1);
    }

    // get user posts from api with user id
    function getPosts(myId) {
    let myPostURI = `https://jsonplaceholder.typicode.com/posts?userId=${myId}`;
    fetch(myPostURI)
        .then((response) => {
        return response.json();
        })
        .then((data) => {
        showPosts(data);
        })
        .catch((error) => {
        console.error(error);
        });
    }

    //show user posts

    function showPosts(myPosts) {
    let myPostHTML = "";
    myPosts.map((myPost) => {
        myPostHTML += `<h3>${myPost.title}"</h3><p>${myPost.body}</p>`;
    });

    myPostElement.innerHTML = myPostHTML;
    }


//entry point
getUsers("https://jsonplaceholder.typicode.com/users");
