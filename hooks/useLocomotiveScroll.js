    
    import { useEffect } from 'react';
    import LocomotiveScroll from 'locomotive-scroll';

    const useLocomotiveScroll = (ref) => {
    useEffect(() => {
        if (ref.current) {
        const scroll = new LocomotiveScroll({
            el: ref.current,
            smooth: true,
        });

        return () => {
            if (scroll) scroll.destroy();
        };
        }
    }, [ref]);
    };

    export default useLocomotiveScroll;