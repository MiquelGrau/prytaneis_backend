import { AuthenticationClient } from 'auth0';
import axios from 'axios';

const customAuth0 = new AuthenticationClient({
    domain: process.env.AUTH0_DOMAIN || '',
    clientId: process.env.AUTH0_CLIENT_ID || '',
});

const getUser = async (accessToken: string) => {
    try {
        const response = await axios.get(`https://${process.env.AUTH0_DOMAIN}/userinfo`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error getting user:', error);
        throw error;
    }
};


export default {
    auth0: customAuth0,
    getUser,
};
