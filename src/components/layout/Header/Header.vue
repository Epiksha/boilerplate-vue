<template>
    <header
        class="header"
        role="banner"
    >
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
                    />

                    <h1
                        class="
                            inline-block
                            align-middle
                            ml
                        "
                    >
                        Simplerif
                    </h1>
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
