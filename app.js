// get element

import Alert from "./src/Alert.js";
import Storage from "./src/Storage.js";

const devs_add_form = document.getElementById('devs_add_form');
const devs_list = document.getElementById('devs-list');

devs_add_form.addEventListener('submit', function(e){
    e.preventDefault();

    const msg = document.querySelector('.msg');

    let form_data = new FormData(e.target);
    let data = Object.fromEntries(form_data.entries());

    let {name, cell, location, photo} = data;

    if( name == '', cell == '', location == ''){
        msg.innerHTML = Alert.danger('All Fields are required');
    }else{
       
        Storage.set('devs', data);
        devs_add_form.reset();
        getAllDevs();
    }

});

getAllDevs();
function getAllDevs(){
    let data = Storage.get('devs');
    let list = '';
    data.map((data, index) => {

        let {name, cell, location, photo } = data;
        list +=`
            <tr>
                <td>${ index+1 }</td>
                <td>${name}</td>
                <td>${ cell }</td>
                <td>${ location }</td>
                <td><img src="${photo ? photo : 'assets/img/img_avatar.png' }" alt="Photo"></td>
                <td>
                    <button class="btn btn-info btn-sm"> <i class="fa fa-eye"></i> </button>
                    <button class="btn btn-warning btn-sm"> <i class="fa fa-edit"></i> </button>
                    <button class="btn btn-danger btn-sm"> <i class="fa fa-trash"></i> </button>
                </td>
            </tr>
        
        `
    });

    devs_list.innerHTML = list;
}