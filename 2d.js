let clickedEle;
let docEle;
let index;
let dropOptions = ["portfolioDrop", "wipDrop", "contactDrop"];
let scrollers = ["portfolio", "wip", "contact"];
let clickedScroller

console.log("js connected")

document.getElementById("portfolioDrop").style.backgroundImage = 'url("./public/gradient.png")';

//change dropoptions based on what is visible. 
for (let i = 0; i < dropOptions.length; i++) {
    docEle = document.getElementById(dropOptions[i])
    // console.log(docEle)
    if (docEle.checkVisibility() ) {
    } else {
        dropOptions[i].splice(i, 1);
        scrollers[i].splice(i, 1);
    }
}
console.log(dropOptions)

//on document load set the portfolio one to on

for (let i = 0; i < dropOptions.length; i++) {
    document.getElementById(dropOptions[i]).addEventListener('click', function () {
        clickedEle = dropOptions[i]
        clickedScroller = scrollers[i]
        // console.log("second event listener")
        for (let j = 0; j < dropOptions.length; j++) {
            document.getElementById(dropOptions[j]).style.backgroundImage = '';
            document.getElementById(scrollers[j]).style.display = 'none';
            document.getElementById(clickedEle).style.backgroundImage = 'url("./public/gradient.png")';
            document.getElementById(clickedScroller).style.display = "flex";
        }
    })
}

//prgram the sticky elements if one of the e
//read what the positioning is 
//is there an onscroll

//so we need to figure out which one is like at the top. maybe we do make another 
//go through each of these. start at the second one though. 
//
let num = 1;
let scrollEle;

// document.getElementById("scrollContents").addEventListener("scroll", function () {
//     scrollEle = document.getElementById(sections[num]);
//     console.log("scrool ele: ", scrollEle)
//     var rect = scrollEle.getBoundingClientRect();
//     console.log("rect: ", rect)
//     if (rect.top < 210) {
//         console.log("boing")
//         document.getElementById(sections[num - 1]).style.display = 'none';
//         num++;
//     }
// });

//need to refram it
// if dude recording this is fucking me up so bad
// scroll triggered - read which of the elements are belwo this specified posoition
// then block out all the ones below it depending

//regulates scrolling functionality between different screen lengths


document.getElementById("scrollContents").addEventListener("scroll", function () {

   
 
    //scroller code 1.0
    // for (let i = (rects.length - 1); i > -1; i--) {
    //     //console.log(interact, sculp, twod)
    //     console.log(rects)

    //     if (rects[i] < 210) {
    //         //at the start, i will be 0, then 1, then 2
    //         console.log(sections[i])
    //         for (let j = 1; j <= 4; j++) {
    //             if (sections[i+j]) {
    //                 document.getElementById(sections[i+j]).style.opacity = '100'
    //             }
    //         }
    //         for (let j = 1; j <= 4; j++) {
    //             if (sections[i-j]) {
    //                 document.getElementById(sections[i-j]).style.opacity = '0'
    //             }
    //         }
    //     }
    // }

    // scroll = document.getElementById("contents").getBoundingClientRect().bottom 
    //692 - scroll = m and then you subtract m. so m is negative. 
    //console.log(scroll)
    // let m = -(692 - (document.getElementById("contents").getBoundingClientRect().bottom ))

    //scroller code 2.0
    // if ((692 + m) >= scroll && scroll > (-178 +m)) {
    //     //interactive on
    //     document.getElementById(sections[0]).style.opacity = '100'
    // } else if ((-174 + m) >= scroll && scroll >= (-2005 + m)) {
    //     document.getElementById(sections[0]).style.opacity = '0'
    //     document.getElementById(sections[1]).style.opacity = '100'
    //     console.log("meow")
    //     //sculpture on, interactive off
    // } else if ((-2004 + m) > scroll){
    //     console.log("rawr")
    //     document.getElementById(sections[1]).style.opacity = '0'
    //     //2d art on
    // }

    //people are saying to compare th eelocations of the two elements. so instead of looking at where they are onscfreen, say, if one element overlaps the other, make that one dissapear. 
    //when element is scrolled.
    //go through the list of elements. if two of them are overlapping, hide the earlier one. 
    //overlapping giving them a pretty tall height to avoid weird mistakes. 

    // console.log("the problem: ", document.getElementById("sectionSculpt").offsetTo , document.getElementById("sectionSculpt").scrollTop)
    // console.log("scroll: ", document.getElementById("scrollContents").scrollY)


    let interact = document.getElementById("sectionInteract").getBoundingClientRect().top
    let sculp = document.getElementById("sectionSculpt").getBoundingClientRect().top
    let twod = document.getElementById("section2d").getBoundingClientRect().top 
    let rects = [interact, sculp, twod]
    let sections = ["sectionInteract", "sectionSculpt", "section2d"]

    //scroller code 3.0
    console.log(rects)
    for (let i = rects.length -1; i > -1; i--) {
        //going backward, compare the current value to the one before it. 
        if (rects[i] == rects[i - 1]) {
            document.getElementById(sections[i - 1]).style.opacity = '0'
        }
    }
    for (let i = rects.length -1; i > -1; i--) {
        //going backward, compare the current value to the one before it. 
        if (rects[i] > rects[i - 1]) {
            document.getElementById(sections[i - 1]).style.opacity = '100'
        }
    }

   
});



// reset dropoptions and scroller arrays
dropOptions = ["portfolioDrop", "wipDrop", "contactDrop"];
scrollers = ["portfolio", "wip", "contact"];