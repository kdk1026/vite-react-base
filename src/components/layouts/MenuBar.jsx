import React from 'react';
import { Link } from 'react-router-dom';

const MenuBar = () => {
    // 1. nav 스타일 (메뉴바 전체 컨테이너)
    const navStyle = {
        backgroundColor: '#333', // 배경색
        padding: '10px 0',      // 상하 패딩
        color: 'white',         // 텍스트 기본 색상
        textAlign: 'center'     // 중앙 정렬
    };

    // 2. ul 스타일 (리스트 컨테이너)
    const ulStyle = {
        listStyle: 'none', 
        padding: '0',
        margin: '0',
        // 항목들을 중앙에 정렬하기 위해 flex 사용
        display: 'flex',
        justifyContent: 'center' // 중앙 정렬
    };

    // 3. li 스타일 (개별 메뉴 항목 컨테이너)
    const liStyle = {
        // li 내의 Link들을 flex로 가로로 나열
        display: 'flex', 
        padding: '0', 
        margin: '0',
        alignItems: 'center'
    };

    // 4. Link 스타일 (개별 링크)
    const aStyle = {
        color: 'white',        // 링크 색상
        textDecoration: 'none', // 밑줄 제거
        // **여백 확보**: 좌우에 충분한 패딩을 주어 항목 간 간격을 만듭니다.
        padding: '0 20px',     // '0' (상하), '20px' (좌우)
        cursor: 'pointer'      // 마우스 커서
    };

    return (
        <nav style={navStyle}>
            <ul style={ulStyle}>
                <li style={liStyle}>
                    <Link to={'/'} style={aStyle}>홈</Link>
                    <Link to={'/reducer'} style={aStyle}>useReducer</Link>
                    <Link to={'/redux'} style={aStyle}>Redux Toolkit</Link>
                </li>
            </ul>
        </nav>
    );
};

export default MenuBar;