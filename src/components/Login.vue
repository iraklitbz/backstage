
<template>
<div>
<button class="btn btn--primary" aria-controls="menu-example">Toggle Menu</button>
  
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

  <li class="menu__separator" role="separator"></li>

  <li class="menu__label">Link examples</li>

  <li role="menuitem">
    <a href="#0" class="menu__content js-menu__content">Link One</a>
  </li>

  <li role="menuitem">
    <a href="#0" class="menu__content js-menu__content">Link Two</a>
  </li>
</menu>

</div>

</template>

<script>
import firebase from "firebase";
import { toogleMenu } from "./../assets/js/toggleMenu";

export default {
    name: 'navbar',
    data() {
        return {
          
        }
    },
    mounted(){
       toggleMenu()
    }
}
   toggleMenu()
</script>

<style lang="scss" scoped>

</style>
