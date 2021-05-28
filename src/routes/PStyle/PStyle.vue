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

            <div class="flex justify-between mt-4">
                <div>
                    <h3 class="mb-4 color-5">
                        Checkboxes
                    </h3>

                    <Checkbox
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

                    <Radios
                        :radios="radios"
                        group="styleguide-radios"
                    />
                </div>
            </div>

            <div class="mt-4">
                <Input
                    id="styleguide-input-1"
                    class="mt-4"
                    type="email"
                    placeholder="Placeholder"
                    :label="{text: 'Email', id: 'styleguide-input-1-label'}"
                />
                
                <Input
                    id="styleguide-input-2"
                    type="password"
                    class="mt-4"
                    placeholder="Placeholder"
                    :label="{text: 'Password', id: 'styleguide-input-2-label'}"
                />
                
                <Input
                    id="styleguide-input-3"
                    class="mt-4"
                    type="text"
                    placeholder="Placeholder"
                    :label="{text: 'Text', id: 'styleguide-input-4-label'}"
                />
            </div>
        </section>
    </div>
</template>

<script src="./PStyle.js" />
