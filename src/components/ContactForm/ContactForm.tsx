import { useStyles } from "./ContactForm.styles";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ContactDetails, initialValues, schema } from "./config";
import { FaArrowRight } from "react-icons/fa";

interface Props {}

const ContactForm: React.FC<Props> = () => {
  const classes = useStyles();

  const handleSubmit = (values: ContactDetails) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className={classes.formInput}>
            <label htmlFor="name">Name</label>
            <Field type="string" name="name" placeholder="Thierno Barry" />
            <ErrorMessage name="name" component="div" />
          </div>
          <div className={classes.formInput}>
            <label htmlFor="email">Email</label>
            <Field
              type="string"
              name="email"
              placeholder="thiernobarry554@gmail.com"
            />
            <ErrorMessage name="email" component="div" />
          </div>
          <div className={classes.formInput}>
            <label htmlFor="topic">Topic</label>
            <Field type="string" name="topic" placeholder="FullStack | DevSecOps" />
            <ErrorMessage name="topic" component="div" />
          </div>
          <div className={classes.formInput}>
            <label htmlFor="message">Message</label>
            <Field
              type="string"
              name="message"
              component="textarea"
              placeholder="Tell me what your project or questions is about"
              rows={3}
            />
            <ErrorMessage name="message" component="div" />
          </div>
          <div className={classes.formInput}>
            <button
              type="submit"
              disabled={isSubmitting}
              className={classes.formButton}
            >
              <span>Send it</span>
              <FaArrowRight />
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
