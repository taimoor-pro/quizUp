import React from 'react';
import "./index.css";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from '../../components/elements/button';
import RatingStar from '../../components/elements/rating';

// Schemas 
const commentSchema = yup.object().shape({
    comment: yup.string().required("Please Enter Comment!"),
});


const surveySchema = yup.object().shape({
    questions: yup.array().of(
        yup.object().shape({
            question: yup.string().required("Question text is required"),
            options: yup.array().when('type', {
                is: 'radio',
                then: yup.array().of(yup.string().required("Please select an option")),
                otherwise: yup.mixed(),
            }),
            type: yup.string().required("Question type is required"),
        })
    ),
});


const CommentFeedback = (props) => {
    const { id, heightt, container, type, design, desription1, description2, placeholder, title1,
        title2, buttons, questions, otherFormSchema, nameOf, onSubmitVal } = props


    const getSchema = () => {
        switch (id) {
            case "survey":
                return surveySchema;
            case "comments":
                return commentSchema;
            default:
                return otherFormSchema;
        }
    };

    const selectedSchema = getSchema();

    const { handleSubmit, watch, formState: { errors }, control } = useForm({
        resolver: selectedSchema ? yupResolver(selectedSchema) : undefined,
    });

    const onSubmit = (values) => {
        const surveyRating1 = values.survey_rating_1;
        const surveyRating2 = values.survey_rating_2;


        console.log("Form Values:", values);
        console.log("Form Errors:", errors);
    };
    console.log("Form Values:", selectedSchema);
    // const watchedValues = watch();
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                {
                    id == "survey" ? (
                        <div className={design && `p-0 m-0 position-relative py-5 bg-dark text-dark-50`}>
                            <section className={design ? "banner_Sectio1 p-4 feedback-heading" : "banner_Sectio1 p-1 feedback-heading"}>
                                <div className={container ? `${container}` : ""}>
                                    <div className="heading d-flex my-3 justify-content-center">
                                        <h3 className="fs-30 color3 fw-bold text-center" style={{ color: "#8b003a" }}>{title1}</h3>

                                    </div>

                                    {
                                        questions?.map((question) => {
                                            return (

                                                <div key={question.id} className="suggestion_class">
                                                    <p className="mb-0 text-white">{question.question}</p>
                                                    {
                                                        Array.isArray(question.options) && (
                                                            question.options.map(op => {
                                                                return (
                                                                    <div key={question.id} className='ms-5'>
                                                                        <Controller
                                                                            name={`radio_${question.id}`}
                                                                            control={control}
                                                                            render={({ field }) => (
                                                                                <>
                                                                                    {console.log("Filesadd", field)}
                                                                                    <input
                                                                                        {...field}
                                                                                        type="radio"
                                                                                        value={op}
                                                                                        required
                                                                                    />
                                                                                    <span className='text-white ms-2'>{op}</span>
                                                                                </>
                                                                            )}
                                                                        />
                                                                        {errors[`radio_${question.id}`] && (
                                                                            <div style={{ color: "red" }}>{errors[`radio_${question.id}`].message}</div>
                                                                        )}

                                                                    </div>
                                                                )
                                                            })
                                                        )
                                                    }

                                                    {
                                                        question.type == "textarea" && (
                                                            <section className="bg-black-theme color3 mt-3 mb-2" style={{ backgroundColor: "#1a1819", color: "white" }}>
                                                                <div className={container ? container : ""}>
                                                                    <div className="row">
                                                                        <div className="col-lg-12">
                                                                            <div className="form_banner">

                                                                                <div className="inpfiled">
                                                                                    <Controller
                                                                                        name={`survey_textarea_${question.id}`}
                                                                                        control={control}
                                                                                        render={({ field }) => (
                                                                                            <>

                                                                                                <textarea
                                                                                                    {...field}
                                                                                                    style={{ height: "15vh" }}
                                                                                                    placeholder={question.placeholder}
                                                                                                    className="color9"
                                                                                                    required
                                                                                                />
                                                                                            </>

                                                                                        )}
                                                                                    />
                                                                                    {errors[`survey_textarea_${question.id}`] && (
                                                                                        <div style={{ color: "red" }}>{errors[`survey_textarea_${question.id}`].message}</div>
                                                                                    )}

                                                                                </div>

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </section>
                                                        )
                                                    }
                                                    {
                                                        question.rating && (
                                                            <>
                                                                <div>
                                                                    <label htmlFor={`rating_${question.id}`} className="text-white">Rate:</label>
                                                                    <RatingStar
                                                                        id={`rating_${question.id}`}
                                                                        name={`survey_rating_${question.id}`}
                                                                        control={control}
                                                                        errors={errors}
                                                                    />
                                                                </div>
                                                            </>
                                                        )
                                                    }

                                                </div>

                                            )
                                        })
                                    }


                                </div>

                            </section>



                        </div>) : (

                        <div className={design && `p-0 m-0 position-relative py-5 bg-dark text-dark-50`}>

                            <section className="banner_sction_title">
                                <div className="heading d-flex my-3">
                                    <h3 className="fs-30 color3 fw-bold text-white" style={{ margin: id == "updload" && "2rem 8rem" }}>{title1}</h3>
                                    <p className="fs-15 color3 fw-bold mb-0 text-white">{title2}</p>
                                </div>
                            </section>

                            {
                                id === "comments" && (
                                    <>
                                        <section className={design ? "banner_Sectio1 p-4 feedback-heading" : "banner_Sectio1 p-1 feedback-heading"}>
                                            <div className={container ? container : ""}>
                                                <div className="suggestion_class">
                                                    <p className="mb-0">{desription1}</p>
                                                    <p>{description2}</p>
                                                </div>
                                            </div>
                                        </section>

                                        <section className={design ? "banner_section bg-black-theme color3" : "banner_section_pad bg-black-theme color3"} >
                                            <div className={container ? container : ""}>
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="form_banner">

                                                            <div className="inpfiled">
                                                                <Controller
                                                                    name="comment"
                                                                    control={control}

                                                                    id={id}
                                                                    render={({ field }) => (
                                                                        <>

                                                                            <textarea

                                                                                {...field}
                                                                                id={id}

                                                                                style={{ height: heightt ? heightt : "15vh" }}
                                                                                placeholder={placeholder}
                                                                                className="color9"
                                                                                required
                                                                            />
                                                                        </>


                                                                    )}
                                                                />
                                                                {errors.comment && <div style={{ color: "red" }}>{errors.comment.message}</div>}
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </>
                                )
                            }

                            {
                                id == "updload" && (
                                    <form onSubmit={handleSubmit(onSubmitVal)}>
                                        <section className={design ? "banner_section bg-black-theme color3" : "banner_section_pad bg-black-theme color3"} style={{ margin: "0rem 14rem" }}>
                                            <div className={container ? container : ""}>
                                                <div className={container ? container : ""}>
                                                    <div className="suggestion_class">
                                                        <h1 style={{ textAlign: "start" }} className="ms-4 mb-0 fs-4 fw-bold text-white pt-3" >{desription1}</h1>

                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="form_banner">

                                                            <div className="inpfiled">
                                                                <Controller
                                                                    name={`${nameOf}`}
                                                                    control={control}

                                                                    id={id}
                                                                    render={({ field }) => (
                                                                        <>
                                                                            {console.log("nauidbiausbc", field)}
                                                                            <textarea

                                                                                {...field}
                                                                                id={id}
                                                                                style={{ height: heightt ? heightt : "15vh" }}
                                                                                placeholder={placeholder}
                                                                                className="color9"

                                                                            />
                                                                        </>


                                                                    )}
                                                                />
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </form>
                                )
                            }


                        </div>)
                }

                <div className="row btn_marg my-4 d-lg-flex d-md-flex justify-content-end">

                    {
                        buttons?.map((btn) => {
                            return (<div className="col-md-2 col-sm-6">
                                <Button
                                    backgroundColor={`${btn.button == "SKIP" ? "black" : "#8b003a"}`}
                                    textColor="#878888"
                                    margin={`${btn.button == "SKIP" ? "0 0 0 -120px" : btn.margin}`}
                                    padding="10px"
                                    type={type} className="btn text-white" title={btn.button}
                                />

                            </div>)
                        })
                    }

                </div>

            </form>
        </>
    )
}

export default CommentFeedback