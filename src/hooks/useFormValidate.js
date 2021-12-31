import { useState, useCallback } from 'react';
import signupFormRule from '../pages/SignUp/signupFormRule';
import messages from '../pages/SignUp/signupFormMessages';

/*
 * Describe
 * - form input의 validation을 판단해서, 메세지의 상태를 업데이트하는 hook
 *
 *  Params
 * - init: form input의 validation message 초기화 값
 * - FORM_INPUTS : form의 input 종류
 */
function useFormValidate(init, FORM_INPUTS) {
    const [inputStateValidation, setInputStateValidation] = useState(init);

    /* validation이 false, true에 따라 message 상태를 설정 */
    const setValidationStatus = (status, name) => {
        if (status) {
            setInputStateValidation((current) => ({
                ...current,
                [name]: messages.success[name],
            }));
        } else {
            setInputStateValidation((current) => ({
                ...current,
                [name]: messages.fail[name],
            }));
        }
    };

    /* input의 value가 validate한지 판단 */
    const checkValidation = (name, value) => {
        if (value.length === 0 && name !== FORM_INPUTS.introduce) {
            setInputStateValidation((current) => ({
                ...current,
                [name]: messages.require,
            }));
        } else {
            switch (name) {
                case FORM_INPUTS.username:
                    let usernameValid = signupFormRule.username.pattern.test(value);
                    return setValidationStatus(usernameValid, name);

                case FORM_INPUTS.email:
                    let emailValid = signupFormRule.email.pattern.test(value);
                    return setValidationStatus(emailValid, name);

                case FORM_INPUTS.password:
                    let passwordValid = signupFormRule.password.pattern.test(value);
                    return setValidationStatus(passwordValid, name);

                case FORM_INPUTS.introduce:
                    let introduceValid = signupFormRule.introduce.pattern.test(value);
                    return setValidationStatus(introduceValid, name);

                default:
                    return;
            }
        }
    };

    /* input에서 onBlur시, validation을 check */
    const onBlur = useCallback((e) => {
        const { name, value } = e.target;
        checkValidation(name, value);
    }, []);

    return [inputStateValidation, onBlur];
}

export default useFormValidate;
