<template>
    <div class="styleguide container py-4">
        <!-- Styleguide navigation -->
        <aside class="styleguide__sidebar">
            <nav class="styleguide__nav">
                <ul
                    v-if="componentLabels"
                    class="list list--clear"
                >
                    <li class="text-center block w-100 py-2">
                        <router-link
                            to="/"
                            class="button weight-600 color-2"
                        >
                            Back to home
                        </router-link>
                    </li>

                    <li
                        v-for="componentLabel in componentLabels"
                        :key="componentLabel"
                    >
                        <button
                            class="button button--secondary button--styleguide"
                            v-text="$utility.capitalize(componentLabel)"
                            @click="() => scrollTo(componentLabel)"
                        />
                    </li>
                </ul>
            </nav>
        </aside>

        <div class="styleguide__content">
            <div class="container mt-4 tablet:mt-0">
                <h1>Styleguide</h1>

                <!-- Accordions -->
                <section ref="accordions">
                    <h2>
                        Accordions
                    </h2>

                    <div class="grid grid--12/12 tablet:grid--1/2">
                        <div>
                            <GAccordion title="Click to expand">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero et unde cum totam quisquam, distinctio laudantium dolorum minima vitae consequuntur fugiat, vero harum labore dolorem, velit officiis eos! Qui, libero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero et unde cum totam quisquam, distinctio laudantium dolorum minima vitae consequuntur fugiat, vero harum labore dolorem, velit officiis eos! Qui, libero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero et unde cum totam quisquam, distinctio laudantium dolorum minima vitae consequuntur fugiat, vero harum labore dolorem, velit officiis eos! Qui, libero!
                            </GAccordion>
                        </div>

                        <div>
                            <GAccordion
                                title="Click to expand"
                                icon-position="right"
                            >
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero et unde cum totam quisquam, distinctio laudantium dolorum minima vitae consequuntur fugiat, vero harum labore dolorem, velit officiis eos! Qui, libero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero et unde cum totam quisquam, distinctio laudantium dolorum minima vitae consequuntur fugiat, vero harum labore dolorem, velit officiis eos! Qui, libero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero et unde cum totam quisquam, distinctio laudantium dolorum minima vitae consequuntur fugiat, vero harum labore dolorem, velit officiis eos! Qui, libero!
                            </GAccordion>
                        </div>
                    </div>
                    
                    <div class="grid grid--12/12 tablet:grid--1/2 mt-2">
                        <div>
                            <GAccordion
                                title="Click to expand"
                                icon-type="plus"
                            >
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero et unde cum totam quisquam, distinctio laudantium dolorum minima vitae consequuntur fugiat, vero harum labore dolorem, velit officiis eos! Qui, libero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero et unde cum totam quisquam, distinctio laudantium dolorum minima vitae consequuntur fugiat, vero harum labore dolorem, velit officiis eos! Qui, libero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero et unde cum totam quisquam, distinctio laudantium dolorum minima vitae consequuntur fugiat, vero harum labore dolorem, velit officiis eos! Qui, libero!
                            </GAccordion>
                        </div>

                        <div>
                            <GAccordion
                                title="Click to expand"
                                icon-type="plus"
                                icon-position="right"
                            >
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero et unde cum totam quisquam, distinctio laudantium dolorum minima vitae consequuntur fugiat, vero harum labore dolorem, velit officiis eos! Qui, libero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero et unde cum totam quisquam, distinctio laudantium dolorum minima vitae consequuntur fugiat, vero harum labore dolorem, velit officiis eos! Qui, libero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero et unde cum totam quisquam, distinctio laudantium dolorum minima vitae consequuntur fugiat, vero harum labore dolorem, velit officiis eos! Qui, libero!
                            </GAccordion>
                        </div>
                    </div>
                </section>

                <!-- Buttons -->
                <section ref="buttons">
                    <h2>
                        Buttons
                    </h2>

                    <div>
                        <h3>
                            Primary Buttons
                        </h3>

                        <div class="grid grid--1/2 tablet:grid--1/3 desktop:grid--1/4">
                            <button class="button button--primary">
                                Click
                            </button>
                        
                            <button class="button button--primary button--icon">
                                <GIcon
                                    name="icon-search"
                                />

                                <span>
                                    Click
                                </span>
                            </button>
                        
                            <button class="button button--primary button--icon">
                                <span>
                                    Click
                                </span>

                                <GIcon
                                    name="icon-search"
                                />
                            </button>
                        
                            <button class="button button--primary button--flat">
                                Click
                            </button>
                        </div>
                    </div>

                    <div class="mt-6">
                        <h3>
                            Primary Buttons (Outlined)
                        </h3>

                        <div class="grid grid--1/2 tablet:grid--1/3 desktop:grid--1/4">
                            <button class="button button--primary button--outline">
                                Click
                            </button>
                        
                            <button class="button button--primary button--outline button--icon">
                                <GIcon
                                    name="icon-search"
                                />

                                <span>
                                    Click
                                </span>
                            </button>
                        
                            <button class="button button--primary button--outline button--icon">
                                <span>
                                    Click
                                </span>

                                <GIcon
                                    name="icon-search"
                                />
                            </button>
                        
                            <button class="button button--primary button--outline button--flat">
                                Click
                            </button>
                        </div>
                    </div>

                    <div class="mt-6">
                        <h3>
                            Miscellaneous Buttons
                        </h3>

                        <GToggle
                            v-model="isToggled"
                            label="Toggle Me"
                        />
                    </div>
                </section>

                <!-- Cards -->
                <section ref="cards">
                    <h2>
                        Cards
                    </h2>

                    <div>
                        <h3>
                            Basic Card
                        </h3>

                        <div class="grid grid--1/1 tablet:grid--1/2">
                            <GCard>
                                <p>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
                                </p>
                            </GCard>

                            <GCard v-bind="cards.basic[0]">
                                <p>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
                                </p>
                            </GCard>

                            <GCard v-bind="cards.basic[1]">
                                <p>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
                                </p>
                            </GCard>
                            
                            <GCard v-bind="cards.basic[2]">
                                <p>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
                                </p>
                            </GCard>
                        </div>
                    </div>
                </section>
                
                <!-- Colors -->
                <section ref="colors">
                    <h2>
                        Colors
                    </h2>

                    <div>
                        <h3>
                            Default Colors
                        </h3>

                        <div class="grid grid--12/12 tablet:grid--1/2 desktop:grid--1/3">
                            <div class="styleguide__color styleguide__color--invert bg-0">
                                <span>White</span>

                                <span>Variable Name: <strong>color-0</strong></span>

                                <span>Hexcode: <strong>#FFFFFF</strong></span>
                            </div>
                            
                            <div class="styleguide__color bg-1">
                                <span>Black</span>

                                <span>Variable Name: <strong>color-1</strong></span>

                                <span>Hexcode: <strong>#000000</strong></span>
                            </div>
                        </div>
                    </div>

                    <div class="mt-6">
                        <h3>
                            Primary Pallette
                        </h3>

                        <div class="grid grid--12/12 tablet:grid--1/2 desktop:grid--1/3">
                            <div class="styleguide__color bg-2">
                                <span>Astronaut</span>

                                <span>Variable Name: <strong>color-2</strong></span>

                                <span>Hexcode: <strong>#224e72</strong></span>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Inputs -->
                <section ref="inputs">
                    <h2>
                        Inputs
                    </h2>

                    <div>
                        <h4>
                            Checkboxes
                        </h4>

                        <div class="flex flex-column">
                            <GCheckbox
                                v-for="(checkbox, index) in checkboxes"
                                :key="index"
                                v-bind="checkbox"
                                :class="{'mt-2.5': index}"
                            />
                        </div>
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
                            :value="sliderValue"
                            :min="0"
                            :max="100"
                            :step="1"
                            @input="value => sliderValue = value"
                        />
                    </div>

                    <div class="mt-4">
                        <h4>
                            Text Boxes
                        </h4>
                        
                        <GInput
                            id="styleguide-input-3"
                            v-model="inputs.text"
                            class="mt-4"
                            type="text"
                            placeholder="Placeholder"
                            label="Text"
                        />

                        <GInput
                            id="styleguide-input-1"
                            v-model="inputs.email"
                            class="mt-4"
                            type="email"
                            placeholder="Placeholder"
                            label="Email"
                        />
                        
                        <GInput
                            id="styleguide-input-2"
                            v-model="inputs.password"
                            type="password"
                            class="mt-4"
                            placeholder="Placeholder"
                            label="Password"
                        />
                    </div>
                </section>

                <!-- Loading -->
                <section ref="loading">
                    <h2>Loading</h2>

                    <div>
                        <h3>
                            Spinner
                        </h3>

                        <GSpinner />
                    </div>
                </section>

                <!-- Lists -->
                <section ref="lists">
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

                <!-- Typography -->
                <section ref="typography">
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

                <!-- Video -->
                <section ref="video">
                    <h2>Video</h2>

                    <GVideo
                        v-if="videoExample"
                        v-bind="videoExample"
                    />
                </section>
            </div>
        </div>
    </div>
</template>

<script src="./PStyle" />
