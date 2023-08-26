import styled from 'styled-components'

export const ProjectsContainer = styled.div`
/* * {
  font-family: "Sofia", sans-serif;
} */

ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;

.booking-card {
    position: relative;
    width: 277px;
    display: flex;
    /* flex: 0 0 300px; */
    flex-direction: column;
    /* margin: 20px; */
    /* margin-bottom: 30px; */
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    overflow: hidden;
    background-position: center center;
    background-size: cover;
    text-align: center;
    color: #000;
    transition: 0.3s;

  .book-container {
    height: 200px;
      .content {
      position: relative;
      opacity: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;
      transform: translateY(-200px);
      transition: 0.3s;
          .btn {
          border: 3px solid white;
          padding: 10px 15px;
          background: none;
          text-transform: uppercase;
          font-weight: bold;
          font-size: 1.3em;
          color: white;
          cursor: pointer;
          transition: 0.3s;

          &:hover{
            background: white;
            border: 0px solid white;
            color: #0a4870;
          }
          }
      }
  }

  &::before{
    content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
  transition: 0.3s;
  }

  .informations-container {
  flex: 1 0 auto;
  padding: 20px;
  background: #f0f0f0;
  transform: translateY(206px);
  transition: 0.3s;

  .title {
  position: relative;
  padding-bottom: 10px;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 1.2em;

        &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 3px;
        width: 50px;
        margin: auto;
        background: #0a4870;
      }
}


.more-information { 
  opacity: 0;
  transition: 0.3s;

  .info-and-date-container {
  display: flex;
  flex-direction: column;

  .socialmedia--container{
  padding: 15px;
  display:flex;
  align-items: center;
    justify-content: center;
    gap: 2rem;
    font-size: 2.5rem;
    color: #000;
  margin-top: 20px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  background: white;
  font-weight: bold;
  }

  .tech {
  flex: 1 0;
  padding: 15px;
  margin-top: 20px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  background: white;
  font-weight: bold;
  font-size: 0.9em;
  display: flex;
    gap: .5rem;
    justify-content: center;

  .icon {
  margin-bottom: 5px;
}

.info {
  color: #ec992c;
  margin-right: 10px;
}
}
}

}
}

&:hover::before{
  background: rgb(0 229 255 / 23%);
}

&:hover .book-container .content {
  opacity: 1;
  transform: translateY(0px);
}

&:hover .informations-container {
  transform: translateY(0px);
  .more-information {
  opacity: 1;
}
}
}


}

@media (max-width: 768px) {
  ul .booking-card::before {
    background: rgba(10, 72, 112, 0.6);
  }
  ul .booking-card .book-container .content {
    opacity: 1;
    transform: translateY(0px);
  }
  ul .booking-card .informations-container {
    transform: translateY(0px);
  }
  ul .booking-card .informations-container .more-information {
    opacity: 1;
  }
}
`