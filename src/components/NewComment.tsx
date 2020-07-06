import React, { useState } from 'react';
import styled from 'styled-components';

const ProfilePic = styled.img`
  width: 4rem;
  border-radius: 50px;
  margin: 2rem;
`;

export interface NewCommentStateProps {
  photoUrl: string;
}

export interface NewCommentDispatchProps {
  onNewComment: (text: string) => void;
}

export type NewCommentProps = NewCommentStateProps & NewCommentDispatchProps;

export const NewComment = ({ photoUrl, onNewComment }: NewCommentProps) => {
  const [comment, setComment] = useState('');

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onNewComment(comment);
    }
  };

  return (
    <div>
      <ProfilePic src={photoUrl} alt="profile-pic" />
      <input value={comment} onChange={(e) => setComment(e.target.value)} onKeyDown={handleKeyDown} />
    </div>
  );
};
