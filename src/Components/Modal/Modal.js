import React from 'react';
import {
    ContentWrapper,
    ModalWrapper,
    ModalContent,
    ModalClose,
    ModalTitle,
} from './styles';

const Modal = ({ openModal, title, handleClose, children }) => (
    <ModalWrapper
        id="myModal"
        data-testid={`modal-nominee-results`}
        isOpen={openModal}
    >
        <ModalContent>
            <ModalClose
                onClick={handleClose}
                data-testid={`modal-nominee-close-button`}
            >&times;</ModalClose>
            <ModalTitle>{title}</ModalTitle>
            <ContentWrapper>
                {children}
            </ContentWrapper>
        </ModalContent>
    </ModalWrapper>
);

export default Modal;