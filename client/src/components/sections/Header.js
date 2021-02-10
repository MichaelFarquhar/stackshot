import React from 'react';
import Container from '../utils/Container';
import github from '../../svg/github.svg';

function Header() {
    return (
        <header>
            <Container>
                <div className="header">
                    <h1>StackShot</h1>
                    <a
                        href="https://github.com/MichaelFarquhar/stackshot"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={github} alt="Github icon" width={35} height={35} />
                    </a>
                </div>
            </Container>
        </header>
    );
}

export default Header;
