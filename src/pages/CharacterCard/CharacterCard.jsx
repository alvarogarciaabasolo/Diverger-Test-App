import React from 'react';
import { useLocation } from 'react-router-dom';
import { useFetchNames } from '../../services/useFetchNames';
import { DetailList } from '../../components/DetailList/DetailList';
import { Goback } from '../../components/Goback/Goback';
import {
  CardContainer,
  Card,
  CardTitle,
  CardDetail,
  Loading,
} from './style/CharacterCard.styled';

export const CharacterCard = () => {
  const location = useLocation();
  const { character } = location.state || {};

  const films = useFetchNames(character?.films);
  const starships = useFetchNames(character?.starships);
  const vehicles = useFetchNames(character?.vehicles);

  const isLoading =
    films.isLoading || starships.isLoading || vehicles.isLoading;

  return (
    <CardContainer>
      <Card>
        <CardTitle>{character.name}</CardTitle>
        <CardDetail>Height: {character.height} cm</CardDetail>
        <CardDetail>Mass: {character.mass} kg</CardDetail>
        <CardDetail>Hair Color: {character.hair_color}</CardDetail>
        <CardDetail>Skin Color: {character.skin_color}</CardDetail>
        <CardDetail>Eye Color: {character.eye_color}</CardDetail>
        <CardDetail>Birth Year: {character.birth_year}</CardDetail>
        <CardDetail>Gender: {character.gender}</CardDetail>

        {isLoading ? (
          <Loading>Loading data...</Loading>
        ) : (
          <>
            <DetailList title="Films" items={films.names} />
            <DetailList title="Starships" items={starships.names} />
            <DetailList title="Vehicles" items={vehicles.names} />
          </>
        )}
        <Goback />
      </Card>
    </CardContainer>
  );
};
