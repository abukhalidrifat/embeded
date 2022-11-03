import styles from '../styles/Navbar.module.css'

function Navbar() {
    return ( <>
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <p>EMBEDED</p>
                <p>Expert io</p>
            </div>
            <div className={styles.nav}>
                <ul>
                    <li>Home</li>
                    <li>Category</li>
                </ul>
            </div>
            <div className={styles.search}>
                <input type="search" placeholder='Search'/>
                <button>Search</button>
            </div>
        </div>
    </> );
}

export default Navbar;