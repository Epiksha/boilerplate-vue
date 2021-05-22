<template>
    <header class="header">
        <div class="header__top">
            <div
                class="
                    header__corner
                    header__corner--left
                "
            />

            <div class="header__center">
                <span>
                    See our
                    <router-link to="/terms-and-conditions">Terms and Conditions</router-link>
                </span>
            </div>
            
            <div
                class="
                    header__corner
                    header__corner--right
                "
            >
                <nav
                    class="
                        nav
                        nav--header
                        nav--header--top
                    "
                >
                    <ul class="nav__list">
                        <li class="nav__item">
                            <router-link to="/login">
                                Log In
                            </router-link>
                        </li>
                        
                        <li class="nav__item">
                            <router-link to="/privacy-policy">
                                Privacy Policy
                            </router-link>
                        </li>
                        
                        <li class="nav__item">
                            <button class="button button--header">
                                <span>Search</span>
                                
                                <Icon
                                    name="icon-search"
                                    class="icon--search"
                                />
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>

        <div class="header__bottom">
            <router-link
                to="/"
                class="header__link"
            >
                Boilerplate
            </router-link>

            <Nav />
        </div>
    </header>
</template>

<script src="./Header" />
