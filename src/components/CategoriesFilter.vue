<template>
    <v-combobox
            v-model="chips"
            :items="items"
            chips
            clearable
            label="Choose categories"
            multiple
            prepend-icon="filter_list"
            solo
    >
        <template v-slot:selection="{ attrs, item, select, selected }">
            <v-chip
                    v-bind="attrs"
                    :input-value="selected"
                    close
                    @click="select"
                    @click:close="remove(item)"
            >
                <strong>{{ item }}</strong>&nbsp;
                <span>(interest)</span>
            </v-chip>
        </template>
    </v-combobox>
</template>

<script>
    export default {
        name: 'CategoriesFilter',
        data() {
            return {
                chips: [],
                items: ['All News', 'BBC', 'The New York Times', 'The Washington Post', "CNN"],
            }
        },

        methods: {
            remove(item) {
                this.chips.splice(this.chips.indexOf(item), 1)
                this.chips = [...this.chips]
            },
        },
    };
</script>

<style scoped>

</style>
