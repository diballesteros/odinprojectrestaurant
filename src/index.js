import { homeTab } from './home';
import { contactTab } from './contact';
import { menuTab } from './menu';

function tabSwitch(event) {
    document.getElementById("tab_content").innerHTML = '';

    const tabText = event.target.innerHTML;

    switch (tabText) {
        case 'Home':
            homeTab();
            break;
        case 'Contact':
            contactTab();
            break;
        case 'Menu':
            menuTab();
            break;
        default:
            console.log('tab does not exist');
    }
}

homeTab();

document.getElementById("home").addEventListener("click", tabSwitch);
document.getElementById("contact").addEventListener("click", tabSwitch);
document.getElementById("menu").addEventListener("click", tabSwitch);