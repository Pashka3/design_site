import React,{ ChangeEvent, FormEvent,useState } from 'react'
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { useTranslation} from "react-i18next";

type FormState ={
	email: string;
	name: string;
	message: string;
};

type ServiceMessage ={
	class:string;
	text:string;
};

function ContactSection(){

const {t} =useTranslation();
const qwe ='SYXmrG16';
const formSparkUrl = `https://submit-form.com/${qwe}`;

const initialFormState = {
	email: "",
	name: "",
	message: "",
};

const [formState, setFormState] = useState<FormState>(initialFormState);
const [submitting, setSubmitting] = useState<boolean>(false);
const [message, setMessage] = useState<ServiceMessage>();

const submitForm = async (event:FormEvent) =>{
event.preventDefault();
setSubmitting(true);
await postSubmission();
setSubmitting(false);
};



const postSubmission = async() => {
const payload ={
	...formState,
};
try{
	const result= await axios.post(formSparkUrl, payload);
	setMessage({
		class: "bg-accept",
		text: t("Accept"),
});
	setFormState(initialFormState);
}catch(error){
	console.log(error);
	setMessage({
		class: "bg-cancel",
		text: t("Sorry")
});
}};

const updateFormControl = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
    const { id, value } = event.target;
    const key = id as keyof FormState;
    const updatedFormState = { ...formState };
    updatedFormState[key] = value;
    setFormState(updatedFormState);
  };


    return (
        <div>
            <div className="container">
			{message && (
          <div className={`my-4 text-white w-full p-4 ${message.class}`}>
            {message.text}
          </div>
			)}
<form onSubmit = {submitForm}>
	<div className="form-group">
		<input className="i-t-form" placeholder={t("name")} type="text" id="name" value={formState?.name}
          	 onChange={updateFormControl} />
	</div>
	<div className="form-group">
		<input className="i-t-form" placeholder="email" type="text" id="email" value={formState?.email}
          	 onChange={updateFormControl} />
	</div>
	<div className="form-group">
		<textarea className="i-t-form areaT" placeholder={t("Message")} id="message" value={formState?.message}
          	 onChange={updateFormControl} />
	</div>
	<button className="btn btn-secondary rounded-pill btn-lg btn-color" disabled = {submitting}>{submitting ? "Submitting..." : "Submit"}</button></form>
</div>

        </div>
        
    )
}

export default ContactSection
