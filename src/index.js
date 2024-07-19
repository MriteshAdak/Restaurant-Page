// js for restaurant page

import createHome from '../home';
import createMenu from '../menu';
import createAbout from '../about';
import './style.css'

const footer = document.createElement('footer');
document.body.appendChild(footer);
const spanFoot = document.createElement('span');
footer.appendChild(spanFoot);
spanFoot.innerHTML = 'Photo by <a href="https://unsplash.com/@oriento?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">五玄土 ORIENTO</a> on <a href="https://unsplash.com/photos/white-flowers-on-black-ceramic-vase-dPUWgZLsOk8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>'

const navItems = document.querySelectorAll('button');
navItems.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        takeMeThere(event);
    });
});

createHome();

function takeMeThere(event)
{
    const btn = event.target.textContent;
    if(btn == 'Home')
        createHome();
    else if(btn == 'Menu')
        createMenu();
    else if(btn == 'About')
        createAbout();
}

console.log("working");
