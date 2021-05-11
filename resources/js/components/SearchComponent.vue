<template>
    <ais-index app-id="VKSP2DHMZK" api-key="89c3c15cb85a34d2b87edfc354e0b994" index-name="dev_ecohome">
        <ais-search-box></ais-search-box>
        <ais-results inline-template>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Date</th>
                        <th scope="col">Customer</th>
                        <th scope="col">Customer Address</th>
                        <th scope="col">Rep Name</th>
                        <th scope="col">Solar Company</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="result in results" :key="result.objectID">
                        <th scope="row">{{ result.objectID }}</th>
                        <td>{{ result.date }}</td>
                        <td>{{ result.customerName }}</td>
                        <td>{{ result.customerAddress }}</td>
                        <td>{{ result.homeRep }}</td>
                        <td>{{ result.solarCompany }}</td>
                        <td>
                            <div class="d-grid gap-2">
                            <button type="button" class="btn btn-success">Edit Report</button>
                            <button type="button" class="btn btn-danger">Delete Report</button>
                            </div>
                            </td>
                    </tr>
                </tbody>
            </table>
        </ais-results>
        <ais-pagination v-bind:class-names="{
            'ais-pagination': 'pagination',
            'ais-pagination-item': 'page-item',
            'ais-pagination-link': 'page-link'
            }"></ais-pagination>
    </ais-index>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>