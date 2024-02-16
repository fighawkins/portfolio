import React from 'react';

const OverlayMenu = () => {
    return (
        <div className="overlay">
            <div className="overlay-menu">
                <div className="menu-item">
                    <div className="menu-item-name">
                        <p id="active"><a href="#">Index</a></p>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="menu-item-name">
                        <p><a href="#">Work</a></p>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="menu-item-name">
                        <p><a href="#">About</a></p>
                    </div>
                </div>
            </div>
            <div className="sub-nav">
                <p><a href="#">Twitter</a></p>
                <p>·</p>
                <p><a href="#">Instagram</a></p>
                <p>·</p>
                <p><a href="#">Dribble</a></p>
                <p>·</p>
                <p><a href="#">Behance</a></p>
            </div>
        </div>
    );
};

export default OverlayMenu;
