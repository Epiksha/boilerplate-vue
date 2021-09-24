<template>
    <header class="header">
        <div class="header__container container">
            <router-link
                to="/"
                class="header__logo"
            >
                <GImage
                    name="logo.svg"
                    class="image--header"
                />
            </router-link>

            <div class="header__end">
                <button
                    class="button button--hamburger"
                    :class="{'active': isMenuActive}"
                    @click="toggleMenu"
                    ref="hamburger"
                >
                    <span />
                    <span />
                    <span />
                    <span />
                </button>

                <nav
                    class="nav nav--main"
                    :class="{'active': isMenuActive}"
                    v-clickaway="closeMenu"
                >
                    <ul class="list list--nav list--clear">
                        <li class="nav__item">
                            <router-link
                                class="nav__link"
                                to="/contact"
                            >
                                Contact
                            </router-link>
                        </li>

                        <li class="nav__item">
                            <router-link
                                to="/about"
                                class="nav__link"
                            >
                                About
                            </router-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>

<script src="./VHeader" />