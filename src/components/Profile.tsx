import styles from "../styles/components/Profile.module.css";

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img
        src="https://github.com/Calebe-Xavier-Developer.png"
        alt="Calebe Xavier"
      />
      <div>
        <strong>Calebe Xavier</strong>
        <p>Level 1</p>
      </div>
    </div>
  );
}
