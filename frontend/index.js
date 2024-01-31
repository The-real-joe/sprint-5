async function sprintChallenge5() { // Note the async keyword, in case you wish to use `await` inside sprintChallenge5
  // 👇 WORK WORK BELOW THIS LINE 👇

function cardMaker (user , mentor){
  const userCard = document.createElement('div');
  const userName = document.createElement('h3');
  const email = document.createElement('div');
  const mentorCard = document.createElement('h4');
mentorName = document.createElement('ul');


  userCard.classList.add('user-card');
  email.classList.add('email');
  mentorName.classList.add('mentor-name');

  userCard.appendChild(userName);
  userCard.appendChild(email);
  userCard.appendChild(mentorCard);
  mentorCard.appendChild(mentorName);


  userCard.addEventListener('click', () => {
    userCard.classList.toggle('selected')
})
mentorCard.addEventListener('click', () => { 
  mentorCard.classList.toggle('selected')
})
userCard.textContent=learners.fullName, ID
email.textContent=learners.email
mentorCard.textContent= 'Mentors'
mentorName.textContent= mentors.fullName 

return userCard
}
function getUsers (){
  axios.get('http://localhost:3003/api/learners')
.then(res => {
  const learners = res.data
  const userCards = learners.map(learner => cardMaker(learner))
 userCards.forEach(userCard => document.body.appendChild(userCard))
})
}
function getMentors (){
  axios.get('http://localhost:3003/api/mentors')
.then(res=> {
  const mentors = res.data
  const mentorCards = mentors.map(mentor => cardMaker(mentor))
  mentorCards.forEach(mentorCard => document.body.appendChild(mentorCard))
})
}



  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 }
else sprintChallenge5()
