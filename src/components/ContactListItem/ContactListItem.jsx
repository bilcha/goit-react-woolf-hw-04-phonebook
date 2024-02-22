import styles from './ContactListItem.module.css';
export const ContactListItem = ({ id, name, number, deleteContact }) => {
  return (
    <li>
      {name}: {number}
      <button className={styles.button} onClick={() => deleteContact(id)}>
        Delete
      </button>
    </li>
  );
};
