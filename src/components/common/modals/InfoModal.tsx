import React from 'react';

//componets
import Modal from '../Modal';

type Props = {
    open: boolean;
    closeCallback: any;
    lead?: string;
    description?: string;
};

const InfoModal = ({ open, closeCallback, lead, description }: Props) => {
    const type = 'Information';

    return (
        <Modal open={open} closeCallback={closeCallback} type={type}>
            <p className='paragraph--component -black -big mb-6'>{lead}</p>
            <p className='paragraph--component -black mb-6'>{description}</p>
        </Modal>
    );
};

export default InfoModal;