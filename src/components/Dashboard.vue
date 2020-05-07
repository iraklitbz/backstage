<template>
  <div class="flex-main-panel">
    <aside class="bg border-right" style="width: 250px; height: 100vh;">
      <nav class="sidenav js-sidenav">
        <div class="sidenav__label">Main</div>

        <ul class="sidenav__list">
          <li class="sidenav__item">
            <a href="#0" class="sidenav__link">
              <svg
                class="icon sidenav__icon"
                aria-hidden="true"
                viewBox="0 0 16 16"
              >
                <g>
                  <path
                    d="M6,0H1C0.4,0,0,0.4,0,1v5c0,0.6,0.4,1,1,1h5c0.6,0,1-0.4,1-1V1C7,0.4,6.6,0,6,0z M5,5H2V2h3V5z"
                  ></path>
                  <path
                    d="M15,0h-5C9.4,0,9,0.4,9,1v5c0,0.6,0.4,1,1,1h5c0.6,0,1-0.4,1-1V1C16,0.4,15.6,0,15,0z M14,5h-3V2h3V5z"
                  ></path>
                  <path
                    d="M6,9H1c-0.6,0-1,0.4-1,1v5c0,0.6,0.4,1,1,1h5c0.6,0,1-0.4,1-1v-5C7,9.4,6.6,9,6,9z M5,14H2v-3h3V14z"
                  ></path>
                  <path
                    d="M15,9h-5c-0.6,0-1,0.4-1,1v5c0,0.6,0.4,1,1,1h5c0.6,0,1-0.4,1-1v-5C16,9.4,15.6,9,15,9z M14,14h-3v-3h3V14z"
                  ></path>
                </g>
              </svg>
              <span class="sidenav__text">Dashboard</span>

              <span class="sidenav__counter"
                >12 <i class="sr-only">notifications</i></span
              >
            </a>

            <button
              class="reset sidenav__sublist-control js-sidenav__sublist-control js-tab-focus"
              aria-label="Toggle sub navigation"
            >
              <svg class="icon" viewBox="0 0 12 12">
                <polygon points="4 3 8 6 4 9 4 3" />
              </svg>
            </button>

            <ul class="sidenav__list">
              <li class="sidenav__item">
                <a href="#0" class="sidenav__link">
                  <span class="sidenav__text">New widget</span>
                </a>
              </li>

              <li class="sidenav__item">
                <a href="#0" class="sidenav__link">
                  <span class="sidenav__text">Analytics</span>
                </a>
              </li>
            </ul>
          </li>

          <li class="sidenav__item sidenav__item--expanded">
            <a href="#0" class="sidenav__link" aria-current="page">
              <svg
                class="icon sidenav__icon"
                aria-hidden="true"
                viewBox="0 0 16 16"
              >
                <g>
                  <path
                    d="M14,7H2v7c0,0.6,0.4,1,1,1h10c0.6,0,1-0.4,1-1V7z"
                  ></path>
                  <rect y="1" width="16" height="4"></rect>
                </g>
              </svg>
              <span class="sidenav__text">Products</span>
            </a>

            <button
              class="reset sidenav__sublist-control js-sidenav__sublist-control js-tab-focus"
              aria-label="Toggle sub navigation"
            >
              <svg class="icon" viewBox="0 0 12 12">
                <polygon points="4 3 8 6 4 9 4 3" />
              </svg>
            </button>

            <ul class="sidenav__list">
              <li class="sidenav__item">
                <a href="#0" class="sidenav__link">
                  <span class="sidenav__text">Add new</span>
                </a>
              </li>

              <li class="sidenav__item">
                <a href="#0" class="sidenav__link">
                  <span class="sidenav__text">Categories</span>
                </a>
              </li>
            </ul>
          </li>

          <li class="sidenav__item">
            <a href="#0" class="sidenav__link">
              <svg
                class="icon sidenav__icon"
                aria-hidden="true"
                viewBox="0 0 16 16"
              >
                <g>
                  <path
                    d="M14,6.883V13H2V6.82L0,5.695V14c0,0.553,0.448,1,1,1h14c0.552,0,1-0.447,1-1V5.783L14,6.883z"
                  ></path>
                  <path
                    d="M15,1H1C0.4,1,0,1.4,0,2v1.4l8,4.5l8-4.4V2C16,1.4,15.6,1,15,1z"
                  ></path>
                </g>
              </svg>
              <span class="sidenav__text">Messages</span>

              <span class="sidenav__counter"
                >18 <i class="sr-only">notifications</i></span
              >
            </a>
          </li>
        </ul>

        <div class="sidenav__divider" role="presentation"></div>

        <div class="sidenav__label">Other</div>

        <ul class="sidenav__list">
          <li class="sidenav__item">
            <a href="#0" class="sidenav__link">
              <svg
                class="icon sidenav__icon"
                aria-hidden="true"
                viewBox="0 0 16 16"
              >
                <g>
                  <circle cx="6" cy="8" r="2"></circle>
                  <path
                    d="M10,2H6C2.7,2,0,4.7,0,8s2.7,6,6,6h4c3.3,0,6-2.7,6-6S13.3,2,10,2z M10,12H6c-2.2,0-4-1.8-4-4s1.8-4,4-4h4 c2.2,0,4,1.8,4,4S12.2,12,10,12z"
                  ></path>
                </g>
              </svg>
              <span class="sidenav__text">Settings</span>
            </a>
          </li>

          <li class="sidenav__item">
            <a href="#0" class="sidenav__link">
              <svg
                class="icon sidenav__icon"
                aria-hidden="true"
                viewBox="0 0 16 16"
              >
                <g>
                  <path
                    d="M12.25,8.231C11.163,9.323,9.659,10,8,10S4.837,9.323,3.75,8.231C1.5,9.646,0,12.145,0,15v1h16 v-1C16,12.145,14.5,9.646,12.25,8.231z"
                  ></path>
                  <circle cx="8" cy="4" r="4"></circle>
                </g>
              </svg>
              <span class="sidenav__text">Account</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>

    <div class="main-content-table">
      <div class="product-list">
        <table
          class="table table--expanded@sm position-relative z-index-1 width-100% js-table"
          aria-label="Table Example"
        >
          <thead class="table__header table__header--sticky">
            <tr class="table__row">
              <th class="table__cell text-left" scope="col">Customer ID</th>
              <th class="table__cell text-left" scope="col">Email</th>
              <th class="table__cell text-left" scope="col">Product</th>
              <th class="table__cell text-left" scope="col">Date</th>
              <th class="table__cell text-left" scope="col">Action</th>
              <th class="table__cell text-left" scope="col">Draw status</th>
              <th class="table__cell text-left" scope="col">Print status</th>
              <th class="table__cell text-left" scope="col">
                Original book file
              </th>
              <th class="table__cell text-left" scope="col">Images</th>

              <th class="table__cell text-left" scope="col">
                Upload work (PDF)
              </th>
              <th class="table__cell text-left" scope="col">Finished</th>
            </tr>
          </thead>

          <tbody class="table__body">
            <tr
              v-for="order in orderCollection"
              :key="order.key"
              class="table__row"
            >
              <td class="table__cell" role="cell">
                <span class="table__label" aria-hidden="true">
                  Customer ID</span
                >
                {{ order.customerID }}
              </td>
              <td class="table__cell" role="cell">
                <span class="table__label" aria-hidden="true"> Email</span>
                {{ order.customermail }}
              </td>

              <td class="table__cell" role="cell">
                <span class="table__label" aria-hidden="true">Product:</span>
                {{ order.product }}
              </td>

              <td class="table__cell text-nowrap" role="cell">
                <span class="table__label" aria-hidden="true">Date:</span>
                {{ order.date }}
              </td>

              <td class="table__cell" role="cell">
                <span class="table__label" aria-hidden="true">Action:</span>

                <nav class="dropdown js-dropdown">
                  <ul>
                    <li class="dropdown__wrapper">
                      <a
                        href="#0"
                        class="dropdown__trigger inline-flex items-center"
                      >
                        <span>Dropdown Link</span>
                        <svg
                          aria-hidden="true"
                          class="icon margin-left-xxxs"
                          viewBox="0 0 16 16"
                        >
                          <polyline
                            fill="none"
                            stroke-width="1"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            points="3.5,6.5 8,11 12.5,6.5 "
                          ></polyline>
                        </svg>
                      </a>

                      <ul class="dropdown__menu" aria-label="submenu">
                        <li>
                          <a href="#0" class="dropdown__item">Item One</a>
                        </li>
                        <li>
                          <a href="#0" class="dropdown__item">Item Two</a>
                        </li>

                        <li>
                          <a href="#0" class="dropdown__item">Item Four</a>
                        </li>
                        <li class="dropdown__separator" role="separator"></li>
                        <li>
                          <a href="#0" class="dropdown__item">Item Five</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </td>
              <td class="table__cell text-nowrap" role="cell">
                <span class="table__label" aria-hidden="true"
                  >Draw status:</span
                >
                <label class="switch">
                  <input type="checkbox" />
                  <span
                    class="slider round"
                    :class="{ checked: order.drawdone }"
                    @click.prevent="checkDrawStatus(order.key)"
                  ></span>
                </label>
              </td>
              <td class="table__cell text-nowrap" role="cell">
                <span class="table__label" aria-hidden="true"
                  >Print status:</span
                >
                <label class="switch">
                  <input type="checkbox" />
                  <span
                    class="slider round"
                    :class="{ checked: order.printdone }"
                    @click.prevent="printStatus(order.key)"
                  ></span>
                </label>
              </td>

              <td class="table__cell text-nowrap" role="cell">
                <span class="table__label" aria-hidden="true"
                  >Original book file:</span
                >
                <a href="#"
                  ><box-icon type="solid" name="file-pdf"></box-icon
                ></a>
              </td>
              <td class="table__cell text-nowrap" role="cell">
                <span class="table__label" aria-hidden="true">images:</span>
              </td>

              <td
                class="table__cell upload-file"
                role="cell"
                :class="{ active: order.uploadedPDFWork }"
              >
                <span class="table__label" aria-hidden="true"
                  >Upload work (PDF):</span
                >

                <fieldset
                  class="file-upload"
                  v-if="order.uploadedPDFWork === false"
                >
                  <label
                    for="upload1"
                    class="file-upload__label btn btn--subtle"
                  >
                    <span
                      class="file-upload__text file-upload__text--has-max-width"
                      >Upload a file</span
                    >
                  </label>

                  <input
                    :data-key="order.key"
                    type="file"
                    class="file-upload__input"
                    name="upload1"
                    id="upload1"
                    @change="onFileSelected"
                  />
                  <progress
                    ref="fileUpload"
                    class="uploader-file"
                    :value="uploadProgress"
                    max="100"
                    >0%</progress
                  >
                </fieldset>
                <div v-else class="flex items-center pdftoprint">
                  <a :href="order.printbookurl" target="_blank"
                    ><box-icon type="solid" name="file-pdf"></box-icon
                  ></a>
                  <a
                    @click.prevent="openDielogDelete"
                    :aria-controls="order.key"
                    class="margin-left-xs btn-pdftoprint"
                    >Delete</a
                  >
                  <div
                    :id="order.key"
                    class="dialog js-dialog"
                    data-animation="on"
                  >
                    <div
                      class="dialog__content max-width-xxs"
                      role="alertdialog"
                      aria-labelledby="dialogTitle1"
                      aria-describedby="dialogDescription1"
                    >
                      <div class="text-component">
                        <h4 id="dialogTitle1">
                          Are you sure you want to permanently delete this file?
                        </h4>
                        <p id="dialogDescription1">
                          This action cannot be undone.
                        </p>
                      </div>

                      <footer class="margin-top-md">
                        <div class="flex justify-end gap-xs flex-wrap">
                          <button class="btn btn--subtle js-dialog__close">
                            Cancel
                          </button>
                          <button
                            class="btn btn--accent"
                            @click.prevent="confirmDeletePDF(order.key)"
                          >
                            Delete
                          </button>
                        </div>
                      </footer>
                    </div>
                  </div>
                </div>
              </td>
              <td class="table__cell text-nowrap" role="cell">
                <span class="table__label" aria-hidden="true">Finished:</span>
                {{ order.finished }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "./Navbar";
import { mapGetters } from "vuex";
import { tablePersonal, uploadbtn, dialogBox } from "./../assets/js/animation";
import firebase from "firebase";
import { db, storage } from "../main";
export default {
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user",
    }),
  },
  components: {
    navbar,
  },
  data() {
    return {
      orderCollection: [],
      selectedFile: null,
      uploadProgress: 0,
    };
  },
  created() {
    db.collection("order").onSnapshot((snapshotChange) => {
      this.orderCollection = [];
      snapshotChange.forEach((doc) => {
        this.orderCollection.push({
          address: doc.data().address,
          artist: doc.data().artist,
          customer: doc.data().customer,
          customermail: doc.data().customermail,
          date: doc.data().date,
          file: doc.data().date,
          finished: doc.data().finished,
          img: doc.data().img,
          payed: doc.data().payed,
          product: doc.data().product,
          printbookurl: doc.data().printbookurl,
          drawdone: doc.data().drawdone,
          printdone: doc.data().printdone,
          customerID: doc.data().customerID,
          uploadedPDFWork: doc.data().uploadedPDFWork,
          key: doc.id,
        });
      });
    });
  },
  mounted() {
    (function() {
      function initSideNav(nav) {
        nav.addEventListener("click", function(event) {
          var btn = event.target.closest(".js-sidenav__sublist-control");
          if (!btn) return;
          var listItem = btn.parentElement,
            bool = Util.hasClass(listItem, "sidenav__item--expanded");
          btn.setAttribute("aria-expanded", !bool);
          Util.toggleClass(listItem, "sidenav__item--expanded", !bool);
        });
      }

      var sideNavs = document.getElementsByClassName("js-sidenav");
      if (sideNavs.length > 0) {
        for (var i = 0; i < sideNavs.length; i++) {
          (function(i) {
            initSideNav(sideNavs[i]);
          })(i);
        }
      }
    })();
    /*main.js*/

    uploadbtn();
    tablePersonal();
  },

  methods: {
    onFileSelected(event) {
      //get file

      var _self = this;
      var key = event.target.getAttribute("data-key");
      this.$refs.fileUpload[0].classList.add("active");
      this.selectedFile = event.target.files[0];
      var storageRef = storage.ref("toPrintBook/" + key);
      var task = storageRef.put(this.selectedFile);
      var downURL;
      task.on(
        "state_changed",
        function progress(snapshot) {
          var percentage =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          _self.uploadProgress = percentage;
        },
        function error(err) {},
        function complete(snapshot) {
          /*cogemos el enlace subido a storage*/
          task.snapshot.ref.getDownloadURL().then(function(downloadURL) {
            updateURL(downloadURL, key);
          });
        }
      );
      /*Actualizamos el storage con el enlace recogido*/
      function updateURL(url, key) {
        _self.orderCollection[0].uploadedPDFWork = !_self.orderCollection[0]
          .uploadedPDFWork;
        db.collection("order")
          .doc(key)
          .update({
            uploadedPDFWork: _self.orderCollection[0].uploadedPDFWork,
            printbookurl: url,
          });
      }
    },
    checkDrawStatus(key) {
      this.orderCollection[0].drawdone = !this.orderCollection[0].drawdone;
      db.collection("order")
        .doc(key)
        .update({
          drawdone: this.orderCollection[0].drawdone,
        });
    },
    printStatus(key) {
      this.orderCollection[0].printdone = !this.orderCollection[0].printdone;
      db.collection("order")
        .doc(key)
        .update({
          printdone: this.orderCollection[0].printdone,
        });
    },
    openDielogDelete() {
      dialogBox();
    },
    confirmDeletePDF(key) {
      var storageRef = storage.ref("toPrintBook/" + key);
      // Delete the file
      storageRef
        .delete()
        .then(function() {
          // File deleted successfully
        })
        .catch(function(error) {
          // Uh-oh, an error occurred!
        });

      this.orderCollection[0].uploadedPDFWork = !this.orderCollection[0]
        .uploadedPDFWork;
      db.collection("order")
        .doc(key)
        .update({
          uploadedPDFWork: false,
          printbookurl: "",
        });
    },
  },
};
</script>

