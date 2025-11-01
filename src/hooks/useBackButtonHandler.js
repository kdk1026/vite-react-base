import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useBackButtonHandler = () => {
    const navigate = useNavigate();

    const [shouldNavigate, setShouldNavigate] = useState(false);

    useEffect(() => {
        const handlePopstate = () => {
            setShouldNavigate(true);
        };

        window.addEventListener('popstate', handlePopstate);

        return () => {
            window.removeEventListener('popstate', handlePopstate);
        };
    }, []);

    useEffect(() => {
        if ( shouldNavigate ) {
            setShouldNavigate(false);

            const pathname = sessionStorage.getItem('pathname');
            sessionStorage.removeItem('pathname');

            const mainPathname = sessionStorage.getItem('mainPathname');
            sessionStorage.removeItem('mainPathname');

            if ( pathname === '/toast' ) {
                navigate('/swiper', { replace: true });
                return;
            } 

            if ( mainPathname === '/' ) {
                navigate('/', { replace: true });
                return;
            }
        }
    }, [shouldNavigate, navigate]);
};

export default useBackButtonHandler;