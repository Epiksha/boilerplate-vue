<template>
    <main class="container pt-2 pr-4 pb-2 pl-4">
        <h1>Styleguide</h1>

        <section>
            <h2>Paragraph</h2>

            <p class="mt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit magni nulla a doloribus totam tempora omnis voluptates, dolorem quo unde nobis molestias corrupti deleniti quos veritatis esse. Labore, sint sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit magni nulla a doloribus totam tempora omnis voluptates, dolorem quo unde nobis molestias corrupti deleniti quos veritatis esse. Labore, sint sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit magni nulla a doloribus totam tempora omnis voluptates, dolorem quo unde nobis molestias corrupti deleniti quos veritatis esse. Labore, sint sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit magni nulla a doloribus totam tempora omnis voluptates, dolorem quo unde nobis molestias corrupti deleniti quos veritatis esse. Labore, sint sequi.
            </p>
        </section>

        <section>
            <h2>Lists</h2>
            
            <h3 class="mt-2">
                Ordered
            </h3>

            <ol class="mt">
                <li
                    v-for="item in 10"
                    :key="item"
                >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt quo doloribus quia? Sit, nisi. Deleniti similique autem quos odit possimus libero velit eligendi! Quaerat, fuga quod laborum placeat excepturi alias!
                </li>
            </ol>

            <h3 class="mt-2">
                Unordered
            </h3>

            <ul class="mt">
                <li
                    v-for="item in 5"
                    :key="item"
                >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt quo doloribus quia? Sit, nisi. Deleniti similique autem quos odit possimus libero velit eligendi! Quaerat, fuga quod laborum placeat excepturi alias!
                </li>
            </ul>
        </section>
    </main>
</template>

<script src="./PStyle.js" />
