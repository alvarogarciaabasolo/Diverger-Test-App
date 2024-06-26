import IconBack from '../../assets/icon-arrow-left.svg';
import { ContainerBack, TitleBack } from './style/Goback.styled';

export const Goback = () => {
  return (
    <ContainerBack to="/">
      <img src={IconBack} alt="Icon go back" />
      <TitleBack>Go Back</TitleBack>
    </ContainerBack>
  );
};
