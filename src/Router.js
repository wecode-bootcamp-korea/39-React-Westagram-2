import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 송아영님의 컴포넌트
import aLogin from './pages/songayoung/Login/Login';
import aMain from './pages/songayoung/Main/Main';

// 윤수민님의 컴포넌트
import suLogin from './pages/yunsumin/Login/Login';
import suMain from './pages/yunsumin/Main/Main';

// 강지민님의 컴포넌트
import jiLogin from './pages/kangjimin/Login/Login';
import jiMain from './pages/kangjimin/Main/Main';

// 이혜원님의 컴포넌트
import hyeLogin from './pages/leehyewon/Login/Login';
import hyeMain from './pages/leehyewon/Main/Main';

// 이상윤님의 컴포넌트
import sangLogin from './pages/leesangyoon/Login/Login';
import sangMain from './pages/leesangyoon/Main/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/songayoung/login" element={<aLogin />} />
        <Route path="/songayoung/main" element={<aMain />} />
        <Route path="/yunsumin/login" element={<suLogin />} />
        <Route path="/yunsumin/main" element={<suMain />} />
        <Route path="/kangjimin/login" element={<jiLogin />} />
        <Route path="/kangjimin/main" element={<jiMain />} />
        <Route path="/leehyewon/login" element={<hyeLogin />} />
        <Route path="/leehyewon/main" element={<hyeMain />} />
        <Route path="/leesangyoon/login" element={<sangLogin />} />
        <Route path="/leesangyoon/main" element={<sangMain />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
