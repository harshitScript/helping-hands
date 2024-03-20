import styles from './RenderList.module.css'
const RenderList = ({ data }) => {
    return <section>
        {data.length ? data.map(record => <ListItem record={record} />) : <p>No Records Found !</p>}
    </section>

}

const ListItem = ({ record }) => {
    return <div className={styles.listItem}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span>{record.fullName}</span> <span>{record.id}</span>
        </div>
    </div>
}
export default RenderList