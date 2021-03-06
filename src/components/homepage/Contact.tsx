import React from "react";
import { useState } from "react";

//libraries
import { toast, ToastContainer } from "react-toastify";
import { useForm } from "react-hook-form";
import axios from "axios";

//assets
import submittedGif from "../../images/gif/tenor.gif";

//styles
import "react-toastify/dist/ReactToastify.min.css";

//components
import Loader from "../common/Loader";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const defaultValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues,
  });

  Object.keys(errors).forEach((key) => {
    //@ts-ignore
    const node = errors[key].ref;
    node.parentElement.classList.add("-error");
    node.addEventListener("blur", () =>
      node.parentElement.classList.remove("-error")
    );
  });

  const InvalidMsg = (e: any) => {
    let el = e.currentTarget as HTMLInputElement;
    if (el.validity.typeMismatch) {
      el.setCustomValidity("Please type correct email address");
    } else {
      el.setCustomValidity("");
    }
    return true;
  };

  const onSubmit = async (data: any) => {
    try {
      setLoading(true);
      const response = await axios.post("http://www.mateuszbiskupdev.com/contact", data);
      setLoading(false);
      if (response.status === 200) {
        toast.success(
          <p className="paragraph--component -black">
            Thank you, I will contact with you
          </p>,
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
      }
      setIsSubmitted(true);
    } catch (error: any) {
      let errorMessage = "";
      error.response
        ? (errorMessage = error.response.data.errorMessage)
        : (errorMessage = "Something goes wrong ????");
      toast.error(
        <p className="paragraph--component -black">{errorMessage}</p>,
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    }
  };

  return (
    <div className="contact--container container contactContainer">
      <div className="head">
        <h2 className="header--h2 -white mb-6 md:mb-2">Contact me</h2>
        <p className="paragraph--component -big -violet subtitle">
          available for hire and open to any ideas of cooperation
        </p>
      </div>
      {!isSubmitted ? (
        <div className="form--container">
          <form
            className="form"
            onSubmit={handleSubmit(onSubmit)}
            autoComplete="off"
          >
            <div className="inputs--wrapper">
              <div className="form--column">
                <div className="controlwrapper">
                  <input
                    className="input"
                    type="text"
                    id="name"
                    placeholder=" "
                    autoComplete="off"
                    {...register("name", { required: true })}
                  />
                  <label className="label" htmlFor="name">
                    Name
                  </label>
                </div>
                <div className="controlwrapper">
                  <input
                    className="input"
                    type="email"
                    id="email"
                    placeholder=" "
                    autoComplete="off"
                    // @ts-ignore
                    onInvalid={(e) => InvalidMsg(e)}
                    onInput={(e: any) => InvalidMsg(e)}
                    {...register("email", { required: true })}
                  />
                  <label className="label" htmlFor="email">
                    E-mail
                  </label>
                </div>
                <div className="controlwrapper">
                  <input
                    className="input"
                    type="number"
                    id="phone"
                    placeholder=" "
                    autoComplete="off"
                    {...register("phone", { required: true })}
                  />
                  <label className="label" htmlFor="phone">
                    Phone
                  </label>
                </div>
              </div>
              <div className="form--column">
                <div className="controlwrapper">
                  <textarea
                    className="input -textarea"
                    id="message"
                    placeholder=" "
                    autoComplete="off"
                    {...register("message", { required: true })}
                  />
                  <label className="label" htmlFor="message">
                    Message
                  </label>
                </div>
              </div>
            </div>
            <button className="btn--component mt-4" type="submit">
              Submit
            </button>
          </form>
        </div>
      ) : (
        <img alt="In touch" src={submittedGif} className="submmited--gif" />
      )}
      <ToastContainer />
      <Loader isOpen={loading} />
    </div>
  );
};

export default Contact;
