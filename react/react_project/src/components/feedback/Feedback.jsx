import { Form, Input, Modal } from 'antd'
import { connect } from "react-redux"
import { sendFeedbackData } from "../../redux/reducers/feedbackReducer"

const Feedback = ({ sendFeedbackData, open, onOk, onCancel, ...props }) => {
    const onSuccess = (values) => {
        sendFeedbackData(values.email, values.message)
        onOk()
    }

    return (
        <div>
            <FeedbackForm open={ open } onSuccess={ onSuccess } onCancel={ onCancel } { ...props } />
        </div>
    )
}

const FeedbackForm = ({ open, onSuccess, onCancel }) => {
    const [form] = Form.useForm()
    const messageErrorRequire = "Поле обязательно для заполнения"
    const messageErrorFormat = "Неверный формат"

    return (
        <Modal
            open={ open }
            title={ "Обратная связь" }
            okText="Отправить"
            cancelText="Отмена"
            onCancel={ onCancel }
            onOk={ () => {
                form
                    .validateFields()
                    .then((values) => {
                        form.resetFields()
                        onSuccess(values)
                    })
                    .catch((info) => {
                        console.log('Validate Failed:', info)
                    })
            } }
        >
            <Form
                form={ form }
                layout="vertical"
                name="form_in_modal"
            >
                <Form.Item
                    label="Ваша почта"
                    name="email"
                    rules={ [
                        {
                            required: true,
                            message: messageErrorRequire,
                        },
                        {
                            type: "email",
                            message: messageErrorFormat,
                        },
                    ] }
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="Сообщение"
                    name="message"
                    rules={ [
                        {
                            required: true,
                            message: messageErrorRequire,
                        },
                    ] }
                >
                    <Input/>
                </Form.Item>
            </Form>
        </Modal>
    )
}
const mapStateToProps = (state) => ({})

export default connect(mapStateToProps, { sendFeedbackData })(Feedback)