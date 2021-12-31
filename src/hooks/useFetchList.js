import { useState, useLayoutEffect } from 'react';
import faker from 'faker';

const images = new Array(100).fill('').map(() => faker.image.people()); //faker 라이브러리로부터 people관련 사진을 100개 불러옴

/*
 * Describe
 * - UNIT 만큼 list를 fetch해서, list의 상태를 관리하는 로직 hook
 *
 *  Params
 * - init : 리스트의 초기화 값
 * - UNIT : list를 fetch할 수
 * - returns : list와 list 요소를 load하는 함수
 *
 */
function useFetchList({ init, UNIT }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [sampleList, setSampleList] = useState(init);

    const loadData = () => {
        setCurrentIndex(currentIndex + UNIT);
        setSampleList([...sampleList, ...images.slice(currentIndex, currentIndex + UNIT)]);
    };

    useLayoutEffect(() => {
        loadData();
    }, []);

    return [sampleList, loadData];
}

export default useFetchList;