<style lang="scss">
:root {
  // list items
  --sidenav-list-item-height: 32px; // height of each list item (navigation links)
  --sidenav-list-item-h-padding: 12px; // item horizontal padding

  // icons
  --sidenav-icon-size: 16px; // size of main link icons
  --sidenav-icon-text-gap: 8px; // gap between main icon and text label

  // sublist-control -> button (arrow - left of list items) controlling the visibility of sub lists
  --sidenav-sublist-control-size: 20px; // button size
  --sidenav-sublist-control-margin-left: 4px; // gap between left edge and sublist-control
  --sidenav-sublist-control-margin-right: 4px; // gap between sublist-control and main icon
}

.flex-main-panel {
  display: flex;
  .main-content-table {
    width: calc(100% - 250px);
    padding: var(--space-sm);
  }
}

.sidenav__list .sidenav__list {
  // sublist
  display: none; // hide sublist

  .sidenav__link {
    // sublink
    padding-left: calc(
      var(--sidenav-sublist-control-margin-left) +
        var(--sidenav-sublist-control-size) +
        var(--sidenav-sublist-control-margin-right) + var(--sidenav-icon-size) +
        var(--sidenav-icon-text-gap)
    );
  }
}

.sidenav__item {
  position: relative;
}

.sidenav__item--expanded {
  // show sublist
  .sidenav__list {
    display: block;
  }

  .sidenav__sublist-control .icon {
    transform: rotate(90deg);
  }
}

