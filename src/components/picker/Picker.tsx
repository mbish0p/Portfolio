import React from "react";
import { useState, useEffect } from "react";

//components
import PickerComponent from "./PickerComponent";
import InfoModal from "../common/modals/InfoModal";

const Picker = () => {
  const modalTitle = "Wawes and SVGs morphing animations";
  const modalDescription =
    "While in some cases you might be able to create SVG morphing animations via CSS3 transition, this component was developed to provide various solutions for working with complex shapes, bringing convenience, resources and clarity to one of the most complex types of animation.";

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  const closeCallback = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="picker--wrapper">
      <div className="container">
        <h2 className="header--h2 mb-16">Option Picker</h2>
        <p className="paragraph--component mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper
          iaculis mi, eu dignissim sem ultrices et. Vivamus libero nisi,
          pulvinar a vehicula vitae, egestas in lectus. Duis diam enim, ultrices
          sit amet feugiat ac, tristique non enim. Proin rhoncus vel nulla at
          placerat. Praesent vestibulum tellus a neque iaculis, vitae viverra
          urna malesuada. Suspendisse id condimentum ligula. Ut vulputate quam
          erat, ac elementum libero tristique in.
        </p>
        <p className="paragraph--component mb-8">
          Integer hendrerit enim quis lorem ultrices, vitae congue diam
          pellentesque. Donec ornare tortor id ipsum pretium pretium. Nunc
          facilisis leo et felis viverra iaculis. Fusce porttitor eros eu
          malesuada aliquet. Mauris enim libero, convallis nec nibh id, bibendum
          cursus ligula. Ut eget ligula id orci iaculis rutrum. In in rutrum
          nunc. Nulla facilisi. Etiam quis commodo odio. Suspendisse ligula
          quam, lobortis vel mi vel, vehicula suscipit nisl. Nullam justo dolor,
          maximus in metus vel, laoreet vulputate ex. Curabitur lacinia purus
          odio, nec gravida nunc pulvinar at. In pharetra fringilla leo nec
          facilisis.
        </p>

        <PickerComponent />
        <div className="yellow--cone mb-12" />

        <p className="paragraph--component mb-8">
          Mauris dignissim ac libero eu ultricies. Nunc eget fringilla magna,
          sit amet efficitur nibh. Aenean urna nulla, facilisis in elit quis,
          tempor ullamcorper leo. Quisque at lobortis justo. Interdum et
          malesuada fames ac ante ipsum primis in faucibus. Vestibulum commodo
          tincidunt ultrices. Vivamus eget commodo orci. Cras efficitur pretium
          nisi eu lobortis. Sed hendrerit, lectus et malesuada consequat, est
          eros fringilla est, non scelerisque lorem lorem ac nibh. Vestibulum
          ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Fusce non nulla ornare, feugiat nulla non, sodales augue.
          Vestibulum pharetra rhoncus purus, in egestas felis fringilla ac.
        </p>
      </div>
      <InfoModal
        open={isModalOpen}
        closeCallback={closeCallback}
        lead={modalTitle}
        description={modalDescription}
      />
    </div>
  );
};

export default Picker;
