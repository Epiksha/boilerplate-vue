export default {
    data: () => ({
        checkboxes: [
            {
                label: 'Checkbox Option 1',
                isSelected: true,
            },
            {
                label: 'Checkbox Option 2',
                isSelected: false,
            },
            {
                label: 'Checkbox Option 3',
                isSelected: false,
            },
        ],

        inputs: {
            text: '',
            email: '',
            password: '',
        },

        isToggled: false,

        radios: [
            {
                id: 'style-guide-option-1',
                text: 'Option 1',
                isSelected: true,
            },
            {
                id: 'style-guide-option-2',
                text: 'Option 2',
                isSelected: false,
            },
            {
                id: 'style-guide-option-3',
                text: 'Option 3',
                isSelected: false,
            },
        ],

        sliderValue: 100,

        slides: [
            {
                title: 'Slide 1',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero et unde cum totam quisquam, distinctio laudantium dolorum minima vitae consequuntur fugiat, vero harum labore dolorem, velit officiis eos! Qui, libero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero et unde cum totam quisquam, distinctio laudantium dolorum minima vitae consequuntur fugiat, vero harum labore dolorem, velit officiis eos! Qui, libero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero et unde cum totam quisquam, distinctio laudantium dolorum minima vitae consequuntur fugiat, vero harum labore dolorem, velit officiis eos! Qui, libero!',
                backgroundImage: 'man-laptop.jpg',
            },
            {
                title: 'Slide 2',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero et unde cum totam quisquam, distinctio laudantium dolorum minima vitae consequuntur fugiat, vero harum labore dolorem, velit officiis eos! Qui, libero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero et unde cum totam quisquam, distinctio laudantium dolorum minima vitae consequuntur fugiat, vero harum labore dolorem, velit officiis eos! Qui, libero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero et unde cum totam quisquam, distinctio laudantium dolorum minima vitae consequuntur fugiat, vero harum labore dolorem, velit officiis eos! Qui, libero!',
                backgroundImage: 'mountains.jpg',
            },
            {
                title: 'Slide 3',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero et unde cum totam quisquam, distinctio laudantium dolorum minima vitae consequuntur fugiat, vero harum labore dolorem, velit officiis eos! Qui, libero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero et unde cum totam quisquam, distinctio laudantium dolorum minima vitae consequuntur fugiat, vero harum labore dolorem, velit officiis eos! Qui, libero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero et unde cum totam quisquam, distinctio laudantium dolorum minima vitae consequuntur fugiat, vero harum labore dolorem, velit officiis eos! Qui, libero!',
                backgroundImage: 'man-laptop.jpg',
            },
            {
                title: 'Slide 4',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero et unde cum totam quisquam, distinctio laudantium dolorum minima vitae consequuntur fugiat, vero harum labore dolorem, velit officiis eos! Qui, libero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero et unde cum totam quisquam, distinctio laudantium dolorum minima vitae consequuntur fugiat, vero harum labore dolorem, velit officiis eos! Qui, libero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero et unde cum totam quisquam, distinctio laudantium dolorum minima vitae consequuntur fugiat, vero harum labore dolorem, velit officiis eos! Qui, libero!',
                backgroundImage: 'mountains.jpg',
            },
        ],

        videoExample: {
            controls: true,
            sources: [
                {
                    url: 'https://multiplatform-f.akamaihd.net/i/multi/april11/sintel/sintel-hd_,512x288_450_b,640x360_700_b,768x432_1000_b,1024x576_1400_m,.mp4.csmil/master.m3u8',
                    type: 'application/x-mpegURL',
                },
                {
                    url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                    type: 'video/mp4',
                },
            ],
        },
    }),
};
