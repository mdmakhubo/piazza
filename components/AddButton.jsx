import styles from '../styles/Add.module.scss';

const AddButton = ({ setClose }) => {
  return (
    <div onClick={() => setClose(false)} className={styles.mainAddButton}>
      Add New Pizza
    </div>
  );
};

export default AddButton;