<template>
  <div class="container">
    <a href="#" class="container__pictures" v-scroll-to="{element: '#recommended', offset: -50}">
        <img src="~/static/img/jungle.jpg" alt="photo">
        <h2><span>Poznaj</span>Moje Akwarele</h2>
    </a>
    <div class="container__description">
        <h2>Zapraszam do świata Moich Akwareli</h2>
        <svg width="101" height="1" viewBox="0 0 101 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.964294" y1="0.5" x2="100.964" y2="0.5" stroke="black"/>
        </svg>
        <p>Technika akwareli jest&nbsp;wyjątkowa z&nbsp;kilku powodów. Jest estetyczna i&nbsp;delikatna. Zwiewna, choć wymaga niezwykłej 
          precyzji. Nie&nbsp;wybacza błędów domagając&nbsp;się cierpliwości i&nbsp;ogromnej troski. 
          <br/>
          <br/> 
          W&nbsp;swoje prace angażuję nie&nbsp;tylko ręce, 
          ale&nbsp;przede wszystkim serce i&nbsp;duszę. Każda akwarela jest unikatowa, jedyna w&nbsp;swoim rodzaju. 
          Z&nbsp;tego względu Moje Akwarele dodadzą lekkości i&nbsp;szlachetności każdemu wnętrzu.</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;

    &__pictures {
      position: relative;
      margin: 5% 0 2% 0;
      overflow: hidden;

      img {
          width: 100%;
          transform: scale(1) scaleY(1.01);
          transition: all .8s cubic-bezier(.27,.53,.63,.95);

          @include respond(tab-land) {
              filter: brightness(80%);
          }

          @include respond(phone) {
            height: 60vw;
          }

          &:hover {
              cursor: pointer;
              filter: brightness(80%);
              transform: scale(1.04);
          }
      }

      h2 {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: $color-primary;
          font-size: 6rem;
          font-weight: 300;
          letter-spacing: 2px;
          pointer-events: none;
          text-align: center;
          font-family: $font-primary-sc;
          z-index: 1;

          @include respond(tab-port) {
            font-size: 5rem;
          }

          @include respond(tab-port-small) {
            font-size: 4rem;
          }

          @include respond(phone) {
            font-size: 2rem;
          }

          span {
            position: absolute;
            top: 35%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: $color-grey-light;
            text-transform: none;
            font-size: 24rem;
            font-family: $font-secondary;
            z-index: -1;

            @include respond(tab-port) {
              font-size: 20rem;
            }
            
            @include respond(tab-port-small) {
              font-size: 16rem;
            }
            
            @include respond(phone) {
              font-size: 8rem;
            }
          }
      }
    }

    &__description {
      width: 60%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: column;
      padding: 5% 0 5% 0;

      @include respond(phone) {
        width:80%;
      }

      h2 {
          font-size: 2.8rem;
          font-weight: 300;
          text-align: center;
      }

      svg {
          margin-bottom: 7%;
          margin-top: .9rem;
      }

      p {
          font-size: 2rem;
          font-weight: 300;
          text-align: center;
      }
    }
  }  
</style>