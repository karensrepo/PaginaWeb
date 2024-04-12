import React from 'react';
import Carousel from '../components/Carousel';
import Gallery from '../components/Gallery';
import Menu from '../components/Menu';
import './styles/Home.scss';
import Pedidos from '../components/Pedidos';

const Home = () => {
    return (
        <main className="Home">
            <section className="carousel__section">
                <Carousel />
            </section>
            <Menu/>
            <Pedidos/>       
            <section className="gallery__section">
                <h3>Somos Natural </h3>
                <Gallery />
            </section>
        </main>
    )
}

export default Home
