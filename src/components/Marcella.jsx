import React, { Component } from 'react';
import '../CSS/Marcella.css';
import MarcellaLogo from './logos/MarcellalogoComponent';
import MarcellaBookCover from '../resources/Marcella/Marcella-Section2-Book-Cover.PNG'
import MarcellaBookCoverRight from '../resources/Marcella/Marcella-Section2-Book_Intro.PNG'
import MarcellaCoverImage1 from '../resources/Marcella/Section3-image1.png'
import MarcellaCoverImage2 from '../resources/Marcella/Section3-image2.png'
import radioImage from '../resources/radio-media.png';
import AnthalogicaInterviewPic from '../resources/Anthologica-interview-pic.jpg';
import teamPic from '../resources/team-pic.jpg';
import MarcellaEBook from '../resources/Marcella/Marcella.epub';

import {
    EpubView, // Underlaying epub-canvas (wrapper for epub.js iframe)
    EpubViewStyle, // Styles for EpubView, you can pass it to the instance as a style prop for customize it
    ReactReader, // A simple epub-reader with left/right button and chapter navigation
    ReactReaderStyle // Styles for the epub-reader it you need to customize it
  } from "react-reader";

  const storage = global.localStorage || null;

class Marcella extends Component {
    state = { 
        location:
        storage && storage.getItem("epub-location")
          ? storage.getItem("epub-location")
          : 2
    }

    onLocationChanged = location => {
        console.log(location)
        this.setState(
          {
            location
          },
          () => {
            storage && storage.setItem("epub-location", location);
          }
        );
      };

    //   getRendition = rendition => {
    //     // Set inital font-size, and add a pointer to rendition for later updates
    //     const { largeText } = this.state;
    //     this.rendition = rendition;
    //     rendition.themes.fontSize(largeText ? "140%" : "100%");
    //   };

