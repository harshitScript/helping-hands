import styles from "./Request.module.css";
import { Form, Input, Select, Button } from "antd"
const Request = () => {
    const categoryOptions = [{ label: 'Clothing', value: 'cloth' }, { label: 'Raw Edibles', value: 'raw-edibles' }, { label: 'Fresh Edibles', value: 'fresh-edibles' }, { label: 'Daily Use', value: 'daily-use' }, { label: 'Furniture', value: 'furniture' }, { label: 'Other', value: 'other' }]
    return <div className={styles.request_form_outer}>
        <p className={styles.request_form_header}>Request Entity Form</p>
        <Form title="Request Entity" size="small">
            <Form.Item label='Full Name'>
                <Input placeholder="Enter your full name." />
            </Form.Item>
            <Form.Item label='Mobile'>
                <Input placeholder="Enter your phone number." type="number" />
            </Form.Item>
            <Form.Item label='Category'>
                <Select allowClear placeholder='Select a category'>
                    {categoryOptions.map(category => <Select.Option value={category.value}>{category.label}</Select.Option>)}
                </Select>
            </Form.Item>
            <Form.Item label='Enter (What you want)'>
                <Input.TextArea rows={5} placeholder="White Shirt x 2, Blue Jeans x 1 .....">  </Input.TextArea>
            </Form.Item>
            <Form.Item>
                <Button block htmlType="submit" >Submit Request</Button>
            </Form.Item>
        </Form>
    </div>
}

export default Request;