function homeTab() {
    const headline = document.createElement('h2');
    headline.innerHTML = "Burgers";

    const image = document.createElement('img');
    image.src = '../img/restaurant.jpg';

    const copy = document.createElement('p');
    copy.innerHTML = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, repellendus suscipit ipsam odio perferendis quam, praesentium pariatur consequatur provident inventore, qui consequuntur adipisci at error! Sint cumque dignissimos sapiente ex.';

    document.getElementById('tab_content').appendChild(headline);
    document.getElementById('tab_content').appendChild(image);
    document.getElementById('tab_content').appendChild(copy);
}

export { homeTab } ;