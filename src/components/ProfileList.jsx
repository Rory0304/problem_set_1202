function ProfileList({ sampleList }) {
    return (
        <ul>
            {sampleList.map((src, index) => (
                <li>
                    <p>{index + 1}번째 이미지</p>
                    <img
                        src={src}
                        style={{ width: '100px', height: '100px' }}
                        alt={`${index}번째 샘플 이미지`}
                    />
                </li>
            ))}
        </ul>
    );
}

export default ProfileList;
