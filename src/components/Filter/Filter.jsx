import styles from './Filter.module.css';

export const Filter = ({ addFilter }) => {
  return (
    <>
      <label htmlFor="filterField">Find contacts by name</label>
      <input
        className={styles.inputField}
        id="filterField"
        onChange={addFilter}
      />
    </>
  );
};
