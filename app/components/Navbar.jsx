import React from 'react';

const NavBar = ({ isMenuOpen, setIsMenuOpen }) => {
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav>
            <div className="info">
                <p>Folio Vol. 1</p>
            </div>
            <div className="logo">
                <p><a href="#">The Elite Portfolio</a></p>
            </div>
            <div className="toggle-btn">
                <button
                    className={`burger ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                >
                    {/* Burger icon lines, if necessary */}
                </button>
            </div>
        </nav>
    );
};

export default NavBar;
