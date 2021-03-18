// import showDrinks from './src/presentDrinks.js';
const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error("no element selected");
};

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a';

const fetchDrinks = async (url) =>{
	try{
		const response = await fetch(url);
		const data = await response.json();
		return data;
	}catch(err){
		console.log(err);
	}
};

const showDrinks = async(url) =>{
	const data = await fetchDrinks(url);
	console.log(data);
};
const displayDrinks = ({ drinks }) =>{
	const section = get('.section-center');
};

window.addEventListener("DOMContentLoaded",()=>{
	showDrinks(URL);
});
