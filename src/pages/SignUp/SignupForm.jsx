import React from 'react';
import InputField from '../../components/Input';
import messages from './signupFormMessages';
import signupFormRule from './signupFormRule';
import useInput from '../../hooks/useInput';
import useFormValidate from '../../hooks/useFormValidate';

const FORM_INPUTS = {
    username: 'username',
    email: 'email',
    password: 'password',
    introduce: 'introduce',
};

function SignupPage() {
    const [inputStateValidation, onBlur] = useFormValidate(
        {
            username: messages.require,
            email: messages.require,
            password: messages.require,
            introduce: '',
        },
        FORM_INPUTS,
    );

    const [{ username, email, password, introduce }, onChange] = useInput({
        username: '',
        email: '',
        password: '',
        introduce: '',
    });

    return (
        <form>
            <InputField
                label="회원명:"
                type="text"
                name="username"
                placeholder="회원명을 작성해주세요."
                required={signupFormRule.username.required}
                maxLength={signupFormRule.username.textMax}
                value={username}
                onChange={onChange}
                onBlur={onBlur}
                message={inputStateValidation.username}
            />
            <InputField
                label="이메일:"
                type="text"
                name="email"
                placeholder="이메일을 작성해주세요."
                required={signupFormRule.email.required}
                value={email}
                onChange={onChange}
                onBlur={onBlur}
                message={inputStateValidation.email}
            />
            <InputField
                label="비밀번호:"
                type="password"
                name="password"
                placeholder="8자 이상의 영소문자/대문자, 숫자, 특수문자 조합"
                required={signupFormRule.password.required}
                value={password}
                onChange={onChange}
                onBlur={onBlur}
                message={inputStateValidation.password}
                autoComplete="off"
            />

            <label>
                자기소개
                <textarea
                    name="introduce"
                    placeholder="자기소개를 작성해주세요."
                    maxLength={signupFormRule.introduce.textMax}
                    required={signupFormRule.introduce.required}
                    cols={60}
                    rows="3"
                    value={introduce}
                    onBlur={onBlur}
                    onChange={onChange}
                    style={{
                        resize: 'none',
                    }}
                />
                {inputStateValidation.introduce && <span>{inputStateValidation.introduce}</span>}
            </label>
        </form>
    );
}

export default SignupPage;
