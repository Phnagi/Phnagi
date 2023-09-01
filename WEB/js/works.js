let navContent1 = document.querySelector("#navContent1");
let navBarInner = document.querySelector(".navBarInner");
let navBarInnerAnimaiton = document.querySelector(".navBarInnerAnimaiton");
let navBar = document.querySelector(".navBar");
let body = document.querySelector("body");
let navColor = document.querySelectorAll(".navColor");
// let navBar2= document.getElementsByClassName("navBar");
let nav =document.querySelector("nav");
let navAfter = window.getComputedStyle(nav,":after")//.getPropertyValue("background-color");
// let navAfter = window.getComputedStyle(navBar,"::after");
let InnerBarLine1 = document.querySelector("#InnerBarLine1");
let InnerBarLine2 = document.querySelector("#InnerBarLine2");
let phoneNavContent = document.querySelector("#phoneNavContent");
let phoneNav = document.querySelector("#phoneNav");



let option1 = document.querySelector(".option1");
let optionContent = document.querySelector(".optionContent");
let optionP = document.querySelector(".optionP");
let tag = document.querySelectorAll(".tag");
let tagA = document.querySelector(".tagA");
let tagB = document.querySelector(".tagB");
let rowImage = document.querySelector(".rowImage");
let seachObjArr =[];
let optionPHtml ="";
let optionHtml = "";
let rowHtml = "";
console.log(tag);
//


