import styles from './Loader.module.css'
const { containerLoader, loader, spinner} = styles;



const Loader = () => {
  return (
    <div
      className={containerLoader}
    >
      <div className={loader}>
        <span className={spinner}></span>
        Cargando pokemon...
      </div>
    </div>
  );
};

export default Loader;
