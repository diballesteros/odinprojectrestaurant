function menuTab() {
    const headline = document.createElement('h2');
    headline.innerHTML = "Today's Menu";

    const menuList = document.createElement('ul');

    const listItemOne = document.createElement('li');
    const textNodeOne = document.createTextNode('Hamburger');
    listItemOne.appendChild(textNodeOne);

    const listItemTwo = document.createElement('li');
    const textNodeTwo = document.createTextNode('Cheeseburger');
    listItemTwo.appendChild(textNodeTwo);

    const listItemThree = document.createElement('li');
    const textNodeThree = document.createTextNode('Bacon burger');
    listItemThree.appendChild(textNodeThree);

    menuList.appendChild(listItemOne);
    menuList.appendChild(listItemTwo);
    menuList.appendChild(listItemThree);

    document.getElementById('tab_content').appendChild(headline);
    document.getElementById('tab_content').appendChild(menuList);
}

export { menuTab };