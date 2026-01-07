import styles from './Post.module.css';

function Post(props) {
    const { author, body } = props;
    // const chosenName = Math.random() > 0.5 ? names[0] : names[1];
    return (
    <li className={styles.post}>
        <p className={styles.author}>{author}</p>
        <p className={styles.body}>{body}</p>
    </li>
    );
}

export default Post;