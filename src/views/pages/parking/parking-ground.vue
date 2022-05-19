<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";
import Swal from "sweetalert2";
import VueGoogleAutocomplete from "vue-google-autocomplete";
import axios from "axios";
/**
 * Invoice-list component
 */
export default {
  page: {
    title: "Parking Ground",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  components: { Layout, PageHeader, VueGoogleAutocomplete },
  data() {
    return {
      title: "Parking Ground",
      items: [
        {
          text: "Parking Ground",
        },
        {
          text: "Parking Ground",
          active: true,
        },
      ],
      //parking
      query: "",
      capacity: "12",
      location: window.navigator.lat + "," + window.location.lng,
      name: "",
      category: "Available",
      avslots: "12",
      cat: ["Available", "Busy"],
      /**
       * When the location found
       *        */
      //end
      addressData: {},
      placeResultData: {},
      contid: "",

      id: "",
      imei: "",
      color: "0000",
      status: "Available",
      cost: 0,
      lease: 0,
      unlock: false,
      devicelist: [
        {
          id: "#MN0131",
          name: "City Squre",
          capacity: "20",
          avslots: "4",
          location: "(0.0013732910154955363,0.0006866455078121)",
          status: "Available",
        },
        {
          id: "#MN0132",
          name: "Sports Ground",
          capacity: "10",
          avslots: "5",
          location: "(0.0013732910154955367,0.0006866455078125)",
          status: "Available",
        },
        {
          id: "#MN0136",
          name: "Agakhan Squre",
          capacity: "22",
          avslots: "8",
          location: "(0,-0.00034375390625)",
          status: "Available",
        },
        {
          id: "#MN0134",
          name: "Mega Squre",
          capacity: "12",
          avslots: "2",
          location: "(-0.000275390568974,0)",
          status: "Available",
        },
        {
          id: "#MN0137",
          name: "City Mall",
          capacity: "21",
          avslots: "0",
          location: "(0.00085838824188,0.000376953125)",
          status: "Busy",
        },
        {
          id: "#MN0138",
          name: "Nyayo Squre",
          capacity: "27",
          avslots: "23",
          location: "(0.0008583068847,0.000171376953125)",
          status: "Available",
        },
        {
          id: "#MN0139",
          name: "City Stadium",
          capacity: "64",
          avslots: "28",
          location: "(0.00085830688473,0.0001716613769)",
          status: "Available",
        },
        {
          id: "#MN0140",
          name: "Mfangano Squre",
          capacity: "52",
          avslots: "11",
          location: "(0.0003068847324188,0.00011376953125)",
          status: "Available",
        },
        {
          id: "#MN0141",
          name: "Moi Avenue",
          capacity: "100",
          avslots: "0",
          location: "(0.00085830688474188,0.0001716616953125)",
          status: "Busy",
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
      fields: [
        {
          key: "check",
          label: "",
        },

        {
          key: "name",
          label: "Name",
          sortable: true,
        },
        {
          key: "location",
          label: "Location",
          sortable: true,
        },
        {
          key: "avslots",
          label: "Available Slots",
          sortable: true,
        },
        {
          key: "capacity",
          label: "Parking Slots",
          sortable: true,
        },
        {
          key: "status",
          label: "Status",
          sortable: true,
        },
        {
          key: "download",
          label: "Download Pdf",
        },
        {
          key: "action",
        },
      ],
    };
  },
  computed: {
    /**
     * Total no. of records
     */
    rows() {
      return this.devicelist.length;
    },
  },
  watch: {},
  mounted() {
    // Set the initial number of items
    this.$refs["origin"];
    this.totalRows = this.items.length;
    this.locateGeoLocation();
    this.$refs.name.focus();
    this.getAddressData();
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
    getAddressData(addressData, placeResultData, id) {
      this.contid = id;
      this.placeResultData = placeResultData;
      this.name = addressData;
    },
    locateGeoLocation() {
      navigator.geolocation.getCurrentPosition((res) => {
        this.center = {
          lat: res.coords.latitude,
          lng: res.coords.longitude,
        };
        this.location = "("+res.coords.latitude + "," + res.coords.longitude+")";
      });
    },
    add() {
      var orderid = this.devicelist.length + 1;
      var data = {
        id: orderid,
        name: this.name,
        capacity: this.capacity,
        avslots: this.capacity,
        status: this.status,
        location: this.location,
      };
      this.devicelist.push(data);
      Swal.fire({
            position: "center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
      axios
        .post(window.$http + "parkinginfo", data, { headers: window.$headers })
        .then((response) => {
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    editrec() {
      // JSON responses are automatically parsed.
      this.devicelist[this.myindex].id = this.id;
      this.devicelist[this.myindex].name = this.name;
      this.devicelist[this.myindex].capacity = this.capacity;
      this.devicelist[this.myindex].city = this.city;
      this.devicelist[this.myindex].location = this.location;
      this.devicelist[this.myindex].status = this.status;

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
      this.modaltitle = "Edit Ground";
      this.editmode = true;
      this.id = id;
      this.name = name;
      this.imei = capacity;
      this.color = city;
      this.cost = location;
      this.status = status;
      this.myindex = index;
    },
    deleterec(myid, index, name) {
      this.id = myid;
      this.name = name;
      Swal.fire({
        title: "Are you sure, you want to delete " + this.name + "?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#000000",
        cancelButtonColor: "#f46a6a",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.value) {
          this.devicelist.splice(index, 1);
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
  //    capacity = models.IntegerField()
  //     location = models.PointField(blank=True, null=True)
  //     name = models.CharField(max_length=120)
  //     category = models.CharField(max_length=20,choices=CHOICES_TYPE, default=1)
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />

    <div class="row">
      <div class="col-md-4"></div>
      <div>
        <button type="button" class="btn btn-success mb-3" v-b-modal.add-ground>
          <i class="mdi mdi-plus me-1"></i> Add New
        </button>
      </div>
      <div class="col-md-8">
        <div class="float-end">
          <div class="form-inline mb-3">
            <div
              class="input-daterange input-group"
              data-provide="datepicker"
              data-date-format="dd M, yyyy"
              data-date-autoclose="true"
            >
              <input
                type="datetime-local"
                class="form-control text-left"
                placeholder="From"
                name="From"
              />
              <input
                type="datetime-local"
                class="form-control text-left"
                placeholder="To"
                name="To"
              />
              <div class="input-group-append">
                <button type="button" class="btn btn-primary">
                  <i class="mdi mdi-filter-variant"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 col-md-6">
        <div id="tickets-table_length" class="dataTables_length">
          <label class="d-inline-flex align-items-center fw-normal">
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
        <div id="tickets-table_filter" class="dataTables_filter text-md-end">
          <label class="d-inline-flex align-items-center fw-normal">
            Search:
            <b-form-input
              v-model="filter"
              type="search"
              class="form-control form-control-sm ms-2"
            ></b-form-input>
          </label>
        </div>
      </div>
      <!-- End search -->
    </div>
    <!-- Table -->
    <div class="table-responsive mb-0">
      <b-table
        table-class="table table-centered datatable table-card-list"
        thead-tr-class="bg-transparent"
        :items="devicelist"
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
          <div class="custom-control custom-checkbox text-center">
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
        <template v-slot:cell(id)="data">
          <a href="javascript: void(0);" class="text-dark fw-bold">
            {{ data.item.id }}
          </a>
        </template>

        <template v-slot:cell(status)="data">
          <div
            class="badge rounded-pill bg-soft-success font-size-12"
            :class="{ 'bg-soft-warning': data.item.status === 'Busy' }"
          >
            {{ data.item.status }}
          </div>
        </template>

        <template v-slot:cell(name)="data">
          <a href="#" class="text-body">{{ data.item.name }}</a>
        </template>
        <template v-slot:cell(download)>
          <div>
            <button class="btn btn-light btn-sm w-xs">
              Pdf
              <i class="uil uil-download-alt ms-2"></i>
            </button>
          </div>
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
                    data.item.location,
                    data.item.capacity,
                    data.item.status
                  )
                "
                v-b-modal.add-ground
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
                @click="
                  deleterec(data.item.id, data.item.index, data.item.name)
                "
              >
                <i class="uil uil-trash-alt font-size-18"></i>
              </a>
            </li>
          </ul>
        </template>
      </b-table>
    </div>
    <!--modals-->
    <b-modal id="add-ground" size="xl" :title="modaltitle">
      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-lg-12">
                  <div class="mt-4">
                    <h5 class="font-size-14 mb-4">
                      <i class="mdi mdi-arrow-right text-primary me-1"></i>
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
                            <vue-google-autocomplete
                              ref="name"
                              id="map"
                              classname="form-control"
                              :placeholder="name"
                              @change="getAddressData"
                              country="ke"
                            >
                            </vue-google-autocomplete>
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
                              type="number"
                              placeholder="20"
                              v-model="capacity"
                            ></b-form-input>
                          </b-form-group>
                        </div>
                        <div class="col-md-6">
                          <b-form-group
                            label="Location"
                            label-for="formrow-address-input"
                            class="mb-3"
                          >
                            <b-form-input
                              id="formrow-address-input"
                              type="text"
                              v-model="location"
                              ref="location"
                              v-show="name != ''"
                              :placeholder="location"
                            />
                          </b-form-group>
                        </div>
                        <div class="col-md-6">
                          <b-form-group
                            label="Availability"
                            label-for="formrow-phone-input"
                            class="mb-3"
                          >
                            <select class="form-select" v-model="category">
                              <option>Available</option>
                              <option>Busy</option>
                            </select>
                            <input type="hidden" :value="category" />
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
    <b-modal id="lock-device" size="lg" title="Lock/Unlock Device">
      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-lg-12">
                  <div class="mt-4">
                    <h5 class="font-size-14 mb-4">
                      <i class="mdi mdi-arrow-right text-primary me-1"></i>
                      {{ title }}
                    </h5>
                    <form @submit.prevent="addrec()">
                      <div class="row">
                        <div class="col-md-12">
                          <b-form-group
                            label="Reason"
                            label-for="formrow-reason-input"
                            class="mb-3"
                          >
                            <b-textarea
                              id="formrow-reason-input"
                              type="text"
                              placeholder="Payments made"
                            ></b-textarea>
                          </b-form-group>
                        </div>
                      </div>
                      <div class="mt-4">
                        <b-button type="submit" variant="primary"
                          >Apply</b-button
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
        <div class="dataTables_paginate paging_simple_numbers float-end">
          <ul class="pagination pagination-rounded">
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
  </Layout>
</template>
