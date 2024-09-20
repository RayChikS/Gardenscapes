import css from "./Policy.module.css";

export const Policy = () => {
  return (
    <div className={css.policy}>
      <h2 className={css.policyTitle}>Privacy Policy</h2>

      <p className={css.policyText}>
        We at Gardenscapes take your privacy seriously. This policy explains how
        we collect, use, and protect your personal information when you play our
        game.
      </p>
      <ol className={css.policyList}>
        <li className={css.listItem}>
          <h4 className={css.itemTitle}>Information We Collect</h4>
          <p className={css.itemText}>
            Personal Information: Name, email, and profile picture (if linked to
            social media). Automatically Collected Data: Device info, IP
            address, game usage stats, and in-game purchases.
          </p>
        </li>

        <li className={css.listItem}>
          <h4 className={css.itemTitle}>How We Use Your Data</h4>
          <ul className={css.itemList}>
            <li>To provide and improve the game experience.</li>
            <li>To process in-game purchases.</li>
            <li>To send updates or promotional messages.</li>
            <li>To analyze performance and fix bugs.</li>
          </ul>
        </li>

        <li className={css.listItem}>
          <h4 className={css.itemTitle}>Sharing Your Data</h4>
          <p className={css.itemText}>
            We may share data with trusted third-party service providers (e.g.,
            payment processors or analytics services). We comply with legal
            requests if required by law.
          </p>
        </li>

        <li className={css.listItem}>
          <h4 className={css.itemTitle}>Security</h4>
          <p className={css.itemText}>
            We use security measures to protect your data, but cannot guarantee
            absolute security.
          </p>
        </li>

        <li className={css.listItem}>
          <h4 className={css.itemTitle}>Children’s Privacy</h4>
          <p className={css.itemText}>
            Gardenscapes is not for children under 13. We don’t knowingly
            collect their data.
          </p>
        </li>
      </ol>
    </div>
  );
};
