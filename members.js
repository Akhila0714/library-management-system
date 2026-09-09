let members = [];

// Register Member
function registerMember(id, name, email) {
    const member = {
        id: id,
        name: name,
        email: email
    };

    members.push(member);
    console.log("Member registered successfully");
}

// Update Member
function updateMember(id, newName, newEmail) {
    const member = members.find(member => member.id === id);

    if (member) {
        member.name = newName;
        member.email = newEmail;
        console.log("Member updated successfully");
    } else {
        console.log("Member not found");
    }
}

// Search Member
function searchMember(name) {
    const result = members.filter(member =>
        member.name.toLowerCase().includes(name.toLowerCase())
    );

    console.log(result);
}

// Remove Member
function removeMember(id) {
    const index = members.findIndex(member => member.id === id);

    if (index !== -1) {
        members.splice(index, 1);
        console.log("Member removed successfully");
    } else {
        console.log("Member not found");
    }
}

// Sample data
registerMember(1, "Akhila", "akhila@gmail.com");
registerMember(2, "Siri", "siri@gmail.com");

searchMember("Akhila");

updateMember(1, "Akhila Cherepally", "akhila@example.com");

removeMember(2);