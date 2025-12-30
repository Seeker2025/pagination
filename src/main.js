console.log('main');
import Pagination from 'tui-pagination';
// import './css/styles.css';
import 'tui-pagination/dist/tui-pagination.css';

document.addEventListener('DOMContentLoaded', () => {
  // Ensure the id here matches the HTML element id
  const container = document.getElementById('pagination2');
  console.log('pagination container:', container);

  if (!container) {
    console.error('Pagination container not found. Make sure an element with id="pagination2" exists in the HTML and that this script runs after the element is parsed.');
    return;
  }

  const pagination2 = new Pagination(container, {
    totalItems: 7,
    itemsPerPage:2,
    visiblePages: 2,
    centerAlign: true
  });

  // Example: read current page
  console.log('current page:', pagination2.getCurrentPage());
});


