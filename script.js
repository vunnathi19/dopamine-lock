// script.js

let xp = 0;

const loader = document.getElementById('loader');
const authModal = document.getElementById('authModal');
const profileModal = document.getElementById('profileModal');
const app = document.getElementById('app');

setTimeout(function(){

loader.style.display = 'none';

authModal.style.display = 'flex';

},2000);

document.getElementById('signupBtn').addEventListener('click',function(){

const user = document.getElementById('username').value;
const pass = document.getElementById('password').value;

if(user === '' || pass === ''){

alert('Fill all fields');

return;

}

localStorage.setItem('user',user);
localStorage.setItem('pass',pass);

authModal.style.display = 'none';

profileModal.style.display = 'flex';

});

document.getElementById('signinBtn').addEventListener('click',function(){

const user = document.getElementById('username').value;
const pass = document.getElementById('password').value;

if(
user === localStorage.getItem('user')
&&
pass === localStorage.getItem('pass')
){

authModal.style.display = 'none';

app.style.display = 'block';

}
else{

alert('Wrong credentials');

}

});

document.getElementById('continueBtn').addEventListener('click',function(){

const name = document.getElementById('name').value;

const goal = document.getElementById('goal').value;

if(name === '' || goal === ''){

alert('Fill all profile details');

return;

}

profileModal.style.display = 'none';

app.style.display = 'block';

});

document.getElementById('addTaskBtn').addEventListener('click',function(){

const task = document.getElementById('taskInput').value;

if(task === ''){

alert('Enter task');

return;

}

const div = document.createElement('div');

div.className = 'task';

div.innerHTML = `

<h3>${task}</h3>

<p class="status">Pending</p>

<input class="percent" type="number" placeholder="Completion %">

<br><br>

<input class="proof" type="file">

<div class="progress">
<div class="fill"></div>
</div>

<br>

<button class="submitBtn">Submit Task</button>

`;

const submitBtn = div.querySelector('.submitBtn');

submitBtn.addEventListener('click',function(){

const percent =
Number(div.querySelector('.percent').value);

const proof =
div.querySelector('.proof').files.length;

if(proof === 0){

alert('Upload proof');

return;

}

const fill = div.querySelector('.fill');

fill.style.width = percent + '%';

if(percent >= 80){

div.classList.add('finished');

div.querySelector('.status').innerText = 'Completed';

xp = xp + 50;

document.getElementById('xp').innerText = xp;

alert('+50 XP earned');

}
else{

div.classList.add('unfinished');

div.querySelector('.status').innerText = 'Unfinished';

alert('Completion below 80%');

}

});

document.getElementById('taskContainer').appendChild(div);

document.getElementById('taskInput').value = '';

});
