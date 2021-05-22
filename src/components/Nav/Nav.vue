<template>
    <nav
        v-clickaway="closeDropdown"
        class="
            nav
            nav--header
            nav--header--bottom
        "
    >
        <button
            class="button button--hamburger"
            :class="{'active': isDropdownActive}"
            @click="handleDropdown"
        >
            <span />
            <span />
            <span />
            <span />
        </button>

        <ul
            ref="bottomNav"
            class="nav__list"
            :class="{'active': isDropdownActive}"
        >
            <li
                v-for="(link, index) in bottomNavLinks"
                :key="index"
                class="nav__item"
            >
                <router-link
                    :to="link.url"
                    v-text="link.text"
                />
            </li>
        </ul>
    </nav>
</template>

<script src="./Nav" />
