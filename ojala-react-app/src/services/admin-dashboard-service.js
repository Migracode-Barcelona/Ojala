

export default async function getContacts(setContacts) {
    const url = "http://localhost:3001/contact/";

    try {
        const resp = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
        });
        if (!resp.ok) {
            const message = `An error has occured: ${resp.status}`;
            throw new Error(message);
        }
        const contacts = await resp.json();
        contacts.forEach(contact => contact.submit_date = contact.submit_date.split("T")[0] )
        setContacts(contacts);
    } catch (err) {
        alert(err);
    }
}