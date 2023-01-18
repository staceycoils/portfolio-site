console.log("BEET")

let test = true 

const htmlAll = document.getElementsByTagName("html")[0];
const projectsList = document.getElementById("projects_list");

projectsList.addEventListener("click",(e)=>{
  e.target.className;
  if (e.target.className === 'project_preview') {
    expandProject(e.target.id)
  } else {
    console.log(e.target)
  }
})






function expandProject(id) {
  const selected = document.getElementById(id);
  selected.style.visibility = "visible";
  selected.style.animation = "fadeIn 300ms";
}

function removeProject(id) {
  const selected = document.getElementById(id);
  selected.style.animation = "fadeOut 300ms";
  setTimeout(()=>{
    selected.style.visibility = "hidden";
  }, 300)
}

const ticker = document.getElementById('ticker');

document.getElementById('contact_mail').addEventListener('mouseenter',()=>{
  ticker.innerHTML = 'Email';
})
document.getElementById('contact_mail').addEventListener('mouseleave',()=>{
  ticker.innerHTML = '';
})

document.getElementById('contact_cv').addEventListener('mouseenter',()=>{
  ticker.innerHTML = 'View My CV';
})
document.getElementById('contact_cv').addEventListener('mouseleave',()=>{
  ticker.innerHTML = '';
})

document.getElementById('contact_github').addEventListener('mouseenter',()=>{
  ticker.innerHTML = 'Github Page';
})
document.getElementById('contact_github').addEventListener('mouseleave',()=>{
  ticker.innerHTML = '';
})

document.getElementById('contact_linkedin').addEventListener('mouseenter',()=>{
  ticker.innerHTML = 'LinkedIn Page';
})
document.getElementById('contact_linkedin').addEventListener('mouseleave',()=>{
  ticker.innerHTML = '';
})


const menuButton = document.getElementById('menu_button');
const menuExt = document.getElementById('menu_extended');
const menuToggle = document.getElementById('menu_toggle');

menuButton.addEventListener('click',()=>{
  menuToggle.checked ? menuToggle.checked = false : menuToggle.checked = true;
})

const displayProjects = document.getElementById('Projects_Display');
const displaySkills = document.getElementById('Skills_Display');
const displayOther = document.getElementById('Other_Display');
const displayContact = document.getElementById('Contact_Display');

const six = displaySkills.getBoundingClientRect()

const menu = document.getElementById("menu_extended");

function highlightMenu(num) {
  menu.children[0].children[num].style.backgroundColor = "blue"
}
function unhighlightMenu(num) {
  menu.children[0].children[num].style.backgroundColor = ""
}

const menuHighlighter = document.getElementById("menu_highlighter");
document.addEventListener('scroll',(e)=>{
  if (window.innerHeight/2 < displayProjects.getBoundingClientRect().top) {
    menuHighlighter.style.transform = 'translateY(70px)';
  }
  else if (window.innerHeight/2 < displayProjects.getBoundingClientRect().bottom) {
    menuHighlighter.style.transform = 'translateY(135px)';
  }
  else if (window.innerHeight/2 < displaySkills.getBoundingClientRect().bottom) {
    menuHighlighter.style.transform = 'translateY(200px)';
  }
  // else if (window.innerHeight/2 < displayOther.getBoundingClientRect().bottom) {
  //   menuHighlighter.style.transform = 'translateY(265px)';
  // }
  else if (window.innerHeight/2 < displayContact.getBoundingClientRect().bottom) {
    menuHighlighter.style.transform = 'translateY(265px)';
  }
})
