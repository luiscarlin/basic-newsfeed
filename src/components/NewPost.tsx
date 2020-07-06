import autosize from 'autosize';
import { darken } from 'polished';
import React, { useEffect, useRef, useState } from 'react';
import { FaPhotoVideo } from 'react-icons/fa';
import styled from 'styled-components';
import { CardWrapper, SmallProfilePic } from '../styles/CardStyles';
import { colors } from '../styles/colors';

const InputBox = styled.textarea`
  border: none;
  resize: none;
  margin: 3rem 2rem 3rem 0;
  min-height: 7rem;
  width: 100%;
  font-size: 1.7rem;
  color: ${colors.text};
  font-weight: 500;
  line-height: 1.5;
  ::placeholder {
    color: ${colors.placeholderText};
  }
`;

const ProfilePic = styled(SmallProfilePic)`
  margin: 2rem;
`;

const PhotoButton = styled.button`
  background: ${colors.secondaryButtonBackground};
  border: none;
  border-radius: 50px;
  color: ${colors.buttonText};
  font-weight: 600;
  font-size: 1.2rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;

interface PostItButtonProps {
  disabled: boolean;
}
const PostItButton = styled.button<PostItButtonProps>`
  background: ${(props) =>
    props.disabled ? colors.primaryDisabledButtonBackground : colors.primaryActiveButtonBackground};
  border: none;
  border-radius: 4px;
  color: ${colors.buttonText};
  font-weight: 600;
  font-size: 1.6rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  :hover {
    background: ${(props) =>
      props.disabled ? colors.primaryDisabledButtonBackground : darken(0.1, colors.primaryActiveButtonBackground)};
  }
`;

const TopWrapper = styled.div`
  width: 100%;
  display: flex;
`;

const CtaBar = styled.div`
  display: flex;
  justify-content: space-between;
  height: 7rem;
  padding: 1.7rem;
  padding-left: 2rem;
  padding-right: 2rem;
  border-top: 1px solid ${colors.border};
`;

const IconWrapper = styled.span`
  margin-right: 0.5rem;
`;

export interface NewPostStateProps {
  photoUrl: string;
}

export interface NewPostDispatchProps {
  onPost: (text: string) => void;
}

export type NewPostdProps = NewPostStateProps & NewPostDispatchProps;

export const NewPost = ({ onPost, photoUrl }: NewPostdProps): JSX.Element => {
  const textareaRef = useRef(null);

  useEffect(() => {
    textareaRef.current.focus();
    autosize(textareaRef.current);
  }, []);

  const [text, setText] = useState('');

  const onPostClicked = () => {
    onPost(text);
    setText('');
  };

  return (
    <CardWrapper>
      <TopWrapper>
        <div>
          <ProfilePic src={photoUrl} alt="profile-pic" />
        </div>
        <InputBox
          role="textbox"
          ref={textareaRef}
          placeholder="What is on your mind?"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </TopWrapper>
      <CtaBar>
        <PhotoButton>
          <IconWrapper>
            <FaPhotoVideo />
          </IconWrapper>
          Photo/Video
        </PhotoButton>
        <PostItButton disabled={text === ''} onClick={onPostClicked}>
          Post It
        </PostItButton>
      </CtaBar>
    </CardWrapper>
  );
};
