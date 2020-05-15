<template>
    <header class="header ut-bg-2 ut-textAlignCenter">
        <div class="container">
            <h1>Header</h1>

            <div class="ut-textAlignRight">
                <ul>
                    <router-link
                        to="/"
                        class="ut-highlight-0 ut-highlight-3-hover ut-bold ut-marginRight"
                    >
                        Home
                    </router-link>

                    <router-link
                        to="styleguide"
                        class="ut-highlight-0 ut-highlight-3-hover ut-bold"
                    >
                        Styleguide
                    </router-link>
                </ul>
            </div>
        </div>
    </header>
</template>

<script src="./VHeader.js" />
