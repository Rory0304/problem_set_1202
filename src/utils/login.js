import { userData, token } from './sampleData';

function login({ req }) {
    const { userType, emailAddr, passCode } = req;
    const isExistedEmail = userData[emailAddr];

    if (isExistedEmail) {
        if (isExistedEmail.passCode === passCode && isExistedEmail.userType === userType) {
            let isExistedToken = token.emailAddr[emailAddr];
            return {
                isLogin: true,
                token: isExistedToken ? isExistedToken.token : '',
            };
        }
    }

    return {
        isLogin: false,
        token: '',
    };
}

export default login;
