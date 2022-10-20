var type; // Feature or Bug
let fakeIndex; // fakeIndex = i ; index of each task
let moveButtonIndex; // moveButtonIndex = i; index of each task
var toDo =0;
// ====================================Call====================================

    // Call the title
    let title = document.getElementById('title');
    
    // Call the type and specific wich type has been choosen
    //https://stackoverflow.com/questions/14544104/checkbox-check-event-listener    [Event de clique]
    //Amine
    let checkbox= document.querySelectorAll('#flexRadioDefault');
    
    // Call the priorety
    let priorety = document.getElementById('Priorety');

    // Call the status
    let statuse = document.getElementById('Status');

    //Call the date 
    let date = document.getElementById('dp1');

    //Call the description
    let description = document.getElementById('exampleFormControlTextarea1');

    //Call saveOrUpdateButton
    let saveOrUpdateButton =document.getElementById('saveOrUpdateButton');

    //this var helps to change from add fonction to update fonction [because i work on the same modal]
    let modAddOrUpdate = 'Add';

    //Call the counts of each status
    let toDoTasksCount = document.getElementById('to-do-tasks-count');
    let inProgressTasksCount = document.getElementById('in-progress-tasks-count');
    let doneTasksCount = document.getElementById('done-tasks-count');


   
////====================================Fonctions====================================   

//================================Add task Fonction================================

    //Solution for [delete old tasks and replace it with new ones]
    //https://www.youtube.com/watch?v=WNQgl__ihHY&list=PLknwEmKsW8Os2kzf3qjR34Z5FS8-pDoLN&index=4  [10:20]
    let dataOfTheTask;

    if(localStorage.tasks != null){
        dataOfTheTask = JSON.parse(localStorage.tasks)
    }else{
        dataOfTheTask =[];
    }
    
    saveOrUpdateButton.onclick = function(){

        
        // This loop to know wich type has been choosen
        for(let k =0; k<checkbox.length;k++){
            if(checkbox[k].checked==1){
                type=checkbox[k].value;
            }
        }
        
        //Objet
        let newTask = {
            titleT:title.value,
            typeT:type ,
            prioretyT:priorety.value,
            statuseT:statuse.value,
            dateT:date.value,
            descriptionT:description.value
        };

        //Because i work just on one Modal ! I need to switch between update mode and add mode 
        if (modAddOrUpdate === 'Add'){
            // Push the object to the array
            dataOfTheTask.push(newTask);   
        } else {
            dataOfTheTask[fakeIndex] =newTask;
            //Resest to the default
            modAddOrUpdate = 'Add';
            document.getElementById('exampleModalLabel').innerHTML = 'Add Task';
            saveOrUpdateButton.innerHTML='Save';
        }
         

        // store the data in local
        //https://www.youtube.com/watch?v=WNQgl__ihHY&list=PLknwEmKsW8Os2kzf3qjR34Z5FS8-pDoLN&index=4   [8:45]
        localStorage.setItem('tasks', JSON.stringify(dataOfTheTask)); 

        //Call the fonction to clear the inputs
        clearInputs();

        //Temporarie solution
        //Reload the page
        window.location.reload();
     }
    
//================================Clear the inputs from the modal Fonction================================
    function clearInputs(){
            title.value='';
            type='Bug';
            priorety.value='';
            statuse.value='';
            date.value='';
            description.value='';
    }

