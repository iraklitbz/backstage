<template>
  <div class="flex-main-panel">
    <navbar></navbar>
    <div class="main-content-table">
      <div class="product-list">
        <h2>Todo</h2>
        <div class="list-moduel">
          <table
            class="table table--expanded@sm position-relative z-index-1 width-100% js-table"
            aria-label="Table"
          >
            <thead class="table__header table__header--sticky">
              <tr class="table__row">
                <th class="table__cell text-left" scope="col">Customer ID</th>
                <th class="table__cell text-left" scope="col">Email</th>
                <th class="table__cell text-left" scope="col">Product</th>
                <th class="table__cell text-left" scope="col">Date</th>
                <th class="table__cell text-left" scope="col">Action</th>
                <th
                  v-if="artistRole === true"
                  class="table__cell text-left"
                  scope="col"
                >
                  Draw start
                </th>
                <th
                  v-if="artistRole === true"
                  class="table__cell text-left"
                  scope="col"
                >
                  Draw finish
                </th>
                <th
                  v-if="!artistRole"
                  class="table__cell text-left"
                  scope="col"
                >
                  Print status
                </th>
                <th
                  v-if="artistRole === true"
                  class="table__cell text-left"
                  scope="col"
                >
                  Original book file
                </th>
                <th
                  v-if="artistRole === true"
                  class="table__cell text-left"
                  scope="col"
                >
                  Images
                </th>

                <th class="table__cell text-left" scope="col">
                  Upload work (PDF)
                </th>
                <th
                  v-if="printerRole === true"
                  class="table__cell text-left"
                  scope="col"
                >
                  Finished
                </th>
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
                <td
                  v-if="artistRole === true"
                  class="table__cell text-nowrap"
                  role="cell"
                >
                  <span class="table__label" aria-hidden="true"
                    >Draw start:</span
                  >
                  <label class="switch">
                    <input type="checkbox" />
                    <span
                      class="slider round"
                      :class="{ checked: artist.drawStart }"
                      @click.prevent="drawIsStart(order.key, user.data.email)"
                    ></span>
                  </label>
                </td>
                <td
                  v-if="artistRole === true"
                  class="table__cell text-nowrap"
                  role="cell"
                >
                  <span class="table__label" aria-hidden="true"
                    >Draw finish:</span
                  >
                  <label class="switch">
                    <input type="checkbox" />
                    <span
                      class="slider round"
                      :class="{ checked: artist.drawFinish }"
                      @click.prevent="drawIsFinish(order.key)"
                    ></span>
                  </label>
                </td>
                <td
                  v-if="printerRole === true"
                  class="table__cell text-nowrap"
                  role="cell"
                >
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

                <td
                  v-if="artistRole === true"
                  class="table__cell text-nowrap"
                  role="cell"
                >
                  <span class="table__label" aria-hidden="true"
                    >Original book file:</span
                  >
                  <a href="#"
                    ><box-icon type="solid" name="file-pdf"></box-icon
                  ></a>
                </td>
                <td
                  v-if="artistRole === true"
                  class="table__cell text-nowrap"
                  role="cell"
                >
                  <span class="table__label" aria-hidden="true">images:</span>


<ul class="exp-gallery grid gap-xs js-exp-gallery" data-controls="expLightbox" data-placeholder="../../../app/assets/img/expandable-img-gallery-placeholder.svg">
  <li class="js-exp-gallery__item">
    <figure>
      <img src="https://firebasestorage.googleapis.com/v0/b/backstage-aa43c.appspot.com/o/images%2F1.jpg?alt=media&token=885c8a47-5ba0-4edf-843c-b1b901f22c98" data-src="https://firebasestorage.googleapis.com/v0/b/backstage-aa43c.appspot.com/o/images%2F1.jpg?alt=media&token=885c8a47-5ba0-4edf-843c-b1b901f22c98" alt="Image Description">

    </figure>
  </li>

  <li class="js-exp-gallery__item">
    <figure>
      <img src="https://firebasestorage.googleapis.com/v0/b/backstage-aa43c.appspot.com/o/images%2F2.jpg?alt=media&token=eb74309f-d945-412f-a9c1-24fbbe898c77" data-src="https://firebasestorage.googleapis.com/v0/b/backstage-aa43c.appspot.com/o/images%2F2.jpg?alt=media&token=eb74309f-d945-412f-a9c1-24fbbe898c77" alt="Image Description">
  
    </figure>
  </li>

  <li class="js-exp-gallery__item">
    <figure>
      <img src="https://firebasestorage.googleapis.com/v0/b/backstage-aa43c.appspot.com/o/images%2F3.jpg?alt=media&token=06a95e15-35b0-473d-80ea-7037098e6ba4" data-src="https://firebasestorage.googleapis.com/v0/b/backstage-aa43c.appspot.com/o/images%2F3.jpg?alt=media&token=06a95e15-35b0-473d-80ea-7037098e6ba4" alt="Image Description">
    </figure>
  </li>
