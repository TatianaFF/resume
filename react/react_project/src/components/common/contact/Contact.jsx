import { Button } from "antd"
import s from './ContactContainer.module.css'

export const Contact = ({ logo, onClickContact }) => {
    return (
        <Button className={ s.btn_contact } type='text' style={ { margin: 4 } }
                icon={ <img className={ s.btn_contact_img } src={ logo } alt='loading'
                            onClick={ onClickContact }/> }/>
    )
}
