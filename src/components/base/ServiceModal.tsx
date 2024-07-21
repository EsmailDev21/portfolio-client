import { motion } from "framer-motion";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  Key,
} from "react";

const ServiceModal = ({ isOpen, onClose, service }: any) => {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <motion.div
        className=" bg-opacity-20 backdrop-blur-md bg-slate-800 max-h-[80vh] overflow-y-auto rounded-lg p-6 shadow-lg w-full max-w-2xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-turquoise to-teal-400">
            {service.title}
          </h3>
          <button
            className="w-12 text-gray-500 text-lg p-2 bg-slate-700 rounded-full hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
            onClick={onClose}
            aria-label="Close Modal"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="mb-4">
          <h4 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-turquoise to-teal-400">
            About This Service
          </h4>
          <p className="text-gray-300">{service.detailedDescription}</p>
        </div>
        <div className="mb-4">
          <h4 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-turquoise to-teal-400">
            FAQ
          </h4>
          {service.faq && service.faq.length > 0 ? (
            service.faq.map(
              (
                item: {
                  question:
                    | string
                    | number
                    | boolean
                    | ReactElement<any, string | JSXElementConstructor<any>>
                    | Iterable<ReactNode>
                    | ReactPortal
                    | null
                    | undefined;
                  answer:
                    | string
                    | number
                    | boolean
                    | ReactElement<any, string | JSXElementConstructor<any>>
                    | Iterable<ReactNode>
                    | ReactPortal
                    | null
                    | undefined;
                },
                index: Key | null | undefined
              ) => (
                <p key={index} className="text-gray-300 mb-2">
                  Q: {item.question} <br /> A: {item.answer}
                </p>
              )
            )
          ) : (
            <p className="text-gray-300">No FAQs available.</p>
          )}
        </div>
        <div className="mb-4">
          <h4 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-turquoise to-teal-400">
            Reviews
          </h4>
          {service.reviews && service.reviews.length > 0 ? (
            service.reviews.map(
              (
                review: {
                  name:
                    | string
                    | number
                    | boolean
                    | ReactElement<any, string | JSXElementConstructor<any>>
                    | Iterable<ReactNode>
                    | ReactPortal
                    | null
                    | undefined;
                  review:
                    | string
                    | number
                    | boolean
                    | ReactElement<any, string | JSXElementConstructor<any>>
                    | Iterable<ReactNode>
                    | ReactPortal
                    | null
                    | undefined;
                },
                index: Key | null | undefined
              ) => (
                <p key={index} className="text-gray-300 mb-2">
                  {review.name}: "{review.review}"
                </p>
              )
            )
          ) : (
            <p className="text-gray-300">No reviews yet!</p>
          )}
        </div>
        <div className="mb-4">
          <h4 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-turquoise to-teal-400">
            Pricing
          </h4>
          {service.pricing && service.pricing.length > 0 ? (
            service.pricing.map(
              (
                price: {
                  package:
                    | string
                    | number
                    | boolean
                    | ReactElement<any, string | JSXElementConstructor<any>>
                    | Iterable<ReactNode>
                    | ReactPortal
                    | null
                    | undefined;
                  price:
                    | string
                    | number
                    | boolean
                    | ReactElement<any, string | JSXElementConstructor<any>>
                    | Iterable<ReactNode>
                    | ReactPortal
                    | null
                    | undefined;
                  description:
                    | string
                    | number
                    | boolean
                    | ReactElement<any, string | JSXElementConstructor<any>>
                    | Iterable<ReactNode>
                    | ReactPortal
                    | null
                    | undefined;
                },
                index: Key | null | undefined
              ) => (
                <p key={index} className="text-gray-300 mb-2">
                  {price.package} Package: {price.price} - {price.description}
                </p>
              )
            )
          ) : (
            <p className="text-gray-300">No pricing information available.</p>
          )}
        </div>
        <button
          className="bg-gradient-to-r from-turquoise to-teal-400 hover:from-teal-400 hover:to-teal-600 text-slate-950 font-bold py-2 px-4 rounded-full w-full"
          onClick={() => {
            alert(
              "Soon , use the email or linkedIn accounts in the contact section instead!"
            );
            onClose();
          }}
        >
          Order Now
        </button>
      </motion.div>
    </div>
  );
};

export default ServiceModal;
