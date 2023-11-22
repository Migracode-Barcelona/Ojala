export default async function postContactForm(contactFormObj) {
    const url = `${process.env.REACT_APP_API_URL}/contact`;
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