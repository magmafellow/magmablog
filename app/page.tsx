import styles from "@/app/page.module.scss"
import CardPost from "@/app/ui/card-post";

export default function Page() {
  return (
    <div>
      <p className={styles.subAnnounce}>Recent blog posts</p>
      <div className={styles.recentPosts}>
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />
      </div>
      <div className={styles.allPosts}>

      </div>
      
    </div>
  );
}
