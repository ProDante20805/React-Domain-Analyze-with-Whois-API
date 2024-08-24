
const Domain = (props) => {
    return (
        <div className="overflow-x-auto mt-4">
          <p>Domain Information</p>
          <table className="table">
            <thead>
              <tr>
                <th>Domain Name</th>
                <th>Registrar</th>
                <th>Registration Date</th>
                <th>Expiration Date</th>
                <th>Estimated Domain Age</th>
                <th>Hostnames</th>
              </tr>
            </thead>
            <tbody>
                {props.data.domain_name ?
                <tr>
                    <td>{props.data.domain_name}</td>
                    <td>{props.data.registrar_name}</td>
                    <td>{props.data.regrstration_date}</td>
                    <td>{props.data.expiration_date}</td>
                    <td>{props.data.estimated_domain_age}</td>
                    <td>{props.data.hostnames.length > 25 ? props.data.hostnames.slice(0, 25) + "..." : props.data.hostnames}</td>
                </tr> 
                :
                <tr>
                    <td colSpan={6} className="text-center">No Data</td>
                </tr>
                }
              
            </tbody>
          </table>
        </div>
    )
}

export default Domain;