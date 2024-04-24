'use client'

import { useFormState, useFormStatus } from "react-dom";
import { logout } from "@/app/actions/auth";

import styles from './page.module.scss'

function SubmitButton(){
  const { pending } = useFormStatus()
  
  return (
    <button className={styles.button} type="submit">
      {!pending ? 'log out' : 'processing...'}
    </button>
  )
}

export default function Page() {
  const [message, dispatch] = useFormState(logout, undefined)
  
  return (
    <div className="container_ content-container">
      <form className={styles.form} action={dispatch}>
        <SubmitButton />
      </form>
    </div>
  );
}
