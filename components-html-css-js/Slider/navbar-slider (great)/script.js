const anchorTags = document.querySelectorAll('.scrollable-tab-container a');
const rightArrow = document.querySelector('.right-arrow svg');
const leftArrow = document.querySelector('.left-arrow svg');
const tabLists = document.querySelector('.scrollable-tab-container ul');
const leftArrowBox = document.querySelector('.left-arrow');
const rightArrowBox = document.querySelector('.right-arrow');

// Function to add active class on click of anchor tag
anchorTags.forEach(el => {
    el.addEventListener('click', e => {
        e.preventDefault();
        removeActiveClass()
        e.currentTarget.classList.add('active');
    })
})

function removeActiveClass() {
    anchorTags.forEach(el => el.classList.remove('active'))
}


//Fun to manage left and right arrow such as show/hide
const manageArrow = () => {
    if (tabLists.scrollLeft >= 20) { //Little increase in scroll value it shows left arrow
        leftArrowBox.classList.add('active');
    } else {
        leftArrowBox.classList.remove('active');
    }

    let maxScrollValue = tabLists.scrollWidth - tabLists.clientWidth - 20; // only 346
    // scrollWidth : total width of the ul element
    //clientWidth : width of the ul element on screen

    if (tabLists.scrollLeft >= maxScrollValue) {
        rightArrowBox.classList.remove('active');
    } else {
        rightArrowBox.classList.add('active');
    }
}


//For events Listeners of left and right arrow
rightArrow.addEventListener('click', () => {
    tabLists.scrollLeft += 200;
    //NOtE: max scroll value of tablist is 366
    manageArrow();
})

leftArrow.addEventListener('click', () => {
    tabLists.scrollLeft -= 200;
    manageArrow();
})

// tabLists.addEventListener('scroll', () => { //To check scroll value
//     console.log(tabLists.scrollLeft);

// })


//For handling dragging
let dragging = false;

const drag = (e) => {
    if (!dragging) return;
    tabLists.classList.add('dragging');
    tabLists.scrollLeft -= e.movementX;
    // console.log(e.movementX);
    manageArrow();
}


tabLists.addEventListener('mousedown', () => {
    dragging = true;
})


tabLists.addEventListener('mousemove', drag);


document.addEventListener('mouseup', () => {
    dragging = false;
    tabLists.classList.remove('dragging');
})



// conclusion
//max scroll value of tablist is 366
//But we assume that maxScrollValue is 346 to remove active class of right arrow quickly
