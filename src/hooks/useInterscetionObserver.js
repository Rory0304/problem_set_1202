import { useState, useEffect, useCallback } from "react";

/*
 * Describe
 * - intersect 되었는지 판단하는 상태를 관리하는 hook 함수
 *
 *  Params 
 * - ref : IntersectionObserver를 걸어줄 ref 요소
 * - option : IntersectionObserver의 설정
 * - returns : 요소의 intersect의 상태 (boolean)
 *
 */ 
function useInterscetionObserver(ref, option = { threshold: 0.7 }) {
  const [intersectState, setIntersectState] = useState(false);

  const onIntersect = useCallback(([entry]) => {
    if (entry.isIntersecting) {
      setIntersectState(true);
    } else {
      setIntersectState(false);
    }
  }, []);

  useEffect(() => {
    let observer;
    if (ref.current) {
      observer = new IntersectionObserver(onIntersect, {
        option
      });
      observer.observe(ref.current);
    }
    return () => observer && observer.disconnect();
  }, [ref.current]);

  return [intersectState];
}

export default useInterscetionObserver;
