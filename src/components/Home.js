import "./styles.css"
import desktop from "./images/image-product-desktop.jpg"
import mobile from "./images/image-product-mobile.jpg"
import cart from "./images/cart.png"

function Home() {

  return (
  <div className="container">
    <div className="image">
    
    </div>
    <div className="text">
      <p>P E R F U M E</p>
      <p className="title">Gabrielle Essence Eau De Parfum</p>
      <p className="paragraph">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL</p>
      <div><p className="price">$149.99 <span>$169.99</span></p></div>
      <div className="button"><img src={cart} width="15px" height={"15px"} style={{color: "white"}} alt="cart image"/><p>Add to Cart</p></div>
    </div>

    <style>{`
      @media (min-width: 738px) {
        .image {
          background-image: url(${desktop});
          background-size: cover;
          border-top-left-radius: 10px;
          border-bottom-left-radius: 10px;
        }
      }
      @media (max-width: 738px) {
        .image {
          background-image: url(${mobile});
          background-size: cover;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
        }
    `}</style>
  </div>)
}

export default Home;