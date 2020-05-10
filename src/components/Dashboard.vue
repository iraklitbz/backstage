<template>

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
              <th v-if="artistRole === true || adminRole === true" class="table__cell text-left" scope="col"> Draw start </th>
              <th v-if="printerRole === true" class="table__cell text-left" scope="col">Print status</th>

              <th v-if="artistRole === true" class="table__cell text-left" scope="col"> Original book file</th>
              <th v-if="artistRole === true" class="table__cell text-left" scope="col">Images</th>
             
              <th v-if="printerRole === true" class="table__cell text-left" scope="col">Finished</th>
            </tr>
          </thead>

          <tbody class="table__body work-list" v-for="order in orderCollection"  :key="order.key">
            <tr v-if="order.isStart === false" class="table__row" >
            
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
               <td v-if="artistRole === true" class="table__cell text-nowrap" role="cell">
                  <span class="table__label" aria-hidden="true">Draw start:</span>
                  <label class="switch">
                    <input type="checkbox" />
                    <span
                      class="slider round"
                      :class="{ checked: order.isStart }"
                      @click.prevent="drawIsStart(order.key, user.data.email, order.isStart)"
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

             <td v-if="artistRole === true"
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
              <td  v-if="artistRole === true" class="table__cell text-nowrap" role="cell">
                <span class="table__label" aria-hidden="true">images:</span>
                <gallery :images='order.img' :galleryId="order.key" />
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
      </div>
    </div>
</template>

<script>
import navbar from "./Navbar";
import gallery from "./Gallery";
import { mapGetters } from "vuex";
import { tablePersonal } from "./../assets/js/table";
import { dialogJS } from './../assets/js/dialogJS';
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
    gallery
  },
  data() {
    return {
      orderCollection: [],
      selectedFile: null,
      uploadProgress: 0,
      artistRole: Boolean,
      printerRole: Boolean,
      adminRole: Boolean,
       artist: {
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
          isStart: doc.data().isStart,
          printbookurl: doc.data().printbookurl,
          isStart: doc.data().isStart,
          printdone: doc.data().printdone,
          customerID: doc.data().customerID,
          uploadedPDFWork: doc.data().uploadedPDFWork,
          key: doc.id,
        });
        this.artist.drawFinish = doc.data().artist.drawFinish
      });
    });
        firebase.auth().onAuthStateChanged((userAuth) => {
      if (userAuth) {
        firebase
          .auth()
          .currentUser.getIdTokenResult()
          .then((tokenResult) => {
            console.log(tokenResult.claims.Admin)
            this.artistRole = tokenResult.claims.Artist;
            this.printerRole = tokenResult.claims.Printer;
            this.adminRole = tokenResult.claims.Admin;
          });
      }
    });
  },
  mounted() {
    tablePersonal();
  },

  methods: {
    checkDrawStatus(key) {
      this.orderCollection[0].drawdone = !this.orderCollection[0].drawdone;
      db.collection("order")
        .doc(key)
        .update({
          drawdone: this.orderCollection[0].drawdone,
        });
    },
     drawIsStart(key, email, isStart) {
      isStart = !isStart;
      db.collection("order")
        .doc(key)
        .update({
          isStart: isStart,
          artist: {
            id: email
          },
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
    openDialogDelete() {
       dialogJS();
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

.work-list {
  .table__row.active {
    position: relative;
    .disable {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      z-index: 10;
      background-color: rgba(#fff, 0.83);
      display: flex;
      align-items: center;
      padding: 0 20px;
      h5 {
        margin-right: 20px;
      }
    }
  }
}

/*table*/
</style>
