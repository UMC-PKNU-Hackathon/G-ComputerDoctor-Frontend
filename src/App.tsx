import { AnimatePresence } from 'framer-motion';

import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/landing-page';
import PostPage from './pages/posts-page';
import PostCreatePage from './pages/post-create-page';
import PostDetailPage from './pages/post-detail-page';
import ConsultChatPage from './pages/consult-chat-page';
import ConsultStreamPage from './pages/consult-stream-page';
import ReviewsPage from './pages/reviews-page';
import ReviewCreatePage from './pages/review-create-page';
import ReviewDetailPage from './pages/review-detail-page';
import ExchangePage from './pages/exchange-page';
import NotFoundPage from './pages/not-found-page';
import ExpertsPage from './pages/experts-page';
import SignupPage from './pages/signup-page';
import SigninPage from './pages/signin-page';

const App = () => {
  return (
    <AnimatePresence>
      <Routes>
        {/* 초기페이지 */}
        <Route path="/" element={<LandingPage />} />

        {/* 회원가입 */}
        <Route path="/signup" element={<SignupPage />} />

        {/* 로그인 */}
        <Route path="/signin" element={<SigninPage />} />

        {/* 상담 리스트 */}
        <Route path="/posts" element={<PostPage />} />

        {/* 상담 신청 폼 작성 페이지 */}
        <Route path="/posts/create" element={<PostCreatePage />} />

        {/* 상담 디테일 페이지 */}
        <Route path="/posts/:postId" element={<PostDetailPage />} />

        {/* 상담 전 일정 조율 채팅 페이지 */}
        <Route path="/posts/:postId/chat" element={<ConsultChatPage />} />

        {/* 원격 상담 진행 페이지 */}
        <Route path="/posts/:postId/consult" element={<ConsultStreamPage />} />

        {/* 전체 리뷰 페이지 */}
        <Route path="/reviews" element={<ReviewsPage />} />

        {/* 특정 상담에 대한 리뷰 작성 페이지 */}
        <Route path="/reviews/:postId/create" element={<ReviewCreatePage />} />

        {/* 특정 리뷰 확인 페이지 */}
        <Route path="/reviews/:reviewId" element={<ReviewDetailPage />} />

        {/* 코인 구매 및 환전 페이지 */}
        <Route path="/exchange" element={<ExchangePage />} />

        {/* 전문가 리스트 페이지 */}
        <Route path="/experts" element={<ExpertsPage />} />

        {/* 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
