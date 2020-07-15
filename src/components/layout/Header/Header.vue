<template>
    <header class="header">
        <div class="pl-2 pr-2 h-100">
            <div
                class="
                    inline-block
                    align-middle
                    w-50
                "
            >
                <router-link
                    class="
                        header__logo
                        inline-block
                        h-100
                    "
                    to="/"
                >
                    <Icon
                        class="
                            logo
                            logo--header
                            inline-block
                        "
                        name="icon-logo"
                        role="presentation"
                    />

                    <span
                        class="
                            header__logo__title
                            inline-block
                            align-middle
                            ml
                        "
                    >
                        Simpler
                    </span>
                </router-link>
            </div><!-- 
                Remove white space to fit inline blocks on one line
        --><nav
                class="
                    header__nav
                    inline-block
                    align-middle
                    text-right
                    w-50
                "
                aria-label="Main Navigation"
            >
                <ul>
                    <router-link
                        v-for="(link, i) in links"
                        :key="i"
                        :to="link.url"
                        :class="{'ml': i}"
                        v-text="link.text"
                    />
                </ul>
            </nav>
        </div>
    </header>
</template>

<script src="./Header.js" />
