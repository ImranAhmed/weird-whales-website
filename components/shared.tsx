import Image from 'next/image';
import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  align-items: center;
  margin-top: 60px;
  margin-bottom: 60px;
`;
export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 940px;
  // mobile
  @media only screen and (max-width: 1000px) {
    max-width: 90%;
  }
`;

// Use regular img tag for external images to avoid Netlify image optimization issues
export const RoundedImage = styled.img`
  border-radius: 6px;
  object-fit: cover;
`;

export const FlexRow = styled.div`
  display: flex;
  justify-content: space-evenly;
  // mobile
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;