</ul>
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
                    v-if="
                      artistRole === true && order.uploadedPDFWork === false
                    "
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
                      v-if="artistRole === true"
                      @click.prevent="openDielogDelete"
                      :aria-controls="order.key"
                      class="margin-left-xs btn-pdftoprint"
                      >Delete</a
                    >
                    <div
                      v-if="artistRole === true"
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
                            Are you sure you want to permanently delete this
                            file?
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
                <td
                  v-if="printerRole === true"
                  class="table__cell text-nowrap"
                  role="cell"
                >
                  <span class="table__label" aria-hidden="true">Finished:</span>
                  {{ order.finished }}
                </td>
              </tr>
            </tbody>
          </table>
          <!--Galery--->
          <div id="expLightbox" class="modal exp-lightbox bg js-modal js-exp-lightbox" data-animation="on" data-modal-first-focus=".js-exp-lightbox__body">
  <div class="exp-lightbox__content">
    <header class="exp-lightbox__header">
      <h1 class="exp-lightbox__title">Lightbox</h1>

      <menu class="menu-bar menu-bar--expanded@md js-menu-bar" data-menu-class="menu--overlay">
        <li class="menu-bar__item menu-bar__item--trigger js-menu-bar__trigger" role="menuitem" aria-label="More options">
          <svg class="icon menu-bar__icon" aria-hidden="true" viewBox="0 0 16 16"><circle cx="8" cy="7.5" r="1.5" /><circle cx="1.5" cy="7.5" r="1.5" /><circle cx="14.5" cy="7.5" r="1.5" /></svg>
        </li>
      
        <li class="menu-bar__item menu-bar__item--hide" role="menuitem">
          <svg class="icon menu-bar__icon" aria-hidden="true" viewBox="0 0 24 24"><g stroke-linecap="square" stroke-linejoin="miter" stroke-miterlimit="10" stroke-width="2" stroke="currentColor" fill="none"><path d="M22,11l-8-8v5 C8.4,8,1,10.2,1,20c2.7-4.6,5.5-6,13-6v5L22,11z"></path></g></svg>
          <span class="menu-bar__label">Share</span>
        </li>
      
        <li class="menu-bar__item menu-bar__item--hide" role="menuitem">
          <svg class="icon menu-bar__icon" aria-hidden="true" viewBox="0 0 24 24"><g stroke-linecap="square" stroke-linejoin="miter" stroke-miterlimit="10" stroke-width="2" stroke="currentColor" fill="none"><line x1="12" y1="16" x2="12" y2="3" stroke-linecap="butt"></line><polyline points="17,3 23,3 23,21 1,21 1,3 7,3 "></polyline><polyline points=" 17,11 12,16 7,11 "></polyline></g></svg>
          <span class="menu-bar__label">Download</span>
        </li>
      
        <li class="menu-bar__item js-modal__close" role="menuitem">
          <svg class="icon menu-bar__icon" aria-hidden="true" viewBox="0 0 24 24"><g stroke-linecap="square" stroke-linejoin="miter" stroke-miterlimit="10" stroke-width="2" stroke="currentColor" fill="none"><line x1="19" y1="5" x2="5" y2="19"></line><line x1="19" y1="19" x2="5" y2="5"></line></g></svg>
          <span class="menu-bar__label reset">Close</span>
        </li>
      </menu>
    </header>

    <div class="exp-lightbox__body slideshow slideshow--transition-slide js-exp-lightbox__body" data-swipe="on" data-navigation="off" data-zoom="on">
      <ul class="slideshow__content js-exp-lightbox__slideshow">
        <!-- gallery created in JS -->
      </ul>

      <ul>
        <li class="slideshow__control js-slideshow__control">
          <button class="reset slideshow__btn js-tab-focus">
            <svg class="icon" viewBox="0 0 32 32"><title>Show previous slide</title><path d="M20.768,31.395L10.186,16.581c-0.248-0.348-0.248-0.814,0-1.162L20.768,0.605l1.627,1.162L12.229,16 l10.166,14.232L20.768,31.395z"></path></svg>
          </button>
        </li>
    
        <li class="slideshow__control js-slideshow__control">
          <button class="reset slideshow__btn js-tab-focus">
            <svg class="icon" viewBox="0 0 32 32"><title>Show next slide</title><path d="M11.232,31.395l-1.627-1.162L19.771,16L9.605,1.768l1.627-1.162l10.582,14.813 c0.248,0.348,0.248,0.814,0,1.162L11.232,31.395z"></path></svg>
          </button>
        </li>
      </ul>
    </div>
  </div>
</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "./Navbar";
import { mapGetters } from "vuex";
import './../assets/js/table.js'
import {MyFunctions} from "../assets//js/table.js";
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
      artistRole: Boolean,
      printerRole: Boolean,
      artist: {
        drawStart: false,
        drawFinish: false,
      },
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
          drawStart: doc.data().drawFinish,
          printdone: doc.data().printdone,
          customerID: doc.data().customerID,
          uploadedPDFWork: doc.data().uploadedPDFWork,
          key: doc.id,
        });
        this.artist.drawStart = doc.data().artist.drawStart,
        this.artist.drawFinish = doc.data().artist.drawFinish
      });
    });
    firebase.auth().onAuthStateChanged((userAuth) => {
      if (userAuth) {
        firebase
          .auth()
          .currentUser.getIdTokenResult()
          .then((tokenResult) => {
            this.artistRole = tokenResult.claims.Artist;
            this.printerRole = tokenResult.claims.Printer;
          });
      }
    });
  },
  mounted() {

  },

   destroyed() { // remove the JS code once the component has been destroyed

   
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
    drawIsStart(key, email) {
      this.artist.drawStart = !this.artist.drawStart;
      db.collection("order")
        .doc(key)
        .update({
          artist: {
            id: email,
            drawStart: this.artist.drawStart,
            drawFinish: false,
          },
        });
    },
    drawIsFinish(key) {
      
      if (this.artist.drawStart === true) {
        this.artist.drawFinish = !this.artist.drawFinish;
        db.collection("order")
          .doc(key)
          .update({
            artist: {
              drawStart: true,
              drawFinish: this.artist.drawFinish,
            },
          });
      }
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
  background-color: #f3f3f3;
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
