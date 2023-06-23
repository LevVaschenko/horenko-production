import React, { useState } from 'react'
import Modal from '@mui/material/Modal'
import './Modal.scss'
import Check from 'assets/Check.png'
import InputMask from 'react-input-mask'
import '../Responsive/Desktop-responsive.scss'
import '../Responsive/Mobile-responsive.scss'
import '../Responsive/Tablet-responsive.scss'

type ModalProps = {
    open: boolean
    onClose: () => void
}

const CustomModal: React.FC<ModalProps> = ({ open, onClose }) => {
    const [nameInputValue, setNameInputValue] = useState('')
    const [phoneInputValue, setPhoneInputValue] = useState('')
    const [isNameInputEmpty, setIsNameInputEmpty] = useState(false)
    const [isPhoneInputEmpty, setIsPhoneInputEmpty] = useState(false)
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)

    const handleFormSubmit = () => {
        const phoneRegex = /^\+380-\d{2}-\d{3}-\d{2}-\d{2}$/

        if (nameInputValue === '' || phoneInputValue === '' || !phoneRegex.test(phoneInputValue)) {
            setIsNameInputEmpty(nameInputValue === '')
            setIsPhoneInputEmpty(phoneInputValue === '' || !phoneRegex.test(phoneInputValue))
        } else {
            // Additional form submission logic...
            setIsFormSubmitted(true)
        }
    }

    const handlePhoneInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneInputValue(event.target.value)
        setIsPhoneInputEmpty(false)
    }

    const handleNameInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNameInputValue(event.target.value)
    }

    return (
        <Modal open={open} onClose={onClose} className="custom-modal">
            <div className="modal-container">
                <div className="modal-close" onClick={onClose} />
                <div className="modal-text">
                    {isFormSubmitted ? (
                        <div className="form-submitted">
                            <div className="check-container">
                                <img src={Check} alt="" className="check" />
                            </div>
                            <div className="modal-title">Дякуємо за заявку!</div>
                            <div className="modal-description">Ваші дані успішно надіслані.</div>
                        </div>
                    ) : (
                        <div className='modal-default'>
                            <div className="modal-title">Залишайте заявку</div>
                            <div className="modal-description">Ми зв’яжемося з вами найближчим часом.</div>
                            <div className="modal-forms">
                                <div className={`input-container ${isNameInputEmpty ? 'empty-input' : ''}`}>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Ваше ім’я*"
                                        onChange={handleNameInputChange}
                                        value={nameInputValue}
                                    />
                                </div>
                                <div className={`input-container ${isPhoneInputEmpty ? 'empty-input' : ''}`}>
                                    <InputMask
                                        mask="+380-99-999-99-99"
                                        maskChar=" "
                                        type="tel"
                                        name="phone"
                                        placeholder="+380-00-000-00-00*"
                                        className={`phone-input ${phoneInputValue.startsWith('+380') ? '' : 'phone-uninput'}`}
                                        onChange={handlePhoneInputChange}
                                        value={phoneInputValue}
                                        list="country-codes"
                                    />
                                    <datalist id="country-codes">
                                        <option value="+380">Ukraine</option>
                                    </datalist>
                                </div>
                            </div>
                            <div className="modal-send" onClick={handleFormSubmit}>
                                Відправить
                            </div>
                            <div className="modal-processing">
                                Натискаючи кнопку “Надіслати”, ви погоджуєтесь з
                                <span className="rules-processing"> Правилами обробки персональних даних.</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Modal>
    )
}

export default CustomModal