let imageData = {

        "攝影":[
            {
                title:"1-34",
                url:"image/1-34.jpg",
                web:"image/1-34.jpg",
                
            },
            {
                title:"1-33",
                url:"image/1-33.jpg",
                web:"image/1-33.jpg",
                
            },
            {
                title:"1-32",
                url:"image/1-32.jpg",
                web:"image/1-32.jpg",
                
            },
            {
                title:"1-31",
                url:"image/1-31.jpg",
                web:"image/1-31.jpg",
                
            },
            {
                title:"1-30",
                url:"image/1-30.jpg",
                web:"image/1-30.jpg",
                
            },
            {
                title:"1-29",
                url:"image/1-29.jpg",
                web:"image/1-29.jpg",
                
            },
            {
                title:"1-28",
                url:"image/1-28.jpg",
                web:"image/1-28.jpg",
                
            },
            {
                title:"1-27",
                url:"image/1-27.jpg",
                web:"image/1-27.jpg",
                
            },
            {
                title:"1-26",
                url:"image/1-26.jpg",
                web:"image/1-26.jpg",
                
            },
            {
                title:"1-25",
                url:"image/1-25.jpg",
                web:"image/1-25.jpg",
                
            },
            {
                title:"1-24",
                url:"image/1-24.jpg",
                web:"image/1-24.jpg",
                
            },
            {
                title:"1-23",
                url:"image/1-23.jpg",
                web:"image/1-23.jpg",
                
            },
            {
                title:"1-22",
                url:"image/1-22.jpg",
                web:"image/1-22.jpg",
                
            },
            {
                title:"1-21",
                url:"image/1-21.jpg",
                web:"image/1-21.jpg",
                
            },
            {
                title:"1-20",
                url:"image/1-20.jpg",
                web:"image/1-20.jpg",
                
            },
            {
                title:"1-18",
                url:"image/1-18.jpg",
                web:"image/1-18.jpg",
                
            },
            {
                title:"1-17",
                url:"image/1-17.jpg",
                web:"image/1-17.jpg",
                
            },
            {
                title:"1-1",
                url:"image/1-1.jpg",
                web:"image/1-1.jpg",
                
            },
            {
                title:"1-2",
                url:"image/1-2.jpg",
                web:"image/1-2.jpg",
            },
            {
                title:"1-3",
                url:"image/1-3.jpg",
                web:"image/1-3.jpg",
            },
            {
                title:"1-4",
                url:"image/1-4.jpg",
                web:"image/1-4.jpg",
            },
            {
                title:"1-5",
                url:"image/1-5.jpg",
                web:"image/1-5.jpg",
            },
            {
                title:"1-6",
                url:"image/1-6.jpg",
                web:"image/1-6.jpg",
            },
            {
                title:"1-7",
                url:"image/1-7.jpg",
                web:"image/1-7.jpg",
            },
            {
                title:"1-8",
                url:"image/1-8.jpg",
                web:"image/1-8.jpg",
            },
            {
                title:"1-9",
                url:"image/1-9.jpg",
                web:"image/1-9.jpg",
            },
            {
                title:"1-10",
                url:"image/1-10.jpg",
                web:"image/1-10.jpg",
            },
            {
                title:"1-11",
                url:"image/1-11.jpg",
                web:"image/1-11.jpg",
            },
            {
                title:"1-12",
                url:"image/1-12.jpg",
                web:"image/1-12.jpg",
            },
            {
                title:"1-13",
                url:"image/1-13.jpg",
                web:"image/1-13.jpg",
            },
            {
                title:"1-14",
                url:"image/1-14.jpg",
                web:"image/1-14.jpg",
            },
            {
                title:"1-15",
                url:"image/1-15.jpg",
                web:"image/1-15.jpg",
            },


        ],
        "平面設計":[
            {
                title:"4-13",
                url:"image/作品/4-13.jpg",
                web:"https://drive.google.com/drive/folders/1VaJGr4XG_Lcv83J720RNo-07Gsj8gq6R?usp=sharing",
            },
            {
                title:"7-10",
                url:"image/作品/7-10.jpg",
                web:"https://drive.google.com/file/d/1utjd0BJPtqDtWkvDN4ARjnBeUEV2B-gN/view?usp=sharing",
            },
            {
                title:"7-9",
                url:"image/作品/7-9.jpg",
                web:"https://drive.google.com/file/d/12mxe02IY5PSEX07MKmNDRm6udu2oZjn1/view?usp=sharing",
            },
            {
                title:"7-8",
                url:"image/作品/7-8.jpg",
                web:"https://drive.google.com/file/d/1_4PzPAik5kyAxQUe8EhZiVXpNpgOqVN5/view?usp=sharing",
            },
            {
                title:"7-7",
                url:"image/作品/7-7.jpg",
                web:"https://drive.google.com/file/d/11VJWuMD_OLwLC5NGk4wzLI8CwRgVWBRY/view?usp=sharing",
            },
            {
                title:"7-6",
                url:"image/作品/7-6.jpg",
                web:"https://drive.google.com/file/d/16j0jn02F5ZTYfBZVrCsLxPG_OOBNTYp2/view?usp=sharing",
            },
            {
                title:"7-5",
                url:"image/作品/7-5.jpg",
                web:"https://drive.google.com/file/d/1s2qZGiHtb8VfgOBMyHfjb3HHAte7KaB8/view?usp=sharing",
            },
            {
                title:"7-4",
                url:"image/作品/7-4.jpg",
                web:"https://drive.google.com/file/d/1J-KRJVi1oY4l0nOk5trKu8ozDwphAPYL/view?usp=sharing",
            },
            {
                title:"7-3",
                url:"image/作品/7-3.jpg",
                web:"https://drive.google.com/file/d/1iF0KgPf2MStYOtoKWAvIVuuzyipjobDt/view?usp=sharing",
            },
            {
                title:"7-2",
                url:"image/作品/7-2.jpg",
                web:"https://drive.google.com/file/d/1E4XCxi-Bxt416lK8ZjI9I_yu5wbUNy_P/view?usp=sharing",
            },
            {
                title:"7-1",
                url:"image/作品/7-1.jpg",
                web:"https://drive.google.com/file/d/1z27jVMPrUbeH0rcJzSjmCbWGX0DZKzi0/view?usp=sharing",
            },
            {
                title:"4-2",
                url:"image/作品/4-2.jpg",
                web:"https://drive.google.com/file/d/1SXZMcGsEQHkubqeGFCgJo-SVUNKJtrVc/view?usp=sharing",
            },
            {
                title:"4-1",
                url:"image/作品/4-1.jpg",
                web:"https://drive.google.com/file/d/12Ih-Fa8RbomD81x7ka9OiIfgQdeqlWLt/view?usp=sharing",
            },


        ],        
        "網頁設計":[
            {
                title:"6-15",
                url:"image/WebDesign/6-15.jpg",
                web:"https://drive.google.com/drive/folders/1cru7l4s-cc_tNsJxdf2D1-bWbS4IhCAH?usp=sharing",
            },
            {
                title:"3-2",
                url:"image/DSC_2969.jpg",
                web:"https://drive.google.com/file/d/1iVFoiC7YsKudh1K2GNvEE0ienw9Gq8Jz/view?usp=sharing",
            }
        ],






}
console.log("最初" + imageData.攝影);
domBegin(imageData.攝影);


let imgClick = document.querySelectorAll(".img-fluid");//分頁照片


tag.forEach((e) => {
    // console.log(this);
    e.addEventListener("click",() =>{
        
        console.log(e);
        console.log(e.innerText);
        seachTag(e.innerText);
        optionChange(e.innerText);
        console.log("1"+tagA);
        
    });
});
function optionChange(e){
    let optionPHtml ="";
    let optionHtml = "";
    if (e == "平面設計"){
        // optionPHtml = `<p class="optionP tag" value=${e}>${e}</p>`;
        // optionHtml = `
        //     <p class="tag" value="網頁設計">網頁設計</p>
        //     <p class="tag" value="攝影">攝影</p>
        // `;
        // optionP.innerHTML =optionPHtml;
        // optionContent.innerHTML =optionHtml;
        optionP.innerText=e;
        tagA.innerText="網頁設計";
        tagB.innerText="攝影";
    }else if (e == "攝影"){
        // optionPHtml = `<p class="optionP tag" value=${e}>${e}</p>`;
        // optionHtml = `
        //     <p class="tag" value="平面設計">平面設計</p>
        //     <p class="tag" value="網頁設計">平面設計</p>
        // `;
        // optionP.innerHTML =optionPHtml;
        // optionContent.innerHTML =optionHtml;
        optionP.innerText=e;
        tagA.innerText="平面設計";
        tagB.innerText="網頁設計";
    }else if (e == "網頁設計"){
        // optionPHtml = `<p class="optionP tag" value=${e}>${e}</p>`;
        // optionHtml = `
        //     <p class="tag" value="攝影">攝影</p>
        //     <p class="tag" value="平面設計">平面設計</p>
        // `;
        // optionP.innerHTML =optionPHtml;
        // optionContent.innerHTML =optionHtml;
        optionP.innerText=e;
        tagA.innerText="攝影";
        tagB.innerText="平面設計";
    };
    
}
function domRender(seachObjArr){
    console.log(seachObjArr);
    console.log(seachObjArr.length);
    // for(i = 0 ; i < seachObjArr.length; i++){
    //     console.log(i);
    // };
    seachObjArr.forEach((e) => {
        console.log(e.url);
        rowHtml =rowHtml + `                    
        <div class="col-12 d-flex justify-content-center imageBox">
            <div class="image img-1">
                <img class="img-fluid" src="${e.url}" alt="${e.web}" >
            </div>
        </div>`;
        // console.log(rowHtml);
    });
    rowImage.innerHTML = rowHtml ;
}

