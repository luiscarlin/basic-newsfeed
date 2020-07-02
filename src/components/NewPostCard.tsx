import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles/colors';

const Card = styled.div`
  background: ${colors.surface};
  width: 580px;
`;

const Top = styled.div`
  display: flex;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProfilePic = styled.img`
  width: 50px;
`;

const InputBox = styled.input``;

const PhotoButton = styled.button``;

const PostItButton = styled.button``;

export const NewPostCard = () => {
  return (
    <Card>
      <Top>
        <ProfilePic src={'https://www.placecage.com/50/50'} alt="profile-pic" />
        <InputBox placeholder="What is on your mind?" />
      </Top>
      <Bottom>
        <PhotoButton data-testid="post-photo-video">Photo/Video</PhotoButton>
        <PostItButton data-testid="post-message">Post It</PostItButton>
      </Bottom>
    </Card>
  );
};
