// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.reddit.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// ==/UserScript==

(function() {
'use strict';
const PASSWORD = "{obtained from csv}";
var UserName = "{obtained from csv}";

fetch("https://www.reddit.com/account/register/?experiment_d2x_2020ify_buttons=enabled&experiment_d2x_google_sso_gis_parity=enabled&experiment_d2x_onboarding=enabled&experiment_d2x_am_modal_design_update=enabled");
//input email
let emails=document.getElementById("regEmail")
emails.value="fuzzbuzzbay999@gmail.com";
//alert(emails);
//accept email
emails.setAttribute('data-empty','false');

//find submitbutton
let submitbtn=document.getElementsByClassName("AnimatedForm__submitButton m-full-width");
// alert(submitbtn);
console.log(submitbtn.length);
//enable submitbtn
submitbtn[0].setAttribute('class','sbtbtn');
//click
document.getElementsByClassName("sbtbtn")[0].click();

//username
let fieldSet = document.getElementsByTagName("fieldset"); //feildset[2] is username fieldset[3] is password

let username = document.getElementById("regUsername");
username.value=UserName;
username.setAttribute('data-empty','false');
fieldSet[2].setAttribute('class','AnimatedForm__field m-required m-valid');

//password
let password=document.getElementById("regPassword")
password.value=PASSWORD;
password.setAttribute('data-empty','false');
fieldSet[3].setAttribute('class','AnimatedForm__field m-required m-valid');
//submit password
let passSub = document.getElementById("registerPasswordField");
passSub.setAttribute('class','AnimatedForm__field m-required m-modalUpdate register m-valid');

//CHECK IF CAPTCHA IS COMPLETE
//while(true){
//console.log(document.getElementById("recaptcha-anchor").getAttribute("aria-checked"));
//}
//

})();