function domBegin(e){
    e.forEach((e) => {
        console.log(e.url);
        rowHtml =rowHtml + `                    
        <div class="col-12 d-flex justify-content-center imageBox">
            <div class="image img-1">
               
                <img class="img-fluid" src="${e.url}" alt="${e.web}" >
            </div>
        </div>`;
        // console.log(rowHtml);
    });
    rowImage.innerHTML = rowHtml ;
}

function seachTag(e){
    console.log(e);
    seachObjArr = imageData[e];
    rowHtml = "";
    console.log(seachObjArr);
    domRender(seachObjArr);
    imgClickOn();
};




function imgClickOn(){
    imgClick = document.querySelectorAll(".img-fluid");
    imgClick.forEach((e) => {
        e.addEventListener("click" , () => {
            console.log(e.alt);
            window.open(e.alt, 'new');
    
        })
    });
}
imgClickOn();












//video
// let videoContainer = document.querySelector("#videoContainer");
// const videoContainerInfo = window.videoContainer.getBoundingClientRect();
let windowHeight = window.innerHeight;
let imageBox = document.querySelectorAll(".imageBox");

console.log(imageBox.length);
let containerBoxh = imageBox.length * 603 + 91 + 48 ;
console.log(containerBoxh);


let homepageContainer6 = document.querySelector("#homepageContainer6");
const homepageContainer6Info = window.homepageContainer6.getBoundingClientRect();
let homepageContainer6H = homepageContainer6Info.height ;

let imageBox1 = imageBox[0];
console.log(imageBox1);
const imageBoxInfo = imageBox1.getBoundingClientRect();
let imageBoxH = imageBoxInfo.height ;

console.log(homepageContainer6H);
console.log(imageBoxH);

let all2 = homepageContainer6H + containerBoxh - windowHeight ;
let scorllPercent = this.scrollY / all2;
function calcH() {
    homepageContainer6H = homepageContainer6Info.height ;
    imageBoxH = imageBoxInfo.height ;
    imageBox = document.querySelectorAll(".imageBox");
    containerBoxh = imageBox.length * imageBoxH  + 48 + 200;
    all2 = /*homepageContainer6H +*/ containerBoxh - windowHeight ;
    scorllPercent = this.scrollY / all2;
    console.log("homepageContainer6H"+homepageContainer6H);
    console.log("imageBoxH"+imageBoxH);
    console.log(scorllPercent);
    return scorllPercent ;
}
calcH();


window.addEventListener("scroll" , () => {

    calcH();
    wdNav();
});
// let containerBox = document.querySelector(".containerBox");
// const containerBoxInfo = window.containerBox.getBoundingClientRect();
// let containerBoxH = containerBoxInfo.height ;
// console.log(containerBoxH);

//nav
phNav();
wdNav();
window.addEventListener("resize" , () => {
        phNav();
        calcH();
        wdNav();
});





function phNav(){

    if(document.documentElement.clientWidth < 1200){
        phoneNav.style="display:flex";
    }else{
        phoneNav.style="display:none";
    }

};
console.log("calc" + calcH());
function wdNav(){
    
    // if(document.documentElement.clientWidth < 1200){
    //     navBar.classList.remove("navBarOpen");
    // }else{
    //     if( calcH() > 0.62){
    //         navBar.classList.remove("navBarOpen");
    //     }else{
    //         navBar.classList.add("navBarOpen");
    //     }
    //     // navBar.classList.add("navBarOpen");
        
    // }

    if(document.documentElement.clientWidth > 1200){
        // navBar.classList.add("navBarOpen");
        if( calcH() > 1.07){
            navBar.classList.remove("navBarOpen");
        }else{
            navBar.classList.add("navBarOpen");
        }
    }else{
        navBar.classList.remove("navBarOpen");
    }

}

tag.forEach((e) => {
    // console.log(this);
    e.addEventListener("click",() =>{
        console.log("hkjijijji");
        
        calcH();
      
        
    });
});