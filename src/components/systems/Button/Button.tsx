import React from 'react';
import { ButtonBox } from './styles';

interface ButtonTypes {
  label?: string;
  size: string;
  disabled: boolean;
  block?: boolean;
  outline: boolean;
  RightIcon?: JSX.Element;
  LeftIcon?: JSX.Element;
  ghost?: boolean;
  loginBtnActive?: boolean;
}

export default function Button({
  label,
  size = 's',
  disabled = false,
  block = false,
  outline = false,
  RightIcon,
  LeftIcon,
  ghost = false,
  loginBtnActive,
}: ButtonTypes) {
  if (!label) return null;
  return (
    <ButtonBox
      ghost={ghost}
      outline={outline}
      block={block}
      size={size}
      disabled={disabled}
      loginBtnActive={loginBtnActive}
    >
      {RightIcon && <i className="left">{RightIcon}</i>}
      <span>{label}</span>
      {LeftIcon && <i className="right">{LeftIcon}</i>}
    </ButtonBox>
  );
}
