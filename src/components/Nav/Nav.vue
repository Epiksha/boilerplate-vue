<template>
    <nav
        class="
            nav
            nav--header
            nav--header--bottom
        "
    >
        <ul class="nav__list">
            <li class="nav__item">
                <router-link
                    to="/team"
                >
                    Team
                </router-link>

                <router-link
                    to="/about"
                >
                    About Us
                </router-link>
                
                <router-link
                    to="/contact"
                >
                    Contact Us
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script src="./Nav" />
