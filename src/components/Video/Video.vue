<template>
    <div class="video">
        <video
            ref="video"
            controls="false"
            class="h-100 w-100"
            @timeupdate="updateTime"
            @click.prevent="togglePlay"
            @ended="paused = true"
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
                <div
                    ref="progress"
                    class="video__progress__track"
                    @click="updateProgress"
                >
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
            
            <button class="button button--volume ml mr-2">
                <div
                    ref="volume"
                    class="video__volume"
                    @click.prevent="updateVolume"
                >
                    <div
                        class="video__volume__level"
                        :style="{'height': `${volume * 100}%`}"
                    />
                </div>

                <Icon
                    name="icon-volume"
                    class="icon--volume"
                />
            </button>
        </div>
    </div>
</template>

<script src="./Video" />
