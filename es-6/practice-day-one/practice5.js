let data = {
    Sophia: {
        id: 33,
        study: [
            {
                primary:
                    [
                        { school_name: "ABC primary school" },
                        { location: "Peters burg" }
                    ]
            },
            {
                secondary:
                    [
                        {
                            school_name: "ABC secondary school"

                        },

                        { location: "St Lorence" }
                    ]
            },
        ]
    }
}

// 1) How will you access Sophia’s secondary school location?
const secondaryLocation = data.Sophia.study[1].secondary[1].location;
console.log(secondaryLocation)


/* 
3) How will you get the output
a) abc
b) xyz
*/


let activities = {
    activity1: [
        {
            name: "listen on spotify",

            song_list: {
                song_1: "abc",
                song_2: "bcd"

            },
            id: 1
        },
        {
            name: "listen music through bot",

            song_list: {
                song_1: "wxy",
                song_2: "xyz"
            },
            id: 2
        }
    ]
}

for (const activitie in activities) {
    const activeInfo = activities[activitie];
    const songItem = activeInfo[1]?.song_list;
    const { song_1, song_2 } = songItem;
    console.log(song_1, song_2)

}
// wxy xyz



/* 
4) How will you display
a) Petersburg
b) Herry
*/

let students = {
    2222: {
        name: "Jack",
        section: "C",
        class: "IX",
        address: {
            "building no": 12,
            "street": "St. Jonson",
            "city": "Petersburg",
            "country": "UK"
        }
    },
    3333: {
        name: "Herry",
        section: "D",
        class: "X",
        address: {
            "building no": 85,
            "street": "DC road",
            "city": "Kachukhet",
            "country": "Bangladesh"
        }
    }
}

let firstValue= 'Petersburg';
let secondValue = 'Herry';

for(const student in students){
    const studentInfo =  students[student];
   const  studentAddress = studentInfo['address'];
   const  studentName = studentInfo['name'];
   console.log(studentName)
}