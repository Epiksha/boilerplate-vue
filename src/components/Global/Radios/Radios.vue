<template>
    <form class="radios">
        <label
            v-for="(radio, index) in radios"
            :key="index"
            class="radio"
        >
            <input
                :id="radio.id"
                v-model="current"
                type="radio"
                :name="group"
                class="input input--radio"
                :value="radio.text"
            >

            <div class="radio__circle"></div>
            
            <span
                :for="radio.id"
                class="radio__text"
                v-text="radio.text"
            />
        </label>
    </form>
</template>

<script src="./Radios" />
