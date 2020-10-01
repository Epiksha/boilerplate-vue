<template>
    <main class="">
        <div class="container pt-2 pr-4 pb-2 pl-4">
            <h1>Styleguide</h1>
        </div>

        <Hero />

        <section class="container pt-3 pr-4 pb-2 pl-4">
            <h2>Menu Example</h2>

            <nav
                class="
                    dropdown
                    mt
                "
            >
                <ul>
                    <li
                        role="button"
                        aria-haspopup="true"
                        aria-controls="subnav"
                        aria-owns="subnav"
                        @click="subnav = !subnav"
                    >
                        List Item 1
                    </li>

                    <li role="button">
                        List Item 2
                    </li>

                    <li role="button">
                        List Item 3
                    </li>

                    <li role="button">
                        List Item 4
                    </li>
                </ul>
            </nav>

            <nav
                v-if="subnav"
                id="subnav"
                class="
                    dropdown
                    mt
                    ml
                "
                aria-label="Example Sub Nav"
            >
                <ul>
                    <li role="button">
                        List Item 1
                    </li>

                    <li role="button">
                        List Item 2
                    </li>

                    <li role="button">
                        List Item 3
                    </li>

                    <li role="button">
                        List Item 4
                    </li>
                </ul>
            </nav>
        </section>

        <section class="container pt-2 pr-4 pb-2 pl-4">
            <h2>Paragraph</h2>

            <div class="mt">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit magni nulla a doloribus totam tempora omnis voluptates, dolorem quo unde nobis molestias corrupti deleniti quos veritatis esse. Labore, sint sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit magni nulla a doloribus totam tempora omnis voluptates, dolorem quo unde nobis molestias corrupti deleniti quos veritatis esse. Labore, sint sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit magni nulla a doloribus totam tempora omnis voluptates, dolorem quo unde nobis molestias corrupti deleniti quos veritatis esse. Labore, sint sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit magni nulla a doloribus totam tempora omnis voluptates, dolorem quo unde nobis molestias corrupti deleniti quos veritatis esse. Labore, sint sequi.</p>
            </div>
        </section>

        <section class="container pt-2 pr-4 pb-2 pl-4">
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

        <section class="container pt-2 pr-4 pb-2 pl-4">
            <h2>Inputs</h2>

            <form class="mt-2">
                <label id="radioLabel">
                    Radios
                </label>

                <fieldset
                    role="radiogroup"
                    aria-labelledby="radioLabel"
                    class="fieldset mt"
                >
                    <label
                        id="radioOne"
                        class="radio"
                    >
                        <input
                            id="radio-1"
                            type="radio"
                            name="radio"
                            checked="checked"
                            aria-labelledby="radioLabel"
                        >
                        
                        <span />
                    </label>
                    
                    <label
                        id="radioTwo"
                        class="radio"
                    >
                        <input
                            id="radio-2"
                            type="radio"
                            name="radio"
                            checked="checked"
                            aria-labelledby="radioLabel"
                        >

                        <span />
                    </label>
                    
                    <label
                        id="radioThree"
                        class="radio"
                    >
                        <input
                            id="radio-3"
                            type="radio"
                            name="radio"
                            checked="checked"
                            aria-labelledby="radioLabel"
                        >

                        <span />
                    </label>
                </fieldset>
            </form>
            
            <form class="mt-3">
                <label id="checkboxLabel">
                    Checkboxes:
                </label>

                <fieldset
                    class="fieldset mt"
                    aria-labelledby="checkboxLabel"
                >
                    <label
                        id="checkboxOne"
                        class="checkbox"
                    >
                        <input
                            id="checkbox-1"
                            type="checkbox"
                            name="check"
                            checked="checked"
                            aria-labelledby="checkboxOne"
                        >

                        <span />
                    </label>
                    
                    <label
                        id="checkboxTwo"
                        class="checkbox"
                    >
                        <input
                            id="checkbox-2"
                            type="checkbox"
                            name="check"
                            checked="checked"
                            aria-labelledby="checkboxTwo"
                        >

                        <span />
                    </label>
                    
                    <label
                        id="checkboxThree"
                        class="checkbox"
                    >
                        <input
                            id="checkbox-3"
                            type="checkbox"
                            name="check"
                            checked="checked"
                            aria-labelledby="checkboxThree"
                        >

                        <span />
                    </label>
                </fieldset>
            </form>
                
            <form class="mt-3">
                <fieldset class="fieldset fieldset--border fieldset--legend">
                    <legend>Input Types</legend>

                    <fieldset class="fieldset block">
                        <input
                            id="username"
                            name="username"
                            type="text"
                            autocomplete="username"
                            placeholder="Username"
                            aria-label="Username Input"
                        >
                    </fieldset>
                    
                    <fieldset class="fieldset block">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autocomplete="new-password"
                            placeholder="Password"
                            class="mt"
                            aria-label="Password Input"
                        >
                    </fieldset>

                    <fieldset class="fieldset block">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Email"
                            class="mt"
                            aria-label="Email Input"
                        >
                    </fieldset>
                    
                    <fieldset class="fieldset block">
                        <input
                            id="number"
                            name="number"
                            type="number"
                            placeholder="Number"
                            class="mt"
                            aria-label="Number Input"
                        >
                    </fieldset>
                </fieldset>
            </form>
        </section>
        
        <section class="container pt-2 pr-4 pb-2 pl-4">
            <h4>Buttons</h4>

            <div class="mt p-2 text-center">
                <button class="button button--primary">
                    Submit
                </button>

                <button class="button button--primary button--thin ml-2">
                    Submit
                </button>

                <button class="button button--primary button--thin button--border ml-2">
                    Submit
                </button>
            </div>
            
            <div
                class="mt p-2 text-center"
                style="backgroundColor: #a52e2e"
            >
                <button class="button button--invert">
                    Submit
                </button>

                <button class="button button--invert button--thin ml-2">
                    Submit
                </button>

                <button class="button button--invert button--thin button--border ml-2">
                    Submit
                </button>
            </div>
        </section>

        <section class="container pt-2 pr-4 pb-2 pl-4">
            <h2>Cards</h2>

            <div class="mt-2">
                <Card />
            </div>
        </section>

        <section class="container pt-2 pr-4 pb-2 pl-4">
            <h2 class="mb-2">
                Video
            </h2>

            <Video
                :sources="video.sources"
                :controls="video.controls"
            />
        </section>
    </main>
</template>

<script src="./PStyle.js" />
