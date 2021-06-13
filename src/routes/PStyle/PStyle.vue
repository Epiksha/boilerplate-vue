<template>
    <div class="styleguide">
        <div class="container">
            <section>
                <h2>
                    Accordion
                </h2>

                <GAccordion title="Click to expand">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero et unde cum totam quisquam, distinctio laudantium dolorum minima vitae consequuntur fugiat, vero harum labore dolorem, velit officiis eos! Qui, libero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero et unde cum totam quisquam, distinctio laudantium dolorum minima vitae consequuntur fugiat, vero harum labore dolorem, velit officiis eos! Qui, libero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero et unde cum totam quisquam, distinctio laudantium dolorum minima vitae consequuntur fugiat, vero harum labore dolorem, velit officiis eos! Qui, libero!
                </GAccordion>
            </section>

            <section>
                <h2>
                    Carousel
                </h2>

                <GCarousel :slides="slides" />
            </section>
            
            <section>
                <h2>
                    Colours
                </h2>

                <ul class="styleguide__colors">
                    <li class="styleguide__color styleguide__color--invert border border-solid border-color-4">
                        <div>
                            <span>color-0 | bg-0</span>

                            <span>white</span>
                        </div>
                    </li>
                    
                    <li class="styleguide__color bg-1">
                        <div>
                            <span>color-1 | bg-1</span>

                            <span>black</span>
                        </div>
                    </li>
                    
                    <li class="styleguide__color bg-2">
                        <div>
                            <span>color-2 | bg-2</span>

                            <span>#012542</span>
                        </div>
                    </li>
                    
                    <li class="styleguide__color bg-3">
                        <div>
                            <span>color-3 | bg-3</span>

                            <span>#e40030</span>
                        </div>
                    </li>
                    
                    <li class="styleguide__color bg-4">
                        <div>
                            <span>color-4 | bg-4</span>

                            <span>#a0a0a0</span>
                        </div>
                    </li>
                    
                    <li class="styleguide__color bg-5">
                        <div>
                            <span>color-5 | bg-5</span>

                            <span>#224e72</span>
                        </div>
                    </li>
                    
                    <li class="styleguide__color bg-6">
                        <div>
                            <span>color-6 | bg-6</span>

                            <span>#444444</span>
                        </div>
                    </li>
                    
                    <li class="styleguide__color styleguide__color--invert bg-7">
                        <div>
                            <span>color-7 | bg-7</span>

                            <span>#f6f6f6</span>
                        </div>
                    </li>
                </ul>
            </section>

            <section>
                <h2>
                    Inputs
                </h2>

                <div>
                    <h4>
                        Checkboxes
                    </h4>

                    <GCheckbox
                        v-for="(checkbox, index) in checkboxes"
                        :key="index"
                        v-bind="checkbox"
                        :class="{'mt-2.5': index}"
                    />
                </div>
                
                <div class="mt-4">
                    <h4>
                        Radios
                    </h4>

                    <GRadios
                        :radios="radios"
                        group="styleguide-radios"
                    />
                </div>

                <div class="mt-4">
                    <h4>
                        Range Slider
                    </h4>

                    <GRange
                        v-model="sliderValue"
                        :min="0"
                        :max="100"
                        :step="1"
                    />
                </div>

                <div class="mt-4">
                    <h4>
                        Text Boxes
                    </h4>
                    
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

            <section>
                <h2>
                    Lists
                </h2>

                <div>
                    <h4>Ordered List</h4>

                    <ol class="list list--ordered">
                        <li
                            v-for="item in 10"
                            :key="item"
                        >
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt quo doloribus quia? Sit, nisi. Deleniti similique autem quos odit possimus libero velit eligendi! Quaerat, fuga quod laborum placeat excepturi alias!
                        </li>
                    </ol>
                </div>
                
                <div class="mt-4">
                    <h4>Unordered List</h4>

                    <ul class="list list--unordered">
                        <li
                            v-for="item in 5"
                            :key="item"
                        >
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt quo doloribus quia? Sit, nisi. Deleniti similique autem quos odit possimus libero velit eligendi! Quaerat, fuga quod laborum placeat excepturi alias!
                        </li>
                    </ul>
                </div>
            </section>

            <section>
                <h2>
                    Spinner
                </h2>

                <GSpinner />
            </section>

            <section>
                <h2>
                    Typography
                </h2>

                <div>
                    <h4>Headers</h4>

                    <div class="mt-2">
                        <h1 class="mt-2">
                            h1
                        </h1>

                        <h2 class="mt-2">
                            h2
                        </h2>

                        <h3 class="mt-2">
                            h3
                        </h3>

                        <h4 class="mt-2">
                            h4
                        </h4>

                        <h5 class="mt-2">
                            h5
                        </h5>

                        <h6 class="mt-2">
                            h6
                        </h6>
                    </div>
                </div>

                <div class="mt-4">
                    <h4>
                        Paragraph
                    </h4>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit magni nulla a doloribus totam tempora omnis voluptates, dolorem quo unde nobis molestias corrupti deleniti quos veritatis esse. Labore, sint sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit magni nulla a doloribus totam tempora omnis voluptates, dolorem quo unde nobis molestias corrupti deleniti quos veritatis esse. Labore, sint sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit magni nulla a doloribus totam tempora omnis voluptates, dolorem quo unde nobis molestias corrupti deleniti quos veritatis esse. Labore, sint sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit magni nulla a doloribus totam tempora omnis voluptates, dolorem quo unde nobis molestias corrupti deleniti quos veritatis esse. Labore, sint sequi.
                    </p>
                </div>
            </section>
        </div>
    </div>
</template>

<script src="./PStyle" />
