<template>
    <main class="container p-4">
        <h1>Styleguide</h1>

        <section>
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
                        tabindex="0"
                        @click="subnav = !subnav"
                    >
                        List Item 1
                    </li>

                    <li
                        role="button"
                        tabindex="0"
                    >
                        List Item 2
                    </li>

                    <li
                        role="button"
                        tabindex="0"
                    >
                        List Item 3
                    </li>

                    <li
                        role="button"
                        tabindex="0     "
                    >
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

        <section class="mt-2">
            <h2>Paragraph</h2>

            <div class="mt">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit magni nulla a doloribus totam tempora omnis voluptates, dolorem quo unde nobis molestias corrupti deleniti quos veritatis esse. Labore, sint sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit magni nulla a doloribus totam tempora omnis voluptates, dolorem quo unde nobis molestias corrupti deleniti quos veritatis esse. Labore, sint sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit magni nulla a doloribus totam tempora omnis voluptates, dolorem quo unde nobis molestias corrupti deleniti quos veritatis esse. Labore, sint sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit magni nulla a doloribus totam tempora omnis voluptates, dolorem quo unde nobis molestias corrupti deleniti quos veritatis esse. Labore, sint sequi.</p>
            </div>
        </section>

        <section class="mt-2">
            <h2>Lists</h2>

            <ul class="mt">
                <li class="mt">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt quo doloribus quia? Sit, nisi. Deleniti similique autem quos odit possimus libero velit eligendi! Quaerat, fuga quod laborum placeat excepturi alias!
                </li>

                <li class="mt">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt quo doloribus quia? Sit, nisi. Deleniti similique autem quos odit possimus libero velit eligendi! Quaerat, fuga quod laborum placeat excepturi alias!
                </li>

                <li class="mt">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt quo doloribus quia? Sit, nisi. Deleniti similique autem quos odit possimus libero velit eligendi! Quaerat, fuga quod laborum placeat excepturi alias!
                </li>
            </ul>
            
            <ol class="mt-2">
                <li class="mt">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt quo doloribus quia? Sit, nisi. Deleniti similique autem quos odit possimus libero velit eligendi! Quaerat, fuga quod laborum placeat excepturi alias!
                </li>

                <li class="mt">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt quo doloribus quia? Sit, nisi. Deleniti similique autem quos odit possimus libero velit eligendi! Quaerat, fuga quod laborum placeat excepturi alias!
                </li>

                <li class="mt">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt quo doloribus quia? Sit, nisi. Deleniti similique autem quos odit possimus libero velit eligendi! Quaerat, fuga quod laborum placeat excepturi alias!
                </li>
            </ol>
        </section>

        <section class="mt-2">
            <h5>Inputs</h5>

            <div class="mt">
                <div>
                    <form class="ut-inlineBlock ut-vertAlignMiddle ut-marginLeft">
                        <legend id="radioHeader">
                            Radio Buttons
                        </legend>
                        
                        <fieldset
                            role="radiogroup"
                            aria-labelledby="radioHeader"
                        >
                            <input
                                id="radio-1"
                                type="radio"
                                name="radio"
                                class="ut-marginLeft-0.5 ut-marginRight-0.5 ut-vertAlignMiddle"
                                checked="checked"
                                aria-label="Radio Button 1"
                            >

                            <input
                                id="radio-2"
                                type="radio"
                                name="radio"
                                class="ut-marginLeft-0.5 ut-marginRight-0.5 ut-vertAlignMiddle"
                            >

                            <input
                                id="radio-3"
                                type="radio"
                                name="radio"
                                class="ut-marginLeft-0.5 ut-marginRight-0.5 ut-vertAlignMiddle"
                                aria-label="Radio Button 3"
                            >
                        </fieldset>
                    </form>
                </div>
                
                <div class="mt-2">
                    <h3
                        id="checkboxHeader"
                        class="
                            ut-inlineBlock
                            ut-vertAlignMiddle
                        "
                    >
                        Checkboxes:
                    </h3>

                    <div class="ut-inlineBlock ut-vertAlignMiddle ut-marginLeft">
                        <input
                            id="check-1"
                            type="checkbox"
                            name="check"
                            class="ut-marginLeft-0.5 ut-marginRight-0.5 ut-vertAlignMiddle"
                            checked="checked"
                            aria-labelledby="checkboxHeader"
                        >

                        <input
                            id="check-2"
                            type="checkbox"
                            name="check"
                            class="ut-marginLeft-0.5 ut-marginRight-0.5 ut-vertAlignMiddle"
                            aria-labelledby="checkboxHeader"
                        >

                        <input
                            id="check-3"
                            type="checkbox"
                            name="check"
                            class="ut-marginLeft-0.5 ut-marginRight-0.5 ut-vertAlignMiddle"
                            aria-labelledby="checkboxHeader"
                        >
                    </div>
                </div>

                <fieldset class="mt-2">
                    <legend>Input Types</legend>

                    <input
                        id="username"
                        name="username"
                        type="text"
                        placeholder="Username"
                        class="ut-fullWidth"
                        aria-label="Username Input"
                    >
                    
                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Password"
                        class="ut-fullWidth mt"
                        aria-label="Password Input"
                    >

                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email"
                        class="ut-fullWidth mt"
                        aria-label="Email Input"
                    >
                    
                    <input
                        id="number"
                        name="number"
                        type="number"
                        placeholder="Number"
                        class="ut-fullWidth mt"
                        aria-label="Number Input"
                    >
                </fieldset>
            </div>
        </section>
        
        <section class="mt-2">
            <h2>Buttons</h2>

            <div class="mt">
                <button class="button ut-inlineBlock ut-marginRight">
                    Submit
                </button>

                <button class="button button--alt ut-inlineBlock ut-marginLeft ut-marginRight">
                    Submit
                </button>

                <button class="button button--invert ut-inlineBlock ut-marginLeft ut-marginRight">
                    Submit
                </button>

                <button class="button button--invert--alt ut-inlineBlock ut-marginLeft">
                    Submit
                </button>
            </div>
        </section>

        <section class="mt-2">
            <h2>Cards</h2>

            <div class="mt-2">
                <Card />
            </div>
        </section>
    </main>
</template>

<script src="./PStyle.js" />
