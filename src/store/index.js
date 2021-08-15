import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            memories: [
                {
                    id: 'm1',
                    image: 'https://images.unsplash.com/photo-1535916707207-35f97e715e1c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dmlld3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                    title: 'A trip into the mountains',
                    description: 'It was a really nice trip'
                },
                {
                    id: 'm2',
                    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                    title: 'Surfing the sea side',
                    description: 'Feeling the cool breeze'
                },
                {
                    id: 'm3',
                    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhlYWx0aHklMjBmb29kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                    title: 'Good eating',
                    description: 'Really tasty.'
                }
            ]
        };
    },
    getters: {
        memories(state) {
            return state.memories;
        },
        memory(state) {
            return (memoryId) => {
                return state.memories.find(memory => memory.id === memoryId)
            };
        }
    }
});

export default store;