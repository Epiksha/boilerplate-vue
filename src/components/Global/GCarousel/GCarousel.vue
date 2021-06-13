<template>
    <div class="carousel">
        <Carousel
            ref="carousel"
            class="carousel__container"
            :infinite-scroll="infiniteScroll"
        >
            <Slide
                v-for="(slide, index) in slides"
                :key="index"
                class="carousel__slide"
                :style="{
                    backgroundColor: slide.backgroundColor,
                    backgroundImage: backgroundImages[index]
                }"
            >
                <h4 v-text="slide.title" />

                <p v-text="slide.text" />
            </Slide>
        </Carousel>

        <div
            v-if="slides && slides.length > 1"
            class="carousel__controls"
        >
            <button
                class="button button--carousel"
                :disabled="!infiniteScroll && !currentIndex"
                @click="() => changeSlide(false)"
            >
                <GIcon
                    name="icon-arrow"
                    class="icon--carousel icon--carousel--left"
                />
            </button>

            <p
                class="carousel__index"
                v-text="`Slide ${currentIndex + 1} of ${slides.length}`"
            />
            
            <button
                class="button button--carousel"
                :disabled="!infiniteScroll && currentIndex === slides.length - 1"
                @click="() => changeSlide(true)"
            >
                <GIcon
                    name="icon-arrow"
                    class="icon--carousel"
                />
            </button>
        </div>
    </div>
</template>

<script src="./GCarousel" />
