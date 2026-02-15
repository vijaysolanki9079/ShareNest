import { useRef, useEffect } from 'react';

export const useImageSequence = ({
    frameCount,
    imagePrefix, // expects format that includes the path and filename up to the number
    imageSuffix, // e.g., ".jpg"
    fps = 30, // frames per second
    startIndex = 0,
    loop = true // default to looping
}) => {
    const canvasRef = useRef(null);
    const requestRef = useRef();
    const imagesRef = useRef([]);
    const frameIndexRef = useRef(startIndex);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');

        // Preload images
        const loadImages = () => {
            const promises = [];
            for (let i = 0; i < frameCount; i++) {
                // Pad with zeros to match format: 000, 001, ..., 079
                const indexStr = i.toString().padStart(3, '0');
                const img = new Image();
                img.src = `${imagePrefix}${indexStr}${imageSuffix}`;
                promises.push(new Promise((resolve) => {
                    img.onload = () => resolve(img);
                    // resolve even if error to avoid hanging, maybe log error
                    img.onerror = () => resolve(null);
                }));
                imagesRef.current[i] = img;
            }
            return Promise.all(promises);
        };

        let lastTime = 0;
        const interval = 1000 / fps;

        const render = (time) => {
            if (time - lastTime > interval) {
                const frameIndex = frameIndexRef.current;
                const img = imagesRef.current[frameIndex];

                if (img && img.complete) {
                    // Draw image covering the canvas (object-fit: cover equivalent)
                    const hRatio = canvas.width / img.width;
                    const vRatio = canvas.height / img.height;
                    const ratio = Math.max(hRatio, vRatio);
                    const centerShift_x = (canvas.width - img.width * ratio) / 2;
                    const centerShift_y = (canvas.height - img.height * ratio) / 2;

                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(
                        img,
                        0, 0, img.width, img.height,
                        centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
                    );
                }

                // Advance frame
                if (frameIndex < frameCount - 1 || loop) {
                    frameIndexRef.current = (frameIndex + 1) % frameCount;
                }
                lastTime = time;
            }
            requestRef.current = requestAnimationFrame(render);
        };

        loadImages().then(() => {
            requestRef.current = requestAnimationFrame(render);
        });

        // Resize handler
        const handleResize = () => {
            canvas.width = canvas.parentElement.clientWidth;
            canvas.height = canvas.parentElement.clientHeight;
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initial size

        return () => {
            cancelAnimationFrame(requestRef.current);
            window.removeEventListener('resize', handleResize);
        };
    }, [frameCount, imagePrefix, imageSuffix, fps, loop]);

    return canvasRef;
};
