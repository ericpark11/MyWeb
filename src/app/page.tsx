'use client';
import React, { useState,useEffect, useRef, createContext } from 'react';
import Mailer from "./component/mailer";

const ThemeContext = createContext(null);

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
    const [theme, setTheme] = useState("light");

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
                        <p>Hello! My name is Eric Park. I am a second-year Computer Science student at McMaster University. I am expected to graduate in 2026 with a co-op degree in B.A.Sc. Degree in Computer Science. I started my journey in Computer Science not too long ago in grade 11 in high school course. I got very into it thanks to my very inspirational and well respected Computer Science teacher from Leo Hayes High School. I got introduced to CS through Visual Basics and then Java the year after. In my academic years in McMaster University, I was able to learn languages such as Python, Haskell, Elm, Bash and got able to learn little bit of Git/GitHub. Outside of school contents, I have learned LaTex, TypeScript, HTML, CSS.  </p>

                        <div className="row">
                            <div className="my-col">
                                <h2>School</h2>
                                <p>I am proud to say that I have been part of the Marauders since 2023 when I decided to move out from my hometown in New Brunswick to pursue my career as a Computer Scientist/Software Engineer at McMaster. It’s been a remarkable few semesters so far, and I cannot wait to learn and make more memories in this incredible community.</p>
                            </div>
                            <div className="my-col">
                                <h2>Sports</h2>
                                <p>Throughout my years, sports have always been a big part of me. From really any sports I will always be part of. The most recent sports team I participated in was my high school varsity soccer team. I like to push myself to my limits. My athletic years have taught me how to communicate with others and work in a team environment. </p>
                            </div>
                            {/* for three thing uncomment this  */}
                            {/* <div className="my-col">
                                <h2>Schools</h2>
                                <p>I go to McMaster</p>
                            </div> */} 
                        </div>
                    </section>
                    <section className="like" id="like">
                        <h1>What do I like?</h1>
                        <p>when I like something I like it alot</p>

                        <div className="row">
                            <div className="like-col">
                                <img src="Images/cars.jpg" />
                                <h3>Cars</h3>
                                <p> I have always been fascinated with the car world since I was young. My dream was to be a car designer, but my love for being a designer died down when I discovered the love of solving problems and coding instead of using my creative thinking skills. Designing this website brought me creative thinking skills I never thought I would use in this industry. It even made me fall more in love with front-end development!</p>
                            </div>
                            <div className="like-col">
                                <img src="Images/coding.jpg" />
                                <h3>Coding</h3>
                                <p> I love problem-solving. It satisfies me after I solve such problems. Coding also always allows me to innovate and impact around me in various ways. The logical thinking that it take to be a good programmer makes me excel in this sector. I cannot wait to take this to another level where I can impact the community around me to help them with their problems as a computer scientist. </p>
                            </div>
                            <div className="like-col">
                            <iframe src="https://open.spotify.com/embed/track/0FyRrCNUbl5Gy5HOuJW0aX?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                                <h3>Music</h3>
                                <p> I think everybody can agree on music. I love listening to music in cars. One of my favourite things is driving around the city with my friends. It has the power to evoke a wide range of emotions that can be a source of joy, comfort, nostalgia, or inspiration. Like my current favourite song above, your favourite music may be linked to specific memories or experiences, creating a solid emotional connection. </p>
                            </div>
                        </div>
                    </section>

                    <section className="achi" id="achi">
                        <h1>My Achievements</h1>
                        <p>I have been fortunate enough to receive several scholarships in my academic years; I have received the <i>Nashwaaksis Lion’s Club</i>, the <i>Coca-Cola Prize</i>, and <i>McMaster’s Award of Excellence</i>. I also have received Lion’s Principal Gold for achieving one of the highest grades in my class. I am truly humbled to say that I am continuing with a high GPA throughout my University days as well.  </p>

                        <div className="row">
                            <div className="achi-col">
                                <img src="Images/Coca-Cola.jpg" />
                                <div className="layer">
                                    <h3>Coca-Cola Prize</h3>
                                </div>
                            </div>
                            <div className="achi-col">
                                <img src="Images/Nash.jpg" />
                                <div className="layer">
                                    <h3>Nashwaaksis Lion’s Club</h3>
                                </div>
                            </div>
                            <div className="achi-col">
                                <img src="Images/Excellence.jpg" />
                                <div className="layer">
                                    <h3>McMaster’s Award of Excellence</h3>
                                </div>
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
                            <Mailer/>
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






