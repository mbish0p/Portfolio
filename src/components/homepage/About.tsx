import React from "react";

const About = () => {
  return (
    <div className="about--container container aboutContainer">
      <div className="head">
        <h2 className="header--h2 -white mb-4 md:mb-0">About me</h2>
        <p className="paragraph--component -big -violet subtitle">
          who I&nbsp;am
        </p>
      </div>
      <div className="content">
        <div className="avatar--wrapper">
          <div className="avatar" />
        </div>
        <div className="description">
          <p className="paragraph--component -lead mb-6">
            I'm Mateusz&nbsp;and I'm&nbsp;
            <span className="uppercase -violet">Webdeveloper</span>
          </p>
          <p className="paragraph--component main">
            Morbi gravida, neque vitae gravida pellentesque, velit erat ultrices
            leo, sed efficitur mi lorem ut lacus. Nulla feugiat neque eget enim
            tristique rutrum. Nam a purus laoreet, tristique mauris at, dapibus
            elit. Phasellus elementum bibendum lectus facilisis lacinia. Etiam
            et scelerisque augue, nec viverra velit. Quisque sodales vitae
            libero id cursus. Duis sit amet ipsum id risus aliquet auctor nec
            non mi. Maecenas massa ligula, consectetur at diam non, porta
            gravida dolor. Nulla ac augue eu purus varius mattis vel iaculis
            ante. Sed laoreet arcu ipsum, sit amet laoreet nunc ullamcorper ac.
            Donec mattis nibh mi. Pellentesque venenatis hendrerit elit, id
            euismod purus vestibulum sed. Etiam id odio quis enim laoreet
            lobortis sed nec diam.
          </p>

          <button className="btn--component mt-12">Download CV</button>
        </div>
      </div>
    </div>
  );
};

export default About;
