async function postAdminLogin(adminLoginFormObj) {
    const url = `${process.env.REACT_APP_API_URL}/admin/login`;
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
  
  async function getAdminLogout() {
    const url = `${process.env.REACT_APP_API_URL}/admin/logout`;
    
    try {
      const resp = await fetch(url, {
        method: "GET",
        credentials: "include",
      });
  
      if (resp.ok) {
        alert("Logout successful, Bravo Admin!"); 
        return "logout";
      } else {
        const respData = await resp.json();
        throw new Error(respData.error);
      }
    } catch (error) {
      console.error('Logout error:', error);
      throw error; 
    }
  }
  
  export {
    postAdminLogin,
    getAdminLogout
  };
