const customerReviews = [
    {
        id: 1,
        name: "sandy cook",
        location: "lisbon, portugal",
        img: "img/1.jpg",
        stars: 4,
        message: "Vivamus nec diam maximus, facilisis nunc sed, eleifend risus. Quisque posuere consectetur massa, condimentum pretium leo auctor tristique. Sed enim elit, rhoncus sit amet euismod nec, egestas ac lectus."
    },

    {
        id: 2,
        name: "james harden",
        location: "alberta, canada",
        img: "img/2.jpg",
        stars: 2,
        message: "Cras ultricies ut nulla ut elementum. Phasellus semper imperdiet porttitor. Duis sed risus ornare, pulvinar quam eu, facilisis lorem. Nulla facilisi. "
    },

    {
        id: 3,
        name: "james harden",
        location: "alberta, canada",
        img: "img/3.jpg",
        stars: 3,
        message: "Morbi sit amet erat at risus aliquet consectetur. Sed imperdiet sapien ac augue rutrum sodales. Integer interdum dolor in erat rutrum, eget varius ante pharetra. "
    },

    {
        id: 4,
        name: "james harden",
        location: "alberta, canada",
        img: "img/4.jpg",
        stars: 2,
        message: "Sed enim elit, rhoncus sit amet euismod nec, egestas ac lectus. Ut at est imperdiet, ullamcorper ante non, lobortis turpis. Pellentesque eget tempus arcu. Maecenas non tortor sed mi consectetur convallis sit amet eget tellus. "
    },
]

//get all variables
const image = document.getElementById("image");
const customerName = document.getElementById("customer-name");
const address = document.getElementById("location");
const message = document.getElementById("review");
const rating = document.getElementsByClassName("stars");


//get buttons 
const nextBtn = document.querySelector(".material-icons.right");
const prevBtn = document.querySelector(".material-icons.left");


//set first item 
let currentItem = 0


//load first item to window object

window.addEventListener('DOMContentLoaded', function() {
    displayCustomer(currentItem);

})



function displayCustomer (customer) {
    const item = customerReviews[customer];    
    customerName.textContent = item.name;
    image.src = item.img;
    address.textContent = item.location;
    message.textContent = item.message;

    
}




function starRating () {
    let star = currentItem.star;
    for (let star in customerReviews) {
        if (star.stars = 1) {
            rating[0].classList.add('checked')
        } else if (star.stars = 2) {
            rating[0, 1].classList.add('checked')
        } else if (star.stars = 3) {
            rating[0, 1, 2].classList.add('checked')
        } else if (star.stars = 4) {
            rating[0, 1, 2, 3].classList.add('checked')
        } else if (star.stars = 5) {
            rating[0, 1, 2, 3, 4].classList.add('checked')
        }        
    }    
}

nextBtn.addEventListener("click", function() {
    currentItem++;
    if (currentItem > customerReviews.length - 1){
        currentItem = 0;
    }
    displayCustomer(currentItem);
    starRating();
    
})

prevBtn.addEventListener("click", function() {
    currentItem--;
    if (currentItem < 0){
        currentItem = customerReviews.length - 1;
    }
    displayCustomer(currentItem);
    starRating();
})