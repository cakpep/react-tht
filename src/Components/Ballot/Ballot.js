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
  id,
  title,
  photoUrL,
  onSelect
}) => (
  <NomineeWrapper>
    <NomineeItem isSelected={isSelected}>
      <NomineeTitle>{title}</NomineeTitle>
      <div><NomineePhoto src={photoUrL} /></div>
      <SelectButton
        data-testid={`select-btn-${id}`}
        isSelected={isSelected}
        onClick={onSelect}
      >
        Select
      </SelectButton>
    </NomineeItem>
  </NomineeWrapper>
);

export default Ballot;