.sidenav__link {
  display: block; // fallback
  display: flex;
  height: var(--sidenav-list-item-height);
  align-items: center;
  padding: 0 var(--sidenav-list-item-h-padding) 0
    calc(
      var(--sidenav-sublist-control-margin-left) +
        var(--sidenav-sublist-control-size) +
        var(--sidenav-sublist-control-margin-right)
    );
  text-decoration: none;
  color: var(--color-contrast-high);

  &:hover {
    background-color: var(--color-contrast-lower);
  }

  &[aria-current="page"] {
    color: var(--color-primary);
  }
}

.sidenav__icon {
  // main item icons
  font-size: var(--sidenav-icon-size);
  margin-right: var(--sidenav-icon-text-gap);
}

.sidenav__text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: var(--space-xxs);
}

.sidenav__counter {
  display: inline-block;
  font-size: var(--text-xs);
  padding: var(--space-xxxxs) var(--space-xxs);
  border-radius: 50em;
  margin-left: auto;
}

.sidenav__sublist-control {
  // button (arrow) controlling the visibility of sub items
  display: block;
  width: var(--sidenav-sublist-control-size);
  height: var(--sidenav-sublist-control-size);
  border-radius: 50%;
  position: absolute;
  left: var(--sidenav-sublist-control-margin-left);
  top: calc(
    (var(--sidenav-list-item-height) - var(--sidenav-sublist-control-size)) / 2
  );

  .icon {
    // arrow icon
    display: block;
    width: 12px;
    height: 12px;
    margin: auto;
    transition: transform 0.2s;
  }
}

