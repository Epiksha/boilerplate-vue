<template>
    <fieldset
        class="fieldset"
        :class="[{'active': active}, {'error': errors && errors.length}]"
    >
        <label
            v-if="label"
            :id="label.id"
            :for="id"
            :class="{'active': focused}"
            v-text="label.text"
        />

        <div class="inputWrapper">
            <input
                :id="id"
                class="input"
                :type="isShowingPassword ? 'text' : type"
                :placeholder="placeholder"
                :class="[{'active': active}, classes && Array.isArray(classes) ? classes.join(' ') : classes]"
                :autocomplete="false"
                :required="required"
                :aria-required="required"
                :aria-invalid="errors && errors.length"
                :value="value"
                @input="$emit('input', $event.target.value)"
                @focus="focused = true"
                @blur="focused = false"
            >

            <Icon
                v-if="errors && errors.length && type !== 'password'"
                name="icon-warning"
                class="icon--md icon--error"
            />
            
            <Icon
                v-else-if="type === 'email'"
                name="icon-email"
                class="icon--md icon--email"
            />

            <button
                v-if="type === 'password'"
                class="button button--visible"
                @click.prevent="() => isShowingPassword = !isShowingPassword"
            >
                <Icon
                    name="icon-visible"
                    class="icon--visible"
                />
            </button>
        </div>

        <span
            v-for="error in errors"
            :key="error"
            :aria-labelledby="label ? label.id : ''"
            class="errorText"
            role="alert"
            v-html="error"
        />
    </fieldset>
</template>

<script src="./Input" />
