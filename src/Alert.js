
class Alert{
    
    static danger(msg){
        return `<p class=" alert alert-danger d-flex justify-content-between p-2">${ msg }<button data-bs-dismiss="alert" class="btn-close"></button></p>`;
    };

    static success(msg){
        return `<p class=" alert alert-success d-flex justify-content-between p-2">${ msg }<button data-bs-dismiss="alert" class="btn-close"></button></p>`;
    };

    static warning(msg){
        return `<p class=" alert alert-warning d-flex justify-content-between p-2">${ msg }<button data-bs-dismiss="alert" class="btn-close"></button></p>`;
    };
}

export default Alert;