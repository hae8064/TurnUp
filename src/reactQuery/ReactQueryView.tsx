import React from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import ReactQueryData from './ReactQueryData';
import ReactQueryPost from './ReactQueryPost';

const ReactQueryView = () => {
  // client에 접근하기
  const queryClient = useQueryClient();

  const query = useQuery('phones', ReactQueryData);

  //Mutaion 데이터 변경
  const mutationData = useMutation(ReactQueryPost);

  //   mutation 버튼 클릭 이벤트
  const onBtnClick = () => {
    mutationData.mutate(
      { title: '레오 폰' },
      {
        onSuccess: () => {
          console.log('post 성공');
        },
        onError: () => {
          console.log('post Error');
        },
        onSettled: () => {
          console.log('post settled (성공이든 실패든 둘다 동작)');
        },
      }
    );
    // console.log('mutation' + mutationData.isSuccess);
  };

  //query 안에 data, isLoading, isSuccess, isError 등 다양한 데이터가 존재
  return (
    <div>
      {query.isLoading
        ? '로딩중...:'
        : query.isSuccess &&
          query.data.products.map((value: any) => (
            <li key={value.id}>{value.title}</li>
          ))}

      <button onClick={onBtnClick}>추가</button>
    </div>
  );
};

export default ReactQueryView;
