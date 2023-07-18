import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

export const WidgetContainer = styled.div`
  text-align: center;
`;

export const FeedbackButton = styled.button`
  background: linear-gradient(to bottom right, #ff4d00, #800000);
  color: white;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 5px;
  cursor: pointer;
  border: none;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 0 5px #ff5900, 0 0 10px #ff6a00, 0 0 15px #ff5900;
  }

  &:focus {
    outline: none;
  }
`;

export const ResultsContainer = styled.div`
  margin: auto 0;
`;

export const NoFeedbackContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
`;
