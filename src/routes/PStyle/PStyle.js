import VHeader from '../../components/VHeader/VHeader.vue';
import VCard from '../../components/VCard/VCard.vue';
import VSelect from '../../components/VSelect/VSelect.vue';

export default {
    name: 'PStyle',

    data() {
        return {
            selectData: {
                id: 'select-1',
                label: 'Make your choice:',
                first: '--',
                options: [
                    {
                        name: 'First',
                    },
                    {
                        name: 'Second',
                    },
                    {
                        name: 'Third',
                    },
                    {
                        name: 'Four',
                    },
                    {
                        name: 'Fifth',
                    },
                ],
            },
        };
    },

    components: {
        VHeader,
        VCard,
        VSelect,
    },
};
