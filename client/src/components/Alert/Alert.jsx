const Alert = ({ message, onClose }) => (
    <div className="pokemon-alert" onClick={onClose}>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    className="w-10 h-10 text-yellow-500"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
  <span>{message}</span>
  <p>Click en el error para cerrar</p>
</div>

  );

  export default Alert