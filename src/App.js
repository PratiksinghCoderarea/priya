import React from "react";
import "./App.css";

import colors from "./utils/colors";
import Screen from "./components/Screen";

import first from "./assets/first.png";
import second from "./assets/second.png";
import pandinha_brava from "./assets/pandinha_fofa_cara_de_brava.gif";
import pandinha from "./assets/pandinha.gif";
import ursinho_S2_pandinha from "./assets/ursinho_S2_pandinha.gif";
import ursinha_chorando from "./assets/ursinha_chorando.gif";
import ursinho_chorando from "./assets/ursinho_chorando.gif";
import pandinha_martelo from "./assets/pandinha_martelo.png";
import ursinho_catucando_pandinha from "./assets/ursinho_catucando_pandinha.gif";
import ursinho_coracao from "./assets/ursinho_coracao.jpg";
import pandinha_coracao from "./assets/pandinha_coracao.gif";
import ursinhos_apaixonados from "./assets/ursinhos_apaixonados.gif";
import ursinhos_caminhada from "./assets/ursinhos_caminhada.jpg";
import ursinhos_fotinha from "./assets/ursinhos_fotinha.jpg";
import ursinhos_bebida from "./assets/ursinhos_bebida.gif";
import ursinha_mordidas from "./assets/ursinha_mordidas.gif";
import ursinho_pegando_no_sono from "./assets/ursinho_pegando_no_sono.gif";
import ursinhos_dormindo from "./assets/ursinhos_dormindo.gif";
import priyapratik from "./assets/priyapratik.jpg";

