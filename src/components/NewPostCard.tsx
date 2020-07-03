import autosize from 'autosize';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { CardContainer } from '../styles/CardStyles';

export const ProfilePic = styled.img`
  width: 5rem;
  border-radius: 50px;
  margin: 2rem;
`;

const InputBox = styled.textarea`
  border: none;
  resize: none;
  /* background: red; */
  margin: 3.5rem 2rem 3.5rem 0;
  min-height: 7rem;
  width: 100%;
  background: red;
`;

const PhotoButton = styled.button``;

const PostItButton = styled.button``;

const TopContainer = styled.div`
  /* background: blue; */
  width: 100%;
  display: flex;
`;

const PictureContainer = styled.div`
  position: relative;
  /* background: black; */
`;

const CtaBar = styled.div`
  display: flex;
  justify-content: space-between;
  height: 7rem;
  padding: 1.5rem;
  background: black;
`;

export const NewPostCard = () => {
  const textareaRef = useRef(null);

  useEffect(() => {
    textareaRef.current.focus();
    autosize(textareaRef.current);
  }, []);

  return (
    <CardContainer>
      <TopContainer>
        <PictureContainer>
          <ProfilePic src={'https://www.placecage.com/300/300'} alt="profile-pic" />
        </PictureContainer>
        <InputBox ref={textareaRef} placeholder="What is on your mind?" />
      </TopContainer>
      <CtaBar>
        <PhotoButton data-testid="post-photo-video">Photo/Video</PhotoButton>
        <PostItButton data-testid="post-message">Post It</PostItButton>
      </CtaBar>
    </CardContainer>
  );
};
