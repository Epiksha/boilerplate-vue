<template>
    <div
        class="select"
        :class="{'active': expanded}"
    >
        <span
            :id="selectData.id"
            class="select__label"
            v-text="selectData.label"
        />

        <div
            class="select__box"
            :aria-labelledby="selectData.id"
        >
            <button
                aria-haspopup="listbox"
                class="ut-fullHeight ut-fullWidth ut-textAlignLeft ut-padding"
                @click="expanded = !expanded"
                v-text="selectData.first"
            />

            <transition name="select">
                <ul
                    v-if="expanded"
                    :aria-labelledby="selectData.id"
                    class="select__box__dropdown"
                    role="listbox"
                >
                    <li
                        v-for="option in selectData.options"
                        :key="option.name"
                        role="option"
                        class="select__box__dropdown__option ut-padding-0.5"
                        v-text="option.name"
                    />
                </ul>
            </transition>
        </div>
    </div>
</template>

<script src="./VSelect.js" />