const App = () => {

  return (
    <div className="main">
    <Screen
      imageUrl={first}
      bgColor={colors.red}
      textColor={colors.white}
      title="These are bubu(tu upr bethi h mere) and dudu(db gya me tere neeche)"
      text="They have known each other for a long time, and they were friends, but today they are more than that... they are dating."
      btnText="Learn more"
      sequency="1"
    />
    <Screen
      imageUrl={second}
      bgColor={colors.blue}
      textColor={colors.white}
      title="They meet often less 😔"
      text="Dudu and Bubu are the sweetest pair ever! 🤍 bubu, the little white cutie, is full of energy and always ready for a warm hug, while dudu, the calm and cuddly brown bear, loves to keep Dudu safe and happy. Whether they’re on tiny adventures with their matching backpacks or just snuggling close, Dudu and Bubu share an unbreakable bond filled with love and endless cuteness. 🐻💖"
      btnText="Continue"
      sequency="2"
    />
    <Screen
      imageUrl={pandinha}
      bgColor={colors.pink}
      textColor={colors.white}
      title="bubu"
      text="bubu is very cute, always cares about others, but she has no patience at all. And she has a different way of showing her feelings..."
      btnText="Continue"
      sequency="3"
    />
    <Screen
      imageUrl={ursinho_S2_pandinha}
      bgColor={colors.red}
      textColor={colors.white}
      title="bubu ♥ bubu"
      text="As I said before, these two are now a couple. They are not perfect... but they always support each other and overcome problems together."
      btnText="Continue"
      sequency="4"
    />
    <Screen
      imageUrl={ursinha_chorando}
      bgColor={colors.purple}
      textColor={colors.white}
      title="Sad bubu"
      text="Dudu often cries over little things, but whenever Bubu cries, Dudu always makes her laugh and feel better. ❤️"
      btnText="Continue"
      sequency="5"
    />
    <Screen
      imageUrl={ursinho_chorando}
      bgColor={colors.green}
      textColor={colors.white}
      title="Sad dudu"
      text="Sometimes it's dudu who gets sad about some problems, and then bubu comes with her love and cuteness to help dudu when he's feeling down. :)"
      btnText="Continue"
      sequency="6"
    />
    <Screen
      imageUrl={pandinha_martelo}
      bgColor={colors.blue}
      textColor={colors.white}
      title="Slow bubu"
      text="bubu is slow and sometimes doesn't understand what dudu meant, completely misinterpreting it..."
      btnText="Continue"
      sequency="7"
    />
    <Screen
      imageUrl={pandinha_brava}
      bgColor={colors.yellow}
      textColor={colors.white}
      title="bubu's Patience"
      text="bubu is VERY LOVING, but her lack of patience is just as strong... sometimes she gets irritated because dudu is slow and he is very much buudhu haina baby 😅."
      btnText="Continue"
      sequency="8"
    />
    <Screen
      imageUrl={ursinho_catucando_pandinha}
      bgColor={colors.purple}
      textColor={colors.white}
      title="bubu's Persistence"
      text="bubu doesn’t like to be direct, so dudu keeps bothering her until she finally speaks..."
      btnText="Continue"
      sequency="9"
    />
    <Screen
      imageUrl={ursinho_coracao}
      bgColor={colors.blue}
      textColor={colors.white}
      title="dudu's Love"
      text="After hours of trying to explain, dudu apologizes for being slow and tells bubu how much he loves her."
      btnText="Awwwwn <3"
      sequency="10"
    />
    <Screen
      imageUrl={pandinha_coracao}
      bgColor={colors.yellow}
      textColor={colors.white}
      title="bubu's Love"
      text="inspite of having so much imperfections in dudu,bubu accepts dudu as perfect for her and love him more than anything ❤️"
      btnText="Awwwwn <3"
      sequency="11"
    />
    <Screen
      imageUrl={ursinhos_apaixonados}
      bgColor={colors.red}
      textColor={colors.white}
      title="After that..."
      text="After everything is resolved, they are happy again... and do many things together as friends and lovers."
      btnText="Continue"
      sequency="12"
    />
    <Screen
      imageUrl={ursinhos_caminhada}
      bgColor={colors.pink}
      textColor={colors.white}
      title="They Walk Together"
      text="They love walking together, laughing a lot, they love hold each other's hands and enjoy the moment."
      btnText="Walking..."
      sequency="13"
    />
    <Screen
      imageUrl={ursinhos_fotinha}
      bgColor={colors.green}
      textColor={colors.white}
      title="Now They Take Pictures Together"
      text="bubu always wants to look perfect in photos and always asks dudu to retake them ~laughs"
      btnText="More pictures..."
      sequency="14"
    />
    <Screen
      imageUrl={ursinhos_bebida}
      bgColor={colors.purple}
      textColor={colors.white}
      title="They Drink Together"
      text="dudu and bubu love drinking together and enjoying good moments with some music.we will do it someday jaan remember our promise we will have a drink together"
      btnText="Drinks later..."
      sequency="15"
    />
    <Screen
      imageUrl={ursinha_mordidas}
      bgColor={colors.blue}
      textColor={colors.white}
      title="bubu Playing with dudu"
      text="It looks fun from here hahaha... for bubu, of course. Look at poor dudu! Look at bubu's face! ~poor_guy"
      btnText="Bites later..."
      sequency="16"
    />
    <Screen
      imageUrl={ursinho_pegando_no_sono}
      bgColor={colors.purple}
      textColor={colors.white}
      title="At Night"
      text="But every night, when bubu can't stay awake talking to dudu anymore, they say goodnight and pretend to sleep together,And sad dudu kiss bubu's photo and sleep"
      btnText="Naps later..."
      sequency="17"
    />
    <Screen
      imageUrl={ursinhos_dormindo}
      bgColor={colors.blue}
      textColor={colors.white}
      title="And Finally, They Sleep"
      text="See? They have tough moments sometimes, they cry, they get irritated... but when everything falls into place, they love each other so much and laugh together."
      btnText="They Sleep"
      sequency="18"
    />
    <Screen
      imageUrl={priyapratik}
      bgColor={colors.pink}
      textColor={colors.white}
      title="Happy Valentine's Day"
      text="My jaan i love you so much and i am so lucky to have you in my life you are my everything and i promise to be with you forever and ever and i will always love you and take care of you and i will always be there for you and i will always support you and i will always make you happy and i will always make you smile and i will always make you laugh and i will always make you feel special and i will always make you feel loved and i will always make you feel like a princess and i will always make you feel like a queen and i will always make you feel like the most beautiful
      i love you jaan ❤️🧡
      
      "
      btnText="The End"
      sequency="19"
    />
  </div>
  
  );
};

export default App;
