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
    }),
};
