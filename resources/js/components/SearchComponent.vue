<template>
    <ais-index app-id="Q4E7V0YE1Q" api-key="fef8c357b43f5a2c128618b23dedf699" index-name="prod_ecohome">
          <ais-search-box>
            <div class="input-group">
              <ais-input
                placeholder="Search..."
                :classNames="{
                  'ais-input': 'form-control'
                  }"
              />
            </div><!-- /input-group -->

          </ais-search-box>
        <div class="mb-3"></div>
        <ais-results inline-template>
            <table class="table table-hover">
                <thead style="border-top: #FFCEA2;background: #FFEBD7;">
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
                                <button type="button" class="btn btn-success"><i class="fa fa-pencil-square-o" /> Edit
                                    Report</button>
                                <button type="button" class="btn btn-danger"><i class="fa fa-trash-o" /> Delete
                                    Report</button>
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