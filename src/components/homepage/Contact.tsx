import React from "react";

//libraries
import { toast, ToastContainer } from "react-toastify";
import { useForm } from "react-hook-form";

//styles
import "react-toastify/dist/ReactToastify.min.css";

const Contact = () => {
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

  Object.keys(errors).map((key) => {
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

  const onSubmit = () => {
    toast.success("🦄 Wow so easy!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="contact--container container">
      <div className="head">
        <h2 className="header--h2 -white mb-6 md:mb-2">Contact me</h2>
        <p className="paragraph--component -big -violet subtitle">
          available for hire and open to any ideas of cooperation
        </p>
      </div>

      <div className="form--container">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form--column">
            <div className="controlwrapper">
              <input
                className="input"
                type="text"
                id="name"
                {...register("name", { required: true })}
              />
              <label className="form--label" htmlFor="name">
                Name
              </label>
            </div>
            <div className="controlwrapper">
              <input
                className="input"
                type="email"
                id="email"
                // @ts-ignore
                oninvalid={(e) => InvalidMsg(e)}
                oninput={(e: any) => InvalidMsg(e)}
                {...register("email", { required: true })}
              />
              <label className="form--label" htmlFor="email">
                E-mail
              </label>
            </div>
            <div className="controlwrapper">
              <input
                className="input"
                type="Phone"
                id="phone"
                {...register("phone", { required: true })}
              />
              <label className="form--label" htmlFor="phone">
                Phone
              </label>
            </div>
          </div>
          <div className="from--column">
            <div className="controlwrapper">
              <textarea
                className="input -textarea"
                id="message"
                {...register("message", { required: true })}
              />
              <label className="form--label" htmlFor="message">
                Message
              </label>
            </div>
          </div>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Contact;
