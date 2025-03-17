import styles from "./Card.module.css";
import Button from "../Button/Button";

export default function Card({title,money,button,handleClick,buttonType,buttonText,success=true}){
  return (
    <div className={styles.card}>
        <h3 className={styles.cardTitle}>
            {`${title}: `}
            <span className={styles.money}>
                {`₹${money}`}
            </span>
        </h3>
        <Button handleClick = {handleClick}  style ={buttonType}>{buttonText}</Button>
    </div>
  )
}


