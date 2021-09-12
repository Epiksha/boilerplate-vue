export default [
    {
        name: 'clickaway',

        config: {
            beforeMount(element, binding) {
                element.clickAwayEvent = event => {
                    if (!(element === event.target || element.contains(event.target))) {
                        if (typeof binding.value === 'function') {
                            binding.value(event);
                        } else {
                            console.error('Invalid expression passed into v-clickaway directive. Must be a function.');
                        }
                    }
                };

                document.body.addEventListener('click', element.clickAwayEvent);
            },

            unmounted(element) {
                document.body.removeEventListener('click', element.clickAwayEvent);
            },
        },
    },
];
