console.log('main');

import Pagination from 'tui-pagination';

// import { container } from './pagination';
// import { options } from './pagination';

// var pagination1 = new tui.Pagination('pagination1', {
//         totalItems: 500,
//         itemsPerPage: 10,
//         visiblePages: 5
//     });

// var pagination1 = new tui.Pagination('pagination1', {
//         totalItems: 500,
//         itemsPerPage: 10,
//         visiblePages: 5
//     });

//     // var pagination2 = new tui.Pagination(document.getElementById('pagination2'), {
//     //     totalItems: 500,
//     //     itemsPerPage: 10,
//     //     visiblePages: 5,
//     //     centerAlign: true
//     // });

const container = document.getElementById('tui-pagination-container');
console.log(container);

// var pagination2 = new tui.Pagination(container, {
//         totalItems: 500,
//         itemsPerPage: 10,
//         visiblePages: 5,
//         centerAlign: true
//     });

// const instance = new Pagination(container, { 
//         totalItems: 21,
//         itemsPerPage: 10,
//         visiblePages: 5,
//         centerAlign: true
//  });

// instance.getCurrentPage();

 var pagination2 = new Pagination(document.getElementById('pagination2'), {
        totalItems: 21,
        itemsPerPage: 10,
        visiblePages: 5,
        centerAlign: true
    });

    


