import React, { useState } from 'react';
import styled from 'styled-components';
import { SmallProfilePic } from '../styles/CardStyles';
import { colors } from '../styles/colors';

const ProfilePic = styled(SmallProfilePic)`
  margin-right: 2rem;
`;

const InputBox = styled.input`
  width: 100%;
  height: 100%;
  border: 2px solid ${colors.border};
  font-size: 1.5rem;
  color: ${colors.text};
  font-weight: 500;
  line-height: 1.5;
  padding: 1.5rem;
  background: transparent;
  border-radius: 50px;
  ::placeholder {
    color: ${colors.placeholderText};
  }
`;

const NewCommentWrapper = styled.div`
  display: flex;
  padding: 1rem 2rem;
  align-items: center;
  background: ${colors.actionBarBackground};
`;

export interface NewCommentStateProps {
  photoUrl: string;
}

export interface NewCommentDispatchProps {
  onNewComment: (text: string) => void;
}

export type NewCommentProps = NewCommentStateProps & NewCommentDispatchProps;

export const NewComment = ({ photoUrl, onNewComment }: NewCommentProps): JSX.Element => {
  const [comment, setComment] = useState('');

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onNewComment(comment);
    }
  };

  return (
    <NewCommentWrapper>
      <ProfilePic src={photoUrl} alt="profile-pic" />
      <InputBox
        placeholder={'Add a comment'}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </NewCommentWrapper>
  );
};