//================================Show Tasks Functions Fonction================================

    function showTasks(){
        for(let i =0; i<=dataOfTheTask.length;i++){
            //=================Create new button =================
            let newButton = document.createElement('button');
    
            // i had a probleme when i was trying to give the button a class, the naviguator was not able to read a class with spaces
            //https://stackoverflow.com/questions/65861988/can-i-add-a-class-with-spaces-to-an-element
            var className = "d-flex flex-row bd-highlight mb-1 w-100 pt-0 px-0 border-0";
            newButton.classList.add.apply(newButton.classList,className.split(" "));

            // i didn't know how to add an attribute to this button [So when i clique a task the Delete & update TASK MODAL Pop up]
            //https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute
            // newButton.setAttribute('data-bs-toggle','modal');
            // newButton.setAttribute('data-bs-target','#exampleModal');

            // i didn't know how to add an event to this button [So when i clique a task i can know the index of it]
            //https://www.w3schools.com/js/js_htmldom_eventlistener.asp
            
           

            //=================Add the content to the new button=================
            //indicate the form of the green circle
            var greenCircle ; 
            //https://boxicons.com/?query=trash  Site of icons
            if (  1 == dataOfTheTask[i].statuseT) {
                greenCircle = `<i class="text-sm-start mx-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(16, 239, 10, 1);transform: ;msFilter:;"><path d="M12 6a3.939 3.939 0 0 0-3.934 3.934h2C10.066 8.867 10.934 8 12 8s1.934.867 1.934 1.934c0 .598-.481 1.032-1.216 1.626a9.208 9.208 0 0 0-.691.599c-.998.997-1.027 2.056-1.027 2.174V15h2l-.001-.633c.001-.016.033-.386.441-.793.15-.15.339-.3.535-.458.779-.631 1.958-1.584 1.958-3.182A3.937 3.937 0 0 0 12 6zm-1 10h2v2h-2z"></path><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path></svg>
            </i> `;
            } else if  (2 == dataOfTheTask[i].statuseT){
                greenCircle = `<i class="text-sm-start mx-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(16, 239, 10, 1);transform: scaleX(-1);msFilter:progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1);"><path d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"></path></svg>
            </i> `;
            } else if (3 == dataOfTheTask[i].statuseT ) {
                greenCircle = `<i class="text-sm-start mx-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(16, 239, 10, 1);transform: ;msFilter:;"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M9.999 13.587 7.7 11.292l-1.412 1.416 3.713 3.705 6.706-6.706-1.414-1.414z"></path></svg>
            </i> `;
            }
    
            //Solution of printing [1,2,3] instead of [low,medium,High]
            //!!!! i think it was better to change the value in stead of doing this
            if ( 1 == dataOfTheTask[i].prioretyT ){
                dataOfTheTask[i].prioretyT = "low";
                toDo += 1;
                toDoTasksCount.innerHTML = "todo";
            } else if (2 == dataOfTheTask[i].prioretyT){
                dataOfTheTask[i].prioretyT = "Medium";
            } else if (3 == dataOfTheTask[i].prioretyT){
                dataOfTheTask[i].prioretyT = "High";
            }

            //Show Move button only in To do and in progress
            var showMove;
            if(dataOfTheTask[i].statuseT == 1 || dataOfTheTask[i].statuseT == 2){
                showMove = `<button  onclick="moveTask(${i})" type="button" class="btn btn-warning mb-2 " > <i> <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;"><path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z"></path></svg> </i> </button>
                `;
            }else {
                showMove = ``;
            }

            //https://boxicons.com/?query=mark  Site des icon
            newButton.innerHTML = `<div class="w-30">
            ${greenCircle}
            </div>
            <div class="w-100">
                <div class="fw-bold">${dataOfTheTask[i].titleT}</div>
                <div class="">
                    <div class="fw-light">#${i+1} created in ${dataOfTheTask[i].dateT}</div>
                    <!-- Condition ? true : false https://www.w3schools.com/jsref/jsref_substring.asp  -->
                    <div class="" title="${dataOfTheTask[i].descriptionT}">${(dataOfTheTask[i].descriptionT).length > 30 ? dataOfTheTask[i].descriptionT.substring(0,30)+"..." : dataOfTheTask[i].descriptionT}</div>
                </div>
                <div class="d-sm-flex gap-5 mt-2">
                    <div class="mb-2">
                        <span type="button" class="btn btn-primary mb-2">${dataOfTheTask[i].prioretyT}</span>
                        <span type="button" class="btn btn-secondary mb-2">${dataOfTheTask[i].typeT}</span>
                    </div>
                    <div class="">
                        <button onclick="deleteTask(${i})" type="button" class="btn btn-danger mb-2 me-1" > <i><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;"><path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm4 12H8v-9h2v9zm6 0h-2v-9h2v9zm.618-15L15 2H9L7.382 4H3v2h18V4z"></path></svg></i</button>
                        <button onclick="updateTask(${i})" data-bs-toggle="modal" data-bs-target="#exampleModal" type="button" class="btn btn-success mb-2 ">Up</button>
                        ${showMove}
                    </div>
                </div>
            </div>
           
            `;
    
            // =================add the button and its content to the page=================
           // this numbers [1,2,3] are the indicator of the status
            if (  1 == dataOfTheTask[i].statuseT) {
                var wichLine = document.querySelector('#to-do-tasks');

            } else if  (2 == dataOfTheTask[i].statuseT){
                var wichLine = document.querySelector('#in-progress-tasks');
            } else if (3 == dataOfTheTask[i].statuseT ) {
                var wichLine = document.querySelector('#done-tasks'); 
            }
            //Temporarie solution
            wichLine.appendChild(newButton);
        }
    }
 
