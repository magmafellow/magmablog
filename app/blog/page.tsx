import styles from "@/app/blog/page.module.scss"
import CardPost from "@/app/ui/card-post";

export default function Page() {
  return (
    <>
      <p className={styles.subAnnounce}>Recent blog posts</p>
      <div data-post-box-type="recentPosts" className={`${styles.recentPosts}`}>
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />
      </div>
      <p className={styles.subAnnounce}>All posts</p>
      <div data-post-box-type="allPosts" className={styles.allPosts}>
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />
      </div>
      
    </>
  );
}
