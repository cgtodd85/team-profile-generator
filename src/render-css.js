const renderedCss = `
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    margin: 2 rem;
  }
  
  nav {
    text-align: center;
    padding: 3rem;
  }
  /* .navbar {
    margin-bottom: 2rem;
    align-items: center;
  } */
  
  .wrapper-grid {
    display: grid;
    grid-template-columns: minmax(300px, 1fr);
    grid-gap: 2rem;
    justify-content: center;
    padding: 1rem;
  }
  
  .container {
    overflow: hidden;
    box-shadow: 0px 2px 8px 0px grey;
    background-color: white;
    text-align: center;
    border-radius: 1rem;
    position: relative;
    padding: 0%;
  }
  
  h4 {
    color: honeydew;
  }
  
  .card-content {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 1rem;
    background-color: #fafafa;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    text-align: start;
  }
  
  .employee-type {
    font-size: 1.5rem;
  }
  
  @media screen and (min-width: 500px) {
    .wrapper-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media screen and (min-width: 760px) {
    .wrapper-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  `;

module.exports = renderedCss;
