import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Login from './pages/Login';
import styled from 'styled-components';
// import SignUp from './pages/SignUp';
import Layout from './pages/Auth/Layout';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/index';
import SwrComponent from './swrTest/SwrComponent';
import ReactQueryView from './reactQuery/ReactQueryView';
import { QueryClient, QueryClientProvider } from 'react-query';

const App: React.FC = () => {
  // 리액트 쿼리 사용 queryClient 생성
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/auth/*" element={<Layout />}></Route>
            <Route path="/swrTest" element={<SwrComponent />}></Route>
            <Route path="/reactQuery" element={<ReactQueryView />}></Route>
            {/* <Route path="/login" element={<Login />} /> */}
          </Routes>
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
