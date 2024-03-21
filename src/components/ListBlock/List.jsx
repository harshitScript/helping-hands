import { useState } from 'react';
import styles from './List.module.css'
import { RiExchangeBoxLine } from "react-icons/ri";
import { useSelector } from 'react-redux';
import RenderList from './renderList/RenderList';
const List = () => {
    const [type, setType] = useState('Request');
    const { requests } = useSelector(state => state.request);
    const { offerings } = useSelector(state => state.offering);
    const handleListChange = () => {
        setType(current => {
            if (current === 'Request') return 'Offering';
            if (current === 'Offering') return 'Request';
        })
    }
    const data = {
        'Request': requests,
        'Offering': offerings
    }
    return <div className={styles.list_outer}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <p className={styles.list_header}>{`${type} List`}</p>
            <RiExchangeBoxLine onClick={handleListChange} title='Change list' style={{ fontSize: '1.5rem', cursor: 'pointer' }} />
        </div>
        <RenderList data={data[type]} recordType={type} />
    </div>
}
export default List;