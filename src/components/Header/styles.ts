import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.img``;

export const MainHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  background-color: ${(props) => props.theme.colors.primary};
  height: 60px;
  padding-top: ${(props) => props.theme.spacings.space14};
  padding-bottom: ${(props) => props.theme.spacings.space14};
  padding-left: ${(props) => props.theme.spacings.space120};
  padding-right: ${(props) => props.theme.spacings.space120};
`;

export const SubHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.neutro.n1};
  height: 48px;
  padding-left: ${(props) => props.theme.spacings.space120};
  padding-right: ${(props) => props.theme.spacings.space120};
`;

export const InputContainer = styled.div`
  position: fixed;
  width: 368px;
  left: 50%;
  margin-left: -184px;
`;

export const OptionsContainer = styled.div`
  display: flex;
`;

export const Title = styled.h4``;

export const StyledInput = styled.input`
  width: 100%;
  height: 100%;
`;
