import React from "react";
import { useState, useEffect, useRef } from "react";

//libraries
import { useTransition, animated, useSpring, config } from "react-spring";

const PickerComponent = () => {
  const [toggleWater, setToggleWater] = useState(false);
  const [toggleCereals, setToggleCereals] = useState(false);
  const [toggleHop, setToggleHop] = useState(true);
  const [toggleYeast, setToggleYeast] = useState(false);

  const defaultAnimationStats = {
    from: {
      opacity: 0,
      transform: "translate3d(100%, 0%, 0)",
      position: "absolute" as "absolute",
    },
    enter: { opacity: 1, transform: "translate3d(0%, 0%, 0)" },
    leave: { opacity: 0, transform: "translate3d(-50%, 0%, 0)" },
  };

  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.clientHeight);
      window.dispatchEvent(new Event("resize"));
    }
  });

  const waterAnimation = useTransition(toggleWater, defaultAnimationStats);
  const cerealsAnimation = useTransition(toggleCereals, defaultAnimationStats);
  const hopAnimation = useTransition(toggleHop, defaultAnimationStats);
  const yeastAnimation = useTransition(toggleYeast, defaultAnimationStats);

  const { y } = useSpring({ y: height + 50, config: config.default });

  const handleClick = (number: number) => {
    setToggleWater(number === 1 ? true : false);
    setToggleCereals(number === 2 ? true : false);
    setToggleHop(number === 3 ? true : false);
    setToggleYeast(number === 4 ? true : false);
  };

  return (
    <div className="component--wrapper">
      <div className="picker--nav">
        <div className="button--wrapper">
          <div
            className={`picker--button ${toggleWater && "-active"}`}
            onClick={() => handleClick(1)}
          ></div>
          <div
            className={`picker--button -cereals ${toggleCereals && "-active"}`}
            onClick={() => handleClick(2)}
          ></div>
          <div
            className={`picker--button -hop ${toggleHop && "-active"}`}
            onClick={() => handleClick(3)}
          ></div>
          <div
            className={`picker--button -yeast ${toggleYeast && "-active"}`}
            onClick={() => handleClick(4)}
          ></div>
        </div>
      </div>
      <animated.div
        className="ingredients--wrapper"
        style={{
          minHeight: y.to((y) => `${y}px`),
        }}
      >
        {waterAnimation(
          (styles, item) =>
            item && (
              <animated.div style={styles}>
                <h4 className="paragraph--component -big text-center mb-8">
                  Woda
                </h4>
                <div ref={ref} className="ingredient--container">
                  <div className="content">
                    <p className="paragraph--component mb-4">
                      Od czysto??ci i stopnia twardo??ci wody zale??y smak i
                      klarowno???? piwa. Kultowe czeskie piwo Pilsner Urquell
                      warzy si?? tradycyjnie na bardzo mi??kkiej wodzie, za??
                      niekt??re piwa angielskie powstaj?? na wodzie twardej.
                    </p>
                  </div>
                </div>
              </animated.div>
            )
        )}
        {cerealsAnimation(
          (styles, item) =>
            item && (
              <animated.div style={styles}>
                <h4 className="paragraph--component -big text-center mb-8">
                  S????D
                </h4>
                <div ref={ref} className="ingredient--container">
                  <div className="content">
                    <p className="paragraph--component mb-4">
                      S????d powstaje z ziaren zb???? - najcz????ciej z j??czmienia,
                      jednak zdarzaj?? si?? tak??e piwa powsta??e na bazie pszenicy,
                      kukurydzy, ??yta, owsa, prosa, a nawet ry??u. Ziarna
                      poddawane s?? kie??kowaniu i suszeniu, kt??re polegaj?? na
                      poddawaniu go pod dzia??anie wysokiej temperatury przy
                      odpowiedniej wilgotno??ci.
                    </p>
                    <p className="paragraph--component mb-4">
                      Kolor i smak gotowego s??odu zale??y nie tylko od ziarna,
                      jego rodzaju i jako??ci, ale te?? od metody suszenia. Groll,
                      tw??rca kultowego czeskiego Pilsnera, jako pierwszy uzyska??
                      s????d poprzez osuszanie ziaren gor??cym powietrzem.
                      Wcze??niej najcz????ciej stosowan?? metod?? by??o przypalanie
                      lub pra??enie ziaren nad otwartym p??omieniem. W zale??no??ci
                      od paliwa (r????ne rodzaje drewna lub torf) gotowy s????d mia??
                      dymny, czasem w??dzony posmak.
                    </p>
                    <p className="paragraph--component mb-4">
                      Jednak jako???? piwa zaczyna si?? jeszcze wcze??niej: wa??ne s??
                      warunki do uprawy zbo??a. Morawy, obszar le????cy w
                      po??udniowo-wschodnich Czechach, nie przypadkowo znane s??
                      jako ???stolica s??odu???. ??yzna, bogata gleba dobrze trzyma
                      wod??, uprawy chmielu otrzymuj?? odpowiedni?? ilo???? s??o??ca i
                      deszczu, a p??aski teren idealnie nadaje si?? do zbior??w.
                    </p>
                  </div>
                </div>
              </animated.div>
            )
        )}
        {hopAnimation(
          (styles, item) =>
            item && (
              <animated.div style={styles}>
                <h4 className="paragraph--component -big text-center mb-8">
                  Chmiel
                </h4>
                <div ref={ref} className="ingredient--container">
                  <div className="content">
                    <p className="paragraph--component mb-4">
                      Szyszki chmielu, a dok??adniej zawarte w nich kwasy i
                      oleje, nadaj?? piwu aromat, smak i gorycz. Chmiel jest jak
                      przyprawa, od kt??rej w du??ym stopniu zale???? dok??adne cechy
                      dowolnego piwa. Kiedy w 1842 roku powstawa?? pierwszy na
                      ??wiecie z??oty pilzner, jego tw??rca, Joseph Groll, wybra??
                      chmiel Saaz z powodu jego nieco pikantnego aromatu. Oleje
                      z chmielu Saaz s?? przyczyn?? lekkiego zio??owego zapachu
                      Pilsnera. Podczas jego warzenia chmiel dodawany jest a??
                      trzykrotnie, dzi??ki czemu nadaje piwu nie tylko
                      charakterystyczn?? goryczk??, ale te?? g????boki aromat.
                    </p>
                    <p className="paragraph--component mb-4">
                      Tw??rcy najlepszych piw dok??adnie wybieraj?? miejsce, w
                      kt??rym uprawia si?? chmiel, i jego odmian??. Kiedy chmiel
                      dojrzeje, kombajny obje??d??aj?? pola, zbieraj??c go do
                      przyczep. Nast??pnie, ju?? w przetw??rni, szyszki s??
                      oddzielane od li??ci i ??odyg. Ko??cowe etapy to powolne
                      suszenie, pakowanie i przew??z do browaru.
                    </p>
                  </div>
                </div>
              </animated.div>
            )
        )}
        {yeastAnimation(
          (styles, item) =>
            item && (
              <animated.div style={styles}>
                <h4 className="paragraph--component -big text-center mb-8">
                  DRO??D??E
                </h4>
                <div ref={ref} className="ingredient--container">
                  <div className="content">
                    <p className="paragraph--component mb-4">
                      S?? u??ywane do fermentacji piwa, a zatem dodawane w
                      ko??cowym etapie procesu piwowarstwa. Wyr????nia si?? dro??d??e
                      dolnej i g??rnej fermentacji. Piwa powsta??e z
                      wykorzystaniem dro??d??y dolnej fermentacji zbiorczo mianuje
                      si?? lagerami, za?? te b??d??ce efektem u??ycia dro??d??y g??rnej
                      fermentacji nazywa si?? piwami ale. Dro??d??e g??rnej
                      fermentacji pracuj?? w wy??szych temperaturach, fermentuj??
                      do???? szybko i wzbogacaj?? piwo o nuty przyprawowe,
                      kwiatowe, zio??owe, czy owocowe. Z kolei wykorzystywanie
                      dro??d??y dolnej fermentacji wymaga specjalnych warunk??w -
                      g????bokich piwnic lub sprz??tu ch??odniczego. Ich u??ycie
                      skutkuje powstaniem piwa czystego pod wzgl??dem aromatu, co
                      ma zwi??zek z produkowaniem minimalnych ilo??ci zwi??zk??w
                      aromatycznych i wy??szych alkoholi. Dzi??ki temu podczas
                      picia to s????d i chmiel nadaje aromaty i smaki, kt??re
                      czujemy jako pierwsze. To Josef Groll zrewolucjonizowa??
                      sztuk?? piwowarstwa, u??ywaj??c jako pierwszy dro??d??y dolnej
                      fermentacji - obecnie powsta??e w ten spos??b piwa stanowi??
                      ok. 90 proc. wszystkich piw na ??wiecie.
                    </p>
                  </div>
                </div>
              </animated.div>
            )
        )}
      </animated.div>
    </div>
  );
};

export default PickerComponent;
