console.log('main');

// import Pagination from 'tui-pagination';

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

// const container = document.getElementById('tui-pagination-container');
// console.log(container);

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

//  var pagination2 = new Pagination(document.getElementById('pagination2'), {
//         totalItems: 21,
//         itemsPerPage: 10,
//         visiblePages: 5,
//         centerAlign: true
//     });

    // Wait for DOM so container elements exist before creating Pagination
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

console.log('main');

document.addEventListener('DOMContentLoaded', () => {
  // Ensure the id here matches the HTML element id
  const container = document.getElementById('pagination2');
  console.log('pagination container:', container);

  if (!container) {
    console.error('Pagination container not found. Make sure an element with id="pagination2" exists in the HTML and that this script runs after the element is parsed.');
    return;
  }

  const pagination2 = new Pagination(container, {
    totalItems: 21,
    itemsPerPage: 10,
    visiblePages: 5,
    centerAlign: true
  });

  // Example: read current page
  console.log('current page:', pagination2.getCurrentPage());
});


