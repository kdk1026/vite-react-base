import { useEffect } from "react";
import { useLocation, useNavigate, useNavigationType } from "react-router-dom";

function useCustomBackNavigation() {
    const SESSION_KEY_CURRENT_URI = 'currentURI';
    const SESSION_KEY_PREV_URI = 'prevURI';
    const SESSION_KEY_SCROLL_Y = 'scrollY';

    const location = useLocation();
    const navigate = useNavigate();
    const navigationType = useNavigationType();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const moveMainTarget = [
        '/communication/partner/complete',
        '/communication/visit-before-inquire/complete',
        '/communication/visit-after-inquire/write', '/communication/visit-after-inquire/complete',
        '/login/email'
    ];

    // URI 기록
    useEffect(() => {
        const currentURI = location.pathname;
        const prevURI = sessionStorage.getItem(SESSION_KEY_CURRENT_URI);

        sessionStorage.setItem(SESSION_KEY_PREV_URI, prevURI || currentURI);
        sessionStorage.setItem(SESSION_KEY_CURRENT_URI, currentURI);
    }, [location.pathname]);

    useEffect(() => {
        const handlePopState = () => {
            const currentURI = sessionStorage.getItem(SESSION_KEY_CURRENT_URI);
            const prevURI = sessionStorage.getItem(SESSION_KEY_PREV_URI);

            if ( moveMainTarget.includes(prevURI) ) {
                setTimeout(() => {
                    navigate('/', { replace: true });
                }, 200);
            } else if ( currentURI === '/' ) {
                setTimeout(() => {
                    navigate('/', { replace: true });
                }, 200);
                return;
            }
        };

        window.addEventListener("popstate", handlePopState);
        return () => {
            window.removeEventListener("popstate", handlePopState);
        };
    }, [moveMainTarget, navigate]);

    useEffect(() => {
        let isMoveScroll = true;

        if ( isMoveScroll ) {
            if ( navigationType === 'POP' ) {
                const savedY = sessionStorage.getItem(`${SESSION_KEY_SCROLL_Y}:${location.pathname}`);
                if ( savedY && parseInt(savedY) > 0 ) {
                    if ( location.pathname === '/' ) {
                        setTimeout(() => {
                            window.scrollTo(0, parseInt(savedY));
                        }, 2000);
                    } else {
                        setTimeout(() => {
                            window.scrollTo(0, parseInt(savedY));
                        }, 1000);
                    }
                }
            }
        }

        const handleScroll = () => {
            sessionStorage.setItem(`${SESSION_KEY_SCROLL_Y}:${location.pathname}`, window.scrollY.toString());
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [location, navigationType]);
}

export default useCustomBackNavigation;
