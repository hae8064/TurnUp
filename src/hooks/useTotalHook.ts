import React, { useState } from 'react';

type TotalHookType = [
  string,
  (e: React.ChangeEvent<HTMLInputElement>) => void,
  boolean
];

const useTotalHook = (type: string): TotalHookType => {
  const [value, setValue] = useState<string>('');
  const [check, setCheck] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let regExp = /ipsum/g;

    if (type === 'email') {
      regExp =
        /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    } else if (type === 'password') {
      regExp = /^(?=.*[a-zA-Z])((?=.*\d)(?=.*\W)).{8,16}$/;
    } else if (type === 'name') {
      regExp = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{2,}$/;
    } else if (type === 'phone') {
      regExp = /01[016789][^0][0-9]{2,3}[0-9]{3,4}/;
    } else if (type === 'birthday') {
      regExp =
        /^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/;
    } else if (type === 'numberCert') {
      if (value.split('').length === 5) {
        setCheck(true);
      } else {
        setCheck(false);
      }
      e.target.value && setValue(e.target.value);
      return [value, onChange, check];
    }

    if (regExp.test(e.target.value)) {
      setCheck(true);
    } else {
      setCheck(false);
    }
    e.target.value && setValue(e.target.value);
  };

  return [value, onChange, check];
};

export default useTotalHook;
