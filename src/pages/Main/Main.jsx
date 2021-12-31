import { Link } from 'react-router-dom';
import route from '../../routers/route';

function MainPage() {
    return (
        <ul>
            <li>
                <Link to={route.INFINITESCROLL}>무한 스크롤</Link>
            </li>
            <li>
                <Link to={route.SIGNUP}>회원가입</Link>
            </li>
            <li>
                <Link to={route.LOGIN}>로그인 </Link>
            </li>
        </ul>
    );
}

export default MainPage;
