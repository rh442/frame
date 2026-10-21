/* 
    Assignment: Frame
    1. Pick a free, public API (e.g. NASA, Dog API, PokéAPI, etc.)
    2. In getData(), use fetch() to fetch data from the API
    3. Insert 10+ li elements into the .frame element 
    https://random-d.uk/api
*/

const frame = document.querySelector('.frame');
let currentItem = 0;
let totalItems = 10; // change this if you do more than 10 items

async function getData() {
    try {

        for (let i = 0; i < totalItems;) {
            const response = await fetch('https://random.dog/woof.json');
            const data = await response.json();


            if (data.url.endsWith('.jpg')) {
                console.log(data.url)
                const list_item = document.createElement('li');
                const dog_pic = document.createElement('img');

                dog_pic.src = data.url;


                list_item.appendChild(dog_pic);
                if (i === 0) {
                    list_item.classList.add('active');
                }
                frame.appendChild(list_item);

                i++;
            }

        }
    }
    catch (error) {
        console.log(error);
        frame.innerText = 'Something went wrong, try again later.';
    }
}

function goToItem(index) {
    const items = frame.querySelectorAll('li');
    items[currentItem].classList.remove('active');
    currentItem = index;
    items[currentItem].classList.add('active');
}

frame.addEventListener('click', function () {
    const nextItem = (currentItem + 1) % totalItems;
    goToItem(nextItem);
});

getData();