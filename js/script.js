
function getQuerySelector(selected){
    return document.querySelector(selected);
}
function getQuerySelectorAll(selected){
    return document.querySelectorAll(selected);
}
/********************************* this function element is toggler ***************************/
var elemToggle = function(elem){
    elem.classList.toggle("active");
}
/************************** while load page , the loading.gif is hidden ************************/ 
const loaderDiv = getQuerySelector(".loader");
window.addEventListener("load",()=>{
    loaderDiv.classList += " hidden";
})
/**************************to click with menu hamburget, aside move to left and width is change ************************/ 
let aside_menu = getQuerySelector(".aside");
let pages = getQuerySelector(".pages")
let Nav_Toggler = getQuerySelector(".nav-toggle");
function nav_toggler(){
    elemToggle(aside_menu);
    elemToggle(pages);
    elemToggle(Nav_Toggler);
}
/************************* to click on the this button, the item move to right *************************/ 
let change_color = getQuerySelector(".change-color");
function Change_Color(){
    elemToggle(change_color);
}

/***********************to click on the menu list item, change the page equals item ***************************/ 
let li = getQuerySelectorAll(".aside-ul > li");
let section = getQuerySelectorAll("section");

function pageChange(index){
    for(var i=0 ; i<li.length ; i++){
        li[i].className = " ";
        section[i].style.display = "none";
        section[i].classList.remove("active");
    }
    li[index].className = "active";
    section[index].className = "active";
    section[index].style.display = "flex";
    nav_toggler();

    // nemodars active skills nemodars

    if(section[2].className == "active"){
        var nemodars = getQuerySelectorAll(".container-skills-page-linearNemodar-container-items-nemodar > div ");
        var spans =getQuerySelectorAll(".container-skills-page-linearNemodar-container-items-nemodar > span")
        nemodars.forEach(nemodar =>{
        var target = nemodar.getAttribute("data-target");
        var c = 0;
        nemodar.style.width = c+"%";
        function bo(){
            c += .25;
            nemodar.style.width = c+"%";
            if(c<target){
                setTimeout(bo,1);

            }else{
                c = target;
            }
        }
        bo();
        })
    }
}


/************************** to click on the colors span, change the stylesheet ************************/ 
var mylink = document.createElement("link");
function Change_Color_CSS(value){
    mylink.setAttribute("type","text/css");
    mylink.setAttribute("rel","stylesheet");
    mylink.setAttribute("href","css/"+value+".css");
    document.head.appendChild(mylink);
}


/************************** text automatic typing ************************/ 
const text = ["توسعه دهنده فرانت اند","طراحی سایت","مدرس خصوصی","طراحی سایت با oracle apex"];
        let count = 0;
        let index = 0;
        let currentText = "";
        let letter = "";
        (function type(){
            if(count === text.length){
                count = 0;
            }
            currentText = text[count];
            letter = currentText.slice(0,++index);
            getQuerySelector('.type-automatic').textContent = letter;
            if(letter.length === currentText.length){
                count++;
                index = 0;
            }
            setTimeout(type,200);
        })()



/************************** if click the image then be scales image ************************/ 
var Img = getQuerySelectorAll(".home-page-image > img");
var Main_Content = getQuerySelector(".main-content");
var Home_Page_Text= getQuerySelector(".home-page-text");
function Show_Board(value){
    Home_Page_Text.style.display = "none";
    var Show_Board_Container = document.createElement("div");
    Show_Board_Container.classList.add("Show-Board-Container");
    Show_Board_Container.append(Img[value]);
    var Close_icon = document.createElement("i");
    Close_icon.setAttribute("class","fa fa-close");
    Show_Board_Container.append(Close_icon);
    Main_Content.append(Show_Board_Container);
    Main_Content.style.overflow = "hidden";
    /* create hover board*/
    var HoverBoard_Container = getQuerySelector(".container-hoverboard");
    HoverBoard_Container.classList.add("active");
    Show_Board_Container.append(HoverBoard_Container);
    


    const colors =["red","rgb(240, 0, 240)","rgb(255, 196, 0)","rgb(0, 217, 0)","rgb(0, 225, 255)"];
    const max_iteration = window.screen.availHeight * window.screen.availWidth / 200 ;
    for( let i =0 ; i<max_iteration ; i++){
        const square = document.createElement("div")
        square.classList.add("box")
    
    
        square.addEventListener("mouseover",function(){setcolor(square)})
        square.addEventListener("mouseout",function(){removecolor(square)})
        HoverBoard_Container.appendChild(square)
        
        function setcolor(element){
            const color = colors[Math.floor(Math.random()*colors.length)];
            element.style.background = color;
        }
           
        function removecolor(element){
            element.style.opacity = "0";
        }
    }

    /* End crate hover board*/

    Close_icon.addEventListener("click",()=>{
        Close_icon.classList.add("active");
        window.location.reload();
    })
}




