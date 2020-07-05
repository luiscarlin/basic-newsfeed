import { darken } from 'polished';
import React from 'react';
import { FaCircle, FaCommentDots, FaEllipsisH, FaHeart, FaMapMarkerAlt } from 'react-icons/fa';
import styled from 'styled-components';
import { CardContainer } from '../styles/CardStyles';
import { colors } from '../styles/colors';
import { Comment, CommentProps } from './Comment';

const CardHeader = styled.div`
  display: flex;
  padding: 2rem 2rem 0 2rem;
  justify-content: space-between;
  align-items: center;
`;

const ProfilePic = styled.img`
  width: 6.5rem;
  border-radius: 50px;
  margin-right: 2rem;
`;

const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Name = styled.h1`
  font-size: 2rem;
  color: ${colors.text};
  font-weight: 700;
  line-height: 1.5;
`;

const Location = styled.h2`
  font-size: 1.4rem;
  color: ${colors.primaryActiveButtonBackground};
  font-weight: 700;
  line-height: 1.5;
  display: flex;
  align-items: center;
`;

const Icon = styled.span`
  margin-right: 0.5rem;
`;

const ElapsedTime = styled.div`
  font-size: 1.1rem;
  color: ${colors.secondaryText};
  font-weight: 700;
  line-height: 1.5;
`;

const EllipsisIcon = styled.span`
  font-size: 1.8rem;
  color: ${colors.text};
`;

const CardBody = styled.div`
  padding: 1.5rem 2rem 0.5rem 2rem;
`;
const PostMessage = styled.p`
  font-size: 1.7rem;
  color: ${colors.text};
  font-weight: 500;
  line-height: 1.5;
`;

const PostStatus = styled.div`
  padding-top: 1.5rem;
  font-size: 1.7rem;
  color: ${colors.secondaryText};
  font-weight: 500;
  line-height: 1.5;
  display: flex;
  align-items: center;
`;

const CircleIcon = styled.span`
  font-size: 0.5rem;
  margin-left: 1rem;
  margin-right: 1rem;
`;

const CtaBar = styled.div`
  padding: 1.3rem 2rem 1.3rem 2rem;
  border-top: 1px solid ${colors.border};
  background: ${colors.actionBarBackground};
`;

const Button = styled.button`
  background: transparent;
  border: none;
  font-size: 2rem;
  color: ${colors.secondaryText};
  font-weight: 500;
  line-height: 1.5;
  padding: 0;
  :hover {
    color: ${darken(0.2, colors.secondaryText)};
  }
`;

const LeftButton = styled(Button)`
  margin-right: 2rem;
`;

const ButtonIcon = styled.span`
  margin-right: 0.5rem;
`;

interface CardProps {
  photoUrl: string;
  name: string;
  location: string;
  minutesAgo: number;
  posttMessage: string;
  numberLikes: number;
  numberComments: number;
  comments: CommentProps[];
}

export const Card = ({
  photoUrl,
  name,
  location,
  minutesAgo,
  posttMessage,
  numberLikes,
  numberComments,
  comments,
}: CardProps) => {
  return (
    <CardContainer>
      <CardHeader>
        <UserInfoContainer>
          <ProfilePic data-testid={'card-profile-pic'} src={photoUrl} alt="profile-pic" />
          <div>
            <Name>{name}</Name>
            <Location>
              <Icon>
                <FaMapMarkerAlt />
              </Icon>
              {location}
            </Location>
            <ElapsedTime data-testid={'card-elapsed-time'}>{`${minutesAgo} ${
              minutesAgo === 1 ? 'minute' : 'minutes'
            } ago`}</ElapsedTime>
          </div>
        </UserInfoContainer>
        <div data-testid="card-ellipsis-icon">
          <EllipsisIcon>
            <FaEllipsisH />
          </EllipsisIcon>
        </div>
      </CardHeader>
      <CardBody>
        <PostMessage>{posttMessage}</PostMessage>
        <PostStatus>
          <span>{`${numberLikes} Likes`}</span>
          <CircleIcon>
            <FaCircle />
          </CircleIcon>
          <span>{`${numberComments} Comments`}</span>
        </PostStatus>
      </CardBody>
      <CtaBar>
        <LeftButton data-testid={'card-like-button'}>
          <ButtonIcon>
            <FaHeart />
          </ButtonIcon>
          Like
        </LeftButton>
        <Button>
          <ButtonIcon>
            <FaCommentDots />
          </ButtonIcon>
          Comment
        </Button>
      </CtaBar>
      {comments.map((comment, index) => (
        <Comment key={index} {...comment} />
      ))}
    </CardContainer>
  );
};
