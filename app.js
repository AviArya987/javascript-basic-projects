const URl = 'https://randomuser.me/api/';
const btn = document.querySelector('.btn');
const title = document.querySelector('.user-title');
const value = document.querySelector('.user-value');
const img = document.querySelector('.user-img');
const btns = [...document.querySelectorAll('.icon')];

const getUser = function(){
	fetch(URl).then((data)=>data.json())
	.then((response)=>{
		const person = response.results[0];
		console.log(person);
		displayUser(person);
	})
	.catch((err)=>console.log(err));
};

const displayUser = (person) =>{
	console.log(person);
		const { phone, email } = person;
		const { large:image } = person.picture;
		const { password } = person.login;
		const { name:{first} } = person;
		const { name:{last} } = person;
		const { age } = person.dob.age;
		const { street } = person.location;
	img.src = image;
	value.textContent = `${first} ${last}`;
	title.textContent = `My name is`;
	btns[0].classList.add('active');
	btns.forEach((btn)=>{
		const label = btn.dataset.label;
		btn.addEventListener('click',()=>{
			console.log(label);
			title.textContent = `My ${label} is`;
			value.textContent = person[label];
			btns.forEach((btn)=>btn.classList.remove('active'));
			btn.classList.add('active');
		});
	});
};

// const showUser = ()=>{
// 	const person = getUser();
// 	console.log(person);
// 	displayUser(person);
// };

window.addEventListener('DOMContentLoaded', getUser);

