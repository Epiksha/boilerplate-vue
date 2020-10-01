<template>
    <aside
        id="sidebar"
        class="sidebar"
        :class="{'active': isSidebarOpen}"
        aria-labelledby="menubutton"
        @click.self="toggleSidebar"
    >
        <nav class="sidebar__content relative">
            <button
                class="button button--close"
                :tabindex="isSidebarOpen ? '' : -1"
                @click="toggleSidebar"
            >
                <Icon name="icon-close" />
            </button>

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
                        :tabindex="isSidebarOpen ? '' : -1"
                        v-text="link.text"
                    />
                </li>
            </ul>
        </nav>
    </aside>
</template>

<script src="./Sidebar.js" />
