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
  padding: 1rem 2rem;
`;

const Content = styled.div`
  background: ${colors.background};
  border-radius: 10px;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Name = styled.p`
  font-size: 1.5rem;
  color: ${colors.text};
  font-weight: 700;
  line-height: 1.5;
`;

const Role = styled.p`
  font-size: 1.3rem;
  color: ${colors.primaryActiveButtonBackground};
  font-weight: 500;
  line-height: 1.5;
`;

const Message = styled.p`
  font-size: 1.3rem;
  color: ${colors.text};
  font-weight: 700;
  line-height: 1.5;
`;

const TimeElapsed = styled.p`
  font-size: 1.4rem;
  color: ${colors.placeholderText};
  font-weight: 500;
  line-height: 1.5;
  flex: 1;
  text-align: right;
`;

const InputBox = styled.input`
  font-size: 1.3rem;
  color: ${colors.text};
  font-weight: 700;
  line-height: 1.5;
  background: transparent;
  width: 100%;
  border: 2px solid ${colors.border};
  border-radius: 50px;
  padding: 0 1rem;
`;

const LeftContent = styled.div`
  overflow: hidden;
  flex: 3;
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
        <LeftContent>
          <Name>{name}</Name>
          <Role>{role}</Role>
          {disabled ? (
            <Message>{message}</Message>
          ) : (
            <InputBox value={comment} onChange={(e) => setComment(e.target.value)} onKeyDown={handleKeyDown} />
          )}
          <div>
            <span>{numberLikes} Likes</span>
            <button onClick={onLike}>Like</button>
            <button onClick={onEdit}>Edit</button>
            <button onClick={onDelete}>Delete</button>
          </div>
        </LeftContent>
        <TimeElapsed>{`${minutesAgo} minutes ago`}</TimeElapsed>
      </Content>
    </CommentWrapper>
  );
};
