import React from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
    return (
        <div className="pagination">
            <button
                className='btn btn-transparent border-0 text-light me-5'
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                <FontAwesomeIcon icon={faArrowLeft} className='me-3' /> Previous
            </button>
            {Array.from({ length: totalPages }).map((_, index) => (
                <button
                    key={index}
                    onClick={() => handlePageChange(index + 1)}
                    className={currentPage === index + 1 ? "active" : ""}
                >
                    {index + 1}
                </button>
            ))}
            <button
                className='btn btn-transparent border-0 text-light ms-4'
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Next <FontAwesomeIcon icon={faArrowRight}   className='ms-3'/>
            </button>
        </div>
    );
};

export default Pagination;
