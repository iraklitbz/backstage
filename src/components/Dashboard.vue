<template>
  <div>
    <div class="int-table text-sm js-int-table">
  <div class="int-table__inner">
    <table class="int-table__table" aria-label="Interactive table example">
      <thead class="int-table__header js-int-table__header">
        <tr class="int-table__row">
          <td class="int-table__cell">
            <div class="custom-checkbox int-table__checkbox">
              <input class="custom-checkbox__input js-int-table__select-all" type="checkbox" aria-label="Select all rows"/>
              <div class="custom-checkbox__control" aria-hidden="true"></div>
            </div>
          </td>

          <th class="int-table__cell int-table__cell--th int-table__cell--sort js-int-table__cell--sort">
            <div class="flex items-center">
              <span>ID</span>
      
              <svg class="icon icon--xxs margin-left-xxxs int-table__sort-icon" aria-hidden="true" viewBox="0 0 12 12"><polygon class="arrow-up" points="6 0 10 5 2 5 6 0"/><polygon class="arrow-down" points="6 12 2 7 10 7 6 12"/></svg>
            </div>

            <ul class="sr-only js-int-table__sort-list">
              <li>
                <input type="radio" name="sortingId" id="sortingIdNone" value="none" checked>
                <label for="sortingIdNone">No sorting</label>
              </li>

              <li>
                <input type="radio" name="sortingId" id="sortingIdAsc" value="asc">
                <label for="sortingIdAsc">Sort in ascending order</label>
              </li>
      
              <li>
                <input type="radio" name="sortingId" id="sortingIdDes" value="desc">
                <label for="sortingIdDes">Sort in descending order</label>
              </li>
            </ul>
          </th>

          <th class="int-table__cell int-table__cell--th int-table__cell--sort js-int-table__cell--sort">
            <div class="flex items-center">
              <span>Name</span>
      
              <svg class="icon icon--xxs margin-left-xxxs int-table__sort-icon" aria-hidden="true" viewBox="0 0 12 12"><polygon class="arrow-up" points="6 0 10 5 2 5 6 0"/><polygon class="arrow-down" points="6 12 2 7 10 7 6 12"/></svg>
            </div>

            <ul class="sr-only js-int-table__sort-list">
              <li>
                <input type="radio" name="sortingName" id="sortingNameNone" value="none" checked>
                <label for="sortingNameNone">No sorting</label>
              </li>

              <li>
                <input type="radio" name="sortingName" id="sortingNameAsc" value="asc">
                <label for="sortingNameAsc">Sort in ascending order</label>
              </li>
      
              <li>
                <input type="radio" name="sortingName" id="sortingNameDes" value="desc">
                <label for="sortingNameDes">Sort in descending order</label>
              </li>
            </ul>
          </th>

          <th class="int-table__cell int-table__cell--th int-table__cell--sort js-int-table__cell--sort">
            <div class="flex items-center">
              <span>Email</span>
      
              <svg class="icon icon--xxs margin-left-xxxs int-table__sort-icon" aria-hidden="true" viewBox="0 0 12 12"><polygon class="arrow-up" points="6 0 10 5 2 5 6 0"/><polygon class="arrow-down" points="6 12 2 7 10 7 6 12"/></svg>
            </div>

            <ul class="sr-only js-int-table__sort-list">
              <li>
                <input type="radio" name="sortingEmail" id="sortingEmailNone" value="none" checked>
                <label for="sortingEmailNone">No sorting</label>
              </li>

              <li>
                <input type="radio" name="sortingEmail" id="sortingEmailAsc" value="asc">
                <label for="sortingEmailAsc">Sort in ascending order</label>
              </li>
      
              <li>
                <input type="radio" name="sortingEmail" id="sortingEmailDes" value="desc">
                <label for="sortingEmailDes">Sort in descending order</label>
              </li>
            </ul>
          </th>

          <th class="int-table__cell int-table__cell--th text-left">
            Description
          </th>

          <th class="int-table__cell int-table__cell--th int-table__cell--sort js-int-table__cell--sort" data-date-format="dd-mm-yyyy">
            <div class="flex items-center">
              <span>Date</span>
      
              <svg class="icon icon--xxs margin-left-xxxs int-table__sort-icon" aria-hidden="true" viewBox="0 0 12 12"><polygon class="arrow-up" points="6 0 10 5 2 5 6 0"/><polygon class="arrow-down" points="6 12 2 7 10 7 6 12"/></svg>
            </div>

            <ul class="sr-only js-int-table__sort-list">
              <li>
                <input type="radio" name="sortingDate" id="sortingDateNone" value="none" checked>
                <label for="sortingDateNone">No sorting</label>
              </li>

              <li>
                <input type="radio" name="sortingDate" id="sortingDateAsc" value="asc">
                <label for="sortingDateAsc">Sort in ascending order</label>
              </li>
      
              <li>
                <input type="radio" name="sortingDate" id="sortingDateDes" value="desc">
                <label for="sortingDateDes">Sort in descending order</label>
              </li>
            </ul>
          </th>

          <th class="int-table__cell int-table__cell--th text-left">Location</th>
          <th class="int-table__cell int-table__cell--th text-right">Action</th>
        </tr>
      </thead>
      
      <tbody class="int-table__body js-int-table__body">
        <tr class="int-table__row">
          <th class="int-table__cell" scope="row">
            <div class="custom-checkbox int-table__checkbox">
              <input class="custom-checkbox__input js-int-table__select-row" type="checkbox" aria-label="Select this row"/>
              <div class="custom-checkbox__control" aria-hidden="true"></div>
            </div>
          </th>
          <td class="int-table__cell">1</td>
          <td class="int-table__cell"><a href="#0">Bryony Mcmillan</a></td>
          <td class="int-table__cell">r.email@email.com</td>
          <td class="int-table__cell max-width-xxxxs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eveniet nisi itaque!</td>
          <td class="int-table__cell">01/01/2021</td>
          <td class="int-table__cell">Hungary</td>
          <td class="int-table__cell">
            <button class="reset int-table__menu-btn margin-left-auto js-tab-focus" data-label="Edit row" aria-controls="menu-example">
              <svg class="icon" viewBox="0 0 16 16"><circle cx="8" cy="7.5" r="1.5" /><circle cx="1.5" cy="7.5" r="1.5" /><circle cx="14.5" cy="7.5" r="1.5" /></svg>
            </button>
          </td>
        </tr>

        <tr class="int-table__row">
          <th class="int-table__cell" scope="row">
            <div class="custom-checkbox int-table__checkbox">
              <input class="custom-checkbox__input js-int-table__select-row" type="checkbox" aria-label="Select this row"/>
              <div class="custom-checkbox__control" aria-hidden="true"></div>
            </div>
          </th>
          <td class="int-table__cell">2</td>
          <td class="int-table__cell"><a href="#0">Hetty Maxwell</a></td>
          <td class="int-table__cell">f.email@email.com</td>
          <td class="int-table__cell max-width-xxxxs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eveniet nisi itaque!</td>
          <td class="int-table__cell">11/10/2020</td>
          <td class="int-table__cell">United Kingdom</td>
          <td class="int-table__cell">
            <button class="reset int-table__menu-btn margin-left-auto js-tab-focus" data-label="Edit row" aria-controls="menu-example">
              <svg class="icon" viewBox="0 0 16 16"><circle cx="8" cy="7.5" r="1.5" /><circle cx="1.5" cy="7.5" r="1.5" /><circle cx="14.5" cy="7.5" r="1.5" /></svg>
            </button>
          </td>
        </tr>

        <tr class="int-table__row">
          <th class="int-table__cell" scope="row">
            <div class="custom-checkbox int-table__checkbox">
              <input class="custom-checkbox__input js-int-table__select-row" type="checkbox" aria-label="Select this row"/>
              <div class="custom-checkbox__control" aria-hidden="true"></div>
            </div>
          </th>
          <td class="int-table__cell">3</td>
          <td class="int-table__cell"><a href="#0">Honey Leblanc</a></td>
          <td class="int-table__cell">v.email@email.com</td>
          <td class="int-table__cell max-width-xxxxs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eveniet nisi itaque!</td>
          <td class="int-table__cell">17/09/2020</td>
          <td class="int-table__cell">Maldives</td>
          <td class="int-table__cell">
            <button class="reset int-table__menu-btn margin-left-auto js-tab-focus" data-label="Edit row" aria-controls="menu-example">
              <svg class="icon" viewBox="0 0 16 16"><circle cx="8" cy="7.5" r="1.5" /><circle cx="1.5" cy="7.5" r="1.5" /><circle cx="14.5" cy="7.5" r="1.5" /></svg>
            </button>
          </td>
        </tr>

        <tr class="int-table__row">
          <th class="int-table__cell" scope="row">
            <div class="custom-checkbox int-table__checkbox">
              <input class="custom-checkbox__input js-int-table__select-row" type="checkbox" aria-label="Select this row"/>
              <div class="custom-checkbox__control" aria-hidden="true"></div>
            </div>
          </th>
          <td class="int-table__cell">4</td>
          <td class="int-table__cell"><a href="#0">Maira Hodges</a></td>
          <td class="int-table__cell">a.email@email.com</td>
          <td class="int-table__cell max-width-xxxxs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eveniet nisi itaque!</td>
          <td class="int-table__cell">04/08/2020</td>
          <td class="int-table__cell">Iceland</td>
          <td class="int-table__cell">
            <button class="reset int-table__menu-btn margin-left-auto js-tab-focus" data-label="Edit row" aria-controls="menu-example">
              <svg class="icon" viewBox="0 0 16 16"><circle cx="8" cy="7.5" r="1.5" /><circle cx="1.5" cy="7.5" r="1.5" /><circle cx="14.5" cy="7.5" r="1.5" /></svg>
            </button>
          </td>
        </tr>

        <tr class="int-table__row">
          <th class="int-table__cell" scope="row">
            <div class="custom-checkbox int-table__checkbox">
              <input class="custom-checkbox__input js-int-table__select-row" type="checkbox" aria-label="Select this row"/>
              <div class="custom-checkbox__control" aria-hidden="true"></div>
            </div>
          </th>
          <td class="int-table__cell">5</td>
          <td class="int-table__cell"><a href="#0">Nigel Lang</a></td>
          <td class="int-table__cell">g.email@email.com</td>
          <td class="int-table__cell max-width-xxxxs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eveniet nisi itaque!</td>
          <td class="int-table__cell">03/07/2020</td>
          <td class="int-table__cell">Italy</td>
          <td class="int-table__cell">
            <button class="reset int-table__menu-btn margin-left-auto js-tab-focus" data-label="Edit row" aria-controls="menu-example">
              <svg class="icon" viewBox="0 0 16 16"><circle cx="8" cy="7.5" r="1.5" /><circle cx="1.5" cy="7.5" r="1.5" /><circle cx="14.5" cy="7.5" r="1.5" /></svg>
            </button>
          </td>
        </tr>

        <tr class="int-table__row">
          <th class="int-table__cell" scope="row">
            <div class="custom-checkbox int-table__checkbox">
              <input class="custom-checkbox__input js-int-table__select-row" type="checkbox" aria-label="Select this row"/>
              <div class="custom-checkbox__control" aria-hidden="true"></div>
            </div>
          </th>
          <td class="int-table__cell">6</td>
          <td class="int-table__cell"><a href="#0">Saif Acevedo</a></td>
          <td class="int-table__cell">l.email@email.com</td>
          <td class="int-table__cell max-width-xxxxs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eveniet nisi itaque!</td>
          <td class="int-table__cell">21/05/2020</td>
          <td class="int-table__cell">Argentina</td>
          <td class="int-table__cell">
            <button class="reset int-table__menu-btn margin-left-auto js-tab-focus" data-label="Edit row" aria-controls="menu-example">
              <svg class="icon" viewBox="0 0 16 16"><circle cx="8" cy="7.5" r="1.5" /><circle cx="1.5" cy="7.5" r="1.5" /><circle cx="14.5" cy="7.5" r="1.5" /></svg>
            </button>
          </td>
        </tr>

        <tr class="int-table__row">
          <th class="int-table__cell" scope="row">
            <div class="custom-checkbox int-table__checkbox">
              <input class="custom-checkbox__input js-int-table__select-row" type="checkbox" aria-label="Select this row"/>
              <div class="custom-checkbox__control" aria-hidden="true"></div>
            </div>
          </th>
          <td class="int-table__cell">7</td>
          <td class="int-table__cell"><a href="#0">Isaak O'Gallagher</a></td>
          <td class="int-table__cell">b.email@email.com</td>
          <td class="int-table__cell max-width-xxxxs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eveniet nisi itaque!</td>
          <td class="int-table__cell">11/04/2020</td>
          <td class="int-table__cell">Maldives</td>
          <td class="int-table__cell">
            <button class="reset int-table__menu-btn margin-left-auto js-tab-focus" data-label="Edit row" aria-controls="menu-example">
              <svg class="icon" viewBox="0 0 16 16"><circle cx="8" cy="7.5" r="1.5" /><circle cx="1.5" cy="7.5" r="1.5" /><circle cx="14.5" cy="7.5" r="1.5" /></svg>
            </button>
          </td>
        </tr>

        <tr class="int-table__row">
          <th class="int-table__cell" scope="row">
            <div class="custom-checkbox int-table__checkbox">
              <input class="custom-checkbox__input js-int-table__select-row" type="checkbox" aria-label="Select this row"/>
              <div class="custom-checkbox__control" aria-hidden="true"></div>
            </div>
          </th>
          <td class="int-table__cell">8</td>
          <td class="int-table__cell"><a href="#0">Lucille Arias</a></td>
          <td class="int-table__cell">m.email@email.com</td>
          <td class="int-table__cell max-width-xxxxs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eveniet nisi itaque!</td>
          <td class="int-table__cell">05/03/2020</td>
          <td class="int-table__cell">Thailand</td>
          <td class="int-table__cell">
            <button class="reset int-table__menu-btn margin-left-auto js-tab-focus" data-label="Edit row" aria-controls="menu-example">
              <svg class="icon" viewBox="0 0 16 16"><circle cx="8" cy="7.5" r="1.5" /><circle cx="1.5" cy="7.5" r="1.5" /><circle cx="14.5" cy="7.5" r="1.5" /></svg>
            </button>
          </td>
        </tr>

        <tr class="int-table__row">
          <th class="int-table__cell" scope="row">
            <div class="custom-checkbox int-table__checkbox">
              <input class="custom-checkbox__input js-int-table__select-row" type="checkbox" aria-label="Select this row"/>
              <div class="custom-checkbox__control" aria-hidden="true"></div>
            </div>
          </th>
          <td class="int-table__cell">9</td>
          <td class="int-table__cell"><a href="#0">Kendall Rankin</a></td>
          <td class="int-table__cell">e.email@email.com</td>
          <td class="int-table__cell max-width-xxxxs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eveniet nisi itaque!</td>
          <td class="int-table__cell">02/02/2020</td>
          <td class="int-table__cell">Austria</td>
          <td class="int-table__cell">
            <button class="reset int-table__menu-btn margin-left-auto js-tab-focus" data-label="Edit row" aria-controls="menu-example">
              <svg class="icon" viewBox="0 0 16 16"><circle cx="8" cy="7.5" r="1.5" /><circle cx="1.5" cy="7.5" r="1.5" /><circle cx="14.5" cy="7.5" r="1.5" /></svg>
            </button>
          </td>
        </tr>

        <tr class="int-table__row">
          <th class="int-table__cell" scope="row">
            <div class="custom-checkbox int-table__checkbox">
              <input class="custom-checkbox__input js-int-table__select-row" type="checkbox" aria-label="Select this row"/>
              <div class="custom-checkbox__control" aria-hidden="true"></div>
            </div>
          </th>
          <td class="int-table__cell">10</td>
          <td class="int-table__cell"><a href="#0">Raihan Boone</a></td>
          <td class="int-table__cell">c.email@email.com</td>
          <td class="int-table__cell max-width-xxxxs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eveniet nisi itaque!</td>
          <td class="int-table__cell">01/01/2020</td>
          <td class="int-table__cell">USA</td>
          <td class="int-table__cell">
            <button class="reset int-table__menu-btn margin-left-auto js-tab-focus" data-label="Edit row" aria-controls="menu-example">
              <svg class="icon" viewBox="0 0 16 16"><circle cx="8" cy="7.5" r="1.5" /><circle cx="1.5" cy="7.5" r="1.5" /><circle cx="14.5" cy="7.5" r="1.5" /></svg>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<menu id="menu-example" class="menu js-menu">
  <li role="menuitem">
    <span class="menu__content js-menu__content">
      <svg class="icon menu__icon" aria-hidden="true" viewBox="0 0 12 12"><path d="M10.121.293a1,1,0,0,0-1.414,0L1,8,0,12l4-1,7.707-7.707a1,1,0,0,0,0-1.414Z"></path></svg>
      <span>Edit</span>
    </span>
  </li>

  <li role="menuitem">
    <span class="menu__content js-menu__content">
      <svg class="icon menu__icon" aria-hidden="true" viewBox="0 0 16 16"><path d="M15,4H1C0.4,4,0,4.4,0,5v10c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1V5C16,4.4,15.6,4,15,4z M14,14H2V6h12V14z"></path><rect x="2" width="12" height="2"></rect></svg>
      <span>Copy</span>
    </span>
  </li>

  <li role="menuitem">
    <span class="menu__content js-menu__content">
      <svg class="icon menu__icon" aria-hidden="true" viewBox="0 0 12 12"><path d="M8.354,3.646a.5.5,0,0,0-.708,0L6,5.293,4.354,3.646a.5.5,0,0,0-.708.708L5.293,6,3.646,7.646a.5.5,0,0,0,.708.708L6,6.707,7.646,8.354a.5.5,0,1,0,.708-.708L6.707,6,8.354,4.354A.5.5,0,0,0,8.354,3.646Z"></path><path d="M6,0a6,6,0,1,0,6,6A6.006,6.006,0,0,0,6,0ZM6,10a4,4,0,1,1,4-4A4,4,0,0,1,6,10Z"></path></svg>
      <span>Delete</span>
    </span>
  </li>
</menu>
  </div>
</template>

<script>
import navbar from "./Navbar";
import { mapGetters } from "vuex";
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
    let codyFrameworkTable = document.createElement('script')
    codyFrameworkTable.setAttribute('src', '/js/table.js')
    document.head.appendChild(codyFrameworkTable)
  },
   destroyed() {},
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
