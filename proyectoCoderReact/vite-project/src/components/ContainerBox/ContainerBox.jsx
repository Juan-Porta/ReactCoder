import styles from "./Container.module.css"

export const ContainerBox = ({ greeting }) => {
    return (
        <div className={styles.container} > { greeting } </div>
    ) 
}