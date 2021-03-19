/**
* Start Global Variables


*/
const sections= document.querySelectorAll('section')
const unorderedList = document.querySelector ('ul');
const fragment= document.createDocumentFragment();
/**
* End Global Variables
* Start Helper Functions
*
*/
//Creating of elements using for each on section element
// adding an event listener on the click to scroll into view of a section
sections.forEach ( (section)=> {
const sectionDataNav = section.getAttribute('data-nav');
const newLi = document.createElement('li');
const newLink = document.createElement('a');
const textNode = document.createTextNode(sectionDataNav);

newLink.addEventListener ('click', ()=> {
  section.scrollIntoView({behavior:"smooth"})
})

newLink.appendChild(textNode);
newLi.appendChild(newLink);
fragment.appendChild(newLi);
})
// adding the fragment to the ul
// adding an event listener to the scroll to determine the active section
// also to highlight the navbar with the same section
unorderedList.appendChild(fragment);
window.addEventListener ('scroll', ()=>{
  sections.forEach ((section)=>{
  const rect= section.getBoundingClientRect();
  if (rect.top >= -150 && rect.top <=150){
    sections.forEach((section) => {
      section.style.background ="transparent";

    });
    section.style.background = 'grey';
     section.style.opacity =0.9;

    const allLinks = document.querySelectorAll('a');
    allLinks.forEach((link) => {
      if (section.getAttribute('data-nav')==link.textContent){
        link.style.background ="blue";
        link.style.opacity= 0.8;

      }
      else
      {
        link.style.background="transparent";
      }
    });


  }
})
})

/**
* End Helper Functions
* Begin Main Functions
*
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
* End Main Functions
* Begin Events
*
*/

// Build menu

// Scroll to section on link click

// Set sections as active
