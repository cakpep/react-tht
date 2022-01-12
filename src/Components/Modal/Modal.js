import React from 'react';
import {
    ContentWrapper,
    ModalWrapper,
    ModalContent,
    ModalClose,
    ModalTitle,
} from './styles';

const Modal = ({ openModal, title, handleClose, children }) => (
    <ModalWrapper id="myModal" isOpen={openModal}>
        <ModalContent>
            <ModalClose onClick={handleClose}>&times;</ModalClose>
            <ModalTitle>{title}</ModalTitle>
            <ContentWrapper>
                {children}
            </ContentWrapper>
        </ModalContent>
    </ModalWrapper>
);

export default Modal;