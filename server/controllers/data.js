const request = require('request');
const xml2js = require('xml2js');
require('dotenv').config();

const getData = async (req, res) => {

    const options = {
        url: `https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=${process.env.API_KEY}&domainName=${req.body.domainName}`,
    };

    function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
          xml2js.parseString(body, { explicitArray: false }, (err, result) => {
            if(err) {
                console.log('err', err);
            } else {
                const main = result.WhoisRecord;
                const data = {
                    domain_name : main.domainName,
                    registrar_name : main.registrarName,
                    regrstration_date : main.registryData.createdDate,
                    expiration_date : main.registryData.expiresDate,
                    updated_date : main.registryData.updatedDate,
                    estimated_domain_age : main.estimatedDomainAge,
                    hostnames : main.nameServers.hostNames.Address.join(', '),
                    registrant_name : main.registrant.name,
                    technicalContact_name : main.technicalContact.name,
                    admin_contact_name : main.administrativeContact.name,
                    contact_email : main.contactEmail,
                }
                res.json(data); 
            }
          })
        }
      }
      request(options, callback);
}

module.exports = getData;