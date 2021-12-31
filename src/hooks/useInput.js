import { useState, useCallback } from 'react';

/*
 * Describe
 * - input의 상태를 관리하는 hook 함수
 *
 *  Params
 * - init : input의 초기 상태
 * - returns : input value와 onChange / reset 함수
 *
 */
function useInput(init) {
    const [input, setInput] = useState(init);

    const onChange = useCallback((e) => {
        const { name, value } = e.target;
        setInput((current) => ({ ...current, [name]: value }));
    }, []);

    const reset = useCallback((init) => {
        setInput(init);
    }, []);

    return [input, onChange, reset];
}

export default useInput;
