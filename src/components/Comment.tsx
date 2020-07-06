import React, { useState } from 'react';
import styled from 'styled-components';
import { CommentModel } from '../models/comment.model';
import { SmallProfilePic } from '../styles/CardStyles';
import { colors } from '../styles/colors';

export interface CommentDispatchProps {
  onLike: () => void;
  onDelete: () => void;
  editComment: (comment: string) => void;
}

export type CommentProps = CommentModel & CommentDispatchProps;

const CommentWrapper = styled.div`
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

export const Comment = ({
  photoUrl,
  minutesAgo,
  name,
  role,
  message,
  numberLikes,
  onLike,
  onDelete,
  editComment,
}: CommentProps) => {
  const [disabled, setDisabled] = useState(true);
  const [comment, setComment] = useState(message);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setDisabled(true);
      editComment(comment);
    }
  };

  const onEdit = () => {
    if (disabled) {
      setComment(message);
    }
    setDisabled(false);
  };

  return (
    <CommentWrapper data-testid="comment">
      <SmallProfilePic src={photoUrl} alt="profile-pic" />
      <Content>
        <div>
          <div>{name}</div>
          <div>{role}</div>
          {disabled ? (
            <div>{message}</div>
          ) : (
            <input value={comment} onChange={(e) => setComment(e.target.value)} onKeyDown={handleKeyDown} />
          )}
          <div>
            <span>{numberLikes} Likes</span>
            <button onClick={onLike}>Like</button>
            <button onClick={onEdit}>Edit</button>
            <button onClick={onDelete}>Delete</button>
          </div>
        </div>
        <div>{`${minutesAgo} minutes ago`}</div>
      </Content>
    </CommentWrapper>
  );
};
