import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles/colors';

interface CommentProps {
  photoUrl: string;
  minutesAgo: number;
  name: string;
  role: string;
  message: string;
  numberLikes: number;
}

const CommentContainer = styled.div`
  display: flex;
  align-items: center;
  background: ${colors.actionBarBackground};
  padding: 2rem;
`;

const ProfilePic = styled.img`
  width: 5rem;
  border-radius: 50px;
  margin-right: 2rem;
`;

const Content = styled.div`
  background: ${colors.background};
  border-radius: 15px;
  padding: 2rem;
  display: flex;
`;

export const Comment = ({ photoUrl, minutesAgo, name, role, message, numberLikes }: CommentProps) => {
  return (
    <CommentContainer>
      <ProfilePic src={photoUrl} alt="profile-pic" />
      <Content>
        <div>
          <div>{name}</div>
          <div>{role}</div>
          <div>{message}</div>
          <div>
            <span>{numberLikes} Likes</span>
            <button>Like</button>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
        <div>{`${minutesAgo} minutes ago`}</div>
      </Content>
    </CommentContainer>
  );
};
