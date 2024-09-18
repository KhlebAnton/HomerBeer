window.Telegram.WebApp.disableVerticalSwipes();

///footer-item
const footerBtns = document.querySelectorAll('.footer-item');
footerBtns.forEach(el => {
    el.addEventListener('click', () => {
        footerBtns.forEach(el => el.classList.remove('open'));
        el.classList.add('open');
        switch (el.getAttribute('id')) {
            case 'home-btn':
                hidefriends();
                hidebar()
                break;
            case 'friends-btn':
                showfriends();
                hidebar()
                break;
            case 'rates-btn':
                hidefriends();
                hidebar()
                break;
            case 'bar-btn':
                showbar();
                hidefriends();
                break;

            default:
                break;
        }
    })
});

//bar-item 
const barItems = document.querySelectorAll('.bar-item');
barItems.forEach(bar => {
    bar.addEventListener('click', ()=> {
        barItems.forEach(item => item.classList.remove('click'));
        bar.classList.add('click')
    })
    
})

//show/hide  fair 
const infoScreen = document.getElementById('info');
function showInfo() {
    infoScreen.classList.remove('hidden')
};
function hideInfo() {
    infoScreen.classList.add('hidden')
};

//show/hide  fair 
const fairScreen = document.getElementById('fair');
function showfair() {
    fairScreen.classList.remove('hidden')
};
function hidefair() {
    fairScreen.classList.add('hidden')
};

//show/hide  top-up 
const topUpScreen = document.getElementById('top-up');
function showtopUp() {
    topUpScreen.classList.remove('hidden')
};
function hidetopUp() {
    topUpScreen.classList.add('hidden')
};

//show/hide  friends 
const friendsScreen = document.getElementById('friends');
function showfriends() {
    friendsScreen.classList.remove('hidden')
};
function hidefriends() {
    friendsScreen.classList.add('hidden')
};
//show/hide  bar 
const barScreen = document.getElementById('bar');
function showbar() {
    barScreen.classList.remove('hidden')
};
function hidebar() {
    barScreen.classList.add('hidden')
};
//show/hide  screen-bear 
const bearScreen = document.getElementById('screen-bear');
function showScreenBear() {
    bearScreen.classList.remove('hidden')
};
function hideScreenBear() {
    bearScreen.classList.add('hidden')
};
//show/hide  screen-scotch 
const screenScotch = document.getElementById('screen-scotch');
function showScreenScotch() {
    screenScotch.classList.remove('hidden')
};
function hideScreenScotch() {
    screenScotch.classList.add('hidden')
};
//show/hide  screen-whiskey 
const screenWhiskey = document.getElementById('screen-whiskey');
function showscreenWhiskey() {
    screenWhiskey.classList.remove('hidden')
};
function hidescreenWhiskey() {
    screenWhiskey.classList.add('hidden')
};

