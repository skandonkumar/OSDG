import React, { Component } from 'react';
import '../CSS/ParisToIstanbul.css';
import ParisToIstanbulLogo from './logos/ParisToIstanbullogoComponent';
import ParisToIstanbulBookCover from '../resources/ParisToIstanbul/ParisToIstanbulBookCover.png'
import ParisToIstanbulBookCoverRight from '../resources/ParisToIstanbul/BookCoverText.jpg'
import ParisToIstanbulCoverPic from '../resources/ParisToIstanbul/ParisToIstanbulSection2CoverPic.jpg';
import ParisToIstanbulSection3Img1 from '../resources/ParisToIstanbul/Section3-img1.jpg'
import radioImage from '../resources/radio-media.png';
import AnthalogicaInterviewPic from '../resources/Anthologica-interview-pic.jpg';
import teamPic from '../resources/team-pic.jpg';


class ParisToIstanbul extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <ParisToIstanbulLogo/>
                <hr style = {{maxWidth : "100vw", marginBlockEnd: "2em", marginBlockStart: "0em", visibility : "hidden"}}></hr>

                <div id = "page-container" className = "container-fluid" onClick = {this.hideSideDrawer}>
                    <div className="Section1">
                        <div id="ParisToIstanbul-Section1-left" style = {{textAlign : "center", borderRight : "5px solid rgb(222, 225, 230)"}}>
                                <figure>
                                    <img src={ParisToIstanbulBookCover} id = "ParisToIstanbul-book-cover" style = {{width : "100%", height : "100vh"}}/>
                                </figure>
                                
                        </div>

                        <div id="ParisToIstanbul-Section1-right" style = {{textAlign : "center", borderLeft : "1px solid rgb(222, 225, 230)"}}>
                                <figure>
                                    <img src={ParisToIstanbulBookCoverRight} id = "ParisToIstanbul-book-cover-text" style = {{width : "100%", height : "100vh"}}/>
                                    <figcaption style = {{fontFamily : "Papyrus", fontSize : "17px", paddingTop : "5px", wordSpacing :"2px", textAlign : "left"}}>Urbana Magellan  <span style = {{float : "right", paddingRight : "20px"}}>image anon / osdg (c) mmxx </span></figcaption>
                                </figure>
                        </div>
                    </div>

                    <hr style = {{maxWidth : "100%", marginBlockEnd: "5px", marginBlockStart: "0em", backgroundColor : "rgb(222, 225, 230)"}}></hr>

                    <div className="Section2">
                        <div id="ParisToIstanbul-Section2-pic">
                                <img src={ParisToIstanbulCoverPic} id = "ParisToIstanbul-cover-pic" style = {{width : "100%", height : "auto"}}/>
                        </div>
                    </div>

                    <hr style = {{maxWidth : "100%", marginBlockEnd: "20px", marginBlockStart: "0em", backgroundColor : "rgb(222, 225, 230)"}}></hr>
                


                    <div className="Section3" style = {{marginTop : "0px"}}>
                        <div id="ParisToIstanbul-section3-image">
                            <img src={ParisToIstanbulSection3Img1} id = "ParisToIstanbul-section3-pic1" style = {{width : "100%", height : "100vh"}}/>
                        </div>
                        <div id="ParisToIstanbul-book-text">
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", paddingTop : "50px"}}><u>Author Notes </u></p>
                            <p className="lead" style = {{textAlign : "justify", textIndent : "20px"}}>‘Paris to Istanbul’ is a two-act stage play set in present modern day Istanbul and Paris. The story of Urbana Magellan, a young actress-artist, Urbana finds herself caught in the dilemma facing many women in Turkey and around the world, and that is the seemingly unending struggle to maintain fundamental human rights in the face of typically male-led, faith-based societies. </p>
                            <p className="lead" style = {{textAlign : "justify", textIndent : "20px"}}>Act I opens with Urbana alone in her apartment in Istanbul rehearsing ‘Istanbul to Paris’, a fanciful, dramatic play she has written invoking the memory of Mustafa Kemal Ataturk (founder and first President of modern secular Turkey) as a means to call attention to and raise money for the plight of her journalist father and lover who are both imprisoned, charged with violating State rules on free speech. Act II is set in Paris.</p>
                            <p className="lead" style = {{textAlign : "justify", textIndent : "20px"}}>The setting on the stage proper is stylish and minimalist; the focus on the actor and the words, and the story Urbana is telling and rehearsing. Aided in the staging by modern social media - thoughts, words, scenes, sounds, and voices are introduced and imposed onto screens and the stage in the same way modern life is often soaked in the visual image. In any case, what one sees and hears is exactly what one would expect to see and hear if they were a beautiful young stage actress living and working in the metropolises that are modern and ancient Istanbul and Paris.</p>
                            <p className="lead" style = {{textAlign : "center", fontWeight : "600", paddingTop :"20px", marginBottom : "0px"}} >~ / ~ </p>

                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", paddingTop : "50px"}}><u>Cast </u></p>
                            <p className="lead" style = {{textAlign : "justify", textIndent : "20px"}}>URBANA MAGELLAN –   actress-artist </p>
                            <p className="lead" style = {{textAlign : "justify", textIndent : "20px"}}>AYSA KARADAM – Urbana’s lifetime best friend; wife of Yaram Kardam. (voice only)</p>
                            <p className="lead" style = {{textAlign : "justify", textIndent : "20px"}}>YARAM KARADAM – Chief, Turkish State Security; husband of Aysa Karadam ( voice only )</p>
                            <p className="lead" style = {{textAlign : "justify", textIndent : "20px"}}>MEHMET NERGIE – Parisian theatre director ( voice only )</p>
                            <p className="lead" style = {{textAlign : "justify", textIndent : "20px"}}>JACQUES DAVID MAGEN ( J. D. ) – Human rights attorney; former lover of Urbana. </p>
                            <p className="lead" style = {{textAlign : "justify", textIndent : "20px"}}>Police Officers, Judges, Bailiffs, Protestors, and assorted historical personages  (voice / image )</p>
                            <p className="lead" style = {{textAlign : "center", fontWeight : "600", paddingTop :"20px", marginBottom : "0px"}} >♛</p>


                        </div>
                    </div>

                    <hr style = {{maxWidth : "100%", marginBlockEnd: "20px", marginBlockStart: "0em", visibility : "hidden"}}></hr>


                    <div className="Section4">
                        <div id = "section4-video" style = {{paddingTop: "30px"}}>
                            <p className="lead" style = {{textAlign : "center",letterSpacing : "2px",fontSize : "22px", fontWeight : "bolder", fontFamily : "Papyrus"}} > ~ ODYSSEY STUDIO daGAMA ~ </p>
                            <p className="lead" style = {{textAlign : "center",letterSpacing : "2px",fontSize : "22px", fontWeight : "bolder", fontFamily : "Papyrus"}} >' Who We Are  &amp;  Where We Are Going ' </p>
                        

                            <figure id="sample-video" style = {{textAlign : "center"}}>
                                <iframe width="100%" height="550vh" src="https://www.youtube.com/embed/4IRYpjj2_gw" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>                        
                                <figcaption style = {{position : "relative",fontFamily : "Papyrus", fontSize : "17px", paddingTop : "5px",textAlign : "left", wordSpacing :"2px"}}>Giorgio's Garden, Isle of Crete </figcaption>
                            </figure>

                            <hr style = {{maxWidth : "100%", marginBlockEnd: "0em", marginBlockStart: "2em", backgroundColor : "rgb(222, 225, 230)", width : "30%"}}></hr>
                            <p className="lead" style = {{textAlign : "center", fontWeight : "600", paddingTop :"20px", marginBottom : "0px", paddingBottom :"40px"}} >~ Ω ~</p>
                        </div>
                    </div>

                    <hr style = {{maxWidth : "100%", marginBlockEnd: "20px", marginBlockStart: "0em", visibility : "hidden"}}></hr>

                    <div className="Section5">
                        <div id="anthalogica-interview-header">
                                <img src={AnthalogicaInterviewPic} id = "Anthalogica-text-header" style = {{width : "100%", height : "30vw"}}/>
                                <figcaption style = {{textAlign : "left", fontFamily : "Papyrus", fontSize : "17px", paddingTop : "5px",paddingLeft : "10px", wordSpacing :"2px"}}>Hersonissos, Isle of Crete <span style = {{float : "right", paddingRight : "20px"}}>image - osdg (c) mmxx</span></figcaption>
                        </div>
                        {/* <hr style = {{maxWidth : "100%", marginBlockEnd: "0em", marginBlockStart: "0em", height : "1px", backgroundColor : "black"}}></hr> */}

                        <div id="anthologica-interview-text">
                            <h3 style = {{fontFamily : "Papyrus", fontWeight : "bold", paddingTop : "20px",  textAlign : "center" ,wordSpacing : "5px"}}>' What Makes A Great Work of Art Great? '</h3>
                            <h5 style = {{fontFamily : "Papyrus", paddingTop : "50px", fontWeight : "bolder", textAlign : "center", wordSpacing : "5px", fontSize : "24px"}}> - Five Easy Questions -</h5>
                            <h6 style = {{fontFamily : "Papyrus", paddingTop : "50px", fontWeight : "200", textAlign : "center"}}>Interview by OSDG dramaturge, Hristina Lazic</h6>
                            <hr style = {{maxWidth : "100%", marginBlockEnd: "4em", marginBlockStart: "4em", backgroundColor : "rgb(222, 225, 230)", width : "30%"}}></hr>
                        
                            <p className="lead" >Emma Straub’s novel All Adults Here is out now from Riverhead. We asked her about late-night writing, the music that she can’t live without, and the joy of reading the classics for the first time. </p>
                            <p className="lead" style = {{textAlign : "left"}}>*</p>
                            <p className="lead" style = {{textAlign : "left", fontWeight : "bolder"}}>Who do you most wish would read your book?</p>
                            <p className="lead" style = {{textAlign : "left"}}>Do they read it and like it? Or do they just read it? That’s a hard question to answer, because I’ve already been gobsmacked by the people who have said nice things to me about it. Ann Patchett—my hero, my sister—is a toughie, and one of the things that I love about her is that she gives it to you straight. She is not nice just to be nice, and when she told me she loved the book, that meant the world to me. But okay, I’m avoiding this question, I’m going to try to just answer it honestly: If I knew they would enjoy it at least to some degree, here is a collection of geniuses I would love to read it: Ina Garten, Catherine Keener, Jenna Wortham and Welsey Morris, Parul Sehgal, Emmylou Harris, Lily Tomlin, Stevie Nicks, Barack Obama… I could do this all day, come to think of it.</p>
                            <p className="lead" style = {{textAlign : "left", fontWeight : "bolder"}}>What time of day do you write?</p>
                            <p className="lead" style = {{textAlign : "left"}}>Right now, I’m only able to write—by which I mean answer emails and such—after my children are asleep. I know a lot of people write at night, and I know a lot of stay-at-home parents have written gorgeous novels in those precious hours, but I am so fully exhausted at 7 pm that I can barely respond to text messages. Pre-quarantine, I wrote two to three days a week between school drop-off and pick-up, so, say, between 9 am-2:45 pm. It’s not a lot, but it’s enough, and I miss it. I know everything will be different when we’re through this, and one of the ways that it will be different for me is that I will never again take a moment of childcare for granted. Not that I’ll be working every second! Taking a morning off work to go to the movies—god, what a truly blissful thought, can you imagine how restorative that would be?</p>
                            <p className="lead" style = {{textAlign : "left", fontWeight : "bolder"}}>Which non-literary piece of culture—film, tv show, painting, song—could you not imagine your life without?</p>
                            <p className="lead" style = {{textAlign : "left"}}>The Magnetic Fields have been a part of my life for the last twenty years, a neat half of my life. I just wrote a long essay about my friendship with Stephin Merritt, the songwriter and musician, and so they are on my mind, but I think that this would be my answer anyway. They are the band whose catalogue I know best—backwards and forwards, every single record—and who I have seen live the most, by an enormous margin. There  are other things that I have loved so deeply that they are a part of my neural pathways forever—The New Kids on the Block, Beverly Hills, 90210, high school movies from Rebel Without a Cause to Lara Jean, Pet Sounds, What’s the 411?, Lynda Barry’s cartoons—but I think on a daily basis, it’s The Magnetic Fields I can’t imagine my life without. I sing one of their songs to my children every night.</p>
                            <p className="lead" style = {{textAlign : "left", fontWeight : "bolder"}}>What was the first book you fell in love with?</p>
                            <p className="lead" style = {{textAlign : "left"}}>Ferdinand was the first book I can remember seeing myself in—I’d still rather sit under a tree and smell flowers. Nancy Drew books, The Babysitter’s Club—those books that I could inhale, I loved those. When I got to 7th, 8th, 9th grade, though, whew, that’s when I started reading poetry. Any poetry I could find in my house, which was a lot. Edna St. Vincent Millay—god, isn’t it amazing that she’s one of the poets that is foisted on children first? If you haven’t, you must read Savage Beauty, her biography. Frank O’Hara, Allen Ginsberg! That put a spring in my hormonal little heart. But what’s wonderful about life, of course, and being a reader, is that there are always more books to set your heart aflame.</p>
                            <p className="lead" style = {{textAlign : "left", fontWeight : "bolder"}}>Name a classic you feel guilty about never having read?</p>
                            <p className="lead" style = {{textAlign : "left"}}>There are plenty of things to feel guilty about in life—yelling at your kid, not putting a shopping cart back in the parking lot, sleeping with your best friend’s spouse—why put that on reading? If I could absolve readers of one thing, it would be this—feeling guilt about books that they like, and books that they don’t. Honestly, the only feeling that people should have about books they haven’t read yet is HOPE! There are so many classics I haven’t read—A Hundred Years of Solitude, Moby Dick, A Tree Grows in Brooklyn—and lucky me. I think the idea that you’re supposed to have already read everything—at what age? 20?—is not only unrealistic, but also kind of dopey! I was a dope at 20. I was a dope who read Anna Karenina, sure, but when I reread Anna Karenina at age 35, I got a lot more out of it.
