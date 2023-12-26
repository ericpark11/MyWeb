'use client';
import React, { useState,useEffect, useRef, createContext } from 'react';
import Mailer from "./component/mailer";

export const ThemeContext = createContext(null);

export default function Home() {
    //click Event
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };
    
    //outside the SideBar
    let menuRef = useRef<HTMLUListElement>(null);

    useEffect(() =>{
        let handler = (e : MouseEvent): void =>{
            if(menuRef.current && !menuRef.current.contains(e.target as Node)){
                setIsOpen(false);
                console.log(menuRef.current);
            }
        };
        document.addEventListener("mousedown", handler);

        return() =>{
            document.removeEventListener("mousedown", handler)
        }
    });

    //Light Mode or Dark Mode
    const [theme, setTheme] = useState("dark");

    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
    };
    return (
        <ThemeContext.Provider value={{theme, toggleTheme} as any}>
            <div className="App" id={theme}>
                {/* <header>
                    <title>Eric Park</title>
                    <link rel="shortcut icon" type="x-icon" href="Images/logo.png"></link>
                    <link rel='stylesheet' href="style.css"></link>
                </header> */}
                <main>
                    
                    <section className="header" id="header">
                        <nav>
                            <div className="navLinks">
                                <ul className="sidebar" ref={menuRef} style={isOpen ? { display: 'flex' } : { display: 'none' }} >
                                    <li><a href="#header">Home</a></li>
                                    <li><a href="#info">About Me</a></li>
                                    <li><a href="#achi">Achievements</a></li>
                                    <li><a href="#like">What do I Like?</a></li>
                                    <li><a href="#talk">Connect</a></li>
                                </ul>
                            
                                <ul>
                                    <li onClick={toggleTheme}><img src="Images/logo.png"></img><a href="#header"></a></li>
                                    <li className="hideOnMobile"><a href="#info">About Me</a></li>
                                    <li className="hideOnMobile"><a href="#achi">Achievements</a></li>
                                    <li className="hideOnMobile"><a href="#like">What do I Like?</a></li>
                                    <li className="hideOnMobile"><a href="#talk">Connect</a></li>
                                    <li className="menuButton" onClick={toggle}><a href="#"><svg xmlns="http://www.w3.org/2000/svg" fill="white" height="26" viewBox="0 -960 960 960" width="26"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg></a></li>
                                </ul>
                            </div>   
                        </nav>
                        <div className="banner">
                            <h1>ERIC PARK</h1>
                        </div>
                    </section>
                

                    <section className="info" id="info" >
                        <h1>About Me</h1>
                        <p>Hello! My name is Eric Park. I am a second-year Computer Science student at McMaster University. I am expected to graduate in 2026 with a co-op degree in B.A.Sc. Degree in Computer Science. I started my journey in Computer Science not too long ago in grade 11 in high school course. I got very into it thanks to my very inspirational and well respected Computer Science teacher from Leo Hayes High School. I got introduced to CS through Visual Basics and then Java the year after. In my academic years in McMaster University, I was able to learn languages such as Python, Haskell, Elm, Bash and got able to learn little bit of Git/GitHub. </p>

                        <div className="row">
                            <div className="my-col">
                                <h3>Schools</h3>
                                <p>I go to McMaster</p>
                            </div>
                            <div className="my-col">
                                <h3>Schools</h3>
                                <p>I go to McMaster</p>
                            </div>
                            <div className="my-col">
                                <h3>Schools</h3>
                                <p>I go to McMaster</p>
                            </div>
                        </div>
                    </section>

                    <section className="achi" id="achi">
                        <h1>My Achievements</h1>
                        <p>Scholarships</p>

                        <div className="row">
                            <div className="achi-col">
                                <img src="Images/grad.jpg" />
                                <div className="layer">
                                    <h3>Multiple  Scholarships</h3>
                                </div>
                            </div>
                            <div className="achi-col">
                                <img src="Images/soccer.jpg" />
                                <div className="layer">
                                    <h3>Student Athlete</h3>
                                </div>
                            </div>
                            <div className="achi-col">
                                <img src="Images/achi.jpg" />
                                <div className="layer">
                                    <h3>High Achiever</h3>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="like" id="like">
                        <h1>What do I like?</h1>
                        <p>when I like something I like it alot</p>

                        <div className="row">
                            <div className="like-col">
                                <img src="Images/achi.jpg" />
                                <h3>cars</h3>
                                <p> I like it because</p>
                            </div>
                            <div className="like-col">
                                <img src="Images/achi.jpg" />
                                <h3>cars</h3>
                                <p> I like it because</p>
                            </div>
                            <div className="like-col">
                                <img src="Images/achi.jpg" />
                                <h3>cars</h3>
                                <p> I like it because</p>
                            </div>
                        </div>
                    </section>

                    <section className="talk" id="talk">
                        <hr />
                        <h1>Wanna Talk?</h1>


                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />
                        <div className="social-menu">
                            <a href="https://www.instagram.com/eric.park04?igshid=YzVkODRmOTdmMw%3D%3D&utm_source=qr" className="insta" target="_blank"><i className="fab fa-instagram"></i></a>
                            <a href="https://www.facebook.com/eric.park.5891?mibextid=LQQJ4d" className="fb" target="_blank"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://www.linkedin.com/in/eric-park-010665250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="lkdn" target="_blank"><i className="fab fa-linkedin"></i></a>
                            <a href="https://github.com/ericpark11" className="git" target="_blank"><i className="fab fa-github" ></i></a>
                            <a href="mailto:park.ericyc@icloud.com" className="mail"><i className="fas fa-mail-bulk"></i></a>
                        </div>

                        <div className="comment-box">
                            <Mailer />
                        </div>
                    </section>


                </main>

                <footer>
                    <p>Made By Eric Park</p>
                </footer>
            </div>
        </ThemeContext.Provider>
    )
}






