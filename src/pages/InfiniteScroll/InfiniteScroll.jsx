import { useRef, useEffect } from 'react';

import ProfileList from '../../components/ProfileList';
import useFetchList from '../../hooks/useFetchList';
import useIntersectionObserver from '../../hooks/useInterscetionObserver';

const UNIT = 10;

function InfiniteScrollPage() {
    const intersectionObserverTarget = useRef(null);
    const [intersect] = useIntersectionObserver(intersectionObserverTarget);
    const [sampleList, loadData] = useFetchList({ init: [], UNIT });

    /* 스크롤의 마지막 부분이 intersect 되었을 때 데이터를 새로 로드함. */
    useEffect(() => {
        if (intersect) {
            loadData();
        }
    }, [intersect]);

    return (
        <main>
            <div>
                <ProfileList sampleList={sampleList} />
                <div ref={intersectionObserverTarget}></div>
            </div>
        </main>
    );
}

export default InfiniteScrollPage;
