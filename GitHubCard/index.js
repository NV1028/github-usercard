/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/



/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/


axios.get('https://api.github.com/users/NV1028')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  const followersArray = ['kpoe03','tetondan',
'dustinmyers',
'justsml',
'luishrd',
'bigknell'];

function githubCardCreator(object1){
  let divCard = document.createElement('div');
  let imgEl = document.createElement('img');
  let divInfo = document.createElement('div');
  let h3Name = document.createElement('h3');
  let pUser = document.createElement('p');
  let pLoc = document.createElement('p');
  let pPro = document.createElement('p');
  let proAddressA = document.createElement('a');
  let pFollow = document.createElement('p');
  let pFollowing = document.createElement('p');
  let pBio = document.createElement('p');

  divCard.classList.add('card');
  
  divInfo.classList.add('card-info');
  h3Name.classList.add('name');
  pUser.classList.add('username');
  proAddressA.href = object1.data.html_url;

  divCard.appendChild(imgEl);
  divCard.appendChild(divInfo);
  divInfo.appendChild(h3Name);
  divInfo.appendChild(pUser);
  divInfo.appendChild(pLoc);
  divInfo.appendChild(pPro);
 
  divInfo.appendChild(pFollow);
  divInfo.appendChild(pFollowing);
  divInfo.appendChild(pBio);

  //proAddressA.setAttribute('href', object1.data.html_url);
  
// href = "profile: yadayada"

  imgEl.src = object1.data.avatar_url;
  h3Name.textContent = object1.data.name;
  pUser.textContent = object1.data.login;
  pPro.textContent = "Profile: ";
  pPro.appendChild(proAddressA);
  proAddressA.textContent = object1.data.html_url;
  pLoc.textContent = `Location: ${object1.data.location}`;
  pFollow.textContent = `Followers: ${object1.data.followers}`;
  pFollowing.textContent = `Following: ${object1.data.following}`;
  pBio.textContent = `Bio: ${object1.data.bio}`;
 

  return divCard
}
let masterDiv = document.querySelector('.cards');

console.log(masterDiv);

followersArray.forEach(person => {
  axios.get(`https://api.github.com/users/${person}`)
  .then((response)=> masterDiv.appendChild(githubCardCreator(response)))
})
.catch(error => {
  console.log('Data brokeded', error);
})