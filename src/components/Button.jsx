import styles from "./Button.module.css";

function Button({ children, onClick, type }) {
  return (
    // styles is an object and type is a variable property, so we need to use the bracket notation to read the property dynamically in such cases.
    <button className={`${styles.btn} ${styles[type]}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
