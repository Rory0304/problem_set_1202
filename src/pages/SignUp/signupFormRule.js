/*
 * Rule
 * - 회원명 : not null, text max 20자
 * - 이메일 주소 또는 폰번호 : not null, text 형태로 이메일 형식, 휴대폰번호 형태인지 검증
 * - 비밀번호 : not null, 8자 이상, 영소문자/대문자, 숫자, 특수문자 조합
 * - 자기소개 : nullable, textarea 형태로 3줄 max 512자 이내
 */

const signupFormRule = {
    username: {
        required: true,
        textMax: 20,
        pattern: /^.{1,20}$/,
    },
    email: {
        required: true,
        pattern: /.+@.+\.[a-z]{2,}/,
    },
    password: {
        required: true,
        pattern: /(?=\S*\d)(?=\S*[a-zA-Z])(?=\S*[@$!%*#?&])\S{8,}/,
    },
    introduce: {
        required: false,
        textMax: 512,
        pattern: /^.{1,512}$/,
    },
};

export default signupFormRule;
