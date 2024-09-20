import css from "./Terms.module.css";

export const Terms = () => {
  return (
    <div className={css.terms}>
      <h2 className={css.termsTitle}>Terms and Conditions</h2>
      <p className={css.termsText}>
        Welcome to Gardenscapes! By downloading, accessing, or using the game,
        you agree to comply with these Terms and Conditions. Please read them
        carefully.
      </p>
      <ul className={css.termsList}>
        <li className={css.listItem}>
          <h4 className={css.itemTitle}>Use of the Game</h4>
          <ul className={css.itemList}>
            <li>You must be at least 13 years old to play Gardenscapes.</li>
            <li>
              You agree to use the game for personal, non-commercial purposes
              only.
            </li>
            <li>
              You are responsible for maintaining the confidentiality of your
              account information.
            </li>
          </ul>
        </li>
        <li className={css.listItem}>
          <h4 className={css.itemTitle}>In-Game Purchases</h4>
          <p className={css.itemText}>
            Gardenscapes may offer in-game purchases. All purchases are final,
            and we do not offer refunds unless required by law.
          </p>
        </li>
        <li className={css.listItem}>
          <h4 className={css.itemTitle}> User Conduct</h4>
          <p className={css.itemText}>
            You must not use the game for illegal activities or to harm other
            players. Cheating, exploiting bugs, or using unauthorized software
            is prohibited.
          </p>
        </li>
        <li className={css.listItem}>
          <h4 className={css.itemTitle}>Intellectual Property</h4>
          <p className={css.itemText}>
            All content in Gardenscapes, including graphics, text, and code, is
            owned by or licensed to us. You may not copy, modify, or distribute
            any part of the game without permission.
          </p>
        </li>
        <li className={css.listItem}>
          <h4 className={css.itemTitle}> Limitation of Liability</h4>
          <p className={css.itemText}>
            Gardenscapes is provided "as is." We are not responsible for any
            damages or losses resulting from your use of the game.
          </p>
        </li>
        <li className={css.listItem}>
          <h4 className={css.itemTitle}>Changes to These Terms</h4>
          <p className={css.itemText}>
            We may update these Terms and Conditions from time to time.
            Continued use of the game means you accept any changes.
          </p>
        </li>
      </ul>
    </div>
  );
};
