<template>
    <details
        class="accordion"
        :class="[
            {'accordion--plus': iconType === 'plus' },
            {'accordion--right': iconPosition === 'right' }
        ]"
    >
        <summary class="accordion__title">
            <template v-if="iconPosition === 'left'">
                <GPlus v-if="iconType === 'plus'" />

                <GIcon
                    v-else
                    name="icon-arrow-expand"
                    class="icon--accordion"
                />
            </template>

            <span
                class="accordion__title__text"
                v-text="title"
            />

            <template v-if="iconPosition === 'right'">
                <GPlus v-if="iconType === 'plus'" />

                <GIcon
                    v-else
                    name="icon-arrow-expand"
                    class="icon--accordion"
                />
            </template>
        </summary>

        <div class="accordion__content">
            <slot />
        </div>
    </details>
</template>

<script src="./GAccordion" />
