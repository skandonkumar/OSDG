import React, { Component } from 'react';
import '../CSS/Anthologica.css'
import AnthalogicaBookCover from '../resources/Anthologica-bookcover1.jpg';
import AnthalogicaBookText from '../resources/Anthalogica-book-text.png'
import AnthalogicaCoverPic from '../resources/Anthalogica-text-header-pic.jpg';
import radioImage from '../resources/radio-media.png';
import AnthalogicaLogo from './logos/AnthalogicalogoComponent';
import AnthalogicaInterviewPic from '../resources/Anthologica-interview-pic.jpg';
import teamPic from '../resources/team-pic.jpg';


class Anthologica extends Component {
    render() { 
        return (  
            <React.Fragment>
                <AnthalogicaLogo/>
                <hr style = {{maxWidth : "100vw", margin: "2em", marginBlockStart: "0em", visibility : "hidden"}}></hr>


                <div id = "page-container" className = "container-fluid" onClick = {this.hideSideDrawer}>
                    <div className="Section1">
                        <div id="Anthalogica-Section1-left" style = {{textAlign : "center", borderRight : "5px solid rgb(222, 225, 230)"}}>
                                <figure>
                                    <img src={AnthalogicaBookCover} id = "anthologica-book-cover" style = {{width : "100%", height : "100vh"}}/>
                                </figure>
                        </div>

                        <div id="Anthalogica-Section1-right" style = {{textAlign : "center"}}>
                                <figure>
                                    <img src={AnthalogicaBookText} id = "anthologica-book-cover-text" style = {{width : "100%", height : "100vh"}}/>
                                </figure>
                        </div>
                    </div>

                    <hr style = {{maxWidth : "100%", marginBlockEnd: "5px" , visibility : "hidden", marginBlockStart: "0em", backgroundColor : "rgb(222, 225, 230)"}}></hr>

                    <div className="Section2">
                        <div id="Anthalogica-Section2-pic">
                                <img src={AnthalogicaCoverPic} id = "anthologica-cover-pic" style = {{width : "100%", height : "auto"}}/>
                                <figcaption style = {{fontFamily : "Papyrus", fontSize : "17px", paddingTop : "5px",paddingLeft : "10px", wordSpacing :"2px"}}>Hersonissos, Isle of Crete <span style = {{float : "right", paddingRight : "20px"}}>image - osdg (c) mmxx</span></figcaption>
                        </div>
                    </div>

                    <hr style = {{maxWidth : "100%", marginBlockEnd: "2em" , visibility : "hidden", marginBlockStart: "0em", backgroundColor : "rgb(222, 225, 230)"}}></hr>


                    <div className="Section3" style = {{marginTop : "0px"}}>
                        <div id="anthologica-book-text">
                            <p className="lead" ><span style = {{fontWeight : "300", fontSize : "70px", paddingLeft : "20px", paddingRight : "10px"}}>H</span>ello. Thank-you for taking the time to visit with us.</p>
                            <p className="lead" style = {{textAlign : "justify"}}>Artist and social philosopher, I create for the stage, novel, and screen. </p>
                            <p className="lead" style = {{textAlign : "justify"}}>The primary theme of my works lie in promoting and protecting fundamental universal human rights, regardless of gender, age, race, faith, no faith, national origin or cultural identity – by means of secular democracy and genuine democratic capitalism.</p>
                            <p className="lead" style = {{textAlign : "justify"}}>I do this by utilizing the arts and letters, via my production studio, Odyssey Studio da Gama, and TOTM, ‘The One &amp; The Many’, a non-profit organization designed to facilitate the promotion and protection of these universal human rights issues.</p>
                            <p className="lead" style = {{textAlign : "justify"}}>Society. Economics. Government. – People. Money. Power.</p>
                            <p className="lead"> <span style = {{fontSize : "15px",fontWeight : "bold", fontFamily : "Papyrus", letterSpacing : "2px"}}>'ANTHOLOGICA'</span> is the name of my portfolio of artistic and literary works.</p>
                            <p className="lead" style = {{textAlign : "justify"}}>Anthologica. A word. A made-up word. The state of each of us as an anthological collection of ideas and stories. By birth’s peculiar destiny, I am artist and social philosopher. We may or may not know each other; that is unimportant. What is important is your having taking the time to peruse this anthology of a life fully-lived. For that, I thank you.</p>

                            <hr style = {{maxWidth : "100%", marginBlockEnd: "5em", marginBlockStart: "3em", backgroundColor : "rgb(222, 225, 230)", width : "30%"}}></hr>

                            <p className="lead" style = {{textAlign : "justify"}}><span style = {{fontWeight : "300", fontSize : "70px", paddingLeft : "20px", paddingRight : "10px"}}>C</span>hicago, Illinois. Winter, 1951. Male child, I was born to a female artist and male jazz trumpeter. Fate tends. With me and my older sister, Maddie, our huddled family emigrated south to New Orleans; better for my mother to attend Tulane art studies; my artisan father to find and play gigs in the French Quarter. Toddler knows nothing. Epigenetic memories of those moments are the subject of this anthology.</p>
                            <p className="lead" style = {{textAlign : "justify"}}>Fate often plays out on our parents. A young mother and father alchemize love's expectations. Dissonant parting, Mom takes we children’s charge. Seed sown, Dad withdraws to a mistily remembered shadow life. Mother attends art classes; fashion modeling puts food on the table. Fate.</p>
                            <p className="lead" style = {{textAlign : "justify"}}>Under the caring, watchful eye of ‘Gramma Howell’, wondrous Basin Street, French Quarter woman, it was discovered that I had a wordful facility; many young children do. Fortuitous, through the beneficence of Saint Louis Cathedral Catholic archdiocese I am awarded a Ford Foundation reading scholarship. Four years old; boarding school. Life launch. First to fourth, skip two grades. Seven years old, mascot scholar serving a company of older boys and men as I would for most of my youth, in private and, later, public schools, I learned the hard and soft realities of adolescence on the road. Saving respite from perdition’s path was my grandparents bounteous, fruitful summers spent in leafy bosom of Chesapeake Bay countryside - Frederick Avenue, Shadyside, Maryland. Home is indeed where the heart is.</p>
                            <p className="lead" style = {{textAlign : "justify"}}>Young adulthood, the years metamorphose. Excited my jib was cut from artist-social philosopher cloth, I tried my best to apply myself as an intelligent young man. ‘Raise up a child in the way they should be and in the end they will not depart from it.’ On the early, factual living history, I often failed at it miserably. Fortunate son raised never to quit; solace was found in books, books, and more books. In books is the word, and in the word is the idea, and in the idea all things are possible. And who were the conduits providing me those tomes? My mother’s own myriad interests, combined with her Grace Kelly beauty, sensuousness, intelligence and charm, altogether, her ars vitae made me beneficiary to practiced and powerful people, an astonishingly interesting array of women and men. Amid the gender inequality common to those times, I grew up believing assertive, intelligent masculinity was a perfectly fine thing for which to aspire. I now believe it true for both genders.</p>
                            <p className="lead" style = {{textAlign : "justify"}}>Wise people note the artist, politician, and criminal share a personality archetype. I think that my mother, herself a visionary artist to which little was foreign, she knew this; therefore, she purposefully apprenticed me to the Teacher, the Gambler, the Prince, the Priest; the Nun; Lover; Joker, and Savior; the Warrior, Poet, and Athlete, too. For this I remain eternally grateful. My post off to the side provided me a certain opportunity, if not desire, to closely observe humanity’s intimate nuances – noble and ignoble; glamorous and the treacherous; the proverbial haves and the have-nots; the famous and the defiled; all inescapable tragedies; sublime triumphs. Those of note, I have spent my life silently, sometimes publicly, recording their intimate histories. Herstories.</p>
                            <p className="lead" style = {{textAlign : "justify"}}>Over dinner in Greenwich Village not so very long ago, an intelligent senora I met via a friend had read my recent play, ‘Paris to Istanbul’. A modern, heroic tale of women’s fundamental human rights - especially those living under the strictures of male-led, faith-based societies - over sashimi and Kirin dry, she nodded. She liked it. “Music, sex, murder, great speeches. What’s not to like?” Silent pleasures. Further, if I would anthologize my portfolio, none of which had I previous presented to any agency or publisher, she would be happy to forward it. Really. <span style = {{fontSize : "15px",fontWeight : "bold", fontFamily : "Papyrus", letterSpacing : "2px"}}>'ANTHOLOGICA'</span>, is humble response to that gracious offer.</p>

                            <hr style = {{maxWidth : "100%", marginBlockEnd: "5em", marginBlockStart: "3em", backgroundColor : "rgb(222, 225, 230)", width : "30%"}}></hr>

                            <p className="lead" style = {{textAlign : "justify"}}><span style = {{fontWeight : "300", fontSize : "70px", paddingLeft : "20px", paddingRight : "10px"}}>A</span>long time ago, so long ago now I can hardly remember who it is I was, I bid farewell to the windy streets of San Francisco and began a trek across America in search of my father. On that journey, even though I did not always know it at the time, I was rediscovering my human roots as a son, father, artist, and, social philosopher. Making my way through the Sierra Nevada’s, camping high under the stars and blazing, near fatal sunbeams, burning, churning with great glee and abandon, yet, serious, disciplined impulse, preparing by three months of rigorous physical training, I was of body, mind and spirit to encounter, interview, and make decisions regarding a future relation with the man who cast seed and thus my life.</p>
                            <p className="lead" style = {{textAlign : "justify"}}>Following in these pages are brief excerpts of my artistic and literary portfolio – memoir, novellas, stage plays, musicals, essays, lyrics, poems, songs, as well as previews of works in progress and of those being imagined. I present them with the sincere hope that their careful perusal by the trained eye might reveal potential value residing within them and leading to intentionally acting upon their successful monetization. That is the purpose of this letter. Nothing more, nothing less. Having said that, to write a letter such as this is a personal conversation in of itself, hence, its friendly and personal tone. Asked to write a bit of myself and lives lived and observed, my archetype is part Quixote, part Ulysses. We are who we are. <span style = {{fontSize : "15px",fontWeight : "bold", fontFamily : "Papyrus", letterSpacing : "2px"}}>'ANTHOLOGICA'</span>, here I am.</p>

                            
                            <p className="lead" style = {{textAlign : "center", fontWeight : "600", fontSize : "24px", wordSpacing : "3px", letterSpacing : "2px", paddingTop :"20px"}} ><i>Greg Marcy da Gama</i></p>
                            <hr style = {{maxWidth : "100%", marginBlockEnd: "0em", marginBlockStart: "2em", backgroundColor : "rgb(222, 225, 230)", width : "30%"}}></hr>
                            <p className="lead" style = {{textAlign : "center", fontWeight : "600", paddingTop :"40px"}} >神道 OM</p>
                            <p className="lead" style = {{textAlign : "center", fontWeight : "600", paddingTop :"20px", marginBottom : "0px", paddingBottom :"40px"}} >~ Ω ~</p>
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
 
export default Anthologica;