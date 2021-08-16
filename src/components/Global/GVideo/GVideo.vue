<template>
    <div
        class="video"
        :class="[
            { 'paused': isPaused },
        ]"
    >
        <div class="video__wrapper">
            <div class="video__overlay"></div>

            <video
                v-if="basicSources"
                ref="video"
                class="video__element"
                @timeupdate="handleTimeUpdate"
                @click.stop="() => isPaused = !isPaused"
                @keypress.enter.self="() => isPaused = !isPaused"
                @dblclick.stop="triggerFullscreen"
                @play="() => isPaused = false"
                @pause="() => isPaused = true"
            >
                <source
                    v-for="(source, index) in basicSources"
                    :key="index"
                    :src="source.url"
                    :type="source.type"
                />
            </video>

            <div class="video__center">
                <button
                    class="button button--media"
                    @click="() => skip(false)"
                    @keypress.enter="() => skip(false)"
                >
                    <GIcon
                        name="icon-skip-back"
                        class="icon--media icon--large"
                    />
                </button>
                
                <button
                    class="button button--media button--adjust"
                    @click="() => adjustTime(false)"
                    @keypress.enter="() => adjustTime(false)"
                >
                    <GIcon
                        name="icon-rewind-10"
                        class="icon--media icon--large"
                    />
                </button>

                <button
                    class="button button--center-play"
                    @click="() => isPaused = !isPaused"
                    @keypress.enter="() => isPaused = !isPaused"
                >
                    <GIcon
                        v-if="isPaused"
                        name="icon-play"
                        class="icon--center-play"
                    />
                    
                    <GIcon
                        v-else
                        name="icon-pause"
                        class="icon--center-pause"
                    />
                </button>
                
                <button
                    class="button button--media button--adjust"
                    @click="() => adjustTime(true)"
                    @keypress.enter="() => adjustTime(true)"
                >
                    <GIcon
                        name="icon-forward-10"
                        class="icon--media icon--large"
                    />
                </button>

                <button
                    class="button button--media"
                    @click="() => skip(true)"
                    @keypress.enter="() => skip(true)"
                >
                    <GIcon
                        name="icon-skip-next"
                        class="icon--media icon--large"
                    />
                </button>
            </div>

            <div
                v-if="controls"
                class="video__controls"
            >
                <GVolume />

                <div class="video__track">
                    <GRange
                        :value="progress"
                        :min="0"
                        :max="100"
                        :step="0.1"
                        @input="handleTrackInput"
                    />
                </div>

                <button
                    class="button button--media"
                    @click="triggerFullscreen"
                    @keypress.enter="triggerFullscreen"
                >
                    <GIcon
                        name="icon-fullscreen"
                        class="icon--media"
                    />
                </button>
            </div>
        </div>
    </div>
</template>

<script src="./GVideo" />
