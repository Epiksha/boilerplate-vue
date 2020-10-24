<template>
    <aside
        id="sidebar"
        class="sidebar"
        :class="{'active': isOpen}"
        aria-labelledby="menubutton"
        @click.self="isOpen = false"
    >
        <nav class="sidebar__content relative">
            <div class="sidebar__content__top">
                <button
                    class="button button--close"
                    :tabindex="isOpen ? '' : -1"
                    @click="isOpen = false"
                >
                    <Icon name="icon-close" />
                </button>
            </div>

            <ul
                class="sidebar__content__nav"
                role="menu"
            >
                <li
                    v-for="(link, i) in links"
                    :key="i"
                    role="none"
                >
                    <router-link
                        :to="link.url"
                        role="menuitem"
                        :tabindex="isOpen ? '' : -1"
                        v-text="link.text"
                    />
                </li>
            </ul>
        </nav>
    </aside>
</template>

<script src="./Sidebar.js" />
