<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";
import Swal from "sweetalert2";
//import vue2Dropzone from "vue2-dropzone";

import "vue2-dropzone/dist/vue2Dropzone.min.css";
/**
 * User list component
 */
export default {
  components: { Layout, PageHeader },
  page: {
    title: "Parking Slots",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  data() {
    return {
      title: "Parking Slots",
      modaltitle: "Add New Slot",
      items: [
        {
          text: "Slots",
        },
        {
          text: "Parking Slots",
          active: true,
        },
      ],
      id: "",
      myindex: "",
      name: "Mercus Ryles",
      capacity: "12",
      city: "Kisumu",
      location:"Agakhan Squre",
      date: "5/17/2022",
      id_snapshot: "",
      userList: [
        {
          id: 1,
          profile: require("@/assets/images/users/avatar-2.jpg"),
          name: "Simon Ryles",
          capacity: "5",
          city: "Kisumu",
          location:"City Squre",
          date: "5/17/2022",
        },
        {
          id: 2,
          profile: require("@/assets/images/users/avatar-3.jpg"),
          name: "Adar Otieno",
          capacity: "4",
          city: "Kisumu",
          location:"Sports Ground",
          date: "5/17/2022",
        },
        {
          id: 3,
          profile: require("@/assets/images/users/avatar-3.jpg"),
          name: "Atemba Manu",
          capacity: "10",
          city: "Kisumu",
          location:"Agakhan Squre",
          date: "5/17/2022",
        },
        {
          id: 3,
          profile: require("@/assets/images/users/avatar-3.jpg"),
          name: "Atemba Manu",
          capacity: "64",
          city: "Nairobi",
          location:"City Stadium",
          date: "5/17/2022",
        },
        {
          id: 3,
          profile: require("@/assets/images/users/avatar-3.jpg"),
          name: "Atemba Manu",
          capacity: "27",
          city: "Nairobi",
          location:"Nyayo Squre",
          date: "5/17/2022",
        },
        {
          id: 3,
          profile: require("@/assets/images/users/avatar-3.jpg"),
          name: "Atemba Manu",
          capacity: "100",
          city: "Nairobi",
          location:"Moi Avenue",
          date: "5/17/2022",
        },
        {
          id: 3,
          profile: require("@/assets/images/users/avatar-3.jpg"),
          name: "Atemba Manu",
          capacity: "52",
          city: "Nairobi",
          location:"Mfangano Squre",
          date: "5/17/2022",
        },
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 25, 50, 100],
      filter: null,
      filterOn: [],
      sortBy: "age",
      sortDesc: false,
      dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 150,
        maxFilesize: 0.5,
        headers: {
          "My-Awesome-Header": "header value",
        },
      },
      fields: [
        {
          key: "check",
          label: "",
         sortable: true,
        },
        {
          key: "name",
          label:"Created By",
          sortable: true,
        },
        {
          key: "city",
          lable:"City/Town",
          sortable: true,
        },
        {
          key: "location",
          sortable: true,
        },
        {
          key: "date",
          sortable: true,
        },
        "action",
      ],
    };
  },
  computed: {
    /**
     * Total no. of records
     */
    rows() {
      return this.userList.length;
    },
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.items.length;
  },
  methods: {
    /**
     * Search the table data with search input
     */
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    add() {
      var orderid = this.userList.length + 1;
      this.userList.push({
        id: orderid,
        name: this.name,
        capacity: this.capacity,
        city: this.city,
        location: this.location,
        date: this.date,
      });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    editrec() {
      // JSON responses are automatically parsed.
      this.userList[this.myindex].id = this.id;
      this.userList[this.myindex].name = this.name;
      this.userList[this.myindex].capacity = this.capacity;
      this.userList[this.myindex].city = this.city;
      this.userList[this.myindex].location = this.location;
      this.userList[this.myindex].status = this.status;

      if (this.userList[this.myindex].id != "") {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 3000,
        });
      }

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    edit(id, index, name, capacity, city, location, status) {
      this.modaltitle = "Edit Slot";
      this.editmode = true;
      this.id = id;
      this.name = name;
      this.capacity = capacity;
      this.city = city;
      this.location = location;
      this.status = status;
      this.myindex = index;
    },
    deleterec(myid, index, name,Null,None,location) {
      this.id = myid;
      this.name = name;
      this.location=location
      Swal.fire({
        title: "Are you sure, you want to delete " + this.location + " from  the system?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#000000",
        cancelButtonColor: "#f46a6a",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.value) {
          this.userList.splice(index, 1);
          Swal.fire(
            this.name + " Deleted!",
            "Your record has been deleted.",
            "success"
          );
        }
      });
    },
  },
  middleware: "authentication",
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-md-6">
                <div class="mb-3">
                  <a
                    href="javascript:void(0);"
                    class="btn btn-success"
                    v-b-modal.add-slot
                    ><i class="mdi mdi-plus me-2"></i> Add New</a
                  >
                </div>
              </div>
            </div>
            <div class="row mt-4">
              <div class="col-sm-12 col-md-6">
                <div id="tickets-table_length" class="dataTables_length">
                  <label class="d-inline-flex align-items-center">
                    Show&nbsp;
                    <b-form-select
                      v-model="perPage"
                      size="sm"
                      :options="pageOptions"
                    ></b-form-select
                    >&nbsp;entries
                  </label>
                </div>
              </div>
              <!-- Search -->
              <div class="col-sm-12 col-md-6">
                <div
                  id="tickets-table_filter"
                  class="dataTables_filter text-md-end"
                >
                  <label class="d-inline-flex align-items-center">
                    <b-form-input
                      v-model="filter"
                      type="search"
                      placeholder="Search..."
                      class="form-control rounded bg-light border-0 ms-2"
                    ></b-form-input>
                  </label>
                </div>
              </div>
              <!-- End search -->
            </div>
            <!-- Table -->
            <div class="table-responsive mb-0">
              <b-table
                class="table table-centered table-nowrap"
                :items="userList"
                :fields="fields"
                responsive="sm"
                :per-page="perPage"
                :current-page="currentPage"
                :sort-by.sync="sortBy"
                :sort-desc.sync="sortDesc"
                :filter="filter"
                :filter-included-fields="filterOn"
                @filtered="onFiltered"
              >
                <template v-slot:cell(check)="data">
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      :id="`contacusercheck${data.item.id}`"
                    />
                    <label
                      class="custom-control-label"
                      :for="`contacusercheck${data.item.id}`"
                    ></label>
                  </div>
                </template>
                <template v-slot:cell(name)="data">
                  <img
                    v-if="data.item.profile"
                    :src="data.item.profile"
                    alt
                    class="avatar-xs rounded-circle me-2"
                  />
                  <div
                    v-if="!data.item.profile"
                    class="avatar-xs d-inline-block me-2"
                  >
                    <div
                      class="avatar-title bg-soft-primary rounded-circle text-primary"
                    >
                      <i class="mdi mdi-account-circle m-0"></i>
                    </div>
                  </div>
                  <a href="#" class="text-body">{{ data.item.name }}</a>
                </template>
                <template v-slot:cell(action)="data">
                  <ul class="list-inline mb-0">
                    <li class="list-inline-item">
                      <a
                        href="javascript:void(0);"
                        class="px-2 text-primary"
                        v-b-tooltip.hover
                        title="Edit"
                        @click="
                          edit(
                            data.item.id,
                            data.index,
                            data.item.name,
                            data.item.capacity,
                            data.item.city,
                            data.item.location,
                            data.item.date
                          )
                        "
                        v-b-modal.add-slot
                      >
                        <i class="uil uil-pen font-size-18"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        href="javascript:void(0);"
                        class="px-2 text-danger"
                        v-b-tooltip.hover
                        title="Delete"
                        @click="deleterec(
                           data.item.id,
                            data.index,
                            data.item.name,
                            data.item.capacity,
                            data.item.city,
                            data.item.location,
                            data.item.date
                          )
                        "
                      >
                        <i class="uil uil-trash-alt font-size-18"></i>
                      </a>
                    </li>
                    <b-dropdown
                      class="list-inline-item"
                      variant="white"
                      right
                      toggle-class="text-muted font-size-18 px-2"
                    >
                      <template v-slot:button-content>
                        <i class="uil uil-ellipsis-v"></i>
                      </template>

                      <a class="dropdown-item" href="#">Action</a>
                      <a class="dropdown-item" href="#">Another action</a>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </b-dropdown>
                  </ul>
                </template>
              </b-table>
            </div>
            <!--modals-->
            <b-modal id="add-slot" size="xl" :title="modaltitle">
              <div class="row">
                <div class="col-lg-12">
                  <div class="card">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-lg-12">
                          <div class="mt-4">
                            <h5 class="font-size-14 mb-4">
                              <i
                                class="mdi mdi-arrow-right text-primary me-1"
                              ></i>
                              {{ title }}
                            </h5>
                            <form @submit.prevent="add()">
                              <div class="row">
                                <div class="col-md-6">
                                  <b-form-group
                                    label="Name"
                                    label-for="formrow-name-input"
                                    class="mb-3"
                                  >
                                    <b-form-input
                                      id="formrow-name-input"
                                      type="text"
                                      placeholder="Mercus Ryles"
                                      v-model="name"
                                    ></b-form-input>
                                  </b-form-group>
                                </div>
                                <div class="col-md-6">
                                  <b-form-group
                                    label="Capacity"
                                    label-for="formrow-idno-input"
                                    class="mb-3"
                                  >
                                    <b-form-input
                                      id="formrow-idno-input"
                                      type="text"
                                      placeholder="64848494"
                                      v-model="capacity"
                                    ></b-form-input>
                                  </b-form-group>
                                </div>
                                <div class="col-md-6">
                                  <b-form-group
                                    label="City"
                                    label-for="formrow-address-input"
                                    class="mb-3"
                                  >
                                    <b-form-input
                                      id="formrow-address-input"
                                      type="text"
                                      v-model="city"
                                      placeholder="kisumu"
                                    ></b-form-input>
                                  </b-form-group>
                                </div>
                                <div class="col-md-6">
                                  <b-form-group
                                    label="Location"
                                    label-for="formrow-phone-input"
                                    class="mb-3"
                                  >
                                    <b-form-input
                                      id="formrow-phone-input"
                                      type="text"
                                      v-model="location"
                                      placeholder="(-24.66,66.89)"
                                    ></b-form-input>
                                  </b-form-group>
                                </div>
                                <div class="col-md-6">
                                  <b-form-group
                                    label="Date"
                                    label-for="formrow-phone-input"
                                    class="mb-3"
                                  >
                                    <b-form-input
                                      id="formrow-phone-input"
                                      type="datetime-local"
                                      v-model="date"
                                      placeholder="5/17/2022"
                                    ></b-form-input>
                                  </b-form-group>
                                </div>
                              </div>
                              <div class="mt-4">
                                <b-button type="submit" variant="primary"
                                  >Submit</b-button
                                >
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </b-modal>
            <!--end modals-->

            <div class="row">
              <div class="col">
                <div
                  class="dataTables_paginate paging_simple_numbers float-end"
                >
                  <ul class="pagination pagination-rounded mb-0">
                    <!-- pagination -->
                    <b-pagination
                      v-model="currentPage"
                      :total-rows="rows"
                      :per-page="perPage"
                    ></b-pagination>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
