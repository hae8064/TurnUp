import React, { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { RiInformationLine } from 'react-icons/ri';
import { InputBox } from './styles';
import { useEffect } from 'react';
import { IconType } from 'react-icons';

interface InputPropsTypes {
  label?: string;
  LabelIcon?: IconType;
  RightBtn?: IconType;
  rightText?: string;
  info?: string;
  error?: string;
  onTextClick?: () => void;
  onCheckClick?: boolean;
  onViewClick?: () => void;
  placeholder?: string;
  value?: string | boolean;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void | string;
  emailCheck?: boolean;
  typeNumber?: boolean;
}

const Input = ({
  label,
  LabelIcon,
  RightBtn,
  rightText,
  info,
  error,
  onTextClick,
  onCheckClick,
  onViewClick,
  placeholder,
  value,
  type,
  emailCheck,
  typeNumber,
  ...rest
}: InputPropsTypes) => {
  const [phoneCheck, setPhoneCheck] = useState(false);
  const [pwdCheck, setPwdCheck] = useState(false);
  const [pwdVisible, setPwdVisible] = useState('');

  //비밀번호 보이게 클릭 이벤트
  const onEventClick = (): void => {
    setPwdCheck(!pwdCheck);
    console.log(type);
    // onTextClick && onTextClick();
  };

  //회원가입 ㅜㅂ분 인증 텍스트 클릭 이벤트
  const onEventClick2 = (): void => {
    if (phoneCheck) {
      onViewClick && onViewClick();
    }
    // onViewClick && onViewClick();
  };

  useEffect(() => {
    if (onCheckClick) {
      setPhoneCheck(true);
    } else {
      setPhoneCheck(false);
    }
  }, [onCheckClick]);

  useEffect(() => {
    if (emailCheck) {
      setPhoneCheck(true);
    } else {
      setPhoneCheck(false);
    }
  }, [emailCheck]);

  return (
    <InputBox className="tud_input">
      {label && (
        <label>
          {LabelIcon && <LabelIcon />}
          <span>{label}</span>
        </label>
      )}
      <div className="input_box">
        <input
          type={pwdCheck ? 'string' : typeNumber ? 'number' : type}
          // type={pwdVisible === '' ? type : pwdVisible}
          {...rest}
          className={error ? 'error' : ''}
          placeholder={placeholder}
        />
        {rightText && (
          <span className={`rightText${phoneCheck}`} onClick={onEventClick2}>
            {rightText}
          </span>
        )}
        {/* <span className="rightBtn" onClick={onEventClick}>
          클릭
        </span> */}
        {RightBtn && <RightBtn className="rightBtn" onClick={onEventClick} />}
      </div>
      {error && (
        <p className="message error">
          <RxCross2 />
          <span>{error}</span>
        </p>
      )}
      {info && !error && (
        <p className="message info">
          <RiInformationLine />
          <span>{info}</span>
        </p>
      )}
    </InputBox>
  );
};

export default Input;
