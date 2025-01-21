const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

// Middleware to parse JSON request body
app.use(express.json());

// Route to send lead data to Zoho CRM
app.get('/addleads', async (req, res) => {
    // Zoho CRM function endpoint with API and ZAPI keys
    const endpoint = 'https://www.zohoapis.in/crm/v2/functions/createleadlandingpageedify/actions/execute';
    const zapikey = '1003.068856987dc7ce9b32f818d3c9191630.c952181e896bb15333c98834b33c7c11'; // Replace with your actual ZAPI key

    // Static lead data to be sent
    const leadData = {
        params: {
            First_Name: res.fname,// add dynamically
            Last_Name: res.lname,// add dynamically
            Parent_Guardian_Name: res.Pname,// add dynamically
            Email: res.email,// add dynamically
            Mobile: res.mobile,// add dynamically
            //Secondary_Mobile_No: '+919876543210',
            Preferred_Campus: res.campus,// add dynamically
            Class_Looking_For: res.selectclass,// add dynamically
            Lead_stage1: 'Untouched',
            Lead_Sub_Stage: 'New Lead',
            Lead_Super_Sub_Stage: 'NA',
            Lead_Source_Category: 'Admission Partner',// add dynamically
            Lead_Source: res.utm_source,// add dynamically
            Lead_Sub_Source: res.utm_medium,// add dynamically
            Lead_Super_Sub_Source: res.utm_campaign,// add dynamically
            URL : URL,
            UTM_Source : res.utm_source,
            UTM_Medium : res.utm_medium,
            Ad_Group : res.utm_campaign,
            UTM_Device : res.utm_device,
            UTM_Term : res.utm_term,
            UTM_Content : res.utm_content,
            UTM_Age_Group : res.ageGroup,
            UTM_Gender_Group : res.genderGroup,
            House_Hold_Income_Group : res.houseHoldIncomeGroup
        },
    };
    try {
        // Make the POST request to Zoho CRM
        const response = await axios.post(`${endpoint}?auth_type=apikey&zapikey=${zapikey}`, leadData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // Send success response back to the client
        res.status(200).json({
            status: 'success',
            message: 'Lead added successfully',
            data: response.data,
        });
    } catch (error) {
        // Handle errors and send error response back to the client
        if (error.response) {
            res.status(error.response.status).json({
                status: 'error',
                message: 'Error adding lead',
                error: error.response.data,
            });
        } else {
            res.status(500).json({
                status: 'error',
                message: 'Internal server error',
                error: error.message,
            });
        }
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
