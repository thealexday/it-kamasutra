import styles from './Profile.module.css'

export default function Profile(){
    return (
        <main className={styles.content}>
        <div>
        <img src="https://griffithmedicalcentre.com.au/wp-content/uploads/2016/08/cropped-header-background.jpg" alt="efe" />
        </div>
        <div>ava+ description</div>
        <div>
          my posts
          <div>
            new post
          </div>
          <div>
            <div className={styles.item}>post 1</div>
            <div className={styles.item}>post2</div>
          </div>
        </div>
      </main>
    )
}