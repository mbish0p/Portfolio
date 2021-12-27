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
                      Od czystości i stopnia twardości wody zależy smak i
                      klarowność piwa. Kultowe czeskie piwo Pilsner Urquell
                      warzy się tradycyjnie na bardzo miękkiej wodzie, zaś
                      niektóre piwa angielskie powstają na wodzie twardej.
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
                  SŁÓD
                </h4>
                <div ref={ref} className="ingredient--container">
                  <div className="content">
                    <p className="paragraph--component mb-4">
                      Słód powstaje z ziaren zbóż - najczęściej z jęczmienia,
                      jednak zdarzają się także piwa powstałe na bazie pszenicy,
                      kukurydzy, żyta, owsa, prosa, a nawet ryżu. Ziarna
                      poddawane są kiełkowaniu i suszeniu, które polegają na
                      poddawaniu go pod działanie wysokiej temperatury przy
                      odpowiedniej wilgotności. Ten proces w dużej mierze
                      decyduje o charakterze i stylu piwa, które powstanie na
                      końcu.
                    </p>
                    <p className="paragraph--component mb-4">
                      Kolor i smak gotowego słodu zależy nie tylko od ziarna,
                      jego rodzaju i jakości, ale też od metody suszenia. Groll,
                      twórca kultowego czeskiego Pilsnera, jako pierwszy uzyskał
                      słód poprzez osuszanie ziaren gorącym powietrzem.
                      Wcześniej najczęściej stosowaną metodą było przypalanie
                      lub prażenie ziaren nad otwartym płomieniem. W zależności
                      od paliwa (różne rodzaje drewna lub torf) gotowy słód miał
                      dymny, czasem wędzony posmak. Suszenie ziaren gorącym
                      powietrzem wydobywa ich czystą słodycz.
                    </p>
                    <p className="paragraph--component mb-4">
                      Jednak jakość piwa zaczyna się jeszcze wcześniej: ważne są
                      warunki do uprawy zboża. Morawy, obszar leżący w
                      południowo-wschodnich Czechach, nie przypadkowo znane są
                      jako „stolica słodu”. Żyzna, bogata gleba dobrze trzyma
                      wodę, uprawy chmielu otrzymują odpowiednią ilość słońca i
                      deszczu, a płaski teren idealnie nadaje się do zbiorów.
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
                      Szyszki chmielu, a dokładniej zawarte w nich kwasy i
                      oleje, nadają piwu aromat, smak i gorycz. Chmiel jest jak
                      przyprawa, od której w dużym stopniu zależą dokładne cechy
                      dowolnego piwa. Kiedy w 1842 roku powstawał pierwszy na
                      świecie złoty pilzner, jego twórca, Joseph Groll, wybrał
                      chmiel Saaz z powodu jego nieco pikantnego aromatu. Oleje
                      z chmielu Saaz są przyczyną lekkiego ziołowego zapachu
                      Pilsnera. Podczas jego warzenia chmiel dodawany jest aż
                      trzykrotnie, dzięki czemu nadaje piwu nie tylko
                      charakterystyczną goryczkę, ale też głęboki aromat.
                    </p>
                    <p className="paragraph--component mb-4">
                      Twórcy najlepszych piw dokładnie wybierają miejsce, w
                      którym uprawia się chmiel, i jego odmianę. Kiedy chmiel
                      dojrzeje, kombajny objeżdżają pola, zbierając go do
                      przyczep. Następnie, już w przetwórni, szyszki są
                      oddzielane od liści i łodyg. Końcowe etapy to powolne
                      suszenie, pakowanie i przewóz do browaru.
                    </p>
                    <p className="paragraph--component mb-4">
                      Dobrą tradycją jest ręczne zbieranie i oddzielanie szyszek
                      od liści i łodyg - tak dzieje się np. w procesie
                      powstawania Pilsnera Urquella, kiedy zajmują się tym
                      tapsterzy - a zatem osoby, które następnie odpowiadają za
                      jakość trunku serwowanego w Tankovnych. Dzięki temu mogą
                      oni poznać “swój” chmiel z bliska, a ich wiedza o trunku,
                      który serwują, ma praktyczny charakter od samego początku
                      aż do końca - ponieważ każdy tapster doświadczył podczas
                      swojego szkolenia każdego etapu powstawania piwa.
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
                  DROŻDŻE
                </h4>
                <div ref={ref} className="ingredient--container">
                  <div className="content">
                    <p className="paragraph--component mb-4">
                      Są używane do fermentacji piwa, a zatem dodawane w
                      końcowym etapie procesu piwowarstwa. Wyróżnia się drożdże
                      dolnej i górnej fermentacji. Piwa powstałe z
                      wykorzystaniem drożdży dolnej fermentacji zbiorczo mianuje
                      się lagerami, zaś te będące efektem użycia drożdży górnej
                      fermentacji nazywa się piwami ale. Drożdże górnej
                      fermentacji pracują w wyższych temperaturach, fermentują
                      dość szybko i wzbogacają piwo o nuty przyprawowe,
                      kwiatowe, ziołowe, czy owocowe. Z kolei wykorzystywanie
                      drożdży dolnej fermentacji wymaga specjalnych warunków -
                      głębokich piwnic lub sprzętu chłodniczego. Ich użycie
                      skutkuje powstaniem piwa czystego pod względem aromatu, co
                      ma związek z produkowaniem minimalnych ilości związków
                      aromatycznych i wyższych alkoholi. Dzięki temu podczas
                      picia to słód i chmiel nadaje aromaty i smaki, które
                      czujemy jako pierwsze. To Josef Groll zrewolucjonizował
                      sztukę piwowarstwa, używając jako pierwszy drożdży dolnej
                      fermentacji - obecnie powstałe w ten sposób piwa stanowią
                      ok. 90 proc. wszystkich piw na świecie.
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
