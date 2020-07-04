import React from 'react';
import { FaCircle, FaCommentDots, FaEllipsisH, FaHeart } from 'react-icons/fa';
import { CardContainer, ProfilePic } from '../styles/CardStyles';

interface CardProps {
  name: string;
  location: string;
  minutesAgo: number;
  posttMessage: string;
  numberLikes: number;
  numberComments: number;
}

export const Card = ({ name, location, minutesAgo, posttMessage, numberLikes, numberComments }: CardProps) => {
  return (
    <CardContainer>
      <ProfilePic src={'https://www.placecage.com/300/300'} alt="profile-pic" />
      <div>
        <div>{name}</div>
        <div>{location}</div>
        <div>{`${minutesAgo} ${minutesAgo === 1 ? 'minute' : 'minutes'} ago`}</div>
      </div>
      <span data-testid="card-ellipsis-icon">
        <FaEllipsisH />
      </span>
      <div>{posttMessage}</div>
      <div>
        <span>{`${numberLikes} Likes`}</span>
        <span>
          <FaCircle />
        </span>
        <span>{`${numberComments} Comments`}</span>
      </div>
      <div>
        <button>
          <FaHeart />
          Like
        </button>
        <button>
          <FaCommentDots />
          Comment
        </button>
      </div>
    </CardContainer>
  );
};
