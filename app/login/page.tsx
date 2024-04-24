'use client'

import { useState } from 'react';
import styles from './page.module.scss'
import SignupForm from '@/app/ui/signup-form';
import LoginForm from '@/app/ui/login-form';

export default function Page(){
  // mode: 'login' | 'signup' 
  const [mode, setMode] = useState('login')

  const onClickHandler = (e: any) => {
    if(mode === 'login' && e.target.innerText === 'Login') {
      null
    } else if (mode === 'login' && e.target.innerText === 'Signup') {
      setMode('signup')
    } else if (mode === 'signup' && e.target.innerText === 'Signup') {
      null
    } else if (mode === 'signup' && e.target.innerText === 'Login') {
      setMode('login')
    }
  }
  
  return (
    <div className={styles.box}>
      <div className={styles.modeSwitcher}>
        <span data-active={mode === 'login' ? 'active' : ''} className={`${styles.switchButton}`} onClick={onClickHandler}>Login</span>
        <span data-active={mode === 'signup' ? 'active' : ''} className={`${styles.switchButton}`} onClick={onClickHandler}>Signup</span>
      </div>
      
      <div className={mode === 'login' ? '' : styles.hidden}>
        <LoginForm />
      </div>
      
      <div className={mode === 'signup' ? '' : styles.hidden}>
        <SignupForm />
      </div>
      
      
      
    </div>
  )
}