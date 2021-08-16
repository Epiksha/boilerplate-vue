<template>
    <article
        class="card"
        :class="[
            {'card--link': link && link.url},
        ]"
    >
        <router-link
            v-if="link"
            :to="link.url"
        >
            <header
                v-if="type === 'basic' && (title || image)"
                class="card__header"
                :class="[
                    {'card__header--image': image && image.url},
                ]"
            >
                <img
                    v-if="image"
                    :src="image.url"
                    :alt="image.alt ? image.alt : ''"
                >

                <h3
                    v-else
                    v-text="title"
                />
            </header>

            <div class="card__body">
                <h3
                    v-if="image"
                    class="card__title"
                    v-text="title"
                />

                <slot />
            </div>

            <footer class="card__footer">
                <button
                    v-if="link"
                    class="button button--primary button--card-link"
                >
                    <span v-text="link.text" />
                </button>
            </footer>
        </router-link>

        <template v-else>
            <header
                v-if="(type === 'basic' && title)"
                class="card__header"
            >
                <h3 v-text="title" />
            </header>

            <div class="card__body">
                <slot />
            </div>

            <footer class="card__footer">
                <button
                    v-if="link"
                    class="button button--primary button--card-link"
                >
                    <span v-text="link.text" />
                </button>
            </footer>
        </template>
    </article>
</template>

<script src="./GCard" />
