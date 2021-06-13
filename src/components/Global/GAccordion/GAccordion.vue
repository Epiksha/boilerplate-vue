<template>
    <button
        ref="accordion"
        class="accordion"
        :class="[{'active': isActive}, {'visible': isVisible}]"
        :style="{maxHeight: maxHeight}"
        @click="() => isActive = !isActive"
    >
        <header
            ref="header"
            class="accordion__header"
        >
            <GIcon
                class="icon--accordion"
                name="icon-arrow-expand"
            />

            <h4
                class="accordion__title"
                v-text="title"
            />
        </header>

        <div class="accordion__content">
            <slot />
        </div>
    </button>
</template>

<script src="./GAccordion" />
