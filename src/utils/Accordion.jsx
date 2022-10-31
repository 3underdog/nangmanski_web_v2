import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';

function Accordion({ children, tag = 'li', title, active }) {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const accordion = useRef(null);
  const Component = tag;

  useEffect(() => {
    setAccordionOpen(active);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accordion]);

  return (
    <Component>
      <button
        className='h5 md:h4 flex w-full items-center border-t border-gray-200 py-5 text-left font-medium'
        onClick={(e) => {
          e.preventDefault();
          setAccordionOpen(!accordionOpen);
        }}
        aria-expanded={accordionOpen}
      >
        <svg
          className='text-bold mr-8 -ml-12 h-4 w-4 shrink-0 fill-current text-blue-500'
          viewBox='0 0 16 16'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect
            y='7'
            width='16'
            height='2'
            rx='1'
            className={`origin-center transform transition duration-200 ease-out ${
              accordionOpen && '!rotate-180'
            }`}
          />
          <rect
            y='7'
            width='16'
            height='2'
            rx='1'
            className={`origin-center rotate-90 transform transition duration-200 ease-out ${
              accordionOpen && '!rotate-180'
            }`}
          />
        </svg>
        <span>{title}</span>
      </button>
      <div
        ref={accordion}
        className='overflow-hidden text-gray-600 transition-all duration-300 ease-in-out'
        style={
          accordionOpen
            ? { maxHeight: accordion.current.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <p className='h6 md:h5 pb-5 leading-6 md:leading-8'>{children}</p>
      </div>
    </Component>
  );
}

export default Accordion;

Accordion.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string.isRequired]),
  tag: PropTypes.string,
  title: PropTypes.string.isRequired,
  active: PropTypes.bool,
};
