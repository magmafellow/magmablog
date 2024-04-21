import styles from "@/app/ui/card-post.module.scss";

export default function CardPost() {

  
  
  return (
    <div className={styles.postBox}>
      <div className={styles.imgBox}>
        <img className={styles.img} src="/preview-card-post.png" alt="preview for post" />
        {/* temporary replacement for picture */}
        {/* <div
          style={{
            width: "100%",
            height: "228px",
            background: "#111",
            border: "1px solid yellow",
          }}
        ></div> */}
      </div>
      <div className={styles.textPart}>
        <div className={styles.date}>Sunday , 1 Jan 2023</div>
        <div className={styles.titleLinkBox}>
          <div className={styles.title}>UX review presentations</div>
          <div>
            <a href="#">
              <img
                className={styles.linkArrow}
                src="/link-arrow.svg"
                alt="link arrow"
              />
            </a>
          </div>
        </div>
        <div className={styles.shortDescription}>
          How do you create compelling presentations that wow your colleagues
          and impress your managers?
        </div>
        <div className={styles.tagsBox}>
          {/* here are your related tags */}
          <div className={styles.tag}>Design</div>
          <div className={styles.tag}>Research</div>
          <div className={styles.tag}>Presentation</div>
        </div>
      </div>
    </div>
  );
}
