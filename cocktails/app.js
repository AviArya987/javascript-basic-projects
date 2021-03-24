// import showDrinks from './src/presentDrinks.js';
const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error("no element selected");
};

const fetchDrinks = async (url) =>{
	try{
		const response = await fetch(url);
		const data = await response.json();
		return data;
	}
	catch(err){
		console.log(err);
	}
};

URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a';

const showDrinks = async(url) =>{
	const data = await fetchDrinks(url);
	console.log(data);
	displayDrinks(data);
	// console.log(section);
};

const displayDrinks = ({ drinks }) =>{
	const section = getElement('.section-center');
	const title = getElement('.title');
	const loading = getElement('.loading');
	if(!drinks) {
		loading.classList.add('hide-loading');
		title.textContent = 'sorry no drinks matched your search';
		section.innerHTML = null;
		return;
	}
	const newDrinks = drinks.map((drink) =>{
		const { idDrink:id, strDrink:name, strDrinkThumb:image} = drink;
		return `<a href="drink.html">
          			<article class="cocktail" data-id="${id}">
            			<img src="${image}" alt="cocktail" />
           				<h3>${name}</h3>
         			</article>
        		</a>`
	}).join('');
	// hide loading
	loading.classList.add('hide-loading');
	title.textContent = '';
	section.innerHTML = newDrinks;
	return section;
};

const form = getElement('.search-form');
const input = getElement('[name="drink"]');
form.addEventListener('keyup', function(e){
	e.preventDefault();
	baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
	const value = input.value;
	console.log(value);
	if(!value) return;
	showDrinks(`${baseURL}${value}`);
});

window.addEventListener("DOMContentLoaded",()=>{
	showDrinks(URL);
});
