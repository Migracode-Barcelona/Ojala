
async function postAdminLogin(adminLoginFormObj) {
    const url = "http://localhost:3001/admin/login";
    try {
        const resp = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(adminLoginFormObj),
            credentials: "include",
        });
        
        if (resp.ok) {
            
            alert("You are in! Redirecting...");
            return true;
        } else {
            const respData = await resp.json();
            throw new Error(respData.error);
        }

    } catch (err) {
        let message = err;
        if (err.name === "TypeError" && err.message.includes("Failed to fetch")) {
            message = "Failed to fetch error occurred";
        }
        return message;
    }
}

async function getAdminLogout(adminLoginFormObj) {
    

}

module.exports = {
    postAdminLogin,
    getAdminLogout
};
