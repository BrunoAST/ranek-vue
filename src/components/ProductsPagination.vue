<template>
    <ul v-if="total > 1">
        <li v-for="page in pageRange" :key="page">
            <router-link :to="buildQuery(page)">{{ page }}</router-link>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        total: {
            required: true,
            type: Number,
            default: 0
        },
        pageSize: {
            required: true,
            type: Number,
            default: 1
        }
    },

    computed: {
        totalPages() {
            const total = this.total / this.pageSize;

            return (total !== Infinity) ? Math.ceil(total) : 0;
        },

        pageRange() {
            const currentPage = Number(this.$route.query._page);
            const range = 9;
            const offset = Math.ceil(range / 2);
            const total = this.totalPages;
            const pageList = [];

            for (let i = 1; i <= total; i++) {
                pageList.push(i);
            }

            pageList.splice(0, currentPage - offset);

            // Remove do nono item até o total
            pageList.splice(range, total);

            return pageList;
        }
    },

    methods: {
        buildQuery(page) {
            return {
                query: {
                    ...this.$route.query,
                    _page: page
                }
            };
        }
    }
}
</script>

<style scoped>
    ul {
        grid-column: 1 / -1;
    }

    li {
        display: inline-block;
    }

    li a {
        padding: 2px 8px;
        border-radius: 2px;
        margin: 4px;
    }

    li a.router-link-exact-active, li a:hover {
        background: #87f;
        color: white;
    }
</style>
