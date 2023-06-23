import React from 'react'
import Modal from '@mui/material/Modal'
import './Modal.scss'

type ModalProps = {
    open: boolean
    onClose: () => void
}

const CustomModal: React.FC<ModalProps> = ({ open, onClose }) => {
    const handlePhoneInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const enteredValue = event.target.value;

        if (enteredValue.startsWith('+380')) {
            event.target.classList.remove('phone-uninput');
        } else {
            event.target.classList.add('phone-uninput');
        }
    };

    return (
        <Modal open={open} onClose={onClose} className="custom-modal">
            <div className="modal-container">
                <div className="modal-close" onClick={onClose} />
                <div className="modal-text">
                    <div className="modal-title">
                        Залишайте заявку
                    </div>
                    <div className="modal-description">
                        Ми зв’яжемося з вами найближчим часом.
                    </div>
                    <div className="modal-forms">
                        <div className="input-container">
                            <input type="text" name="name" placeholder="Ваше ім’я*" />
                        </div>
                        <div className="input-container">
                            <input
                                type="tel"
                                name="phone"
                                placeholder="+380-00-000-00-00*"
                                className='phone-input'
                                onChange={handlePhoneInputChange}
                                list="country-codes"
                            />
                            <datalist id="country-codes">
                                <option value="+380">Ukraine</option>
                            </datalist>
                        </div>
                    </div>
                    <div className="modal-send">
                        Відправить
                    </div>
                    <div className="modal-processing">
                        Натискаючи кнопку “Надіслати”, ви погоджуєтесь з
                        <span className='rules-processing'> Правилами обробки персональних даних.
                        </span>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default CustomModal
