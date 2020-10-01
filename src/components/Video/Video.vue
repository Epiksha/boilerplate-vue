<template>
    <div class="video">
        <video
            ref="video"
            :controls="controls"
            class="h-100 w-100"
            @timeupdate="updateTime"
        >
            <source
                v-for="(source, i) in sources"
                :key="i"
                :src="source.url"
                :type="source.type"
            >
        </video>

        <div class="video__controls">
            <button
                class="button button--play ml-2 mr-2"
                @click="togglePlay"
            >
                <Icon
                    v-if="paused"
                    name="icon-play"
                    class="icon--play"
                />
                
                <Icon
                    v-else
                    name="icon-pause"
                    class="icon--pause"
                />
            </button>

            <div class="video__progress">
                <div class="video__progress__track">
                    <div
                        class="video__progress__current"
                        :style="{width: `${progress}%`}"
                    />
                </div>
            </div>

            <div class="video__time">
                <p v-text="formattedTime" />
            </div>

            <button
                class="button button--expand ml-2 mr"
                @click="fullscreen"
            >
                <Icon
                    name="icon-expand"
                    class="icon--expand"
                />
            </button>
            
            <button
                class="button button--volume ml mr-2"
                @click="fullscreen"
            >
                <Icon
                    name="icon-volume"
                    class="icon--volume"
                />
            </button>
        </div>
    </div>
</template>

<script src="./Video" />
