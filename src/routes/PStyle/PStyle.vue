<template>
    <div class="container pt-6 pr-4 pb-6 pl-4">
        <h1>Styleguide</h1>

        <section class="mt-6">
            <h2 class="color-5">
                Paragraph
            </h2>

            <p class="mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit magni nulla a doloribus totam tempora omnis voluptates, dolorem quo unde nobis molestias corrupti deleniti quos veritatis esse. Labore, sint sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit magni nulla a doloribus totam tempora omnis voluptates, dolorem quo unde nobis molestias corrupti deleniti quos veritatis esse. Labore, sint sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit magni nulla a doloribus totam tempora omnis voluptates, dolorem quo unde nobis molestias corrupti deleniti quos veritatis esse. Labore, sint sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit magni nulla a doloribus totam tempora omnis voluptates, dolorem quo unde nobis molestias corrupti deleniti quos veritatis esse. Labore, sint sequi.
            </p>
        </section>

        <section class="mt-6">
            <h2 class="color-5">
                Lists
            </h2>

            <ol class="list list--ordered mt-4">
                <li
                    v-for="item in 10"
                    :key="item"
                >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt quo doloribus quia? Sit, nisi. Deleniti similique autem quos odit possimus libero velit eligendi! Quaerat, fuga quod laborum placeat excepturi alias!
                </li>
            </ol>

            <ul class="list list--unordered mt-4">
                <li
                    v-for="item in 5"
                    :key="item"
                >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt quo doloribus quia? Sit, nisi. Deleniti similique autem quos odit possimus libero velit eligendi! Quaerat, fuga quod laborum placeat excepturi alias!
                </li>
            </ul>
        </section>

        <section class="mt-6">
            <h2 class="color-5">
                Inputs
            </h2>

            <div class="flex justify-around mt-4">
                <div>
                    <h3 class="mb-4 color-5">
                        Checkboxes
                    </h3>

                    <GCheckbox
                        v-for="(checkbox, index) in checkboxes"
                        :key="index"
                        v-bind="checkbox"
                        :class="{'mt-2.5': index}"
                    />
                </div>
                
                <div>
                    <h3 class="mb-4 color-5">
                        Radios
                    </h3>

                    <GRadios
                        :radios="radios"
                        group="styleguide-radios"
                    />
                </div>
            </div>

            <div class="mt-4">
                <h3 class="mb-4 color-5">
                    Range Slider
                </h3>

                <GRange
                    v-model="sliderValue"
                    :min="0"
                    :max="100"
                    :step="5"
                />
            </div>

            <div class="mt-4">
                <h3 class="mb-4 color-5">
                    Text Boxes
                </h3>
                
                <GInput
                    id="styleguide-input-3"
                    class="mt-4"
                    type="text"
                    placeholder="Placeholder"
                    label="Text"
                />

                <GInput
                    id="styleguide-input-1"
                    class="mt-4"
                    type="email"
                    placeholder="Placeholder"
                    label="Email"
                />
                
                <GInput
                    id="styleguide-input-2"
                    type="password"
                    class="mt-4"
                    placeholder="Placeholder"
                    label="Password"
                />
            </div>
        </section>

        <section class="mt-6">
            <h2 class="color-5">
                Spinner
            </h2>

            <GSpinner class="mt-4" />
        </section>
    </div>
</template>

<script src="./PStyle.js" />
