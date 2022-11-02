import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 송아영님의 컴포넌트
import AyLogin from './pages/songayoung/Login/AyLogin';
import AyMain from './pages/songayoung/Main/AyMain';

// 윤수민님의 컴포넌트
import SmLogin from './pages/yunsumin/Login/SmLogin';
import SmMain from './pages/yunsumin/Main/SmMain';

// 강지민님의 컴포넌트
import JmLogin from './pages/kangjimin/Login/JmLogin';
import JmMain from './pages/kangjimin/Main/JmMain';

// 이혜원님의 컴포넌트
import HwLogin from './pages/leehyewon/Login/HwLogin';
import HwMain from './pages/leehyewon/Main/HwMain';

// 이상윤님의 컴포넌트
import SyLogin from './pages/leesangyoon/Login/SyLogin';
import SyMain from './pages/leesangyoon/Main/SyMain';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/songayoung/login" element={<AyLogin />} />
        <Route path="/songayoung/main" element={<AyMain />} />
        <Route path="/yunsumin/login" element={<SmLogin />} />
        <Route path="/yunsumin/main" element={<SmMain />} />
        <Route path="/kangjimin/login" element={<JmLogin />} />
        <Route path="/kangjimin/main" element={<JmMain />} />
        <Route path="/leehyewon/login" element={<HwLogin />} />
        <Route path="/leehyewon/main" element={<HwMain />} />
        <Route path="/leesangyoon/login" element={<SyLogin />} />
        <Route path="/leesangyoon/main" element={<SyMain />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
