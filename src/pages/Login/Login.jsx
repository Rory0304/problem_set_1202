import React, { useState } from 'react';
import InputField from '../../components/Input';
import useInput from '../../hooks/useInput';

import login from '../../utils/login';

function LoginPage() {
    const [success, setSuccess] = useState(false);
    const [input, onChange, reset] = useInput({ userType: 'U', emailAddr: '', passCode: '' });

    /* API 호출이 아닌, MOCK DATA를 사용해서 isLogin을 판단함. */
    const onSubmit = (e) => {
        e.preventDefault();
        const response = login({ req: input });
        if (response.isLogin) {
            localStorage.setItem('token', response.token);
            alert('로그인 성공!');
            setSuccess(true);
        } else {
            alert('로그인 실패, 잘못된 회원 정보입니다.');
            reset({ userType: 'U', emailAddr: '', passCode: '' });
            setSuccess(false);
        }
    };

    if (!success) {
        return (
            <form onSubmit={onSubmit}>
                <InputField
                    label="이메일:"
                    type="text"
                    name="emailAddr"
                    required={true}
                    value={input.emailAddr}
                    onChange={onChange}
                />
                <InputField
                    label="비밀번호:"
                    type="password"
                    name="passCode"
                    required={true}
                    value={input.passCode}
                    autoComplete="off"
                    onChange={onChange}
                />
                <input type="submit" value="로그인" />
            </form>
        );
    } else {
        return <span>로그인에 성공했습니다!</span>;
    }
}

export default LoginPage;
