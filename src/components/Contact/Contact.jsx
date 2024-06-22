import { FaPhoneAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import css from "./Contact.module.css";
import { RiDeleteBinFill } from "react-icons/ri";
import { useDispatch } from "react-redux";

import { openModal } from "../../redux/modal/slice";

export default function ContactItem({ contact: { id, name, number } }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(openModal(id));
  };
  return (
    <div className={css.fullContact}>
      <div className={css.contactInfo}>
        <p>
          <IoPerson /> {name}
        </p>
        <p>
          <FaPhoneAlt /> {number}
        </p>
      </div>

      <button className={css.btn} onClick={handleDelete}>
        <RiDeleteBinFill style={{ fontSize: 30 }} />
      </button>
    </div>
  );
}