//================================Delete Fonction================================
    function deleteTask(i){
        //Remove case from an array
        //https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
        dataOfTheTask.splice(i,1);

        //after removing the data from the array we should also remove it from the local storaje
        localStorage.tasks = JSON.stringify(dataOfTheTask);

        //Relaod tha page
        //https://stackoverflow.com/questions/3715047/how-to-reload-a-page-using-javascript
        window.location.reload();

    }

    showTasks();
//================================UpdateFonction================================
    function updateTask(i){
        //Change the title of the model
        document.getElementById('exampleModalLabel').innerHTML = 'Update the task'

        //Change the buttin from save to update
        saveOrUpdateButton.innerHTML='Update';

        //The indicatore of TypeMode
        modAddOrUpdate = 'Update';
        fakeIndex=i;
        
        //desplay the data of the selected task
        title.value = dataOfTheTask[fakeIndex].titleT

        if (checkbox[0].value == dataOfTheTask[fakeIndex].typeT) {
           checkbox[0].checked = true;
           checkbox[1].checked = false;
        }

        if(checkbox[1].value == dataOfTheTask[fakeIndex].typeT){
            checkbox[0].checked = false;
           checkbox[1].checked = true;
        }


        //How to select an option
        //https://stackoverflow.com/questions/78932/how-do-i-programmatically-set-the-value-of-a-select-box-element-using-javascript
        if( dataOfTheTask[fakeIndex].prioretyT == "low"){
            priorety.value = '1';
            dataOfTheTask[fakeIndex].prioretyT = '1';
        }
        if( dataOfTheTask[fakeIndex].prioretyT == "Medium"){
            priorety.value = '2';
            dataOfTheTask[fakeIndex].prioretyT = '2';
        }
        if( dataOfTheTask[fakeIndex].prioretyT == "High"){
            priorety.value = '3';
            dataOfTheTask[fakeIndex].prioretyT = '3';
        }

console.log(dataOfTheTask[fakeIndex].statuseT);
        //How to select an option
        //https://stackoverflow.com/questions/78932/how-do-i-programmatically-set-the-value-of-a-select-box-element-using-javascript
        if( dataOfTheTask[fakeIndex].statuseT == 1){
            statuse.value = 1;
            dataOfTheTask[fakeIndex].statuseT = 1;
        }
        if( dataOfTheTask[fakeIndex].statuseT == 2){
            statuse.value = 2;
            dataOfTheTask[fakeIndex].statuseT = 2;
        }
        if( dataOfTheTask[fakeIndex].statuseT == 3){
            statuse.value = 3;
            dataOfTheTask[fakeIndex].statuseT = 3;
        }

        date.value = dataOfTheTask[fakeIndex].dateT

        description.value = dataOfTheTask[fakeIndex].descriptionT


    }

// This fonction only refresh the site after clicking cancel
    function cancelButton() {
        window.location.reload();
    }
    
//================================Change status task Function================================
    function moveTask(i){
        moveButtonIndex= i ;
        var temp = dataOfTheTask[moveButtonIndex].statuseT;
        // i Used the Condition in stead of temp+= 1; beacuase the value was a string
        if(temp == 1){
            dataOfTheTask[moveButtonIndex].statuseT = '2';
        }
        if(temp == 2){
            dataOfTheTask[moveButtonIndex].statuseT = '3';
        }
        //Restock the data in local
        localStorage.setItem('tasks', JSON.stringify(dataOfTheTask)); 
        window.location.reload();
    }

//================================Count Function/================================

    


