var contacts = [{
    Id: 1,
    name: 'Andi',
    gender: 'male',
    group_ids: [1, 2, 3]
}, {
    Id: 2,
    name: 'Budi',
    gender: 'male',
    group_ids: [1, 2]
}, {
    Id: 3,
    name: 'Cindy',
    gender: 'male',
    group_ids: [1]
}, {
    Id: 4,
    name: 'David',
    gender: 'male',
    group_ids: [1, 2]
}, {
    Id: 5,
    name: 'Emily',
    gender: 'male',
    group_ids: [1, 2, 3]
}]


// lanjut ke halaman berikutnya
var groups = [{
    id: 1,
    name: 'Teman SMP'
}, {
    id: 2,
    name: 'Teman SMA'
}, {
    id: 3,
    name: 'Teman Kuliah'
}]

function showContactByGroup(group_name) {
    var test = group_name
    let id = 0;

    for (var x = 0; x < groups.length; x++) {
        if (groups[x].name === test) {
            id = groups[x].id;
        }
    }

    var tampung = [];

    for (var y = 0; y < contacts.length; y++) {

        for (var z = 0; z < contacts[y].group_ids.length; z++) {
            if (contacts[y].group_ids[z] === id) {
                tampung.push(contacts[y].name);
            }
        }
    }

    console.log(tampung);
}

showContactByGroup('Teman Kuliah');
showContactByGroup('Teman SMA');
showContactByGroup('Teman SMP');