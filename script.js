document.addEventListener("DOMContentLoaded", function () {
    const mainListItem = document.querySelector(".main-list-item");
    const subList = mainListItem.querySelector(".sub-list");
    const mainListItem1 = document.querySelector(".main-list-item1");
    const subListItem = document.querySelector(".sub-list1");


    let isHoveringMain = false;
    let isHoveringSub = false;

    let isHoveringMain1 = false;
    let isHoveringSub1 = false;




    mainListItem1.addEventListener("mouseenter", () => {
        isHoveringMain1 = true;
        showSubList1();
        subListItem.style.color = " rgb(6, 3, 24)";
    })


    subListItem.addEventListener("mouseenter", () => {
        isHoveringSub1 = true;
        showSubList1();
        mainListItem1.style.color = " rgb(6, 3, 24)";
    })

    mainListItem1.addEventListener("mouseleave", () => {
        isHoveringMain1 = false;
        hideSubList1();

    })

    subListItem.addEventListener("mouseleave", () => {
        isHoveringSub1 = false;
        hideSubList1();
        mainListItem1.style.color = "";
    })
    function showSubList1() {
        subListItem.style.opacity = 1;
        subListItem.style.transform = "translateY(0)";
        subListItem.style.pointerEvents = "auto";
    }

    function hideSubList1() {
        if (!isHoveringMain1 && !isHoveringSub1) {
            subListItem.style.opacity = 0;
            subListItem.style.transform = "translateY(-30px)";
            subListItem.style.pointerEvents = "none"
        }
    }


    mainListItem.addEventListener("mouseenter", function () {
        isHoveringMain = true;
        showSubList();

    });

    subList.addEventListener("mouseenter", function () {
        isHoveringSub = true;
        showSubList();
        mainListItem.style.color = " rgb(6, 3, 24)";

    });

    mainListItem.addEventListener("mouseleave", function () {
        isHoveringMain = false;
        hideSubList();


    });

    subList.addEventListener("mouseleave", function () {
        isHoveringSub = false;
        hideSubList();
        mainListItem.style.color = "";

    });


    function showSubList() {

        subList.style.opacity = 1;
        subList.style.pointerEvents = "auto";
        subList.style.transform = "translateY(0)";

    }


    function hideSubList() {

        if (!isHoveringMain && !isHoveringSub) {
            subList.style.opacity = 0;
            subList.style.pointerEvents = "none";
            subList.style.transform = "translateY(-30px)";
        }
    }

    // new nav js


    const scroller = document.querySelector(".page1");
    const showInput = document.querySelector(".input-div1git");
    const nav1 = document.querySelector(".nav1");
    const nav = document.querySelector(".nav");

    let navWidhth = nav1.offsetWidth;
    let sublistWidth = subList.offsetWidth;
    let sublist1Width = subListItem.offsetWidth;
    let sublistTop = subList.offsetTop;
    let sublist1Top = subListItem.offsetTop;
    let sublist1Left = subListItem.offsetLeft;

    let lastScroll = 0;

    window.addEventListener("scroll", () => {
        let scroll = window.scrollY;
        lastScroll = scroll;
        // console.log(lastScroll);
        if (lastScroll >= 500) {
            showInput.style.display = 'flex';
            nav1.style.width = "60%";
            mainListItem.style.position = 'relative';
            mainListItem1.style.position = 'relative';
            subList.style.width = '200%';
            subListItem.style.width = "150%";
            subList.style.top = '100%';
            subListItem.style.top = '100%';
            subListItem.style.left = '10%';
            nav.style.position = 'fixed';
            nav.style.zIndex = 99999;
            nav.style.backgroundColor = "#FFFFFF";
        }
        else if (lastScroll <= 500) {
            mainListItem.style.position = "";
            mainListItem1.style.position = "";
            showInput.style.display = 'none';
            nav1.style.width = `${navWidhth}px`;
            subList.style.width = `${sublist1Width}px`;
            subListItem.style.width = `${sublist1Width}px`;
            subList.style.top = `${sublistTop}px`;
            subListItem.style.top = `${sublist1Top}px`;
            subListItem.style.left = `${sublist1Left}px`;
            nav.style.position = 'relative';
            nav.style.zIndex = "";
            nav.style.backgroundColor = "";

        }
    })


});
document.addEventListener("DOMContentLoaded", () => {
    const arr = document.querySelector(".click");
    const showWrap = document.querySelector(".none-wrap");
    const non = document.querySelectorAll(".none");
    const txtMain = document.querySelector("#show");
    const allTxt = document.querySelectorAll(".input-inner h2");

    let click = false

    arr.addEventListener("click", () => {
        event.stopPropagation();
        btnToggle();
        defultToggle();
       

    })


    function defultToggle() {
        window.addEventListener("click", () => {
            if (click) {
                // console.log("btn clicked");
                arr.style.transform = "rotate(0deg)";
                click = false
                showWrap.style.display = "none";
            }
        })
    }


    function btnToggle() {
        if (!click) {
            // console.log("btn click");
            arr.style.transform = "rotate(180deg)";
            showWrap.style.display = "flex";
            showNon(non);
            click = true
        } else {
            // console.log("btn clicked");
            arr.style.transform = "rotate(0deg)";
            click = false
            showWrap.style.display = "none";
        }
    }


    allTxt.forEach((txt) => {
        txt.addEventListener("click", () => {
            if (txt.id == "show") {
                btnToggle();
                event.stopPropagation();
                defultToggle();
            }
        })

    })


    non.forEach((ele) => {
        ele.addEventListener("click", () => {
            txtMain.innerText = ele.innerText;
            ele.id = "show";
            non.forEach((item) => {
                item.style.fontFamily = "";
                ele.id = "";
            })
            ele.style.fontFamily = "visual-san1";
        });
    })
    let showNon = (non) => {
        non.forEach((ele) => {
            ele.style.display = "flex";
        })
    }
})

