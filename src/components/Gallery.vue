
<template>
<div class="gallery">
    <ul class="exp-gallery grid gap-xs js-exp-gallery" data-controls="expLightbox" data-placeholder="../../../app/assets/img/expandable-img-gallery-placeholder.svg">
  <li v-for="image in images" :key="image" class="col-6 col-4@sm js-exp-gallery__item">
    <figure>
      <img :src="image" :data-src="image" alt="Image">
      <figcaption class="sr-only js-exp-gallery__caption">Image caption</figcaption>
    </figure>
  </li>

 
</ul>

<div id="expLightbox" class="modal exp-lightbox bg js-modal js-exp-lightbox" data-animation="on" data-modal-first-focus=".js-exp-lightbox__body">
  <div class="exp-lightbox__content">
    <header class="exp-lightbox__header">
      <h1 class="exp-lightbox__title">{{img}}</h1>

      <menu class="menu-bar ">
      
        <a class="menu-bar__item menu-bar__item--hide" role="menuitem">
         <box-icon class="icon" name='download'></box-icon>
        </a>
      
        <a class="menu-bar__item menu-bar__item-close js-modal__close" role="menuitem">
         <box-icon class="icon" name='x' ></box-icon>
        </a>
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



</template>

<script>

import { toogleMenu } from "./../assets/js/toggleMenu";
import { quickMenuJS } from "./../assets/js/quickmenu";
import { modalJS } from "./../assets/js/modal";
import { swipeJS } from "./../assets/js/swipe";
import { slideshowJS } from "./../assets/js/slideshow";
import { galleryJS } from "./../assets/js/gallery";

export default {
    name: 'gallery',
    props: [
      'images'
    ],
    data() {
        return {

        }
    },
    mounted(){
        toogleMenu()
        quickMenuJS()
        modalJS();
        swipeJS();
        slideshowJS();
        galleryJS();
    },
    destroyed(){
      toogleMenu()
        quickMenuJS()
        modalJS();
        swipeJS();
        slideshowJS();
        galleryJS();
    }
}

</script>

<style lang="scss" scoped>
.gallery {
  .exp-gallery {
    max-width: 190px;
  }
  .menu-bar {
    display: flex;
    a {
      list-style: none;
      padding: 0 25px;
      .icon {
        font-size: 50px;
        cursor: pointer;
      }
    &.menu-bar__item-close {
       .icon {
         color: #999;
         transition: color 0.2s linear;
         &:hover {
           color: #333;
         }
       }
    }
    }
  }
}
</style>
