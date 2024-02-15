import { useState } from 'react';
import styles from './List.module.css'
const List = () => {
    const [type, setType] = useState('offerings')
    return <div className={styles.list_outer}>
        <p className={styles.list_header}>Request List</p>
    </div>
}
export default List;