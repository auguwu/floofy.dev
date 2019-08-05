import React from 'react';
import '../stylesheets/style.scss';

export default class Hero extends React.Component {
    render() {
        return (
            <section className="hero is-primary is-fullheight">
                <div className="hero-head">
                    <nav className="navbar" role="navigation">
                        <div class="navbar-brand cursive-text">
                            <img className="avatar-small" src="https://augu.dev/images/auguwu.jpg" />
                            August
                        </div>
                        <span className="navbar-burder burget" data-target="navbarMenuHero">
                            <span />
                            <span />
                            <span />
                        </span>
                        <div id="navbarMenuHero" className="navbar-menu">
                            <div class="navbar-start">
                                <a className="navbar-item is-active">Home</a>
                            </div>
                            <div className="navbar-end">
                                <span className="navbar-item">
                                    <a className="button is-github is-inverted" href="https://github.com/auguwu">
                                        <span className="icon">
                                            <i className="fab fa-github" />
                                            <span>GitHub</span>
                                        </span>
                                    </a>
                                    <a className="button is-discord is-inverted" href="">
                                        <span className="icon">
                                            <i className="fas fa-discord" />
                                            <span>Discord</span>
                                        </span>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="hero-body">
                    <div className="container">
                        <img src="https://augu.dev/images/auguwu.jpg" className="avatar-full" />
                        <h1 className="title">August (Chris)</h1>
                        <h2 className="subtitle">Fullstack developer based in the United States</h2>
                    </div>
                </div>
            </section>
        );
    }
}