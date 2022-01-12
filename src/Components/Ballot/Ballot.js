import React from 'react';
import {
  NomineeWrapper,
  NomineeItem,
  NomineeTitle,
  NomineePhoto,
  SelectButton,
} from './styles';

const Ballot = ({
  isSelected,
  title,
  photoUrL,
  onSelect
}) => (
  <NomineeWrapper>
    <NomineeItem isSelected={isSelected}>
      <NomineeTitle>{title}</NomineeTitle>
      <div><NomineePhoto src={photoUrL} /></div>
      <SelectButton
        isSelected={isSelected}
        onClick={onSelect}
      >
        Select
      </SelectButton>
    </NomineeItem>
  </NomineeWrapper>
);

export default Ballot;