import styles from './RenderList.module.css'
import { CiShoppingTag } from "react-icons/ci"

const RenderList = ({ data }) => {
    return <section>
        {data.length ? data.map((record, index) => <ListItem key={index} record={record} />) : <p>No Records Found !</p>}
    </section>

}

const ListItem = ({ record }) => {
    return <div className={styles.listItem}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid black', padding: '5px', boxSizing: 'border-box', margin: '3px' }}>
            <span className={styles.name}>{record.fullName} <small>{`(${record.mobile})`}</small></span> <span className={styles.id}>{`#${record.id}`}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className={styles.category}><CiShoppingTag />{record.category}</span>
            <p style={{ margin: '0 0 0 4px', }}>{record.description}</p>
        </div>
    </div >
}
export default RenderList