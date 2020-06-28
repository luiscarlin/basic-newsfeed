import React from 'react';

interface CardProps {
  photoUrl: string;
}

export const Card = ({ photoUrl }: CardProps) => {
  return (
    <div>
      <img src={photoUrl} alt="profile-pic" />
    </div>
  );
};
