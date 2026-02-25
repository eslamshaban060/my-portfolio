"use client";
import { motion } from "framer-motion";
import { useFormik } from "formik";

const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      subject: "",
      email: "",
      message: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const inputClasses = `w-full px-4 py-3 rounded-lg bg-secondary border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors font-body 
    `;
  return (
    <div>
      <motion.form
        className="space-y-4"
        onSubmit={formik.handleSubmit}
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              className={inputClasses}
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              className={inputClasses}
            />
          </div>
        </div>
        <div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formik.values.subject}
            onChange={formik.handleChange}
            className={inputClasses}
          />
        </div>
        <div>
          <textarea
            rows={5}
            name="message"
            placeholder="Your Message"
            value={formik.values.message}
            onChange={formik.handleChange}
            className={inputClasses}
          />
        </div>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          Send Message
        </motion.button>
      </motion.form>
    </div>
  );
};

export default Form;
