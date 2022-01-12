import React, { useEffect, useState } from 'react';
import api from '../../Api/Api';

import Ballot from '../../Components/Ballot';
import Category from '../../Components/Category';
import PageTitle from '../../Components/PageTitle';
import Modal from '../../Components/Modal';
import TableResult from '../../Components/TableResult';
import {
  FloatingButton,
  FloatingButtonLabel
} from '../../Components/Styled/Button';

import {
  AppLayout,
  BallotWraper,
  NomineeWraper
} from './styles';

const Home = () => {
  const [ballotData, setBallotData] = useState([]);
  const [selectedBallotData, setSelectedBallotData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const result = await api.getBallotData();
      setBallotData(result.items || [])
    }
    fetchData()
  }, []);

  const isNomineeSelected = (categoryId, item) => selectedBallotData?.[categoryId]?.id === item.id;
  const selectNomineeHandler = ({ id, title }, item) => () => {
    setSelectedBallotData((prevState) => ({
      ...prevState,
      [id]: {
        categoryTile: title,
        ...item
      }
    }));
  };
  const toggleModal = () => setIsOpen(!isOpen);
  return (
    <AppLayout>
      <PageTitle title="AWARDS 2021" />
      {ballotData.map(({
        id, title, items
      }) => (
        <NomineeWraper key={`nominee-wrapper-${id}`}>
          <Category title={title} key={id} />
          <BallotWraper key={`ballot-wrapper-${id}`}>
            {items.map((item) => (
              <Ballot
                key={item.id}
                title={item.title}
                photoUrL={item.photoUrL}
                isSelected={isNomineeSelected(id, item)}
                onSelect={selectNomineeHandler({ id, title }, item)}
              />
            ))}
          </BallotWraper>
        </NomineeWraper>
      ))}
      <FloatingButton onClick={toggleModal}>
        <FloatingButtonLabel>Submit</FloatingButtonLabel>
      </FloatingButton>
      <Modal
        openModal={isOpen}
        handleClose={toggleModal}
        title="Success"
      >
        <TableResult items={selectedBallotData} />
      </Modal>
    </AppLayout>
  );
}

export default Home;
