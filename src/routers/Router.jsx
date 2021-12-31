import { BrowserRouter, Routes, Route } from 'react-router-dom';
import route from './route';

import MainPage from '../pages/Main/Main';
import LoginPage from '../pages/Login/Login';
import SignupPage from '../pages/SignUp/SignupForm';
import InfiniteScrollPage from '../pages/InfiniteScroll/InfiniteScroll';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path={route.MAIN} element={<MainPage />} />
                <Route exact path={route.SIGNUP} element={<SignupPage />} />
                <Route exact path={route.INFINITESCROLL} element={<InfiniteScrollPage />} />
                <Route exact path={route.LOGIN} element={<LoginPage />} />{' '}
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
