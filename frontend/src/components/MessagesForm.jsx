import React, { useEffect, useRef, useState } from 'react';
import { useFormik } from 'formik';

const MessagesForm = () => {
  const [messageFailed, setMessageFailed] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const formik = useFormik({
    initialValues: {
      message: '',
    },
    onSubmit: async () => {
      setMessageFailed(false);

      try {
        console.log(messageFailed);
      } catch (err) {
        formik.setSubmitting(false);
        console.log();
      }
    },
  });

  return (
    <div className="mt-auto px-5 py-3">
      <form onSubmit={formik.handleSubmit} noValidate className="py-1 border rounded-2">
        <div className="input-group has-validation">
          <input
            name="message"
            id="message"
            aria-label="Area"
            placeholder="Введите сообщение..."
            className="border-0 p-0 ps-2 form-control"
            onChange={formik.handleChange}
            value={formik.values.message}
            disabled={formik.isSubmitting}
            ref={inputRef}
          />
          <button type="submit" disabled={formik.isSubmitting} className="btn btn-group-vertical border-0">
            <span className="visually-hidden">Send</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default MessagesForm;
