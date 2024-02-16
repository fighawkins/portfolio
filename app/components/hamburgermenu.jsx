import React, { useEffect } from 'react';
import gsap from 'gsap';

const HamburgerMenu = ({ isMenuOpen, setIsMenuOpen }) => {

    useEffect(() => {
        const timeline = gsap.timeline({ paused: true });

        timeline.fromTo(".overlay",
            { y: '-100%' }, // Start above the viewport
            {
                duration: 1.5,
                y: '0%', // Slide down to its normal position
                ease: "power4.inOut"
            })
            // ...rest of your animation for .menu-item p and .sub-nav
            ;

        if (isMenuOpen) {
            timeline.play();
        } else {
            timeline.reverse();
        }
    }, [isMenuOpen]);

    return (
        <button
            className={`burger ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="burger-line"></span> {/* Line 1 */}
            <span className="burger-line"></span> {/* Line 2 */}
        </button>
    );
};

export default HamburgerMenu;
