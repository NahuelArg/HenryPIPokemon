const AlertSuccess = ({ message, onClose }) => (
    <a href={"/home"} className="pokemon-alert-success" onClick={onClose}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-10 h-10 text-yellow-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
      <span>{message}</span>
      <p>Preciona en el en cualquier lugar para cerrar</p>
    </a>
  );
  
  export default AlertSuccess;