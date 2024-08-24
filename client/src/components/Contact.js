function Contact(props) {
    return (
        <div className="overflow-x-auto mt-4">
            <p>Contact Information</p>
            <table className="table">
                <thead>
                <tr>
                    <th>Registrant Name</th>
                    <th>Technical Contact Name</th>
                    <th>Administrative Contact name</th>
                    <th>Contact Email</th>
                </tr>
                </thead>
                <tbody>
                { props.data.registrant_name ? 
                    <tr>
                        <td>{props.data.registrant_name}</td>
                        <td>{props.data.technicalContact_name}</td>
                        <td>{props.data.admin_contact_name}</td>
                        <td>{props.data.contact_email}</td>
                    </tr> 
                    :
                    <tr>
                        <td colSpan={4} className="text-center">No Data</td>
                    </tr>
                }
                
                </tbody>
            </table>
        </div>
    )
}

export default Contact;