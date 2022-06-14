//the left sidebar part

const menuItems = document.querySelectorAll('.menu-item');

/*here all of the menu-items have added the class of active and therefore all
of then look similar but then again we want to remove the active class from the
 other menu-items when one menu-item is clicked therefore making it the only one with the
active class . this is done in the foloowing manner*/

const changeActiveClass = () =>{
    menuItems.forEach(item =>{
        item.classList.remove('active');
    })
}  /*we will therefore call this function at the top so that all the active is removed 
    from the one that is clicked*/

menuItems.forEach(item =>{
    item.addEventListener('click', () =>{ 
        changeActiveClass();
        item.classList.add('active');

        if(item.id !='notification'){
            document.querySelector('.notification-popup').style.display = 'none';
        }else{
            document.querySelector('.notification-popup').style.display = 'block';
            document.querySelector('#notification .notification-count').style.display = 'none';
        }
    })
})

/*========================================MESSAGES PART========================*/
const messageNotification = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');

messageNotification.addEventListener('click', () =>{
    messages.style.boxShadow = '0 0 2rem var(--color-primary)';
    messageNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() =>{
        messages.style.boxShadow = 'none';
    }, 2000);
})
/*filtering messages search so that when we key in the value we neeed we gets suggestive popups*/

const messageFilter = messages.querySelectorAll('.message-part');
const messageSearch = document.querySelector('#message-search');

const searchMessage = () =>{
    const val = messageSearch.value.toLowerCase();
    messageFilter.forEach(item =>{
        let name = item.querySelectorAll('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            item.style.display = 'flex';
        } else{
            item.style.display = 'none';
        }
    })
}
messageSearch.addEventListener('keyup', searchMessage);

/*=======================================================================================================
                                    THEME SECTION 
========================================================================================================*/
/*first we need to grad the theme menu item so that when we click on it it opens the
  theme modal which in it we will be able to customize our properties*/

  const theme = document.querySelector('#theme');
/*then we need to also grab the theme modal which will be displayed when we click the theme*/
  const themeModal = document.querySelector('.customize-theme');

/*and because the modal is under display: none; we need to change it to display: grid; 
 which it was previously set on when we click the theme on the sidebar */

 const openThemeModal = () =>{
     themeModal.style.display = 'grid';
 }
 theme.addEventListener('click', openThemeModal);

/*this other part enables us to close the modal because we will also need to close it when we 
 are not using it . there whenever we click outside the card region which in this case is the 
 "customize-theme" region the modal should close*/

const closeThemeModal = (e) =>{
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';
    }
}
themeModal.addEventListener('click', closeThemeModal);

/*after this now we go to the font size of our themeModal so that we can be able to customize it
 therefore we want whenever we click on the different spans of the fontsize we want to be able 
 to change the fontsize of the page .hence we will have to add an event listener and go through
 the diffrent spans using the forEach loop*/

const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root')

const removeSizeSelector = () =>{
    fontSizes.forEach(size =>{
        size.classList.remove('active');
    })
}

fontSizes.forEach(size =>{
    size.addEventListener('click', () =>{
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');

        if(size.classList.contains('font-size1')){
            fontSize = '10px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty(' --sticky-top-right', '5.4rem');
        } else if(size.classList.contains('font-size2')){
            fontSize = '13px';
            root.style.setProperty(' --sticky-top-left', '5.4rem');
            root.style.setProperty(' --sticky-top-right', '-7rem');
        } else if(size.classList.contains('font-size3')){
            fontSize = '16px';
            root.style.setProperty(' --sticky-top-left', '-2rem');
            root.style.setProperty(' --sticky-top-right', '-17rem');
        } else if(size.classList.contains('font-size4')){
            fontSize ='19px';
            root.style.setProperty(' --sticky-top-left', '-5rem');
            root.style.setProperty(' --sticky-top-right', '-25rem');
        } else if(size.classList.contains('font-size5')){
            fontSize = '22px';
            root.style.setProperty(' --sticky-top-left', '-12rem');
            root.style.setProperty(' --sticky-top-right', '-35rem');
        }
         /*we need now to change the main font size of the html element*/
    document.querySelector('html').style.fontSize = fontSize;
    })
})

/*after we are done with the changing of the font sizes we now head on to the 
 background part where we will change the primary colors of our page */

const colorPalette = document.querySelectorAll('.choose-color span');

const removeColorSelector = () =>{
    colorPalette.forEach(color =>{
        color.classList.remove('active');
    })
}


colorPalette.forEach(color =>{
    color.addEventListener('click', () =>{
        let primaryHue;
        removeColorSelector();
        color.classList.toggle('active');

        if(color.classList.contains('color1')){
            primaryHue = 252;
        } else if(color.classList.contains('color2')){
            primaryHue = 52;
        } else if(color.classList.contains('color3')){
            primaryHue = 352;
        } else if(color.classList.contains('color4')){
            primaryHue = 152;
        } else if(color.classList.contains('color5')){
            primaryHue = 202;
        }
        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})

/*we are now in the teritory of the background part */
const Bg1 = document.querySelector('.bg1');
const Bg2 = document.querySelector('.bg2');
const Bg3 = document.querySelector('.bg3');

let lightColorLightness;
let darkColorLightness;
let whiteColorLightness;
let primaryColor;

const changeBG = () =>{
    root.style.setProperty('--light-color-lightnness', lightColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness)
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--primary-color', primaryColor);
}

Bg1.addEventListener('click', () =>{
    darkColorLightness = '17%';
    whiteColorLightness = '100%';
    lightColorLightness = '80%';
    changeBG();

    Bg1.classList.add('active');

    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
})

Bg2.addEventListener('click', () =>{
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';
    changeBG();

    Bg2.classList.add('active');

    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
})

Bg3.addEventListener('click', () =>{
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0';

    changeBG();

    Bg3.classList.add('active');

    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
})