.sidenav__label {
  padding: var(--space-sm) var(--sidenav-list-item-h-padding) var(--space-xxs);
  padding-left: calc(
    var(--sidenav-sublist-control-margin-left) +
      var(--sidenav-sublist-control-size) +
      var(--sidenav-sublist-control-margin-right)
  );
  color: var(--color-contrast-medium);
  font-size: var(--text-sm);
}

.sidenav__divider {
  width: 100%;
  height: 1px;
  background-color: var(--color-contrast-lower);
  margin: var(--space-xs) 0;
}

// --basic -> no sublists
.sidenav--basic {
  .sidenav__link,
  .sidenav__label {
    padding-left: var(--sidenav-list-item-h-padding);
  }
}

// --minified
.sidenav--minified {
  --sidenav-list-item-height: auto;

  .sidenav__list .sidenav__list {
    display: none !important; // hide sublists
  }

  .sidenav__link,
  .sidenav__label {
    padding-left: var(--sidenav-list-item-h-padding);
  }

  .sidenav__link {
    flex-direction: column;
    padding-top: var(--space-md);
    padding-bottom: var(--space-md);
  }

  .sidenav__icon {
    margin: 0 0 var(--sidenav-icon-text-gap);
  }

  .sidenav__text {
    padding: 0; // reset
    font-size: var(--text-sm);
  }

  .sidenav__counter {
    display: none; // hide counter
  }

  .sidenav__sublist-control {
    display: none; // hide arrow icon
  }
}

/*table*/
</style>
