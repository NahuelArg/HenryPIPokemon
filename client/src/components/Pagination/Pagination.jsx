import styles from "./Pagination.module.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];

  // Calcula el rango de páginas
  let startPage = Math.max(1, currentPage - 2);
  let endPage = Math.min(currentPage + 2, totalPages);

  const range = endPage - startPage + 1;
  if (range < 5) {
    if (startPage === 1) {
      endPage = Math.min(totalPages, startPage + 4);
    } else {
      startPage = Math.max(1, endPage - 4);
    }
  }
  
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div>
      <ul className={styles.pagination}>
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button
            className="page-link"
            onClick={() => onPageChange(currentPage - 1)}
          >
            Anterior
          </button>
        </li>

        {pages.map((page) => (
          <li
            key={page}
            className={`page-item ${currentPage === page ? styles.active : ""}`}
          >
            <button className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </button>
          </li>
        ))}

        <li
          className={`page-item ${
            currentPage === totalPages ? "disabled" : ""
          }`}
        >
          <button
            className="page-link"
            onClick={() => onPageChange(currentPage + 1)}
          >
            Siguiente
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
