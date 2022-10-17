var featureOrBug = "Bug";
var counter = 4 ;



function addTask(){

    // ===============Connect between js and html=================
    let titreDuTask = document.getElementById('title').value;
    //https://stackoverflow.com/questions/14544104/checkbox-check-event-listener    [Event de clique]
    checkboxFeature = document.getElementById('flexRadioDefault2');
    checkboxFeature.addEventListener('change', e => {

    if(e.target.checked){
        featureOrBug = "Bug";
    }

    });

    checkboxBug = document.getElementById('flexRadioDefault1');
    checkboxBug.addEventListener('change', a => {

    if(a.target.checked){
        featureOrBug = "Feature";
    }

    });

    let prioretyDuTask = document.getElementById('Priorety').value;

    let statusDuTask = document.getElementById('Status').value; // This value will be the input of the selector of the line

    let dateDutask = document.getElementById('dp1').value;

    let description = document.getElementById('exampleFormControlTextarea1').value;
    
    //=================Create new button =================
    let newButton = document.createElement('button');
        // i had a probleme, the naviguator was not able to read a class with spaces --> https://stackoverflow.com/questions/65861988/can-i-add-a-class-with-spaces-to-an-element
    var className = "d-flex flex-row bd-highlight mb-1 w-100 pt-0 px-0 border-0";
    newButton.classList.add.apply(newButton.classList,className.split(" ")); 
    
    //=================Add the content to the new button=================

    var mark ; //indicate the form of the green circle
    if (  1 == statusDuTask) {
        mark = `<i class="text-sm-start mx-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(16, 239, 10, 1);transform: ;msFilter:;"><path d="M12 6a3.939 3.939 0 0 0-3.934 3.934h2C10.066 8.867 10.934 8 12 8s1.934.867 1.934 1.934c0 .598-.481 1.032-1.216 1.626a9.208 9.208 0 0 0-.691.599c-.998.997-1.027 2.056-1.027 2.174V15h2l-.001-.633c.001-.016.033-.386.441-.793.15-.15.339-.3.535-.458.779-.631 1.958-1.584 1.958-3.182A3.937 3.937 0 0 0 12 6zm-1 10h2v2h-2z"></path><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path></svg>
    </i> `;
      } else if  (2 == statusDuTask){
        mark = `<i class="text-sm-start mx-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(16, 239, 10, 1);transform: scaleX(-1);msFilter:progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1);"><path d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"></path></svg>
    </i> `;
      } else if (3 == statusDuTask ) {
        mark = `<i class="text-sm-start mx-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(16, 239, 10, 1);transform: ;msFilter:;"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M9.999 13.587 7.7 11.292l-1.412 1.416 3.713 3.705 6.706-6.706-1.414-1.414z"></path></svg>
    </i> `;
      }


    newButton.innerHTML = `<div class="">
    ${mark}
    </div>
    <div class="">
        <div class="fw-bold">${titreDuTask}</div>
        <div class="">
            <div class="fw-light">#${counter++} created in ${dateDutask}</div>
            <div class="" title="including as many details as possible.">${description}</div>
        </div>
        <div class="">
            <span type="button" class="btn btn-primary">High</span>
            <span type="button" class="btn btn-secondary">${featureOrBug}</span>
        </div>
    </div>`;

    // =================add the button and its content to the page=================
       // this numbers [1,2,3] are the indicator of the status
        if (  1 == statusDuTask) {
            var wichLine = document.querySelector('#to-do-tasks');
        } else if  (2 == statusDuTask){
            var wichLine = document.querySelector('#in-progress-tasks');
        } else if (3 == statusDuTask ) {
            var wichLine = document.querySelector('#done-tasks'); 
        }

        console.log(statusDuTask);
        wichLine.appendChild(newButton);

}

