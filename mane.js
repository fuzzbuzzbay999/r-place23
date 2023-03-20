// ==UserScript==
// @name         injected
// @namespace    http://tampermonkey.net/
// @version      2
// @description  end my suffering
// @author       fuzzbuzzbay999
// @match        https://www.reddit.com/account/register/?experiment_d2x_2020ify_buttons=enabled&experiment_d2x_google_sso_gis_parity=enabled&experiment_d2x_onboarding=enabled&experiment_d2x_am_modal_design_update=enabled
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  const PASSWORD = "{SET YOUR OWN MASTER PASSWORD}";
  const USERNAME = "{NOT USED}";
  var EMAIL = "{ADD YOUR EMAIL HERE}";

  //fetch("https://www.reddit.com/account/register/?experiment_d2x_2020ify_buttons=enabled&experiment_d2x_google_sso_gis_parity=enabled&experiment_d2x_onboarding=enabled&experiment_d2x_am_modal_design_update=enabled");
  //input email
  let emails=document.getElementById("regEmail")
  emails.value=EMAIL;
  //accept email
  emails.setAttribute('data-empty','false');

  //find submitbutton
  let submitbtn=document.getElementsByClassName("AnimatedForm__submitButton m-full-width");
  console.log(submitbtn.length);
  //enable submitbtn
  submitbtn[0].setAttribute('class','sbtbtn');
  //click
  document.getElementsByClassName("sbtbtn")[0].click();

  //username
  let fieldSet = document.getElementsByTagName("fieldset"); //feildset[2] is username fieldset[3] is password

  //wait for the page to laod a bit as tampermoke is tooo fast
setTimeout(() => {
      let userNAME = document.getElementById("regUsername");
    userNAME.value=USERNAME;
    console.log(document.getElementById("regUsername").value);
  userNAME.setAttribute('data-empty','false');
  fieldSet[2].setAttribute('class','AnimatedForm__field m-required m-valid');
  //password
  let password=document.getElementById("regPassword")
  password.value=PASSWORD;
  password.setAttribute('data-empty','false');
  fieldSet[3].setAttribute('class','AnimatedForm__field m-required m-valid');
  //submit password
  let passSub = document.getElementById("registerPasswordField");
  passSub.setAttribute('class','AnimatedForm__field m-required m-modalUpdate register m-valid');
 console.log(document.getElementById("regUsername").value);
    }, 1000);

  //CHECK IF CAPTCHA IS COMPLETE (DOESNT WORK)
  //while(true){
  //console.log(document.getElementById("recaptcha-anchor").getAttribute("aria-checked"));
  //}
  //
  })();
