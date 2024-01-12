import React from 'react'
import "./index.css"

const CommentFeedback = () => {
    return (
        <>
            <div className="p-0 m-0 position-relative py-5 bg-dark text-dark-50" >
                <section className="banner_sction_title">
                    <div className="heading d-flex my-3">
                        <h3 className="fs-30 color3 fw-bold text-white">Comment Feedback</h3>
                        <p className="fs-15 color3 fw-bold mb-0 text-white">(Optional)</p>
                    </div>
                </section>
                <section className="banner_Sectio1 p-4 feedback-heading">
                    <div className="container ">
                        <div className="suggestion_class">
                            <p className="mb-0">Found an error? Have a suggestion?</p>
                            <p>Fill out the form below  </p>
                        </div>
                    </div>
                </section>
                <section className="banner_section bg-black-theme color3">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="form_banner">
                                    <form >
                                        <div className="inpfiled">
                                            <textarea type="text" placeholder="Enter your feedback here" className="color9" ></textarea>
                                            <div style={{ color: "red" }}>Please write someting</div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="row btn_marg my-4 d-lg-flex d-md-flex justify-content-end">

                    <div className="col-md-2 col-sm-6">
                        <a className="btn text-white" style={{ backgroundColor: "black", marginLeft: "29px" }}>SKIP</a>
                    </div>
                    <div className="col-md-2 col-sm-6">
                        <a className="btn text-white" style={{ backgroundColor: "#8b003a" }} >SEND FEEDBACK</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CommentFeedback