import { useNavigate } from "react-router-dom";

export default function ErrorFallback({ error, resetErrorBoundary  }) {
	const navigate = useNavigate();
	
	console.log(`React Error Captured: ${error}`);
	
	const handleGoHome = () => {
		resetErrorBoundary();
		navigate("/");
	};

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        backgroundColor: '#f8d7da', // 연한 빨간색 배경 (오류 표시)
        color: '#721c24', // 진한 빨간색 텍스트
        padding: '20px',
        borderRadius: '8px',
        border: '1px solid #f5c6cb',
    };
    
    const buttonStyle = {
        marginTop: '20px',
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        backgroundColor: '#007bff', // 파란색 버튼
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        transition: 'background-color 0.3s',
    };

    return (
        <div role="alert" style={containerStyle}>
            <h2 style={{ color: '#721c24' }}>🚨 오류가 발생했습니다 🚨</h2>
            <p>애플리케이션을 사용하는 동안 문제가 발생했습니다.</p>

            {/* 에러 메시지 표시 (선택 사항) */}
            <details style={{ whiteSpace: 'pre-wrap', margin: '15px 0', maxWidth: '80%', overflow: 'auto', textAlign: 'left' }}>
                <summary style={{ cursor: 'pointer', fontWeight: 'bold' }}>오류 상세 정보 보기</summary>
                <pre style={{ color: '#721c24', backgroundColor: '#f5c6cb', padding: '10px', borderRadius: '4px' }}>
                    {error && error?.message}
                </pre>
            </details>

            <button
                style={buttonStyle}
                onClick={handleGoHome}
            >
                🏠 홈으로 돌아가기
            </button>
        </div>
    )
}