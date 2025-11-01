const Main = () => {
    const profile = import.meta.env.VITE_PROFILE;

    return (
        <>
            <h2>메인 - {profile}</h2>
            <ul>
                <li>기본 React 사용법 : https://github.com/stars/kdk1026/lists/react</li>
                <li>utils 참고 : https://github.com/kdk1026/vite-util</li>
            </ul>
        </>
    )
};

export default Main;