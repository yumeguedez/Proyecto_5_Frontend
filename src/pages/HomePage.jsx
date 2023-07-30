import Header from "../components/Header";

const HomePage = () => {
  return (
    <>
      <Header title="Home Page" />
      <main className="row">
        <article className="col">
          <h1 className="text-center">Licores de la Sabana</h1>
          <h4 className="text-sm-start">Compra ya tus licores favoritos</h4>
        </article>
        <section className="row">
          <article className="col">
            <div id="carouselExampleIndicators" className="carousel slide">
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={0}
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                />
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={1}
                  aria-label="Slide 2"
                />
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={2}
                  aria-label="Slide 3"
                />
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="https://www.encuentraloenputumayo.com/wp-content/uploads/2018/06/Distribuidor-de-Licores-Villa-villagarzon-13.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://licoresdelasabana.com/wp-content/uploads/2021/04/licores-de-la-sabana.png"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://lh3.googleusercontent.com/p/AF1QipM3vuaqkbflYPapylJtEIhRAJPkB1WEJMmbxnt4=w1080-h608-p-k-no-v0"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <section className="row">
              <article className="col">
                <div>
                  <div id="list-example" className="list-group">
                    <a
                      className="list-group-item list-group-item-action"
                      href="#list-item-1"
                    >
                      Destinos
                    </a>
                    <a
                      className="list-group-item list-group-item-action"
                      href="#list-item-2"
                    >
                      Nuestros Productos
                    </a>
                    <a
                      className="list-group-item list-group-item-action"
                      href="#list-item-3"
                    >
                      Ubicación
                    </a>
                    <a
                      className="list-group-item list-group-item-action"
                      href="#list-item-4"
                    >
                      Rating
                    </a>
                  </div>
                  <div
                    data-bs-spy="scroll"
                    data-bs-target="#list-example"
                    data-bs-offset={0}
                    className="scrollspy-example"
                    tabIndex={0}
                  >
                    <h4 id="list-item-1">Destinos</h4>
                    <p>
                      Realizamos envíos a toda Colombia y tenemos envío gratis
                      para toda Bogota
                    </p>
                    <h4 id="list-item-2">Nuestros Productos</h4>
                    <p>
                      Tenemos disponibles Cervezas nacionales e importadas,
                      Vodka, Whiskey, Ron Nacional e importado, Ginebra,
                      Aguardiente Nacional e importado, Brandy, Crema de
                      Whiskey, Vinos Nacionales e importados Cocteles.
                    </p>
                    <h4 id="list-item-3">Ubicación</h4>
                    <p>Calle 64 D # 73-75 Bogota D.C., Colombia</p>
                  </div>
                </div>
              </article>
            </section>
          </article>
        </section>
      </main>
    </>
  );
};

export default HomePage;