document.addEventListener("DOMContentLoaded", () => {
    const filterBtn = document.querySelector(".last");
    const filterToggle = document.querySelector(".fil-toggle");
    const filterPerform = document.querySelector(".filter-serch");
    const bottomUp = document.querySelector(".bottom-last");

    let filterBtnClick = false;
    let isFilterOn = false;


    filterBtn.addEventListener("click", () => {
        filterClick();
        filterOnOff();
        bottomUp1();

    })

    function filterClick() {
        if (!filterBtnClick) {
            filterToggle.style.transform = "rotate(180deg)";
            filterToggle.style.transition = "transform 0.3s ease";
            filterBtnClick = true;
        } else {
            filterToggle.style.transform = "rotate(0deg)";
            filterToggle.style.transition = "transform 0.3s ease";
            filterBtnClick = false;
        }
    }

    function filterOnOff() {
        if (!isFilterOn) {
            filterPerform.classList.remove('filter-off');
            filterPerform.classList.add('filter-on');

            isFilterOn = true;
        } else {
            filterPerform.classList.add('filter-off');
            filterPerform.classList.remove('filter-on');
            isFilterOn = false;
        }
    }

    function bottomUp1() {

        if (!isFilterOn) {
            bottomUp.classList.remove('is-filter-off');
            bottomUp.classList.add('is-filter-on');

        } else {
            bottomUp.classList.add('is-filter-off');
            bottomUp.classList.remove('is-filter-on');


        }
    }

})

document.addEventListener("DOMContentLoaded", () => {
    const profiDetail = document.querySelectorAll(".profile-details");
    const overLay = document.querySelectorAll(".overlay");

    profiDetail.forEach((ele) => {
        ele.addEventListener("mouseenter", () => {
            overLay.forEach((element) => {
                element.style.display = "none";
            })
        })
        ele.addEventListener("mouseleave", () => {
            overLay.forEach((element) => {
                element.style.display = "flex";
            })
        })
    })


})

/*we can also handel this animation play and paused part with css but here i am use js for practice
if you want to controll it using css just simply paste this code in to your css
.scroll:hover{
    animation-play-state=paused;
}*/



document.addEventListener("DOMContentLoaded", () => {
    const scrollContainer1 = document.querySelector(".imageContainer1");
    const scrollContainer2 = document.querySelector(".imageContainer2");


    scrollContainer1.addEventListener("mouseenter", () => {
        scrollContainer1.style.animationPlayState = "paused";
        scrollContainer2.style.animationPlayState = "paused";
    })
    scrollContainer2.addEventListener("mouseenter", () => {
        scrollContainer1.style.animationPlayState = "paused";
        scrollContainer2.style.animationPlayState = "paused";
    })
    scrollContainer1.addEventListener("mouseleave", () => {
        scrollContainer1.style.animationPlayState = "running";
        scrollContainer2.style.animationPlayState = "running";
    })
    scrollContainer2.addEventListener("mouseleave", () => {
        scrollContainer1.style.animationPlayState = "running";
        scrollContainer2.style.animationPlayState = "running";
    })


})
