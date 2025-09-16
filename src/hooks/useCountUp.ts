import { useEffect, useState } from 'react';

const useCountUp = (end: number = 0, duration: number = 1000): number => {
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        const startTime = performance.now();

        const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const value = Math.floor(progress * end);
            setCount(value);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [end, duration]);

    return count;
};

export default useCountUp;
