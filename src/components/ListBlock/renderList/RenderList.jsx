import styles from './RenderList.module.css'
import { CiShoppingTag } from "react-icons/ci"
import { MdDelete } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { removeRequest } from '../../../store/requestSlice'
import { removeOffering } from '../../../store/offeringSlice'

const RenderList = ({ data, recordType }) => {
    return <section>
        {data.length ? data.map((record, index) => <ListItem key={index} record={record} recordType={recordType} />) : <p>No Records Found !</p>}
    </section>

}

const ListItem = ({ record, recordType }) => {
    const dispatch = useDispatch();
    const handleDelete = (id, type) => {
        const action = {
            'Request': removeRequest,
            'Offering': removeOffering
        }
        dispatch(action[type](id));
    }
    return <div className={styles.listItem}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid black', padding: '5px', boxSizing: 'border-box', margin: '3px' }}>
            <span className={styles.name}>{record.fullName} <small>{`(${record.mobile})`}</small></span> <span className={styles.id}>{`#${record.id}`}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <span className={styles.category}><CiShoppingTag />{record.category}</span>
                <p style={{ margin: '0 0 0 4px', }}>{record.description}</p>
            </div>
            <MdDelete title='Delete Entry' onClick={handleDelete.bind(null, record.id, recordType)} style={{ color: 'red', cursor: 'pointer', fontSize: '1.2rem' }} />
        </div>
    </div>
}
export default RenderList