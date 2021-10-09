/*!
* Start Bootstrap - Grayscale v7.0.3 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    const instaScan = document.body.querySelector('.insta-scan');
    let scanner = new Instascan.Scanner({
        video: document.getElementById('preview')
    });
    // 開啟一個新的掃描
    // 宣告變數scanner，在html<video>標籤id為preview的地方開啟相機預覽。
    // Notice:這邊注意一定要用<video>的標籤才能使用，詳情請看他的github API的部分解釋。

    scanner.addListener('scan', function(content) {
        console.log(content);
    });
    //開始偵聽掃描事件，若有偵聽到印出內容。

    Instascan.Camera.getCameras().then(function(cameras) {
    //取得設備的相機數目
        if (cameras.length > 0) {
          ///若設備相機數目大於0 則先開啟第0個相機(程式的世界是從第零個開始的)
            scanner.start(cameras[0]);
        } else {
          //若設備沒有相機數量則顯示"No cameras found";
          //這裡自行判斷要寫什麼
            console.error('No cameras found.');
        }
    }).catch(function(e) {
        console.error(e);
    });
});