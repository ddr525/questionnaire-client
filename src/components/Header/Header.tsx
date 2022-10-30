import React from 'react'
import style_header from './Header.module.scss'
type Props = {}

const Header = (props: Props) => {
    return (
        <header>
            <div className={style_header.header__nav}>
                <nav className={style_header["to-right"]}>
                    <a href="/">Главная</a>
                    <a href="/">Главная</a>
                </nav>
            </div>
            <span className={style_header.logo}>

                <svg className={style_header['logo-img']} width="194" height="294" viewBox="0 0 194 294" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M67 48H118C129.046 48 138 56.9543 138 68V189C138 192.471 137.116 195.735 135.56 198.58L145.592 210.536C150.234 204.597 153 197.122 153 189V68C153 48.67 137.33 33 118 33H67C47.67 33 32 48.67 32 68V189C32 208.33 47.67 224 67 224H118C123.846 224 129.357 222.567 134.201 220.032L124.139 208.04C122.204 208.663 120.142 209 118 209H67C55.9543 209 47 200.046 47 189V68C47 56.9543 55.9543 48 67 48Z" fill="black" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M60 15H124C148.853 15 169 35.1472 169 60V195C169 206.473 164.706 216.943 157.638 224.892L167.357 236.475C177.667 225.7 184 211.09 184 195V60C184 26.8629 157.137 0 124 0H60C26.8629 0 0 26.8629 0 60V195C0 228.137 26.8629 255 60 255H124C135.707 255 146.631 251.647 155.864 245.849L146.098 234.21C139.57 237.896 132.031 240 124 240H60C35.1472 240 15 219.853 15 195V60C15 35.1472 35.1472 15 60 15Z" fill="black" />
                    <path d="M112.943 170.823C107.396 164.212 108.136 154.418 114.528 148.71L182.879 230.168C188.425 236.778 187.685 246.572 181.293 252.28L112.943 170.823Z" fill="black" stroke="black" />
                    <path d="M106.709 212.825C113.571 207.412 123.538 208.401 129.194 215.141L186.246 283.133C179.385 288.546 169.417 287.557 163.761 280.817L106.709 212.825Z" fill="black" stroke="black" />
                </svg>

            </span>
            <div className={style_header.header__nav}>
                <nav className={style_header["to-left"]}>
                    <a href="another">Контакты</a>
                </nav>
            </div>
        </header>
    )
}

export default Header