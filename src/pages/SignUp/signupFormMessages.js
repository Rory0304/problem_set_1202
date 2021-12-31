/* 회원가입 폼의 validate관련 메세지 */
const messages = {
    require: '필수 입력입니다.',
    success: {
        username: '올바른 회원명입니다.',
        email: '올바른 이메일 형식입니다.',
        password: '올바른 비밀번호 형식입니다.',
        introduce: '',
    },
    fail: {
        username: '회원명은 20자까지 작성 가능합니다.',
        email: '올바르지 않은 이메일 형식입니다.',
        password: '8자 이상의 영소문자/대문자, 숫자, 특수문자 조합이어야 합니다.',
        introduce: '자기소개는 512자까지 작성 가능합니다.',
    },
};

export default messages;
