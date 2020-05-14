///Create Data - normally would come from an api but we can hard-code it for now - image courtesy https://randomuser.me/
const profileData = [
  {
    name: 'John Doe',
    age: 35,
    gender: 'male',
    lookingfor: 'female',
    location: 'Boston,MA',
    image: 'https://randomuser.me/api/portraits/men/25.jpg'
  },
  {
    name: 'Jen Smith',
    age: 30,
    gender: 'female',
    lookingfor: 'male',
    location: 'Miami,FL',
    image: 'https://randomuser.me/api/portraits/women/89.jpg'
  },
  {
    name: 'William Johnson',
    age: 38,
    gender: 'male',
    lookingfor: 'female',
    location: 'Lynn,MA',
    image: 'https://randomuser.me/api/portraits/men/30.jpg'
  },
  
];

 ///Init the iterator and pass in the data
const profiles = profileIterator(profileData);

///Profile Iterator

function profileIterator(profiles){
  let nextIndex = 0; //this is our counter
  return { ///return an object with the a next function
    next: function(){
      return nextIndex < profiles.length ? ///here we want to return an object with the value and the done  using ternery operators, done will be either - true or false depending on the nextIndex < profiles.length condition results
      {
        value: profiles[nextIndex++],
        done:false
      } : 
      {done: true}
    }
  };

}

///Call First Profile on load
displayNextProfile();

///Next Event to iterate through the profile
document.getElementById('next').addEventListener('click',displayNextProfile);

//Display Next Profile Function
function displayNextProfile(){
  
  //We need to iterate with profiles.next().value as the profile variable is init(set) to the iterator ;so we need to call next here for the current profile:
  const currentProfile = profiles.next().value;
  console.log(currentProfile);
///Display next profile data
if(currentProfile !== undefined){
  //Display Data (except Image)
  document.getElementById('profileDisplay').innerHTML = `
    <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Gender: ${currentProfile.gender}</li>
        <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
        <li class="list-group-item"> Location: ${currentProfile.location}</li>
    </ul>
  `;
  //Display Image
  document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`
}else{
////If No more profiles
window.location.reload(); ///reload the page to start again
}

}

