import React from 'react';
import {
  DetailListContainer,
  DetailListTitle,
  DetailListItems,
} from './style/DetailList.styled';

export const DetailList = ({ title, items }) => {
  if (items.length === 0) return null;

  return (
    <DetailListContainer>
      <DetailListTitle>{title}</DetailListTitle>
      <DetailListItems>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </DetailListItems>
    </DetailListContainer>
  );
};
