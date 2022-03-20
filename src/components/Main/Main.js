import styles from './Main.module.css';

function Main(props) {
    return(
        <div className={styles.Main}>
            {props.children}
        </div>
    );
}
export default Main;