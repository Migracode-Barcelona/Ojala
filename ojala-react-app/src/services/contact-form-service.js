
export default async function postContactForm(contactFormObj) {
    const url = "http://localhost:3001/contact";
    try {
        const resp = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(contactFormObj),
        });
        if (!resp.ok) {
            const message = `An error has occured: ${resp.status}`;
            throw new Error(message);
        }
        if (resp.ok) {
            alert("You will be contacted.");
        }
    } catch (err) {
        alert(err);
    }
}