I think that I’m getting better as a reader as I age, and so while I think there are certain books that I loved as a teen—the novels of Jack Kerouac, say—that I don’t think I would enjoy so heartily now. But as a 15-year-old? Zing! Just like every book is not for every person, and every reader is not for every book, I think different books are the right book at different moments for each of us. So ditch the pressure! Ditch the guilt! Embrace excitement, and glee, about all the books you still have to read for the very first time.</p>
                            <p className="lead" style = {{textAlign : "left", fontWeight : "bolder"}}>Is there a book you wish you had written?</p>
                            <p className="lead" style = {{textAlign : "left"}}>Jennifer Egan’s A Visit from the Goon Squad. Man oh man, I love that book. Formally kooky, emotionally true, hilarious, wild. I’m going to read that again once I finish the book I’m reading now. What a truly, truly cool-ass book. I think it’s my choice because it has enough in common with my books—lots of voices, lots of characters, love over time—to feel like it’s within the realm of almost almost almost possibility, that if I got hit by a bolt of lightning, I could do it. (I couldn’t, of course, but a girl can dream.) And Pride and Prejudice. Because it’s fucking Pride and Prejudice.</p>
                            <hr style = {{maxWidth : "100%", marginBlockEnd: "0em", marginBlockStart: "4em", backgroundColor : "rgb(222, 225, 230)", width : "30%"}}></hr>
                            <p className="lead" style = {{textAlign : "center", fontWeight : "600", paddingTop :"20px", marginBottom : "0px", paddingBottom :"40px"}} >~ Ω ~</p>
                        </div>
                    </div>

                    <hr style = {{maxWidth : "100%", marginBlockEnd: "20px", marginBlockStart: "0em", visibility : "hidden"}}></hr>


                    <div className="Section6">
                        <div id="Anthalogica-interview-header">
                                <img src={radioImage} id = "Anthalogica-text-header" style = {{width : "100%", height : "30vw"}}/>
                        </div>
                        <hr style = {{maxWidth : "100%", marginBlockEnd: "0em", marginBlockStart: "200em", backgroundColor : "rgb(222, 225, 230)", width : "30%"}}></hr>
                        <p className="lead" style = {{textAlign : "center", fontWeight : "600", paddingTop :"20px", marginBottom : "0px", paddingBottom :"40px"}} >~ Ω ~</p>
                        {/* <hr style = {{maxWidth : "100%", marginBlockEnd: "0em", marginBlockStart: "0em", height : "1px", backgroundColor : "black"}}></hr> */}
                    </div>

                    <hr style = {{maxWidth : "100%", marginBlockEnd: "20px", marginBlockStart: "0em", visibility : "hidden"}}></hr>


                    <div className="Section7">
                        <div id="Anthalogica-interview-header">
                                <img src={teamPic} id = "Anthalogica-text-header" style = {{width : "100%", height : "30vw"}}/>
                        </div>
                        <h2 style = {{fontFamily : "Papyrus", fontWeight : "bold", paddingTop : "40px", wordSpacing : "10px"}}>' PEOPLE ~ PLACES ~ PROJECTS '</h2>

                        <hr style = {{maxWidth : "100%", marginBlockEnd: "0em", marginBlockStart: "200em", backgroundColor : "rgb(222, 225, 230)", width : "30%"}}></hr>
                        <p className="lead" style = {{textAlign : "center", fontWeight : "600", paddingTop :"20px", marginBottom : "0px", paddingBottom :"40px"}} >~ Ω ~</p>
                        {/* <hr style = {{maxWidth : "100%", marginBlockEnd: "0em", marginBlockStart: "0em", height : "1px", backgroundColor : "black"}}></hr> */}
                    </div>
                    
 
                </div>

                <hr style = {{maxWidth : "100%", marginBlockEnd: "20px", marginBlockStart: "0em", backgroundColor : "rgb(222, 225, 230)"}}></hr>                         
            </React.Fragment>

        );
    }
}
 
export default ParisToIstanbul;