    render() { 
        const {  location } = this.state;
        return ( 
            <React.Fragment>
                <MarcellaLogo/>
                <hr style = {{maxWidth : "100vw", marginBlockEnd: "2em", marginBlockStart: "0em", visibility : "hidden"}}></hr>

                <div id = "page-container" className = "container-fluid" onClick = {this.hideSideDrawer}>
                    <div className="Section1">
                        <div id="Marcella-Section1-left" style = {{textAlign : "center", borderRight : "5px solid rgb(222, 225, 230)"}}>
                                <figure>
                                    <img src={MarcellaBookCover} id = "Marcella-book-cover" style = {{width : "100%", height : "100vh"}}/>
                                </figure>
                                
                        </div>

                        <div id="Marcella-Section1-right" style = {{textAlign : "center", borderLeft : "1px solid rgb(222, 225, 230)"}}>
                                <figure>
                                    <img src={MarcellaBookCoverRight} id = "Marcella-book-cover-text" style = {{width : "100%", height : "100vh"}}/>
                                </figure>
                        </div>
                    </div>

                    <hr style = {{maxWidth : "100%", marginBlockEnd: "5px", marginBlockStart: "0em", backgroundColor : "rgb(222, 225, 230)"}}></hr>

                    <div className="Section2">
                        <div id="marcella-Section2-pic">
                            <figure style = {{textAlign : "center"}}>
                                <img src={MarcellaCoverImage1} style = {{width : "50vw", height : "auto"}}/>                        
                            </figure>
                            <figure style = {{textAlign : "center"}}>
                                <img src={MarcellaCoverImage2} style = {{width : "50vw", height : "auto"}}/>                        
                            </figure>
                        </div>
                    </div>

                    <hr style = {{maxWidth : "100%", marginBlockEnd: "20px", marginBlockStart: "0em", backgroundColor : "rgb(222, 225, 230)"}}></hr>


                    <div className="Section3">
                        <div id="Marcella-book-text">
                            <p className="lead" style = {{fontSize : "20px", wordSpacing : "6px", textAlign : "center",letterSpacing : "2px", fontWeight : "800", paddingTop : "50px"}}>&#8734;  M  A  R  C  E  L  L  A  &#8734;</p>
                            <p className="lead" style = {{fontSize : "20px", wordSpacing : "6px", textAlign : "center",letterSpacing : "2px", fontWeight : "800", paddingTop : "20px", color : "red"}}><i>On The Surface of The Sun</i></p>
                            <p className="lead" style = {{fontSize : "20px", wordSpacing : "6px", textAlign : "center",letterSpacing : "2px", fontWeight : "800", paddingTop : "20px"}}>-  DEDICATION  - </p>
                            <p className="lead" style = {{textAlign : "justify", textIndent : "20px"}}>MARCELLA, <i>On The Surface of The Sun</i> is my family Iliad. A drama with music, I came of age amidst intense family love, well-intentioned lies, and a smooth, slithering snake. Thanks, Buddha . . . </p>
                            <p className="lead" style = {{textAlign : "justify", textIndent : "20px"}}>Outwardly, I shone with a childish beauty. Inwardly, sensing an elliptical heritage, the young artist in me spoke to torment. Torment asked, Who is your father? Victor Tremble, man-of-the-earth explorer-warrior, steady-hand to daddy's girl? Or, Enrique "El Bestio" Salazar, mother's former lover, a narco-trafficante whom I suspect is my benefactor? Seven, I overheard their late-night phone call. Mother's voice was icy, furiously demanding that Enrique acknowledge and accept his paternity of me, Marcella. Who am I? Years passed, fears were transformed. My emotional metronome wound tighter. Ticky-ticky, self-doubt.</p>
                            <p className="lead" style = {{textAlign : "justify", textIndent : "20px"}}>Mesmerized by the shapes and sounds of the seven arts, on the surface of the sun I style creativity's glow, setting loose passions and intelligence while battling fires set by my mother's reckless beauty. Burning to stare down Enrique, hoping to once and forever know my real father, unspoken family truths handchecked my confidence. La superficie del sol es muy hot-popped! Come moonlight, it dreamily cools. The heart wants what the heart wants, even when it's wicked. Live life as it could be, not as it is.  Seeking my place in this world, my DNA evolution is intended tribute to all aspiring artists.</p>
                            <p className="lead" style = {{textAlign : "center", fontWeight : "600", paddingTop :"20px", paddingBottom : "20px"}} >ξ</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>TIME AND PLACE  -</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>Hermosa Beach, Los Angeles, California, USA - The present.</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>Monterrey, Nuevo Leon, Mexico - The present and a generation ago.</p>
                            <p className="lead" style = {{textAlign : "justify", textIndent : "20px"}}>Pages from a young artist's journal, On The Surface of The Sun are simple sketches of a clap-fun, better-at-the-beach adolescence, shaded with my fondly imagined memories of Momma's life in Monterrey. An insouciant girl, they affectionately called me Celitta.         I keep alive my inner-child Celitta by mischievously summoning her for spritely girl-talk and games impromptu. Late nights together, we play host to the Celitta &amp; Marcella Show!! Pumped, we invite our friends: The Mad Pride Girls.  Be scared; very scared.</p>
                            <p className="lead" style = {{textAlign : "justify", textIndent : "20px"}}>Self-admittedly, at times I burn a bit bright. So? I love life. Isn't that good? Lucky for me, I can always count on having Celitta along with me for the ride, flitting about here and there and everywhere, treasuring the precious embers of our stars. I love my Celitta.   Marcella! Keep the child alive! I do! I do!  Do you? Do you?  Yes, Celitta. I do. I do.</p>
                            <p className="lead" style = {{textAlign : "justify", textIndent : "20px"}}>Magical? Of course! I am an artist. In any case, I am only loosely strapped into my rollercoaster. Captive of word and world, forgive me for believing that I can exist on the surface of the sun . . .</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}><i>"Let's frolic now n' later forget! It's all poetry, poetry, poetry!”</i></p>
                            <p className="lead" style = {{textAlign : "center", fontWeight : "600", paddingTop :"20px", paddingBottom : "20px"}} >ξ</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>-  MY PLACE IN THIS WORLD  -</p>
                            <p className="lead" style = {{textAlign : "justify", textIndent : "20px"}}>Marcella Prince Tremble is my name. I was born and raised in Hermosa Beach, California. I believe that I am child to Victor Tremble and Maria Rodriguez. Second-generation emigrants from Franco's Spain, mother's Rodriguez family settled in Monterrey, Mexico.      I honor Victor Tremble as my father. Muscular, towhead, humble, modest, country boy from Southern Pines, North Carolina, Daddy is a man-of-the-earth. Stellar marksman, the woods of his youth provided feral opportunity to prove out his Ulyssean mettle. Seventeen, Daddy left home to join the Army. Quiet, trustworthy, unbelievably resilient, Daddy was recruited by Special Forces. "Black Ops" sniper. One Shot - One Kill and Daddy kept hope alive. Mission's go bad. Some roads travelled run wrong. Daddy's teammate, Antonio Jimenez, took a direct hit. Under fire, Daddy didn't panic; he advanced. Tony's life, saved. In the company of his warrior peers, Daddy was awarded a Silver Star. Medallion for the ages, it swings on my bosom, shining five-point guard.</p>
                            <p className="lead" style = {{textAlign : "justify", textIndent : "20px"}}>My mother, Maria, was the daughter of Alberto and Muriela Rodriguez. Granddaddy was a detective' in Mexico's incestuous wars with the drug cartels. Grammy was a home-maker, mother of older boy Tio - my Uncle Tio - and Maria, my Momma. When it came to love, shy Tio was of his own persuasion. On a shoddy baseball field they considered their stadium, Tio's young eye caught the eye of another youth, Tony Jimenez. Yes, that Tony. Good young boy even when fate led him to an orphanage. Growing up together, their friendship blossomed. Neither Granddaddy’s dismissive looks, nor jealous put downs of orphan mate Enrique Salazar, nada would keep apart these two boy-men. Momma matured out of awky adolescence into stun-me beauty. It would be her luck, and my unluck, that she fell hard for Enrique. Momma didn't care if Enrique was always "in trouble", a problem child, or even that abuelos Alberto and Muriela angrily forbid her from seeing him. Momma was crazy for and crazed by, Enrique, her true love. Enrique. Smart, sexy, angry Narcissus. Momma would not be denied. Momma craves her excitements. </p>
                            <p className="lead" style = {{textAlign : "justify", textIndent : "20px"}}>Enrique Salazar was a troubled youth. Cough-cough. Born in the back seat of a car, he ran the streets of Monterrey - a town he loved. Falling in with small-time trafficante's, Enrique's charisma and iron will led him quickly up evil's welcoming ladder. Youthful pragmatist, Enrique's life success key was always simple: "Give them what they want!" Intelligent and dangerous, Enrique was just what Momma wanted. When Momma turned sixteen, tragically, my grandparents were gunned down. Bam! Narco-trafficantes, the usual suspects. Enrique vowed to avenge their lives. Now too an orphan, Momma wanted to marry Enrique. Flee Monterrey, go to the safer and more glamorous world of Los Angeles. Seventeen, arrestingly lit of body and mind, Momma told Enrique that she was pregnant. Budding empire builder, Enrique declined to marry her! Fool? Beauty may not always know the truth but one day Beauty will.</p>
                            <p className="lead" style = {{textAlign : "justify", textIndent : "20px"}}>My Uncle Tio was not above an interesting life. Tony left behind the orphanage and Monterrey, emigrating to the US. He too joined the Army. Trilingual, Special Forces quickly recruited Tony. As I said, my Daddy saved his life, destiny forever entwining them as "blood brothers". Tio was an intuitively wise musical poet. Harboring little desire for formal schooling, much to my then-living grandparent's frustration, playing his guitar, brotherly eye on Momma, Tio bid his time working as a coyote' for Enrique. Patient, Tio waited for the perfect moment to join Tony in LA. Lover of nature and its spirits, "Kokopelli" Tio was a hushed tone legend, easily reconciling complex moral ambiguities: </p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}><i>" I never move drugs . . .  I move human feet . . .  Think of me as a Freedom Bird."</i></p>
                            <p className="lead" style = {{textAlign : "justify", textIndent : "20px"}}>Tony knew  that Tio wouldn't leave Monterrey without Momma. Sly dog, he schemed. Victor Tremble, could my studly blood-brother ignite Maria's torch? Light their path to the United States? Laugh. Si! Si! Enrique passed on Momma. Good boy, Tony cooly invited Daddy to come and meet Momma and Tio. He came. He saw. He was conquered. Ignited, Christian Daddy anted into God's hand. Tequila n' lime. Monterrey. Good times. Daddy. Momma. Midnite marriage. Tio! In the rearview mirror lies Me-hi-co!! Andalate! USA!! Learn English; first Spanglish! We're language brains! Momma swole. Daddy glows. Me, baby Marcella. Six pounds-two ounces: Pink-toed, pure blonde delight. Thank-you very much.</p>
                            <p className="lead" style = {{textAlign : "justify", textIndent : "20px"}}>Truth. A glorious seven, I was happy in my skin, inside and out. Then, on a Black Ops mission, Daddy was near fatally beaten. Snap-finger weird. Daddy came home permanently, and, without a word to say. Daddy cannot speak. Aching to help the love of my life, but, not knowing the right words, for Daddy I pledged to learn words with my hands; to be strong like him, willing to erase anything that might hurt us. Like the card game "Battle", I embraced the hand life was dealing. This was my family. Celitta was all-in. Tio stood close. And Momma? Ummm. Without Ulysses, Aphrodite is a black-anxious white.</p>
                            <p className="lead" style = {{textAlign : "justify", textIndent : "20px"}}>  I overheard Momma on the phone demanding a man named Enrique acknowledge his paternity of me. "El Bestio! Marcella is YOUR daughter. YOU are her father! Verdade! Dame ayuda para nuestra hija!!" What is happening? Daddy hurt; now this? </p>
                            <p className="lead" style = {{textAlign : "justify", textIndent : "20px"}}>Tell me I am not daughter to The Beast. Who is my real father? Touched by the misfortune of memory, Enrique lingered on the scent of his former lover's estrogenia. Eerily, Enrique later told me that he was dazzled by our potential to one day be the stuff of legend. Sick. Bad sick. Lover's bargain? Who knew. Not me. Not then. El Bestio consented. Here I am.</p>
                            <p className="lead" style = {{textAlign : "justify", textIndent : "20px"}}>Momma was kept. Me? I easily slid into private school uniforms, art lessons and a tres cool wardrobe. Such are the karmas the Gods fling, never troubling to ask if unsuspecting hearts can shoulder their weight. What doesn't actually kill you outright only serves to make you stronger. If you say so. Ten years pass. Flowers bloom. Enrique reaches in, Narcissus seeking his reflection. Aroused, amoral capitalist that he was, El Bestio began texting me his affections.  HOLA MI BELLA  Unblinking to power, I answered.</p>
                            <p className="lead" style = {{textAlign : "justify", textIndent : "20px"}}>Twenty, my nature is terminal enthusiasm. I think of myself as lit. Sometimes I feel like I'm living my life on the surface of the sun. Art-girl, unsure of who is her daddy. Intuiting evasive truths from the quivering tower-of-jello that is my mother, a fresh, womanly temper gained freedom in me. It felt right. Determined to find answers to my life's great question, I realized that I had to travel to Monterrey. NOW! </p>
                            <p className="lead" style = {{textAlign : "justify", textIndent : "20px"}}>My men launched my voyage. Tio and Daddy helping me and boyfriend James quietly slip away. Marcella mi Bella. I will confront El Bestio. Kill-or-be-killed. Yes, I had an attitude. A good one, too. Some think I seduced The Beast's famous will, subserving it to a higher purpose - money. Hmm. This I admit: We met. We partied. I shot him . . .</p>
                            <p className="lead" style = {{textAlign : "justify", textIndent : "20px"}}>Tio, Tony, Daddy and James came to my defense; Enrique's men to his. My men served for love. His, for money. In the fire of the belly of the beast, great heros birthed and died. The enemy perished. My Tio, a girl's closest friend, lay sacrificed. Wounded, my unearned beauty is forever marked by a scar, price paid to question paternity. Daddy ripped Enrique's wings like a butterfly. Free at last? Heritage firmly in hand, ten-thousand Benjamin's treated us to a nice, long family voyage. Momma's prayers were answered -    El Bestio, vanquished. Sadly, so too were the songs of Kokopelli Tio. Ulyssia navigates   mi primera exploracion de la mundo. Husband; James Prince. Grandparents; Maria and Victor. New baby girl, Victoria, links us to the stars. Life is a banquet. It is true. I say so. Adios, mi California . . .</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}><i>"I want to join a marching band! Manhattan, that's the biggest city in the land?" </i></p>
                            <p className="lead" style = {{textAlign : "center", fontWeight : "600", paddingTop :"20px", paddingBottom : "20px"}} >ξ</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>-  SOMOS UNA FAMILIA  -</p>
                            <p className="lead" style = {{textAlign : "justify", textIndent : "20px"}}><b>Marcella</b>- Twentyish, tall, blonde, I sense the stares of others. Smoky blue-eyed, Hispana Americana. Rare. Over-the-top brainy; charismatic beauty, they say. Seductively perplexing, enigmatic young artist; Ulyssia yearning to know self. Flinging words as weapons; hungry, confidently - often seared with wit - in an illuminating phrase, Marcella Prince-Tremble - Virgin Mad Pride Girl - "Marcella, I am lit." Assertive. Afire. Quick to think, enjoying a drink, I relish this great feast of life. Insatiable? Perhaps, I am. Searching for my place in this world, outwardly self-assured, I carry myself with an endearing conceit. "I'm the human equivalent of a chocolate croissant!"  Fast car, front seat, wind blows tears across the eye.</p>
                            <p className="lead" style = {{textAlign : "justify", textIndent : "20px"}}><b>Celitta </b>- My past and present, self-treasuring, inner-child. Sky-high expectations, thirsty for praise, Celitta lovingly sisters me. Hip, jazzy Tinkerbell. Easily touched, in my neighborhood, Celitta can fly. Smack-a-Wham-O! Chew gum, blow pink spheres, finger-twirl golden curls. Seven, Celitta is proud. Ivory bubble dress, canvas hi-tops, purloined make-up, delicious lip-stick, bracelets and bandera anklets; zooming by on stickered-skateboard, hear the song of her little bird: "Words! Words! Beautiful words! Get your words, words, beautiful words!      Right here!!" Celitta is old-man Picasso's heartbeat mantra:"Artist! Keep alive the child!" Celitta's sturdy answer: "I do! I do! Do you? Do you?"  </p>
                            <p className="lead" style = {{textAlign : "justify", textIndent : "20px"}}><b>Maria </b>- My mother. Maria Tremble Rodriguez. Late thirties; imaginative, smart, way undereducated. Maria's dark beauty competitively contrasts with my blonde rubia. Seventeen, family daughter of a slain Monterrey narco-detective', Maria is crazy for Enrique Salazar, the young trafficante' who avenged her parent's slaying. Emotionally arrested, Catholic faith waivering, lovely, neurotic Maria means so well. Vulnerable teenager, self-protective necessity quietly morphs Maria into an exquisite, elegant liar. Narcissus Enrique rejects her sudden, pregnant call for marriage. Lonely, Maria cries and whispers. Big brother Tio intervenes. Opportunely, Tony introduces Maria to Victor Tremble, Special Forces soldier. Not yet love,        hope rises. Sensuous Maria. Virile Victor. Midnight kiss. "Hola! Los Angele-e-e-s!"</p>
                            <p className="lead" style = {{textAlign : "justify", textIndent : "20px"}}><b>Enrique </b>-“El Bestio” Salazar. Monterrey orphan. Mid-twenties, Enrique is a young narco-trafficante'. Charismatic snake, naturally brilliant realist, Enrique demurs, "I only give them what they want." Violento, pretentiously high-class, a self-taught bootstrapper, Enrique's lofty narcissism aspires to more than undereducated Maria. Impatient empire builder weighing costs-to-benefit, Enrique coldly dismisses Maria's marriage call. Carajo! Maria vanishes. Her foxy estrogenia is fondly missed. Seven years later, Victor is badly injured. Seeking money to educate me, in a secret call, Maria fences with her former lover, Enrique. "El Bestio. Marcella, is your daughter! Our beautiful young prodigia!" A fatally flawed man, he is touched by the misfortune of memory. Intrigued by my dazzling potential, El Bestio consents. Ten years pass. My feminity blooms full-flower. Aroused, The Beast reaches in for Beauty. </p>
                            <p className="lead" style = {{textAlign : "justify", textIndent : "20px"}}><b>Tio  </b>-  "The Freedom Bird". Maria's brother. Enrique's childhood friend once working as his coyote. Dignified poet, Tio quietly grieves the loss of his parents. Despising los tentaclos de drogas, Tio longed for redemption from their perditions. Lover of his closest boyhood friend, Tony Jimenez, Tio enviously watched orphan Antonio take the high road, migrating to the US, joining its Army. Masking their manly love under the patina of friendship, Tio wanted to leave Monterrey for Los Angeles, Tony, and all things good. Family rock-in-deep-waters, Tio would never leave Monterrey without Maria.  Mi Dio. Por favor.  Show me the way from these roads travelled wrong. </p>
                            <p className="lead" style = {{textAlign : "justify", textIndent : "20px"}}><b>Antonio </b>- Tony. Tio and Maria's childhood friend; Enrique's orphan-mate. Tony matures in ways provided only by freedom and opportunity. Fleet of foot, trilingual, Tony is recruited by Special Forces. Longing for Tio to join him in LA, when Tio and Maria's parents are mysteriously gunned down, Tony accepts that Tio will never leave Monterrey without Maria. In his first tour of "Black Ops" duty,      Tony takes a direct hit. His life is saved by team-mate Victor Tremble. Tony and Victor become   "blood-brothers". The heart want what the heart wants, especially when it's good. Tony slyly wonders: Could handsome Victor Tremble light a torch and guide Maria and my Tio to the US?  Si! Si!</p>
                            <p className="lead" style = {{textAlign : "justify", textIndent : "20px"}}><b>Victor </b>- Good man. Maria's man. North Carolina country-boy-kind-of-good. Humble and modest; yet, when necessary, deadly. Strong of impulse, few of words. Never complain. Never explain. Victor's spirit is wracked by the eye-blackening weight of his sniper duties. "One Shot - One Kill."  "Bulleit Bourbon" soothes his demons. Muscular towhead, Victor's at-one bearing eases everyone. When Tony and Tio invite Victor to Monterrey to meet Maria, he enjoys and is much enjoyed. Ignited by Maria, stunning querida, quiet Christian Victor attributes it all to God's hand. Smoldering lovers. Midnight marriage. Victor. Maria. Tio. In the rearview mirror lies Me-hi-co! LA. Hermosa Beach. Maria swells. Victor beams. Baby Marcella . . . Celitta delights. Seven good years. Ops mission. Turbaned target take-out. Done. Collaterally, Victor kills a young girl. Disoriented. Captured. Beaten. Released. Victor cannot speak.</p>
                            <p className="lead" style = {{textAlign : "justify", textIndent : "20px"}}><b>James </b>- James Prince. My boyfriend. Young Brit soul-singer. Luvangelslowly rocks it 'n rolls it good. James owns a fabulous beach crib on the Strand. Lucky me. James is My love / Slender gazelle / Smokes too much / Cool sweat beads 'round his neck / Always a little dirt under the fingernail /  Looks good in a hat / Or nothing at all / Wispy moustache / Sooner would I die / Than let him see me cry / Young man's love unknown / Take my words / Breathe them into songs. It's all poetry, poetry, poetry. Money, moxie, indolent manhood, young James is striking; a slow-cool bi-polarity to my burning fire. Greatly appreciated by my family, James fetches my smile with a calming passion. Truth? I think that just like me, James doubts what he knows or truly believes in. Got-it-goin'-on, young James. Oooh. Wants more. I want his more. What does it take to keep up with a girl like Marcella? Don't ask me. Show me.</p>
                            <p className="lead" style = {{textAlign : "justify", textIndent : "20px"}}><b>The Mad Pride Girls </b>- Fantasy and reality. Marcellian mix of my songs and verse, soarings and flight. Chic savages, transcendent incandescences. Like-minded friends, madly proud to be illuminated artists. "Gimme an "M"-"A"-"R"-"C"-"E" - What'cha got that you're tellin' me? - "L"-"L"-"L"-L"-"A" - I know, baby, what you're tryin' to say! MARCELLA! MARCELLA! MARCELLA!" Warm floating faces, The Mad Pride Girls text choral tone-poem messages. Hands-held, integrating dance and light, rhythms, set and mood. "Can you hear us, now? /  Hurt girls  / We're gonna make good / Doin' all right / Like we should / Tell me, baby / It's late in the hour  / Share a cocktail with my Superpowers? / Yes . . . Yes . . . /  We're Mad Pride Girls . . .  /  Listen in . . .  / Closely . . .  /  We're all Mad Pride Girls . . ."  </p>
                            <p className="lead" style = {{textAlign : "justify", textIndent : "20px"}}><b>Players </b>- Players. People one expects to see in Hermosa Beach. Musclehead. Artist. Family-goers. Digital workers. Relaxing laborer. Players. Una cantina; drinking all night, dawn is fast approaching. Players. Deft-finger, Brit rock-n'-soul: Luvangelslowly. James; guitar. Young Gavin; electronica. Keiko; sultry, stand-up bass. Players. Monterrey. A Brechtiano three-penny opera. My extended artist-family. Musicians and dancers; poets and liars. James and me are graciously welcomed to a late-night soirre. Krunky-flamenco. Kru-lenco. Players. Players. Enough to want to shoot them: Bad guys with thin mustaches. Pow!!</p>
                            <p className="lead" style = {{textAlign : "center", fontWeight : "600", paddingTop :"20px", paddingBottom : "20px"}} >ξ</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>- THE BEAUTY THAT IS MY WORLD - </p>
                            <p className="lead" style = {{textAlign : "justify", textIndent : "20px"}}>On the surface of the sun magic and illusion lie. In the beauty that is my world, I imagine things as they could be, not as they are. High, the ordinary is extraordinary. Homage to William Escher, my world is the Escherian House of Magic &amp; Illusion. To me, Great Escheria astonishes. Evolutionary mind's eye. See things as they might be. Elegance and truth often lie right to the eye about who they are and are not. Parallax realities, differing in impression to each of us. That's how life really is. You just have to look - it's there. Great Escheria is all wonderously revolving mind and matter. My world, I find it a rather lovely place to observe and appreciate my wondrously evolving matter of mind. Conceit? Absolutely!</p>
                            <p className="lead" style = {{textAlign : "justify", textIndent : "20px"}}>My world is compelling; at least to me. I find complexity to be beautiful. What is real? What is not? What is mind? Never matter. What is matter? Never mind. Escheria, what life might be, could be, is, when the surface of the sun is imaginatively experienced. Imagine it with me. See it? Trumps de l'Oeil. In the artist's mind's-eye, all is possible. Ever notice how people and their emotions conveniently appear and disappear? Amid balconies, frescoes, stairs and rooftops, I watch and learn. Magic and illusion color perception. Escheria is organic; my personal galaxy timepiece. Mine and mine alone. Gracefully ticking, subtly transporting my precious stars, arhythmically altering her shape, planing and rotating in her mysterious, unfathomable ways. Great Escheria is my magic world.  Yes, I'm lit . . .    Let's visit. My world offers everything from elfish, hovering Celitta; to me and Tio's loopity-loop lunch truck; James' ice-blue Porsche convertible speeding out high above, over and deep, into the night stars. Basta! Imagination and magical realism are better experienced than explained. Poet Jean Cocteau knew so well. "Children will believe anything you tell them. This is their beauty."  Believe. That is a truth.</p>
                            <p className="lead" style = {{textAlign : "justify", textIndent : "20px"}}>  On the surface of the sun I visually embroider space and time. Artistic modern impulse seduces the eye. Above on high floats a bright yellow cornucopia, its great horn pregnant with cartoony, balloon shapes! What does it hold? Airships? I honor the walls with Spanish tint, naturalism murals. Softly stroked pastels offer snow capped, ochre mountains peeking at bluish, California skies. In the distance, soft washes of tan, turquoise and coral overtones invoke the subtle colors and feel of palms, sandy beach and ocean. Si. Si.</p>
                            <p className="lead" style = {{textAlign : "justify", textIndent : "20px"}}>Donde esta? Somos a Playa del Hermosa. Hermosa Beach, my beautiful beach. Desert meets the sea. Cool air blows. Refreshing, inside-inviting, hipster krunk-tracks soothe out the scene. Engaging rhythms trek beneath the patter of friends focusing in ever fresh surroundings. Setting sun fades a pink glow. Twilight's atmosphere begins to darken. Perspectives align. Waves roll, quietly break. Good-bye, day star. Hello, evening moon. Breeze. Night stars. Sheer fabric scrim panels waver. Gently, they disappear.</p>
                            <p className="lead" style = {{textAlign : "justify", textIndent : "20px"}}>Soft, cobalt blue luminescence slowly lights the air. Wind chime night sounds wash and drift. Tinkle. Conspiracies of youthful artists render before one's eyes simple, arching structures appearing all-at-once elastic and convertible. And inherent to their design? Sneaky intent to disguise illusion's ability. Gargantuan objects; yet, culture common. Boom-box. Pencil. Perfume bottle. Things like these; more, extrapolated larger than life. My garden of weirdly amusing, desirable objects. Tasteful, a boom-box is "blown-up" into James' hip, tubular beach house. Lower entrance to the Strand, his music studio. Yes! Aloft, Pacific-view rooftop. Marvelous for launching speeches, or, stealing a lover's kiss. Boom-box? Function digitally superimposes onto its fabric skin. Boom-box, you are. I think, therefore I am.</p>
                            <p className="lead" style = {{textAlign : "justify", textIndent : "20px"}}>On our way to Monterrey, James' and my boom-box intuitively transforms. It's four a.m / Let's make some noise / Bust-a-move girls and boys / Acqui es mi cantina Mexicana! A chance to lure El Bestio. Nimbly subtle, Great Escheria giggles, humbly and habitually lying to everyone's eyes all the while gracefully transporting my galaxy of stars. Doubter? On the surface of the sun walkways and windows lead everywhere and nowhere. Comfortable reposes reflect pasts; sometimes presents. Doors and mirrors fade into unseen locales. Proverbially, walls talk. Escheria's stucco walls flicker. Grainy films. Images. Secret signs. Family stories. Emiting memories, our films liberate hidden truths. Teach me, Buddha: Hold fast to that which is good. Momentarily afraid to confirm what it is I think I am seeing, I stare. Films. Faces. Heartbeats. Who are we? Where are we going? How will we get there? Is there truth in our vision?</p>
                            <p className="lead" style = {{textAlign : "justify", textIndent : "20px"}}>On the surface of the sun visitors hunger for new experiences. Steeped in 21st century moral and visual ambiguity, personally or engaged; I-Phone or text message; with or without compliment of our men, women boldly dream of Valhalla and Vegas, achievement and teasing sins relished with eyes wide-open. We love the perverse impossibilities of Cirque du Soliel, silent Blue Men messiahs, Kriss Angel as he walks upon the waters. Freak? Wait. There's more. The Soprano’s battle cross-dressed Good &amp; Evil. Verdade. We are not alone. Enjoy; remember. Saga concludes, we feign ourage at darkly ambiguous endings of anti-heroes and heroines. Their destinies remain a secret of the author! Adoringly, we insist on more. Momma craves her excitements. I am my mother's daughter. Si! Si! Thirsty for rare, blinking pinpoints of magical realism, closely, I listen. El Bestio knows me well: You seek spectacle. Let me give you what you want. My world is all-at-one. Artist, Escheria compels. Life's complexities appear real, then, not so surely. Might be. Could be. It's how I imagine it. Visual dreamers easily imagine my world. This is your beauty.</p>
                            <p className="lead" style = {{textAlign : "justify", textIndent : "20px"}}>Celitta's and my life on the surface of the sun is a fiery, spinning carousel. Narratively and visually we mark and signify the emotional places and paces of the people in our world, both real and imagined. Voice, body, and music carry person-to-person, place-to-place, head-to-hand. When word's emotion becomes too dynamic to be spoken, when words alone are not enough to convey the heart's passions, on the surface of the sun voices open and the words are sung. Music lifts the lyrics. When lyrical emotion is too strong even for song - emotions stream into dance. Kru-lenko. Artistically, our quest is to keep the creative fire alive and burning. Dreamy first sensing to final, thunderous, "Si! Si!" instinctively, both Celitta and I know that our fire is our guiding light and goal. Advance the fire. Evolve or die. Celitta's special gift is her illuminating energy. A tightly carried talisman burning brightly, sometimes darkly, through myriad challenges and fates. They say that every young Ulyssia must face up to her own life. Would I grow to be so brave. Kokopelli Tio tells me . . .  It's only a matter of time.</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>-   KOKOPELLI POETS MMIX   -</p>
                            <p className="lead" style = {{textAlign : "justify", textIndent : "20px"}}>Kokopelli Poets MMIX is a musical collaboration. Celitta, me, Peter Kingsbery, da gama, and a host of our musical friends all live near, in Hermosa. Over the course of a year, we joyously knocked around and back-and-forth lyrics, melodies and music; occasionally, even each other and warm flasks of cognac. That was fun. Art is a four-letter word. It felt good to listen, even better to sing. In thin air, they generously lent to us their considerable talents and passionate emotions. Celitta and I convey deep gratitude to the great musicians plucking our neighborhood. As is said, if they falter, forgive them, they are men. </p>
                            <p className="lead" style = {{textAlign : "center", fontWeight : "600", paddingTop :"20px", paddingBottom : "20px"}} >ξ</p>
                            
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>-  S O N G S  O F  M Y  S T O R Y  -</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>A C T  I</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", fontWeight : "800"}}><b><i>Words, Words, Beautiful Words!  /  Emotional Choreography</i></b></p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>Ensemble </p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", fontWeight : "800"}}><b><i>Dear Diary - Dear Diary- Dear Diary</i></b></p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>Marcella </p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", fontWeight : "800"}}><b><i>It's Only A Matter of Time</i></b></p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>Tio / Maria </p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", fontWeight : "800"}}><b><i>One Shot - One Kill</i></b></p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>Victor </p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", fontWeight : "800"}}><b><i>Dream Talk</i></b></p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>James / Marcella </p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", fontWeight : "800"}}><b><i>Eres . . .  Eres . . .  Eres mi Enemigo &#123;Pt. I &#125;</i></b></p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>Enrique </p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", fontWeight : "800"}}><b><i>I Remember When I Was A Little Girl</i></b></p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>Marcella / Celitta / The Mad Pride Girls </p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", fontWeight : "800"}}><b><i>Marcella, I Am Your Mother</i></b></p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>Maria / Marcella / Celitta </p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", fontWeight : "800"}}><b><i>W. A. A. W!</i></b></p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>James </p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", fontWeight : "800"}}><b><i>Yo Soy Su Tio</i></b></p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>Tio </p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", fontWeight : "800"}}><b><i>Roach Coach Manifesto</i></b></p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>Marcella / James </p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", fontWeight : "800"}}><b><i>It's Always Better At The Beach</i></b></p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>Muscle Heads / Artists / Office Workers / Laborers / Beachgoers / Marcella  / Abuela Muriela </p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", fontWeight : "800"}}><b><i>How Bad Is My Jones? / Red Shoes To Wonderland</i></b></p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>Marcella / James / Keiko </p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", fontWeight : "800"}}><b><i>My Place In This World</i></b></p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>Marcella / The Mad Pride Girls </p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", fontWeight : "800"}}><b><i>At Least Tonite</i></b></p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>James / Marcella  </p>
                            <hr style = {{maxWidth : "100%", marginBlockEnd: "3em", marginBlockStart: "3em", width : "30%", fontWeight : "800"}}></hr>


                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>-  S O N G S  O F  M Y  S T O R Y  -</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>A C T  II</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", fontWeight : "800"}}><b><i>Well Behaved Women Rarely Make History</i></b></p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>Marcella / The Mad Pride Girls / James  </p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", fontWeight : "800"}}><b><i>The Inner-Me</i></b></p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>Marcella / James </p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", fontWeight : "800"}}><b><i>She Is Our Girl!</i></b></p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>James / Tio </p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", fontWeight : "800"}}><b><i>Eres . . .  Eres . . .  Eres mi Enemigo &#123;Pt. II &#125;</i></b></p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>Maria / Tio /Antonio /Victor / Enrique / Marcella / James / Muriela </p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", fontWeight : "800"}}><b><i>Earthworms In My Pocket / Then There Was One</i></b></p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>James / Marcella / Cantina Locals </p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", fontWeight : "800"}}><b><i>Jamie, Do You Love Me?</i></b></p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>Marcella </p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", fontWeight : "800"}}><b><i>Somos Una Familia</i></b></p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>La Familia de Monterrey / Marcella / James  </p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", fontWeight : "800"}}><b><i>Mi Nombre Es Enrique Salazar / Give Them What They Want!</i></b></p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>Enrique / Marcella </p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", fontWeight : "800"}}><b><i>Song of Prayers</i></b></p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>Marcella / Maria / Muriela / Celitta / The Mad Pride Girls </p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", fontWeight : "800"}}><b><i>I Am My Mother's Daughter / A Single Night of Pleasure</i></b></p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>Marcella / Enrique </p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", fontWeight : "800"}}><b><i>Life is A Banquet</i></b></p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>Ensemble </p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", fontWeight : "800"}}><b><i>Si! Si!</i></b></p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>Ensemble </p>
                            <hr style = {{maxWidth : "100%", marginBlockEnd: "3em", marginBlockStart: "3em", width : "30%", fontWeight : "800"}}></hr>

                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", fontWeight : "800"}}>ACT I</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", fontWeight : "800"}}>"THE AWAKENING"</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", fontWeight : "800"}}>SCENE I</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", fontWeight : "800"}}>WORDS, WORDS, BEAUTIFUL WORDS!</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", fontWeight : "800"}}>EMOTIONAL CHOREOGRAPHY</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", fontWeight : "800"}}>DEAR DIARY - DEAR DIARY</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", fontWeight : "800"}}>&#123; Marcella / Celitta / Maria / Enrique / Tio / Antonio / Victor / James / The Mad Pride Girls &#125;</p>
                            <p className="lead" style = {{textAlign : "justify", textIndent : "20px"}}>Marcella sits alone. Atop an iconic, oval riser are spread about her tools and toys: note pads, pens, tequila, shot glass, cigarettes, laptop, cell phone. None of it matters. Marcella is thinking, writing, listening to her I-Pod. Celitta walks, runs, rolls, flits and flies about, clearly of her own mind. Cobalt blue-lit, the Great Escheria astonishes. Easily, Marcella calls forth onto the stage each character in her mind. Personally interceding and receding in the litany of her thoughts, Scene I unfolds like a classic, movie opening long-shot: perfectly gyrating, gravitating its singular sequence; uninterruptedly involved.</p>
                            <p className="lead" style = {{textAlign : "justify", textIndent : "20px"}}>Three-in-the-morning. Writing and drinking. Low, delta-bass rumination seeps from Marcella's earphones into the studio atmosphere. High, she strunks up the funk. A bit of time passes. A cell phone beeps. Perched on an adjacent music stand its generous keypad illuminates bright orange into the cobalt blue night. Marcella peers, reading its message. Its text letters are blown large on scrim. It is easy to see. It is Enrique.</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", fontWeight : "800"}}><b><i>ENRIQUE</i></b></p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>HOLA  BELLA </p>
                            <p className="lead" style = {{textAlign : "justify", textIndent : "20px"}}>Marcella rears her mane. Frustratingly familiar with the messenger, she quickly punches in her reply.</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", fontWeight : "800"}}><b><i>MARCELLA</i></b></p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>WHAT DO YOU WANT </p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", fontWeight : "800"}}><b><i>ENRIQUE</i></b></p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>WANT? </p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", fontWeight : "800"}}><b><i>MARCELLA</i></b></p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>YES! </p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", fontWeight : "800"}}><b><i>ENRIQUE</i></b></p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>BEAUTY </p>
                            <p className="lead" style = {{textAlign : "justify", textIndent : "20px"}}>Marcella hurls the phone. Celitta recoils. Exhaling deeply, Marcella pours tequila. Fingers run through luxurious blonde hair. Massaging eyelids and brow, Marcella eases her mind back into its rhythmic flow, gradually recovering a groove and intimacy with her thoughts and journal. She writes. </p>
                            <p className="lead" style = {{textAlign : "justify", textIndent : "20px"}}>As Marcella writes, her mind's eye is heard in a dreamy voice-over. The people she writes of elegantly step out from amidst their shadings and shadows. The Great Escherian architecture continues evolving. As each person begins their turn on the stage, Marcella defines them in words, figures bathing in filmic memories cast large on nearby walls. Some rest in solitude, some partake in emotion or action. Escheria easily evolves and revolves; so too do their relations with each other. Pasts and presents collude. Sometimes, they collide.</p>
                            <p className="lead" style = {{textAlign : "justify", textIndent : "20px"}}>Dreamy voice-over: Characters and their misty filmic memories make serial, episodic entrances:</p>

                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", fontWeight : "800"}}><b><i>MARCELLA</i></b></p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}><i>Momma's a good woman / Kinked by her mind</i></p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}><i>Daddy's choked up / Quiet, but kind</i></p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}><i>Tio is gay / N' I could care less / Amongst all my friends / Tio's the best</i></p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}><i>Antonio his lover / Daddy's best friend / Tony &amp; Tio love under cover / Boyhood w/o end</i></p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}><i>Enrique's The Beast / Many want to kill / Beauty doesn't know all the truth / But one day Beauty will</i></p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}><i>James is a man / Him I deeply understand / The first one to touch me / Below-above with hands</i></p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}><i>Grandmother Muriela / Abuelo Alberto / I never felt their hands</i></p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}><i>Who else lives in my world? / On the surface of the sun / Live The Mad Pride Girls . . .</i></p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", fontWeight : "800", padding : "30px"}}><i>"Words, Words, Beautiful Words!"  / "Emotional Choreography"</i></p>
                            <p className="lead" style = {{textAlign : "justify", textIndent : "20px"}}>Amidst the rising set, blue-light and bass-line, characters step and tap exuding a cut in their strut, a graceful glide in their stride. Lithe bodies slink and krunk. Delta-bass rumination textures into an anomalous antiphony, an anticipatory overture, childlike, yet sexy. Rhythmically melding two worlds:  Words, Words, Beautiful Words! and Emotional Choreography. Intense. A five-minute thrill ride. Melodious sing-a-song prelude; fist-stark, set-the-table antiphony. The Mad Pride Girls swirl and sing, belting a segue into an exciting, anxious Live and Let Die bridge, spirit establishing the Marcellian tale: A beautiful, thinking-girl's warrioress-to-be. Marcella may not yet know it. The music informs.</p>
                            <p className="lead" style = {{textAlign : "justify", textIndent : "20px"}}>Celitta fast-skates by, singing out on her long, stickered-skateboard, proclaiming to the world her love for Words, Words, Beautiful Words! See how she flys! Across the stage, up a walkway, down a passage, throughout the Great Escher, Celitta's capable balance knows neither fear nor limits. Celitta loves the world. The world loves Celitta. In Emotional Choreograpy's antiphony, Celitta's players signify antiphonic contrast and respect. Excitedly, Celitta lifts the pace, race-skating rendevous with destiny. Marcella writes, furiously.</p>

                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", fontWeight : "800"}}>CELITTA</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>I'm a Fish!</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>I'm a Frog!</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>I'm a Whale!</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", paddingTop : "20px"}}>I'm a Fish!</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>I'm a Frog!</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>I'm a Whale!</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", paddingTop : "20px"}}>I'm a Fish!</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>I'm a Frog!</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>I'm a Whale!</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", paddingTop : "20px"}}>Gonna sing you </p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>A Won-Derful Tale!</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", fontWeight : "800"}}>MARIA</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}><i>You are my daughter / So much I ought to / Share with you</i></p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", fontWeight : "800"}}>CELITTA</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>The waters are rising,</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>The clouds are inspiring,</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>Grab on n' cling to the rails!</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", paddingTop : "20px"}}>Three scoops!</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>Three scoops!</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>Three scoops of  Ice Cream!</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", paddingTop : "20px"}}>'S a magical dream;</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>Come quickly,</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>Let us sail!!</p>

                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", fontWeight : "800"}}>TIO</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}><i>You're my Celitta / Verdade pretty neat-a  / You really are  / The Girl of My Dreams</i></p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", fontWeight : "800"}}>CELITTA</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>Let's write a song!</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>Won't you please come along?</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>I've words</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>To last the day long!</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", paddingTop : "20px"}}>I'm a Fish!</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>I'm a Frog!</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>I'm a Whale!</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", fontWeight : "800"}}>ENRIQUE</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}><i>Are you my daughter? / Who knows? / But I ought to </i></p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}><i>After all I've bought you / I only want you / Here in my arms</i></p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", fontWeight : "800"}}>CELITTA</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>I'm a Fish!</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>I'm a Frog!</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>I'm a Whale!</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", paddingTop : "20px"}}>I'm a Fish!</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>I'm a Frog!</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>I'm a Whale!</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", paddingTop : "20px"}}>Gonna sing you </p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>A Won-Derful Tale!</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", fontWeight : "800"}}>VICTOR</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}><i>I am your Daddy / Though I'm feelin' badly / Silenced away / Resigned to this world</i></p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", fontWeight : "800"}}>CELITTA</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>These Words,</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>They come</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>From my heart!</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", paddingTop : "20px"}}>Whence they end,</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>I know not</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>Nor their start!</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", fontWeight : "800"}}>ANTONIO</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}><i>Don't worry, Tio / Even if they all know / The love we share / For people we care</i></p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", fontWeight : "800"}}>CELITTA</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>Yet they pour</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>From my mind,</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>In the darkness</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>Of time;</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", paddingTop : "20px"}}>Each one hurled</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>From my lips</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>Like a dart!</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", fontWeight : "800"}}>JAMES</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}><i>Luvangelslowly / Fly with you boldly / The stars are all fallin' / O yea . . .</i></p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", fontWeight : "800"}}>CELITTA</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>And they rhyme . . .</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>And they rhyme . . .</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>And they rhyme . . .</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", paddingTop : "20px"}}>Most of the time . . . </p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>Or Not!</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>I'm a Fish!</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>I'm a Frog!</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>I'm a Whale!</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", paddingTop : "20px"}}>Gonna sing</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>You a Won-Derful Tale!</p>
                            <p className="lead" style = {{textAlign : "justify", textIndent : "20px"}}>Rising magically from her skateboard, circling above Marcella like the sprite she is, Celitta fashions a great oversized pencil into her small hands, onto a great pad scrawling the calligraphy of Marcella's thoughts. Whoosh! The words appear in the air one by one. Her face nodding intense agreement, Marcella's unspoken voice narrates a path for the critical eye’s widening aperture . . . GOT IT!</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", fontWeight : "800"}}>MARCELLA</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", fontFamily : "Mistral"}}><i>"No one can know all things. Still, it is incumbent upon us to recognize truth as it is revealed to us."</i></p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", fontWeight : "800"}}>ENSEMBLE</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>You're full of Words,</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>Full of words,</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>Full of words,</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>Little Bird!</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", paddingTop : "20px"}}>Words!</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>Words!</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>Beautiful Words!</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", paddingTop : "20px"}}>From the morning</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>To the night,</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>With the stars</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>Shining bright;</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", paddingTop : "20px"}}>Each,</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>A Marcellian</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>Won-derful Word!</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", paddingTop : "20px"}}>It's a</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>Marcellian</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>Gal-axy of Words!</p>
                            <p className="lead" style = {{textAlign : "justify", textIndent : "20px"}}>Celitta flies and skates about, flitting to and fro, enjoying her reverie while overseeing Marcella's continued writing fury.</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", fontWeight : "800"}}>CELITTA</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>I'm a Fish!</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>I'm a Frog!</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>I'm a Whale!</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", paddingTop : "20px"}}>I'm a Fish!</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>I'm a Frog!</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>I'm a Whale!</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", paddingTop : "20px"}}>Gonna sing</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>You a Won-Derful Tale! </p>
                            

                        
                        
                        
                        
                            
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>Tigresses in imaginary cages.</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>Marcella, Celitta, and The Mad Pride Girls rush to each other en unison.</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>Backs to backs, encircling, searching the night for danger.</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>Cobalt-blue essence flickers.</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>Flicker.</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>Extinguish.</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px"}}>Darkness.</p>
                            <p className="lead" style = {{textAlign : "center", textIndent : "20px", wordSpacing : "10px"}}>* * * *</p>

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
            
                <div style={{ position: "relative", height: "100vh", width : "100%" }}>
                    <ReactReader
                        url={MarcellaEBook}
                        title="Marcella"
                        location={location}
                        locationChanged={this.onLocationChanged}
                        // getRendition={this.getRendition}
                    />
                </div>

                <hr style = {{maxWidth : "100%", marginBlockEnd: "20px", marginBlockStart: "0em", backgroundColor : "rgb(222, 225, 230)"}}></hr>

            </React.Fragment>
         );
    }
}
 
export default Marcella;