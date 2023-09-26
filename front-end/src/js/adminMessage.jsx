import React from "react";
import axios from "axios";
import { useState } from "react";

function AdminMessage () {

    const [sendTo, setSendTo] = useState('');
    const [selectedRecipient, setSelectedRecipient] = useState('');
    const [recipientList, setRecipientList] = useState([]);
    const [sendMessage, setSendMessage] = useState('');
    const [subjectText, setSubjectText] = useState('');

    const handleSubmit = (e) => {
        setSendMessage(e.target.value)
        setSubjectText(e.target.value)

        axios.post('http://localhost:4000/', {selectedRecipient, sendMessage, sendTo, subjectText}).then((res) => {
        
    })
    }
    const handleSelectedRecipient = (e) => {
        setSelectedRecipient(e.target.value)
    }

    const handleSendTo = (e) => {
        setSendTo(e.target.value)
        axios.post('http://localhost:4000/', {sendTo}).then((res) => {
            if (res.data.success === false) {
                console.log(res.data.msg)
            }
            else{
                setRecipientList(res.data)
            }
        })
    }
    const selectRecipient =  () => {
        return(
            <div>
            <span>Send to:</span>
            <select name="" id="" value={sendTo} onChange={handleSendTo}>
            <option value="">Manager(HR)</option>
            <option value="">Manager(Finance)</option>
            <option value="">Instructor</option>
            <option value="">Admin</option>
            </select>
            </div>
        )
    }

    const listSelectedRecipient = () => {
        return(
            <div>
                    <form onSubmit={handleSubmit}>
                        <select value={selectedRecipient} onChange={handleSelectedRecipient}>
                            {recipientList.map((recipientName, index) => (
                                <option key={index} value={recipientName}>{recipientName}</option>
                            ))}
                        </select>
                        <span>Subject:</span>
                        <textarea name="" id="" cols="30" rows="10" value={subjectText}></textarea>

                        <span>Message</span>
                        <textarea name="" id="" cols="30" rows="10" value={sendMessage}></textarea>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
        )
    }
    return(
        <div>
            {selectRecipient()}
            {listSelectedRecipient()}
        </div>
    )
}

export default AdminMessage


