import React from 'react';
import { useState } from 'react';
import { IconType } from 'react-icons';
import { GendBtnStyle } from './GenderBtnStyle';

interface GenderBtnTypes {
  label: string;
  LabelIcon: IconType;
  onClick?: () => void;
  setGenderClick: React.Dispatch<React.SetStateAction<string>>;
}

const GenderBtn = ({
  label,
  LabelIcon,
  onClick,
  setGenderClick,
}: GenderBtnTypes) => {
  const [result, setResult] = useState('');

  const btnWomanClick = () => {
    setGenderClick('woman');
    setResult('woman');
  };

  const btnManClick = () => {
    setGenderClick('man');
    setResult('man');
  };
  return (
    <GendBtnStyle color={result}>
      {label && (
        <label>
          {LabelIcon && <LabelIcon />}
          <span>{label}</span>
        </label>
      )}
      <div className="genderBtm">
        <button className="woman" onClick={btnWomanClick}>
          여성
        </button>
        <button className="man" onClick={btnManClick} color={result}>
          남성
        </button>
      </div>
    </GendBtnStyle>
  );
};

export default GenderBtn;
