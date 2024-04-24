import { getUser } from "@/app/lib/dal";
import styles from './page.module.scss'
import Link from "next/link";

export default async function Page() {
  const user = await getUser();

  return (
    <div className="container_ content-container">
      {user ? (
        <div>
          <p>Welcome, dear {user.author}</p>
          <h3>
            You are allowed to go to <Link className={styles.link} href="/blog">/blog</Link> page
          </h3>
        </div>
      ) : (
        <p>
          You are not authorized. Do it <Link href="/login">login</Link> page.{" "}
        </p>
      )}
    </div>
  );
}
