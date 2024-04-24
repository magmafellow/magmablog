import { useFormState, useFormStatus } from "react-dom";

import styles from "./signup.module.scss";
import { login } from "@/app/actions/auth";

export default function LoginForm() {
  const [state, dispatch] = useFormState(login, undefined);

  return (
    <form action={dispatch}>
      <div className={styles.inputBox}>
        <label htmlFor="login-username">Username: </label>
        <input className={styles.input} type="text" id="login-username" name="username" />
      </div>
      <div className={styles.formError}>{state?.errors?.username}</div>
      <div className={styles.inputBox}>
        <label htmlFor="login-password">Password: </label>
        <input className={styles.input} type="password" id="login-password" name="password" />
      </div>
      <div className={styles.formError}>{state?.errors?.password}</div>
      <div className={styles.message}>{state?.message}</div>
      <div className={styles.submitBox}>
        <button type="submit">Send</button>
      </div>
    </form>
  );
}
