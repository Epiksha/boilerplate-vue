<template>
    <main class="container ut-padding-2">
        <section>
            <h3>Headers</h3>

            <div class="ut-marginTop">
                <h1>h1</h1>

                <h2>h2</h2>

                <h3>h3</h3>

                <h4>h4</h4>

                <h5>h5</h5>

                <h6>h6</h6>
            </div>
        </section>

        <section class="ut-marginTop-2">
            <h3>Paragraph</h3>

            <div class="ut-marginTop">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit magni nulla a doloribus totam tempora omnis voluptates, dolorem quo unde nobis molestias corrupti deleniti quos veritatis esse. Labore, sint sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit magni nulla a doloribus totam tempora omnis voluptates, dolorem quo unde nobis molestias corrupti deleniti quos veritatis esse. Labore, sint sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit magni nulla a doloribus totam tempora omnis voluptates, dolorem quo unde nobis molestias corrupti deleniti quos veritatis esse. Labore, sint sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit magni nulla a doloribus totam tempora omnis voluptates, dolorem quo unde nobis molestias corrupti deleniti quos veritatis esse. Labore, sint sequi.</p>
            </div>
        </section>

        <section class="ut-marginTop-2">
            <h3>Lists</h3>

            <ul class="ut-marginTop">
                <li class="ut-marginTop">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt quo doloribus quia? Sit, nisi. Deleniti similique autem quos odit possimus libero velit eligendi! Quaerat, fuga quod laborum placeat excepturi alias!
                </li>

                <li class="ut-marginTop">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt quo doloribus quia? Sit, nisi. Deleniti similique autem quos odit possimus libero velit eligendi! Quaerat, fuga quod laborum placeat excepturi alias!
                </li>

                <li class="ut-marginTop">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt quo doloribus quia? Sit, nisi. Deleniti similique autem quos odit possimus libero velit eligendi! Quaerat, fuga quod laborum placeat excepturi alias!
                </li>
            </ul>
            
            <ol class="ut-marginTop-2">
                <li class="ut-marginTop">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt quo doloribus quia? Sit, nisi. Deleniti similique autem quos odit possimus libero velit eligendi! Quaerat, fuga quod laborum placeat excepturi alias!
                </li>

                <li class="ut-marginTop">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt quo doloribus quia? Sit, nisi. Deleniti similique autem quos odit possimus libero velit eligendi! Quaerat, fuga quod laborum placeat excepturi alias!
                </li>

                <li class="ut-marginTop">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt quo doloribus quia? Sit, nisi. Deleniti similique autem quos odit possimus libero velit eligendi! Quaerat, fuga quod laborum placeat excepturi alias!
                </li>
            </ol>
        </section>

        <section class="ut-marginTop-2">
            <h3>Inputs</h3>

            <div class="ut-marginTop">
                <div>
                    <h5 class="ut-inlineBlock ut-vertAlignMiddle">
                        Radio:
                    </h5>

                    <div class="ut-inlineBlock ut-vertAlignMiddle ut-marginLeft">
                        <input
                            id="radio-1"
                            type="radio"
                            name="radio"
                            class="ut-marginLeft-0.5 ut-marginRight-0.5 ut-vertAlignMiddle"
                            checked="checked"
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
                        >
                    </div>
                </div>
                
                <div class="ut-marginTop-2">
                    <h5 class="ut-inlineBlock ut-vertAlignMiddle">
                        Checkboxes:
                    </h5>

                    <div class="ut-inlineBlock ut-vertAlignMiddle ut-marginLeft">
                        <input
                            id="check-1"
                            type="checkbox"
                            name="check"
                            class="ut-marginLeft-0.5 ut-marginRight-0.5 ut-vertAlignMiddle"
                            checked="checked"
                        >

                        <input
                            id="check-2"
                            type="checkbox"
                            name="check"
                            class="ut-marginLeft-0.5 ut-marginRight-0.5 ut-vertAlignMiddle"
                        >

                        <input
                            id="check-3"
                            type="checkbox"
                            name="check"
                            class="ut-marginLeft-0.5 ut-marginRight-0.5 ut-vertAlignMiddle"
                        >
                    </div>
                </div>

                <fieldset class="ut-marginTop-2">
                    <legend>Input Types</legend>

                    <input
                        id="username"
                        name="username"
                        type="text"
                        placeholder="Username"
                        class="ut-fullWidth"
                    >
                    
                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Password"
                        class="ut-fullWidth ut-marginTop"
                    >

                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email"
                        class="ut-fullWidth ut-marginTop"
                    >
                    
                    <input
                        id="number"
                        name="date"
                        type="number"
                        placeholder="Number"
                        class="ut-fullWidth ut-marginTop"
                    >
                </fieldset>
            </div>
        </section>
        
        <section class="ut-marginTop-2">
            <h3>Buttons</h3>

            <div class="ut-marginTop">
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

        <section class="ut-marginTop-2">
            <h3>Cards</h3>

            <div class="ut-marginTop-2">
                <Card />
            </div>
        </section>
    </main>
</template>

<script src="./PStyle.js" />