/******************************************** about page *************************************** */



















/******************************************** skills page *********************************************/
// block of noemodars code, write to line 42





/*********************************************** portfolio ********************************************/
var li_Portfolio = getQuerySelectorAll(".container-portfolio-page-portfolio-topic > ul > li");
var item_Portfolio = getQuerySelectorAll(".container-portfolio-page-portfolio-gallery-item");
for(var i=0;i<li_Portfolio.length;i++){
    li_Portfolio[i].addEventListener("click",function(){
        for(var j=0;j<li_Portfolio.length;j++){
            li_Portfolio[j].classList.remove("active");
        }
        this.classList.add("active");
        const target = this.getAttribute("data-target");
        for(var k=0;k<item_Portfolio.length;k++){
            item_Portfolio[k].style.display = "none";
            if(target == item_Portfolio[k].getAttribute('data-id')){
                item_Portfolio[k].style.display = "block";
            }
            if(target == "all"){
                item_Portfolio[k].style.display = "block";
            }
        }
        
    })
}






/********************************************* contact page.... text cope in the clipboard*************************/

// class alert{
//     let alert = document.querySelector(".alert");
//     let alert_line = document.querySelector(".alert-line");
//     let alertShow;
//     static contact(text){
//         alert.style.translate = "-250px";
//         alert.innerHTML = text + "کپی شد!  ";
//         hideAlert();
//     }
//     static textcontenT(){
        
//     }
//     hideAlert(){
//         alertShow = setTimeout(function(){
//             alert.style.translate = "250px";
            
//         },3000)
//     }
// }
// // function contact_copy(text){
// //     navigator.clipboard.writeText(text);
// //     if(navigator.clipboard.writeText(text)){
// //         alert.style.translate = "-250px";
// //         alert.innerHTML = text + "کپی شد!  ";

//             alert.contact(text);
        
// //     }
// // }









/*********************************************custome oncontextemnu **********************************************/
let contextmenu = getQuerySelector("#custome-contextmenu");

function custome_ContextMenu(event){
    event.preventDefault();
    contextmenu.style.display = "block";
    contextmenu.style.left = "0" + event.pageX + "px";
    contextmenu.style.top = event.pageY + "px";   
}
document.body.addEventListener("click",function(){
    contextmenu.style.display = "none";
})







/********************************* Change theme (light/dark) mode ***************/
let Change_Theme = getQuerySelector(".change-theme");
let Change_Theme_Icon =getQuerySelector(".change-theme svg use");
window.addEventListener("load",function(){
    let localStorageTheme = localStorage.getItem("theme");
    if(localStorageTheme === "dark"){
        document.body.className = "dark"
        Change_Theme_Icon.setAttribute("href","#sun");
    }else{
        document.body.classList =+ "light";
        Change_Theme_Icon.setAttribute("href","#moon");
    }
})
Change_Theme.addEventListener("click",function(){
    document.body.classList.toggle("dark");
    if(document.body.className.includes("dark")){
        localStorage.setItem("theme","dark");
        Change_Theme_Icon.setAttribute("href","#sun");
    }else{
        localStorage.setItem("theme","light");
        Change_Theme_Icon.setAttribute("href","#moon");
    }
})

