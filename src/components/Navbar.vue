<template>
 <aside class="bg border-right" style="width: 250px; height: 100vh;">
      <router-link to="/" class="navbar-brand">Backstage</router-link>
      <nav class="sidenav js-sidenav">
        <div class="sidenav__label">Main</div>

        <ul class="sidenav__list">
          <li class="sidenav__item">
            <a href="#0" class="sidenav__link" aria-current="page">
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
              <span class="sidenav__text">Work list</span>

           
            </a>

        

           
          </li>

          <li class="sidenav__item">
            <a href="#0" class="sidenav__link" >
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
              <span class="sidenav__text">Completed</span>
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
            <a  @click.prevent="signOut" href="#0" class="sidenav__link">
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
             <span class="sidenav__text">Sign out</span>
              
            </a>
          </li>
        </ul>
      </nav>
    </aside>
</template>

<script>
import firebase from "firebase";
export default {
    
    name: 'navbar',
    data() {
        return {
            title: 'Navbar'
        }
    },
    methods: {
          signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push("/")
        });
    },
    }
}
</script>

<style lang="scss" scoped>
.navbar-brand {
    display: block;
    padding: 15px 25px;
    text-align: center;
    text-align: center;
    background-color: turquoise;
    color: #fff;
    text-decoration: none;
}
aside {
    position: relative;
    background-color: #fff;
    .sidenav {
        position: sticky;
        top: 20px;
    }
}
</style>
