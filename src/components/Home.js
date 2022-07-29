import React, {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {ReactComponent as ArrowDown} from '../assets/svg/arrow-down.svg'
import anime from 'animejs/lib/anime.es'

const Home = () => {
    useEffect(() => {
        const arrowDown = document.getElementById("arrowDown")
        const dot1 = document.getElementById("dot1")
        const dot2 = document.getElementById("dot2")
        const dot3 = document.getElementById("dot3")
        AOS.init()
        AOS.refresh()
        anime({
            targets: arrowDown,
            keyframes: [
                {translateY: -20},
                {translateY: 0}
            ],
            duration: 500,
            easing: 'easeInOutSine',
            loop: true
        })
        const tl = anime.timeline({
            easing: 'easeInOutSine',
            duration: 500,
            loop: true

        });

        tl
            .add({
                targets: dot1,
                keyframes:[
                    {translateY:-15},
                    {translateY: 0}
                ]

            })
            .add({
                targets: dot2,
                keyframes:[
                    {translateY:-15},
                    {translateY: 0}
                ]
            }) // relative offset
            .add({
                targets: dot3,
                keyframes:[
                    {translateY:-15},
                    {translateY: 0}
                ]
            }); // absolute offset
    }, [])
    return (
        <>

            <div className={"container d-flex flex-column gap-5"} id={'home'}>
                <div className="container">
                    <div className="container" style={{height: '250px'}}>
                        <h1 className={'display-2'}>Welcome on my website</h1>
                    </div>
                    <div className="container d-flex align-items-center pb-5">
                        <ArrowDown height={"300"} width={"200"} id={"arrowDown"}/>
                        <h1 className="display-3">Scroll down</h1>
                    </div>
                </div>
                <div className="container" style={{height:"300px"}} data-aos={'fade-left'} data-aos-duratio={"1000"}>
                    <hr className={'border border-5'}/>
                </div>
                <div className="container d-flex flex-column gap-5" id={'whoAmI'}>
                    <div data-aos="fade-right" data-aos-duration={'1000'} className={"container pt-5"}
                         style={{height: "175px"}}>
                        <h1 className="display-3">
                            Who am I ?
                        </h1>
                    </div>
                    <div className="container">
                        <p className={"fs-2 text"} data-aos={"fade-left"}>I'm a french computer science student in
                            second year of college</p>
                        <p className={"fs-2 text mt-2"} data-aos={"fade-left"}>I created this site to show you my
                            projects and talk about myself.</p>
                        <p className={"fs-2 text mt-2"} data-aos={"fade-left"}>I love the Japanese culture especially
                            animes and mangas. I would Like to travel there.</p>
                    </div>
                </div>
                <div className="container" style={{height:"300px"}} data-aos={'fade-left'} data-aos-duratio={"1000"}>
                    <hr className={'border border-5'}/>
                </div>
                <div className="container d-flex flex-column gap-5" id={"projects"}>
                    <div className="container" data-aos={'fade-right'} data-aos-duration={'1000'}>
                        <h1 className="display-3" data-aos={'fade-right'}>
                            Projects
                        </h1>
                    </div>
                    <div className="container d-flex flex-column gap-5" id={"finished-projects"}>
                        <div className="container">
                            <h1 className="display-5" data-aos={'fade-right'} data-aos-duration={'1000'}>
                                Finished
                            </h1>
                        </div>
                        <div className="container" data-aos={'fade-left'} data-aos-duration={'1000'}>
                            <p className={"fs-2 text"}> Currently none, but working on it look the next section <a
                                href="#wip-project">Work in progress</a></p>
                        </div>

                    </div>
                    <div className="container d-flex flex-column gap-5" id={"wip-projects"}>
                        <div className="container d-flex">
                            <h1 className="display-5 mb-0 mt-5" data-aos={'fade-right'} data-aos-duration={'1000'}>
                                Work in progress
                            </h1>
                            <div className="container mt-5" data-aos={'fade-left'} data-aos-duration={'1000'} style={{
                                bottom: '10px',
                                marginLeft: "10px",
                                width: "60px",
                                height: "60px",
                                position: "relative",
                            }}>
                                <div id="dot1" style={{
                                    left: "0",
                                    width: "12px",
                                    height: "12px",
                                    position: "absolute",
                                    bottom: "0",
                                    background: "gray",
                                    borderRadius: "13px"
                                }}></div>
                                <div id="dot2" style={{
                                    left: "calc(50% - 13px)",
                                    width: "12px",
                                    height: "12px",
                                    position: "absolute",
                                    bottom: "0",
                                    background: "gray",
                                    borderRadius: "13px"
                                }}></div>
                                <div id="dot3" style={{
                                    right: "14px",
                                    width: "12px",
                                    height: "12px",
                                    position: "absolute",
                                    bottom: "0",
                                    background: "gray",
                                    borderRadius: "13px"
                                }}></div>
                            </div>

                        </div>
                        <div className="container mt-5" style={{height: "300px"}}>
                            <p className={"fs-2 text"} data-aos={'fade-right'} data-aos-duration={'1000'}> Currently
                                working on :</p>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item fs-4 text" data-aos={'fade-left'}
                                    data-aos-duration={'1000'}>A discord bot for my friends server
                                </li>
                                <li className="list-group-item fs-4 text" data-aos={'fade-left'}
                                    data-aos-duration={'1000'}>This website I will maitain it upgraded
                                </li>
                                <li className="list-group-item fs-4 text" data-aos={'fade-left'}
                                    data-aos-duration={'1000'}>A secret project... (at least for now)
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>
                <div className="container" style={{height:"300px"}} data-aos={'fade-left'} data-aos-duratio={"1000"}>
                    <hr className={'border border-5'}/>
                </div>
                <div className="container d-flex flex-column gap-5" id={'contact'}>
                    <div className="container" data-aos={'fade-right'} data-aos-duration={'1000'}>
                        <h1 className="display-3">
                            How to contact me ?
                        </h1>
                    </div>
                    <div className="container"style={{height:"250px"}}>
                        <table className="table table-striped">
                            <tbody>
                            <tr>
                                <th>Discord</th>
                                <td>Grimnir#5159</td>

                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>


            </div>
        </>

    )
}

export default Home