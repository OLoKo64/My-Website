import React from 'react';
import Footer from './components/footer';
import NavBar from './components/navbar';
import Pulse from 'react-reveal/Pulse';
import LivroLinux from './img/livroLinux.jpg'
import LivroSO from './img/livroSO.jpg'
import LivroGit from './img/livroGit.jpg'

function Recomendados() {
    return (
        <div className="clearfix">
            <div className="parallax parallax-livros">
                <NavBar />
                <div className="container-md">
                    <div className="nome">
                        <h1>Livros Recomendados</h1>
                    </div>
                    <Pulse>
                        <div className="tabela">
                            <table className="table rounded" style={{ backgroundColor: '#161616cc', color: 'lightgray' }}>
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col"></th>
                                        <th scope="col">Nome</th>
                                        <th scope="col">Descrição</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row" className="tabela-tx">1</th>
                                        <td className="tabela-tx"><img className="rec-imgs rounded" src={LivroLinux}></img></td>
                                        <td className="tabela-tx">Linux Basics For Hackers</td>
                                        <td className="tabela-tx">Um livro bem conhecido na comunidade Linux, ele aborda muitos comandos
                                        básicos para o dia a dia no Linux.
                            </td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="tabela-tx">2</th>
                                        <td className="tabela-tx"><img className="rec-imgs rounded" src={LivroSO}></img></td>
                                        <td className="tabela-tx">Sistemas Operacionais Modernos - Tanenbaum</td>
                                        <td className="tabela-tx">Um clássico da Ciência da Computação, trata de vários sistemas, UNIX,
                                        Windows e Android.
                            </td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="tabela-tx">3</th>
                                        <td className="tabela-tx"><img className="rec-imgs rounded" src={LivroGit}></img></td>
                                        <td className="tabela-tx">Pro Git</td>
                                        <td className="tabela-tx">Um livro sobre uma das ferramentas mais utilizadas
                            na programação, o Git.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Pulse>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Recomendados;